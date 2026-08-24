import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Search, Loader2 } from 'lucide-react';

export const MapPicker = ({
  latitude = 18.5204,
  longitude = 73.8567,
  onChange,
  height = '240px',
}) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const [coords, setCoords] = useState({ lat: latitude, lng: longitude });
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Custom stylish SVG marker pin
  const createCustomPin = useCallback(() => {
    return L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%);">
          <div style="background: #0f5238; color: white; padding: 6px; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div style="width: 2px; height: 6px; background: #0f5238;"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  }, []);

  // Update coordinates and inform parent
  const updatePosition = useCallback((lat, lng, address = '') => {
    const fixedLat = Number(parseFloat(lat).toFixed(6));
    const fixedLng = Number(parseFloat(lng).toFixed(6));
    setCoords({ lat: fixedLat, lng: fixedLng });

    if (markerRef.current) {
      markerRef.current.setLatLng([fixedLat, fixedLng]);
    }
    if (mapInstanceRef.current) {
      mapInstanceRef.current.panTo([fixedLat, fixedLng]);
    }
    if (onChange) {
      onChange({ latitude: fixedLat, longitude: fixedLng, address });
    }
  }, [onChange]);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    const initialLat = Number(latitude) || 18.5204;
    const initialLng = Number(longitude) || 73.8567;

    const map = L.map(mapContainerRef.current, {
      center: [initialLat, initialLng],
      zoom: 13,
      zoomControl: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add marker
    const marker = L.marker([initialLat, initialLng], {
      icon: createCustomPin(),
      draggable: true,
    }).addTo(map);

    marker.on('dragend', (e) => {
      const position = e.target.getLatLng();
      updatePosition(position.lat, position.lng);
    });

    // Map click event to relocate marker
    map.on('click', (e) => {
      updatePosition(e.latlng.lat, e.latlng.lng);
    });

    mapInstanceRef.current = map;
    markerRef.current = marker;

    // Handle container resize when opened in modals
    const timeout = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      clearTimeout(timeout);
      map.remove();
      mapInstanceRef.current = null;
      markerRef.current = null;
    };
  }, [createCustomPin, latitude, longitude, updatePosition]);

  // GPS / Geolocation handler
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude: lat, longitude: lng } = pos.coords;
        updatePosition(lat, lng);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setView([lat, lng], 15);
        }
      },
      () => {
        setIsLocating(false);
        alert('Could not retrieve your location. Please select on the map.');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Place search using Nominatim (OpenStreetMap Search)
  const handleSearchLocation = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}&limit=1`
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const item = data[0];
        const lat = parseFloat(item.lat);
        const lng = parseFloat(item.lon);
        updatePosition(lat, lng, item.display_name);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setView([lat, lng], 14);
        }
      } else {
        alert('Location not found. Please try searching another village or town.');
      }
    } catch {
      alert('Search service currently unreachable.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full select-none">
      {/* Search & GPS Toolbar */}
      <div className="flex items-center gap-2">
        <form onSubmit={handleSearchLocation} className="relative flex-1">
          <Search className="w-3.5 h-3.5 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search village, taluka, or district..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-8 pr-3 py-1.5 text-xs text-on-surface outline-none focus:border-primary focus:bg-surface transition-all"
          />
        </form>

        <button
          type="button"
          onClick={handleSearchLocation}
          disabled={isSearching}
          className="px-3 py-1.5 bg-surface-container-low border border-outline-variant hover:bg-surface-container text-primary rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
        >
          {isSearching ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Search'}
        </button>

        <button
          type="button"
          onClick={handleLocateMe}
          disabled={isLocating}
          title="Use My Current GPS Location"
          className="px-3 py-1.5 bg-primary text-on-primary rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-xs"
        >
          {isLocating ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Navigation className="w-3.5 h-3.5" />
          )}
          <span className="hidden sm:inline">GPS</span>
        </button>
      </div>

      {/* Map Container */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-outline-variant shadow-inner">
        <div ref={mapContainerRef} style={{ height, width: '100%' }} />

        {/* Floating Instruction overlay */}
        <div className="absolute top-2 left-2 z-[400] bg-surface-container-lowest/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-outline-variant/60 text-[11px] text-on-surface font-medium shadow-xs flex items-center gap-1.5 pointer-events-none">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span>Click anywhere or drag pin to position farm</span>
        </div>
      </div>

      {/* Selected Coordinates Badge */}
      <div className="flex items-center justify-between text-[11px] text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant/40">
        <span className="font-semibold text-primary flex items-center gap-1">
          <MapPin className="w-3 h-3" /> Farm Coordinates:
        </span>
        <span className="font-mono font-medium">
          Lat: {coords.lat.toFixed(4)}, Lng: {coords.lng.toFixed(4)}
        </span>
      </div>
    </div>
  );
};

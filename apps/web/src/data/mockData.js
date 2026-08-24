export const MOCK_USER = {
  id: "farmer-01",
  name: "Sagar",
  fullName: "Sagar Shinde",
  phone: "9876543210",
  email: "sagar.farmer@cropcare.ag",
  village: "Shivnagar Village",
  district: "Pune District",
  state: "Maharashtra",
  country: "India",
  farmSize: 4.5,
  farmUnit: "Acres",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpFGsOlRQM1mKOtoTaCilGoFWn3k7-k3_NOTTmz0PLjC8mGi8P0ZrW5X0JkfGzo5UX48cpogxFFs-q4tlkldSV23ccraOBj-Mf_jbB-BT-_MVdi9CqBj2rOBSa_Hgtl3IppsyIp_-FcNzzG4HunL4YHcWC3Ln3I8lRal3s6Ia7P4OLHIgjNvHaumObV059qlS4rW29UZ95_KxWD16T3SNbzFdfsTLfvWijrsXEGopzaXKK1VRGrBuXRQ",
  isPremium: false,
  joinedDate: "October 2023",
  whatsappAlerts: {
    diseasePests: true,
    weatherForecasts: true,
    cropStageTips: false,
  }
};

export const MOCK_CROPS = [
  {
    id: "wheat",
    name: "Winter Wheat",
    variety: "Sharbati Gold - HD 2967",
    field: "North Field, Zone A",
    acres: 5.0,
    plantedDate: "Oct 15, 2023",
    estHarvest: "March 2024",
    healthPercent: 87,
    growthPercent: 87,
    status: "Healthy",
    statusVariant: "success",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoi9yWO1zVb3sZ-YnBy2aQv6pF8FGXpewnHSg8FhVqUBhqRcoEh1Tt_hnyGkhTH2Aeq2ltybswYqMiYnr9upLlq8OpmmbExXrBguHES1a0RKoT-0x5HuR3NIvbzPQP5XoslNGFV-XhkMzjlyXN4ij-zoEXm7ORXd2nbtZp_WorIk9izNfjoXG7REjT0vSIHIKNHAdRSNhIXVWJkHszjeFEfRfDb961LViMB31Mem8KvDSMZmWl2Ct5Kw",
    sensors: {
      temperature: { value: "22°C", status: "Optimal", color: "#f57f17", bg: "#fff8e1" },
      soilMoisture: { value: "45%", status: "Normal", color: "#0288d1", bg: "#e1f5fe" },
      rainProbability: { value: "80%", status: "Alert", color: "#d32f2f", bg: "#ffebee" },
    },
    growthStages: [
      { id: 1, name: "Germination", status: "Completed", icon: "fitbit_check_small" },
      { id: 2, name: "Tillering", status: "Completed", icon: "grass" },
      { id: 3, name: "Stem Extension", status: "Current Stage", isCurrent: true, icon: "energy_savings_leaf" },
      { id: 4, name: "Heading", status: "Upcoming", isUpcoming: true, icon: "spa" },
      { id: 5, name: "Ripening", status: "Est. March", isUpcoming: true, icon: "agriculture" },
    ],
    todos: [
      { id: "w-t1", task: "Inspect leaves for rust signs", note: "Check for rust signs after recent rainfall.", completed: false, border: "#f57c00" },
      { id: "w-t2", task: "Monitor moisture variations", note: "Zone A showing slight variations across north slope.", completed: false, border: "#0f5238" },
      { id: "w-t3", task: "Prepare drainage channels", note: "Clear furrows ahead of tomorrow's storm forecast.", completed: true, border: "#006c48" },
    ],
    healthTrend30d: [
      { day: "1", health: 70 },
      { day: "5", health: 74 },
      { day: "10", health: 72 },
      { day: "15", health: 80 },
      { day: "20", health: 85 },
      { day: "25", health: 84 },
      { day: "30", health: 87 },
    ],
    healthTrend7d: [
      { day: "Mon", health: 82 },
      { day: "Tue", health: 84 },
      { day: "Wed", health: 85 },
      { day: "Thu", health: 83 },
      { day: "Fri", health: 86 },
      { day: "Sat", health: 86 },
      { day: "Sun", health: 87 },
    ],
    recentActivities: [
      { id: "act-1", type: "Irrigation", desc: "Drip irrigation run for 2.5 hours", date: "Yesterday, 6:00 PM" },
      { id: "act-2", type: "Fertilizer", desc: "Applied organic NPK 19:19:19 booster", date: "3 days ago" },
      { id: "act-3", type: "AI Scan", desc: "Scanned field center leaves - 87% Healthy", date: "5 days ago" },
    ]
  },
  {
    id: "rice",
    name: "Basmati Rice",
    variety: "Pusa 1121 Extra Long",
    field: "East Field, Zone B",
    acres: 3.0,
    plantedDate: "Nov 02, 2023",
    estHarvest: "April 2024",
    healthPercent: 65,
    growthPercent: 65,
    status: "Attention Needed",
    statusVariant: "warning",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA02HsussWx1SCIYf7Egem2VBYj9DK4Tl4inYfFbYpXgQTb55r7AmNWisIJJlzBd30gSkDlM8w7_1EjKvcfFPmyQEy1GuG-33ROXW4JWCNtJmiWLSaE0lonayRnX6FHLMD0N7POEU3CMlB5c0T1Q2jBnGtAItENP7sJ-VRoXS34GmJNHL8Vxevq9L86xOgi-pIN-UdoAGYw1j2HQDH9q1yvmeiUBrnj7Ml4zM7KB7yvrvrLQkdnKRKdTw",
    sensors: {
      temperature: { value: "24°C", status: "Optimal", color: "#f57f17", bg: "#fff8e1" },
      soilMoisture: { value: "78%", status: "High", color: "#0288d1", bg: "#e1f5fe" },
      rainProbability: { value: "85%", status: "Alert", color: "#d32f2f", bg: "#ffebee" },
    },
    growthStages: [
      { id: 1, name: "Seedling", status: "Completed", icon: "fitbit_check_small" },
      { id: 2, name: "Tillering", status: "Current Stage", isCurrent: true, icon: "grass" },
      { id: 3, name: "Panicle Init", status: "Upcoming", isUpcoming: true, icon: "energy_savings_leaf" },
      { id: 4, name: "Flowering", status: "Upcoming", isUpcoming: true, icon: "spa" },
      { id: 5, name: "Maturity", status: "Est. April", isUpcoming: true, icon: "agriculture" },
    ],
    todos: [
      { id: "r-t1", task: "Check for Brown Spot lesions", note: "High moisture creates favorable fungal conditions.", completed: false, border: "#f57c00" },
      { id: "r-t2", task: "Regulate standing water level", note: "Keep standing water around 3-5 cm max.", completed: false, border: "#0288d1" },
    ],
    healthTrend30d: [
      { day: "1", health: 80 },
      { day: "5", health: 78 },
      { day: "10", health: 72 },
      { day: "15", health: 68 },
      { day: "20", health: 64 },
      { day: "25", health: 65 },
      { day: "30", health: 65 },
    ],
    healthTrend7d: [
      { day: "Mon", health: 68 },
      { day: "Tue", health: 67 },
      { day: "Wed", health: 66 },
      { day: "Thu", health: 65 },
      { day: "Fri", health: 65 },
      { day: "Sat", health: 65 },
      { day: "Sun", health: 65 },
    ],
    recentActivities: [
      { id: "act-r1", type: "Water Management", desc: "Adjusted flood gate after canal inflow", date: "2 days ago" },
    ]
  },
  {
    id: "potato",
    name: "Golden Potato",
    variety: "Kufri Jyoti",
    field: "South Field, Zone C",
    acres: 2.0,
    plantedDate: "Dec 01, 2023",
    estHarvest: "March 2024",
    healthPercent: 58,
    growthPercent: 42,
    status: "Attention Needed",
    statusVariant: "warning",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDuuSIo9AKBN7avACM8hWP0E8bky4tZN5uI3v1xBzJsY1YAc9Gf271MWIRlf4veLj0WqC5mdG2R7JC4b8_Gecp3gHa6FgvBVw1AQxA_iykPpHSyT3AUvqOxgLNorJeieLc7q1VCTdHK4k7zpxNHyyFS9oZfZnYi5XDzoLvZ1Z3n0kIgIXfMyl1BwABQtYamT60cRnOZfW2XmVYHGE6L-z2Uea-VjJnk7Yh1wv3NmG7fl7Cn0qGjfLMA",
    sensors: {
      temperature: { value: "21°C", status: "Optimal", color: "#f57f17", bg: "#fff8e1" },
      soilMoisture: { value: "52%", status: "Optimal", color: "#0288d1", bg: "#e1f5fe" },
      rainProbability: { value: "65%", status: "Moderate", color: "#f57c00", bg: "#fff8e1" },
    },
    growthStages: [
      { id: 1, name: "Sprout Dev", status: "Completed", icon: "fitbit_check_small" },
      { id: 2, name: "Vegetative", status: "Current Stage", isCurrent: true, icon: "grass" },
      { id: 3, name: "Tuber Init", status: "Upcoming", isUpcoming: true, icon: "energy_savings_leaf" },
      { id: 4, name: "Tuber Bulk", status: "Upcoming", isUpcoming: true, icon: "spa" },
      { id: 5, name: "Maturation", status: "Est. March", isUpcoming: true, icon: "agriculture" },
    ],
    todos: [
      { id: "p-t1", task: "Inspect potato leaves for Late Blight spots", note: "Dark necrotic water-soaked spots detected in recent scan.", completed: false, border: "#ba1a1a" },
      { id: "p-t2", task: "Apply systemic fungicide preventive spray", note: "Mancozeb or Metalaxyl recommended before storm.", completed: false, border: "#ba1a1a" },
    ],
    healthTrend30d: [
      { day: "1", health: 85 },
      { day: "10", health: 78 },
      { day: "20", health: 65 },
      { day: "30", health: 58 },
    ],
    healthTrend7d: [
      { day: "Mon", health: 70 },
      { day: "Tue", health: 66 },
      { day: "Wed", health: 62 },
      { day: "Thu", health: 60 },
      { day: "Fri", health: 58 },
      { day: "Sat", health: 58 },
      { day: "Sun", health: 58 },
    ],
    recentActivities: [
      { id: "act-p1", type: "AI Diagnose", desc: "Late Blight pattern detected (94% confidence)", date: "Today, 10:15 AM" }
    ]
  }
];

export const MOCK_SAMPLE_DIAGNOSES = [
  {
    id: "sample-late-blight",
    title: "Possible Late Blight",
    cropName: "Potato (Solanum tuberosum)",
    scientificName: "Phytophthora infestans",
    severity: "Attention",
    severityLevel: "high",
    severityText: "Severity: Attention",
    confidence: "94.2%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDuuSIo9AKBN7avACM8hWP0E8bky4tZN5uI3v1xBzJsY1YAc9Gf271MWIRlf4veLj0WqC5mdG2R7JC4b8_Gecp3gHa6FgvBVw1AQxA_iykPpHSyT3AUvqOxgLNorJeieLc7q1VCTdHK4k7zpxNHyyFS9oZfZnYi5XDzoLvZ1Z3n0kIgIXfMyl1BwABQtYamT60cRnOZfW2XmVYHGE6L-z2Uea-VjJnk7Yh1wv3NmG7fl7Cn0qGjfLMA",
    findings: "The visual patterns strongly indicate Late Blight, a rapidly spreading fungal disease. Key indicators include irregular, dark necrotic lesions on the leaves and a potential white fungal growth on the undersides during humid conditions. Prompt action is recommended to prevent significant crop loss.",
    actions: [
      {
        id: "act-1",
        title: "Inspect nearby plants",
        desc: "Check the undersides of leaves in surrounding areas immediately.",
        icon: "search"
      },
      {
        id: "act-2",
        title: "Follow agricultural guidance",
        desc: "Review recommended fungicidal treatments suitable for your region (e.g. Copper oxychloride / Mancozeb).",
        icon: "menu_book"
      },
      {
        id: "act-3",
        title: "Avoid overhead irrigation",
        desc: "Keep foliage dry to suppress spore dispersal and rapid multiplication.",
        icon: "water_drop"
      },
      {
        id: "act-4",
        title: "Prune infected lower foliage",
        desc: "Carefully dispose of severely affected leaves away from the active field.",
        icon: "content_cut"
      }
    ],
    audioScript: "Attention Sagar. The leaf photo shows symptoms consistent with Late Blight disease with ninety-four percent confidence. Immediately inspect neighboring plants, isolate affected leaves, and apply recommended protective fungicides before the upcoming rain."
  },
  {
    id: "sample-yellow-rust",
    title: "Wheat Stripe / Yellow Rust",
    cropName: "Wheat (Triticum aestivum)",
    scientificName: "Puccinia striiformis",
    severity: "Attention",
    severityLevel: "medium",
    severityText: "Severity: Moderate Alert",
    confidence: "91.8%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoi9yWO1zVb3sZ-YnBy2aQv6pF8FGXpewnHSg8FhVqUBhqRcoEh1Tt_hnyGkhTH2Aeq2ltybswYqMiYnr9upLlq8OpmmbExXrBguHES1a0RKoT-0x5HuR3NIvbzPQP5XoslNGFV-XhkMzjlyXN4ij-zoEXm7ORXd2nbtZp_WorIk9izNfjoXG7REjT0vSIHIKNHAdRSNhIXVWJkHszjeFEfRfDb961LViMB31Mem8KvDSMZmWl2Ct5Kw",
    findings: "Parallel rows of yellowish-orange powdery pustules observed along leaf veins. Stripe rust thrives in cool, humid temperatures between 10°C and 20°C. If unchecked, it reduces grain weight and photosynthetic leaf area.",
    actions: [
      {
        id: "yr-1",
        title: "Apply Propiconazole 25% EC",
        desc: "Foliar spray at 0.1% concentration (1 ml per liter of water) for rapid containment.",
        icon: "science"
      },
      {
        id: "yr-2",
        title: "Scout entire north perimeter",
        desc: "Stripe rust spreads via wind gusts, monitor adjacent fields.",
        icon: "explore"
      }
    ],
    audioScript: "Sagar, your wheat sample exhibits yellow stripe rust pustules. We recommend a targeted foliar spray of propiconazole during early morning calm weather."
  },
  {
    id: "sample-healthy-leaf",
    title: "Healthy Crop - No Disease Detected",
    cropName: "Wheat (Triticum aestivum)",
    scientificName: "Normal Foliage",
    severity: "Healthy",
    severityLevel: "low",
    severityText: "Status: Optimal Condition",
    confidence: "98.5%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoi9yWO1zVb3sZ-YnBy2aQv6pF8FGXpewnHSg8FhVqUBhqRcoEh1Tt_hnyGkhTH2Aeq2ltybswYqMiYnr9upLlq8OpmmbExXrBguHES1a0RKoT-0x5HuR3NIvbzPQP5XoslNGFV-XhkMzjlyXN4ij-zoEXm7ORXd2nbtZp_WorIk9izNfjoXG7REjT0vSIHIKNHAdRSNhIXVWJkHszjeFEfRfDb961LViMB31Mem8KvDSMZmWl2Ct5Kw",
    findings: "Vibrant chlorophyll pigmentation, clean venation without necrosis, pustules, or chlorotic halos. The leaf tissue indicates excellent nitrogen absorption and healthy cell turgidity.",
    actions: [
      {
        id: "hl-1",
        title: "Maintain current irrigation cycle",
        desc: "Continue standard moisture maintenance according to crop stage guidelines.",
        icon: "water_drop"
      },
      {
        id: "hl-2",
        title: "Routine bi-weekly monitoring",
        desc: "Next recommended health scan in 14 days or after extreme weather shifts.",
        icon: "calendar_month"
      }
    ],
    audioScript: "Great news Sagar! Your crop leaf looks very healthy with ninety-eight percent vitality. Keep up your current irrigation and nourishment routine."
  }
];

export const MOCK_ALERTS = [
  {
    id: "alt-1",
    type: "weather",
    title: "Heavy rain expected tomorrow",
    desc: "35-50mm rainfall forecast with gusty winds in Pune district. Your wheat field in North Field may require drainage.",
    severity: "warning",
    time: "2 hours ago",
    isRead: false,
    cropId: "wheat",
    actionText: "View wheat field",
    icon: "storm"
  },
  {
    id: "alt-2",
    type: "disease",
    title: "Late Blight outbreak in neighboring 15km radius",
    desc: "Agricultural department advisory: Potato and Tomato crops at high risk due to humid cloud cover.",
    severity: "error",
    time: "5 hours ago",
    isRead: false,
    cropId: "potato",
    actionText: "Scan potato leaf",
    icon: "bug_report"
  },
  {
    id: "alt-3",
    type: "field",
    title: "Nutrient Top-Dressing Window Open",
    desc: "Wheat field at active stem elongation: apply recommended Nitrogen booster before next irrigation.",
    severity: "info",
    time: "1 day ago",
    isRead: true,
    cropId: "wheat",
    actionText: "View wheat field",
    icon: "energy_savings_leaf"
  },
  {
    id: "alt-4",
    type: "irrigation",
    title: "Optimal Soil Moisture Reached",
    desc: "North Field Zone A completed automated drip cycle. Moisture level at 45%.",
    severity: "success",
    time: "2 days ago",
    isRead: true,
    actionText: "View sensor log",
    icon: "check_circle"
  }
];

export const MOCK_WEATHER = {
  city: "Bahri, Shivnagar",
  temp: 28,
  condition: "Partly cloudy",
  humidity: "62%",
  wind: "14 km/h",
  uvIndex: "6 (Moderate)",
  forecast: [
    { day: "Today", temp: "28°C / 19°C", icon: "partly_cloudy_day", rain: "20%" },
    { day: "Tomorrow", temp: "24°C / 18°C", icon: "thunderstorm", rain: "80%", alert: true },
    { day: "Sun", temp: "26°C / 17°C", icon: "rainy", rain: "45%" },
    { day: "Mon", temp: "29°C / 19°C", icon: "sunny", rain: "10%" },
    { day: "Tue", temp: "30°C / 20°C", icon: "sunny", rain: "5%" },
  ]
};

export const MOCK_SOIL_REPORT = {
  sampleId: "SOIL-PN-2024-89",
  date: "Feb 10, 2024",
  ph: { value: "6.8", rating: "Ideal (Neutral)", status: "good" },
  nitrogen: { value: "280 kg/ha", rating: "Medium", status: "warning" },
  phosphorus: { value: "24 kg/ha", rating: "High", status: "good" },
  potassium: { value: "310 kg/ha", rating: "High", status: "good" },
  organicCarbon: { value: "0.75%", rating: "Satisfactory", status: "good" },
  recommendation: "Soil is in great organic shape. Apply a light top-dressing of Urea or vermicompost to elevate Nitrogen during the vegetative stem stage."
};

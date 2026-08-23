export interface TemporaryScan {
  id: string;
  userId: string;
  cropId: string;
  imageBuffer: Buffer;
  mimetype: string;
  originalname: string;
  prediction: {
    disease: string;
    confidence: number;
    modelVersion: string;
  };
  createdAt: Date;
}

export class ScanStore {
  private readonly scans = new Map<string, TemporaryScan>();
  private readonly ttlMs = 10 * 60 * 1000;

  private generateId(): string {
    return crypto.randomUUID();
  }

  private cleanupExpired(): void {
    const now = Date.now();
    for (const [id, scan] of this.scans.entries()) {
      if (now - scan.createdAt.getTime() > this.ttlMs) {
        this.scans.delete(id);
      }
    }
  }

  store(
    userId: string,
    cropId: string,
    imageBuffer: Buffer,
    mimetype: string,
    originalname: string,
    prediction: { disease: string; confidence: number; modelVersion: string },
  ): TemporaryScan {
    this.cleanupExpired();

    const scan: TemporaryScan = {
      id: this.generateId(),
      userId,
      cropId,
      imageBuffer,
      mimetype,
      originalname,
      prediction,
      createdAt: new Date(),
    };

    this.scans.set(scan.id, scan);
    return scan;
  }

  get(scanId: string): TemporaryScan | undefined {
    this.cleanupExpired();
    return this.scans.get(scanId);
  }

  remove(scanId: string): boolean {
    return this.scans.delete(scanId);
  }

  clear(): void {
    this.scans.clear();
  }
}

export const scanStore = new ScanStore();
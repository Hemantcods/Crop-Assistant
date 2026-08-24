import fs from "fs/promises";
import path from "path";
import { env } from "../../config/env";
import crypto from "crypto";
export type UplaodFile = {
  url: string;
};

export class StorageService {
  private readonly uploadDirectory = path.resolve(process.cwd(), "uploads");
  private readonly publicBaseUrl =
    env.API_PUBLIC_URL ?? "http://localhost:5000";
  async upload(file: Express.Multer.File): Promise<UplaodFile> {
    await fs.mkdir(this.uploadDirectory, { recursive: true });
    const extension = this.getExtension(file.mimetype);
    const filename = `${crypto.randomUUID()}${extension}`;
    const filePath = path.join(this.uploadDirectory, filename);
    await fs.writeFile(filePath, file.buffer);
    return {
      url: `${this.publicBaseUrl}/uploads/${filename}`,
    };
  }
  private getExtension(mimeType: string) {
    switch (mimeType) {
      case "image/jpeg":
        return ".jpg";

      case "image/png":
        return ".png";

      case "image/webp":
        return ".webp";

      default:
        return "";
    }
  }
}

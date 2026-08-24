import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "./generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma, Prisma };
export type {
  Farm,
  Crop,
  User,
  CropImage,
  Diagnosis,
  DiagnosisStatus,
  Alert,
  NotificationPreference,
} from "./generated/prisma/client.js";

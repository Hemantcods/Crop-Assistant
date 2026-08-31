-- AlterEnum
ALTER TYPE "SoilRecordSource" ADD VALUE 'GEOLOCATION';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profilePic" TEXT;

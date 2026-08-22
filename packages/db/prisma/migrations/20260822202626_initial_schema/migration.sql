-- CreateEnum
CREATE TYPE "CropStatus" AS ENUM ('ACTIVE', 'HARVESTED', 'FAILED');

-- CreateEnum
CREATE TYPE "SoilRecordSource" AS ENUM ('MANULAL', 'SOIL_REPORT', 'SENSOR');

-- CreateEnum
CREATE TYPE "DiagnosisStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "AlertType" AS ENUM ('DISEASE', 'WEATHER', 'CROP_HEALTH', 'IRRIGATION', 'GENERAL');

-- CreateEnum
CREATE TYPE "AlertSeverity" AS ENUM ('INFO', 'WARNING', 'CRITICAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "googleId" TEXT,
    "language" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farm" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitide" DECIMAL(9,6) NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "area" DECIMAL(12,4) NOT NULL,
    "areaUnit" TEXT NOT NULL DEFAULT 'acre',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crop" (
    "id" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "platedAt" TIMESTAMP(3) NOT NULL,
    "harvestedAt" TIMESTAMP(3),
    "status" "CropStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CropImage" (
    "id" TEXT NOT NULL,
    "cropId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CropImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "id" TEXT NOT NULL,
    "cropId" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "disease" TEXT,
    "confidence" DECIMAL(5,4),
    "modelVersion" TEXT,
    "status" "DiagnosisStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoilRecord" (
    "id" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "nitrogen" DECIMAL(10,2),
    "phosphorous" DECIMAL(10,2),
    "potassium" DECIMAL(10,2),
    "ph" DECIMAL(4,2),
    "source" "SoilRecordSource" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SoilRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherSnapShot" (
    "id" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "temperature" DECIMAL(6,2),
    "humidity" DECIMAL(5,2),
    "rainfall" DECIMAL(8,2),
    "recordedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeatherSnapShot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CropRecomendation" (
    "id" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CropRecomendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CropRecomendationItem" (
    "id" TEXT NOT NULL,
    "recomendationId" TEXT NOT NULL,
    "cropName" TEXT NOT NULL,
    "score" DECIMAL(5,4) NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "CropRecomendationItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonitoringRecord" (
    "id" TEXT NOT NULL,
    "cropId" TEXT NOT NULL,
    "healthScore" DECIMAL(5,2),
    "growthStage" TEXT,
    "notes" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonitoringRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cropId" TEXT,
    "diagnosisId" TEXT,
    "type" "AlertType" NOT NULL,
    "severity" "AlertSeverity" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationPreference" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "whatsappEnabled" BOOLEAN NOT NULL DEFAULT false,
    "diseaseAlerts" BOOLEAN NOT NULL DEFAULT true,
    "weatherAlerts" BOOLEAN NOT NULL DEFAULT true,
    "cropHealthAlerts" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_phone_idx" ON "User"("phone");

-- CreateIndex
CREATE INDEX "Farm_userId_idx" ON "Farm"("userId");

-- CreateIndex
CREATE INDEX "Crop_farmId_idx" ON "Crop"("farmId");

-- CreateIndex
CREATE INDEX "Crop_farmId_status_idx" ON "Crop"("farmId", "status");

-- CreateIndex
CREATE INDEX "CropImage_cropId_idx" ON "CropImage"("cropId");

-- CreateIndex
CREATE INDEX "Diagnosis_cropId_idx" ON "Diagnosis"("cropId");

-- CreateIndex
CREATE INDEX "Diagnosis_imageId_idx" ON "Diagnosis"("imageId");

-- CreateIndex
CREATE INDEX "Diagnosis_cropId_createdAt_idx" ON "Diagnosis"("cropId", "createdAt");

-- CreateIndex
CREATE INDEX "SoilRecord_farmId_idx" ON "SoilRecord"("farmId");

-- CreateIndex
CREATE INDEX "SoilRecord_farmId_createdAt_idx" ON "SoilRecord"("farmId", "createdAt");

-- CreateIndex
CREATE INDEX "WeatherSnapShot_farmId_idx" ON "WeatherSnapShot"("farmId");

-- CreateIndex
CREATE INDEX "WeatherSnapShot_farmId_recordedAt_idx" ON "WeatherSnapShot"("farmId", "recordedAt");

-- CreateIndex
CREATE INDEX "CropRecomendation_farmId_idx" ON "CropRecomendation"("farmId");

-- CreateIndex
CREATE INDEX "CropRecomendation_farmId_createdAt_idx" ON "CropRecomendation"("farmId", "createdAt");

-- CreateIndex
CREATE INDEX "CropRecomendationItem_recomendationId_idx" ON "CropRecomendationItem"("recomendationId");

-- CreateIndex
CREATE UNIQUE INDEX "CropRecomendationItem_recomendationId_rank_key" ON "CropRecomendationItem"("recomendationId", "rank");

-- CreateIndex
CREATE INDEX "MonitoringRecord_cropId_idx" ON "MonitoringRecord"("cropId");

-- CreateIndex
CREATE INDEX "MonitoringRecord_cropId_createdAt_idx" ON "MonitoringRecord"("cropId", "createdAt");

-- CreateIndex
CREATE INDEX "Alert_userId_idx" ON "Alert"("userId");

-- CreateIndex
CREATE INDEX "Alert_userId_readAt_idx" ON "Alert"("userId", "readAt");

-- CreateIndex
CREATE INDEX "Alert_cropId_idx" ON "Alert"("cropId");

-- CreateIndex
CREATE INDEX "Alert_diagnosisId_idx" ON "Alert"("diagnosisId");

-- CreateIndex
CREATE INDEX "Alert_userId_createdAt_idx" ON "Alert"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationPreference_userId_key" ON "NotificationPreference"("userId");

-- AddForeignKey
ALTER TABLE "Farm" ADD CONSTRAINT "Farm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CropImage" ADD CONSTRAINT "CropImage_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "CropImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoilRecord" ADD CONSTRAINT "SoilRecord_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeatherSnapShot" ADD CONSTRAINT "WeatherSnapShot_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CropRecomendation" ADD CONSTRAINT "CropRecomendation_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CropRecomendationItem" ADD CONSTRAINT "CropRecomendationItem_recomendationId_fkey" FOREIGN KEY ("recomendationId") REFERENCES "CropRecomendation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitoringRecord" ADD CONSTRAINT "MonitoringRecord_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_diagnosisId_fkey" FOREIGN KEY ("diagnosisId") REFERENCES "Diagnosis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationPreference" ADD CONSTRAINT "NotificationPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

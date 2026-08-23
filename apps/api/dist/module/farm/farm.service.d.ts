import { CreateFarmInput, UpdateFarmInput } from "shared";
import { FarmRepository } from "./farm.repository";
export declare class FarmService {
    private readonly farmRepository;
    constructor(farmRepository: FarmRepository);
    createFarm(userId: string, data: CreateFarmInput): Promise<{
        id: string;
        userId: string;
        name: string;
        latitide: import("@prisma/client-runtime-utils").Decimal;
        longitude: import("@prisma/client-runtime-utils").Decimal;
        area: import("@prisma/client-runtime-utils").Decimal;
        areaUnit: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getFarms(userId: string): Promise<{
        id: string;
        userId: string;
        name: string;
        latitide: import("@prisma/client-runtime-utils").Decimal;
        longitude: import("@prisma/client-runtime-utils").Decimal;
        area: import("@prisma/client-runtime-utils").Decimal;
        areaUnit: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    GetFarm(userId: string, farmId: string): Promise<{
        id: string;
        userId: string;
        name: string;
        latitide: import("@prisma/client-runtime-utils").Decimal;
        longitude: import("@prisma/client-runtime-utils").Decimal;
        area: import("@prisma/client-runtime-utils").Decimal;
        areaUnit: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    UpdateFarm(userId: string, farmId: string, data: UpdateFarmInput): Promise<{
        id: string;
        userId: string;
        name: string;
        latitide: import("@prisma/client-runtime-utils").Decimal;
        longitude: import("@prisma/client-runtime-utils").Decimal;
        area: import("@prisma/client-runtime-utils").Decimal;
        areaUnit: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    deleteFarm(userId: string, farmId: string): Promise<void>;
}
//# sourceMappingURL=farm.service.d.ts.map
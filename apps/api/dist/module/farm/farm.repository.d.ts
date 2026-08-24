import { CreateFarmInput, UpdateFarmInput } from "shared";
import type { Farm, Prisma } from "db";
export declare class FarmRepository {
    create(userId: string, data: CreateFarmInput): Promise<Farm>;
    findAllByUserId(userId: string): Promise<Farm[]>;
    findById(farmId: string, userId: string): Promise<Farm | null>;
    update(farmId: string, userId: string, input: UpdateFarmInput): Promise<Prisma.BatchPayload>;
    delete(farmId: string, userId: string): Promise<Prisma.BatchPayload>;
}
//# sourceMappingURL=farm.repository.d.ts.map
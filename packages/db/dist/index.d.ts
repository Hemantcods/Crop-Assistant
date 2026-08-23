import "dotenv/config";
import { Prisma } from "./generated/prisma/client.js";
declare const prisma: import("./generated/prisma/internal/class.js").PrismaClient<never, Prisma.GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
export { prisma, Prisma };
export type { Farm, Crop, User, Diagnosis } from "./generated/prisma/client.js";
//# sourceMappingURL=index.d.ts.map
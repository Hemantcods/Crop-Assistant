# Crop Assistant - Project Context for Agents

## Project Structure
- Monorepo with Turbo: `apps/api`, `apps/cropcare`, `packages/db`, `packages/shared`
- API: Express + TypeScript, uses `tsx watch` for dev (no tsconfig.json in api)
- Database: Prisma with PostgreSQL, types exported from `packages/db/index.ts`
- Shared: Zod schemas exported from `packages/shared/src/index.ts`

## Key Patterns (Follow Farm Module Style)
- **Controller**: Class with constructor-injected service, async arrow methods `(req: AuthRequest, res: Response)`
- **Service**: Business logic, validates farm ownership before crop operations
- **Repository**: Direct Prisma calls, return types from `db` package
- **Container**: Wire dependencies (Repository → Service → Controller)
- **Routes**: Nested under `/farm/:farmId/crops`, use `mergeParams: true`, auth + zod validation

## Recent Changes (Commit 7add84d)
Added complete **Crop Module** following Farm patterns:
- `apps/api/src/module/crop/crop.controller.ts` - CRUD endpoints
- `apps/api/src/module/crop/crop.service.ts` - Farm ownership validation
- `apps/api/src/module/crop/crop.repository.ts` - Prisma CRUD with `Crop` type from `db`
- `apps/api/src/module/crop/crop.container.ts` - DI wiring
- `apps/api/src/module/crop/crop.routes.ts` - Nested routes with auth/validation
- `apps/api/src/routes/index.ts` - Mounted at `/farm/:farmId/crops`
- `packages/db/index.ts` - Export `Farm`, `Crop`, `User`, `Prisma` types
- `packages/shared/src/schemas/crop.schema.ts` - Zod schemas (create/update/cropId)

## Type Imports
```typescript
import type { Crop, Farm, Prisma } from "db";
```

## Common Issues to Avoid
- **No tsconfig.json in apps/api** - uses tsx directly, build script is placeholder
- **Import from "db"** not "@prisma/client" for types
- **Relative imports need .js extension** in ESM (handled by tsx/bundler)
- **ExactOptionalPropertyTypes** causes issues with Prisma updateMany/deleteMany
- **CropStatus enum** from Prisma causes "not portable" errors without explicit types

## Commands
- `npx turbo build` - Build all packages
- `npm run dev` in apps/api - Start dev server with tsx watch
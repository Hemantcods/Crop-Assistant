import { RequestHandler } from "express";
import { ZodType } from "zod";
type RequestPart = "body" | "params" | "query";
export declare const validate: (schema: ZodType, part?: RequestPart) => RequestHandler;
export {};
//# sourceMappingURL=validate.middleware.d.ts.map
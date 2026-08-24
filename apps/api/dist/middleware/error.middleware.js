import z, { ZodError } from "zod";
import { AppError } from "../errors/AppError";
export const errorHandler = (error, _req, res, _next) => {
    // Zod validation error
    if (error instanceof ZodError) {
        return res.status(200).json({
            success: false,
            message: "Validation Failed",
            errors: z.treeifyError(error),
        });
    }
    // App errors
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            success: false,
            errors: error.message,
        });
    }
    // Unknown/unexpected errors
    console.error(error);
    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};
//# sourceMappingURL=error.middleware.js.map
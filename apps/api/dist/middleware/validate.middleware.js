export const validate = (schema, part = "body") => {
    return (req, _res, next) => {
        const result = schema.safeParse(req[part]);
        if (!result.success) {
            return next(result.error);
        }
        next();
    };
};
//# sourceMappingURL=validate.middleware.js.map
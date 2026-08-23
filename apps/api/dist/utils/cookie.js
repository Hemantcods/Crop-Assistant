const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
};
export const setAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        ...cookieOptions,
        maxAge: 15 * 60 * 1000,
        path: "/",
    });
    res.cookie("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/api/auth",
    });
};
export const clearCookies = (res) => {
    res.clearCookie("accessToken", {
        ...cookieOptions,
        path: "/"
    });
    res.clearCookie("refreshToken", {
        ...cookieOptions,
        path: "/api/auth"
    });
};
//# sourceMappingURL=cookie.js.map
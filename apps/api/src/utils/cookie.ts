import type { Response } from "express";


const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
} as const
export const setAuthCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string,
) => {

  res.cookie("accessToken", accessToken, {
    ...cookieOptions,
    maxAge: 15 * 60 * 1000,
    path: "/",
  })

  res.cookie("refreshToken", refreshToken, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/api/auth",
  });
};

export const clearCookies = (res: Response) => {
  res.clearCookie("accessToken", {
    ...cookieOptions,
    path:"/"
  })
  res.clearCookie("refreshToken", {
    ...cookieOptions,
    path:"/api/auth"
  })
}

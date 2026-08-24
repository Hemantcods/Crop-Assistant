import cookieParser from "cookie-parser";
import express from "express";
import { env } from "./config/env";
import cors from "cors";
import routes from "./routes";
import path from "path";
import { errorHandler } from "./middleware/error.middleware";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: env.FRONTEND_URL.replace(/\/$/, ""),
    credentials: true,
  }),
);
app.use("/uploads", express.static(path.resolve(process.cwd(), "uploads")));

app.use("/api/", routes);
app.use(errorHandler);

export default app;

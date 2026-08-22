import cookieParser from "cookie-parser"
import express from "express"
import { env } from "./config/env"
import cors from "cors"
import routes from "./routes"
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: env.FRONTEND_URL.replace(/\/$/, ""),
    credentials: true,
  }),
)

app.use("/api/",routes)

export default app
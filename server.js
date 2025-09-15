import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//env
import dotenv from "dotenv-flow";
dotenv.config();

//import
import pksRouter from "./routes/pks.routes.js";

const server = express();
server.use(cors());
server.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static & routes

server.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "documentation.html"));
});

server.use("/api/pks", pksRouter);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

import e from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import IndexRoutes from "@Routes/Index/index.routes";
import NotesRoutes from "@Routes/Notes/index.routes";
import { PORT } from "@Config/index";

// Settings
const app = e();
app.set("port", PORT);

// Middlewares
app.use(morgan("dev"));
app.use(e.json());
app.use(helmet());
app.use(cors());

// Routes
app.use("/", IndexRoutes);
app.use("/notes", NotesRoutes);

export default app;

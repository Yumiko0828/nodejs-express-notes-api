import { Router } from "express";
import { NotesController } from "@Controllers/Notes/notes.controller";
const router = Router();

const controller = new NotesController();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", controller.update)
  .delete("/:id", controller.delete);

export default router;

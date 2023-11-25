import { NotesServices } from "@Services/db/notes.services";
import boom from "@hapi/boom";
import { Request, Response } from "express";
import { createSchema, updateSchema } from "./notes.validator";

const service = new NotesServices();

export class NotesController {
  async getAll(req: Request, res: Response) {
    try {
      const notes = await service.getAll();

      res.json({
        data: notes,
      });
    } catch (e) {
      res.json(boom.badImplementation(e.message).output.payload);
    }
  }

  async getById(req: Request, res: Response) {
    const { id: noteId } = req.params;

    try {
      const note = await service.getById(noteId);

      res.json({
        data: note,
      });
    } catch (e) {
      switch (e.message) {
        case "Not found":
          res.json(boom.notFound("Note not found").output.payload);
          break;

        default:
          res.json(boom.badImplementation(e.message).output.payload);
          break;
      }
    }
  }

  async create(req: Request, res: Response) {
    const { error, value } = createSchema.validate(req.body);
    if (error) return res.json(boom.badRequest(error.message).output.payload);

    try {
      const createdNote = await service.create(value);

      res.json({
        data: createdNote,
      });
    } catch (e) {
      switch (e.message) {
        case "Already created":
          res.json(boom.notFound("Note already created").output.payload);
          break;

        default:
          console.error(e);
          res.json(boom.badImplementation(e.message).output.payload);
          break;
      }
    }
  }

  async update(req: Request, res: Response) {
    const { id: noteId } = req.params;
    const { error, value } = updateSchema.validate(req.body);

    if (!noteId)
      return res.json(boom.badRequest("Missing note id").output.payload);
    if (error) return res.json(boom.badRequest(error.message).output.payload);

    try {
      const updatedNote = await service.update(noteId, value);

      res.json({
        data: updatedNote,
      });
    } catch (e) {
      switch (e.message) {
        case "Not found":
          res.json(boom.notFound("Note not found").output.payload);
          break;

        default:
          res.json(boom.badImplementation(e.message).output.payload);
          break;
      }
    }
  }

  async delete(req: Request, res: Response) {
    const { id: noteId } = req.params;

    if (!noteId)
      return res.json(boom.badRequest("Missing note id").output.payload);

    try {
      const deletedNote = await service.delete(noteId);

      res.json({
        data: deletedNote,
      });
    } catch (e) {
      switch (e.message) {
        case "Not found":
          res.json(boom.badRequest("Note not found").output.payload);
          break;

        default:
          res.json(boom.badImplementation(e.message).output.payload);
          break;
      }
    }
  }
}

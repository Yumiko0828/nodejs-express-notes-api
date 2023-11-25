import { NoteObject } from "@Controllers/Notes/notes.validator";
import { db } from "@Services/db";

export class NotesServices {
  getAll() {
    return db.notes.findMany();
  }

  async getById(id: string) {
    const note = await db.notes.findUnique({
      where: {
        id,
      },
    });

    if (!note) throw new Error("Not found");

    return note;
  }

  async create(data: NoteObject) {
    const existNote = await db.notes.findFirst({
      where: {
        title: data.title,
        author: data.author,
      },
    });

    if (existNote) throw new Error("Already created");

    return db.notes.create({
      data,
    });
  }

  async update(id: string, data: Partial<NoteObject>) {
    const note = await db.notes.findUnique({
      where: {
        id,
      },
    });

    if (!note) throw new Error("Not found");

    return db.notes.update({
      where: {
        id: note.id,
      },
      data,
    });
  }

  async delete(id: string) {
    const note = await db.notes.findUnique({ where: { id } });

    if (!note) throw new Error("Not found");

    return db.notes.delete({
      where: {
        id: note.id,
      },
    });
  }
}

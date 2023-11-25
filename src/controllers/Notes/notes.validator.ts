import joi from "joi";

export interface NoteObject {
  title: string;
  description?: string;
  author: string;
}

export const createSchema = joi
  .object<NoteObject>({
    title: joi.string().required(),
    description: joi.string(),
    author: joi.string().required(),
  })
  .required();

export const updateSchema = joi.object().required();

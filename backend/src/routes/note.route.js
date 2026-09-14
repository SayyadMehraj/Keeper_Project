import express from "express";
import { addNote, getNotes, deleteNote } from "../controllers/note.controller.js";

const noteRouter = express.Router();

/**
 * @route /api/notes/
 * @description Add new note 
 * @access Private 
 */
noteRouter.post("/", addNote)

/**
 * @route /api/notes/
 * @description Get all the notes related to that user
 * @access Private
 */
noteRouter.get("/", getNotes)

/**
 * @route /api/notes/:id
 * @description Deletes the note by the ID
 * @access Private
 */
noteRouter.delete("/:id", deleteNote)

export default noteRouter
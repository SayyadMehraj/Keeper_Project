import express from "express";
import { addNote } from "../controllers/note.controller.js";

const noteRouter = express.Router();

/**
 * @route /api/notes/
 * @description Add new note 
 * @access Private 
 */
noteRouter.post("/",addNote)

export default noteRouter
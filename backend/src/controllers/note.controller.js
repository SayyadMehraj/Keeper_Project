import Note from "../models/note.model.js";

/**
 * @name addNote
 * @description Creating a new note by taking title and content from the request body and saving it to the database.
 * @access Private
 */
async function addNote(req, res) {

    const { title, content } = req.body

    const note = await Note.create({
        title,
        content
    })

    res.status(201).json({
        message: "Note created successfully.",
        note
    })
}

async function getNotes(req, res) {
    
    const notes = await Note.find()

    res.status(200).json({
        message: "All notes are fetched",
        notes
    })
}

export { addNote, getNotes }
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

export { addNote }
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

/**
 * @name getNotes
 * @description Getting all the notes 
 * @access Private
 */
async function getNotes(req, res) {

    const notes = await Note.find()

    res.status(200).json({
        message: "All notes are fetched",
        notes
    })
}

/**
 * @name deleteNote
 * @description Deletes the note by the note ID 
 * @access Private
 */
async function deleteNote(req, res) {
    const { id } = req.params

    let note = null

    try {
        note = await Note.findByIdAndDelete(id)
    } catch (error) {
        //If someone tries to send malformed ID i.e., something like a string rather than object id
        //the request itself is invalid
        return res.status(400).json({
            message: "Bad Request"
        })
    }

    //Even if it gets the object id we find to check whether the note exists or it is null
    //FindByIdAndDelete returns either 'note' or 'null'
    if (note === null) {
        return res.status(404).json({
            message: "Cannot find the note"
        })
    }

    res.status(200).json({
        message: "Deleted the note"
    })
}

/**
 * @name modifyNote
 * @description Modifiying the title or content in the note
 * @access Private
 */
async function modifyNote(req, res) {

    const { id } = req.params

    let updatedNote = null

    try {
        updatedNote = await Note.findByIdAndUpdate(id, req.body, { returnDocument: "after" })
    } catch (error) {
        //If there is no such note exists
        return res.status(400).json({
            message: "Bad Request"
        })
    }

    //If the id is given right but that id doesn't exist in the database
    if (updatedNote === null) {
        return res.status(404).json({
            message: "Cannot find the note"
        })
    }

    res.status(200).json({
        message: "Note is modified",
        updatedNote
    })
}

export { addNote, getNotes, deleteNote, modifyNote }
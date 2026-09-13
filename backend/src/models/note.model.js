import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

//Before saving into the database we check whether the both title & content are empty, if empty then we will not save to the database
noteSchema.pre("save", async function () {
    if ((this.title === undefined || this.title.trim() === "") && (this.content === undefined || this.content.trim() === "")) {
        throw new Error("Both the title and content are empty.");
    }
})

const Note = mongoose.model("Note", noteSchema)

export default Note

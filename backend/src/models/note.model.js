import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps: true
    }
)

//Before saving into the database we check whether the both title & content are empty, if empty then we will not save to the database
async function doValidation(finalTitle, finalContent) {
    if ((finalTitle === undefined || finalTitle.trim() === "") &&
        (finalContent === undefined || finalContent.trim() === "")) {
        throw new Error("Both the title and content are empty.");
    }
}

noteSchema.pre("save", function () {
    return doValidation(this.title, this.content);
});

noteSchema.pre("findOneAndUpdate", async function () {
    const update = this.getUpdate();

    const oldNote = await this.model.findOne(this.getQuery());

    // If the key was sent in this update, its new value wins.
    // If it wasn't sent at all, the field is untouched — fall back to the old note.
    const finalTitle = ("title" in update) ? update.title : oldNote?.title;
    const finalContent = ("content" in update) ? update.content : oldNote?.content;

    await doValidation(finalTitle, finalContent);
});

const Note = mongoose.model("Note", noteSchema)

export default Note

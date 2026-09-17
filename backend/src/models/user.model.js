import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: [true, "Account already exists with this email id."],
            required: [true, "Email id is required."]
        },
        password: {
            type: String,
            required: [true, "Password is required."]
        }
    }
    , {
        timestamps: true
    }
)


userSchema.pre("save", async function () {
    //If password is not modified then skip the hashing
    if (!this.isModified("password")) {
        return;
    }

    /**
     * Hash the password before saving
     * A salt is random data mixed into the password before hashing
     * Without a salt, an attacker could precompute hashes for common passwords once (a "rainbow table") and instantly crack every user who happens to share a common password.
     * 10 is the salt rounds — a cost factor controlling how computationally expensive the hash is to compute (higher = slower to compute, slower to brute-force, but also slower for your own server on every login/signup).
     */
    this.password = await bcrypt.hash(this.password, 10)
})


const User = mongoose.model("User", userSchema)

export default User
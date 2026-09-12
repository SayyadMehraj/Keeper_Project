//Intialise connection to database
import mongoose from 'mongoose';

async function connectDB() {
    //We need to assume and move that there maybe always problem in connecting to DB
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.error(`Database connection failed: ${error}`);
        throw error;
    }
}

export default connectDB
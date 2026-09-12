//This is the where all the server, db connection
//Always the first step will be able to access the env file
import 'dotenv/config';
import app from "./src/app.js";
import connectToDB from "./src/config/connectDB.js"; //Connecting to DB

//Checking env are successfully importing or not
// console.log(process.env.PORT);

//The environment variable first and 3000 as a fallback:
const PORT = process.env.PORT || 3000

//on connection failure, log it and then [process.exit(1) or process.exitCode = 1] so it's obvious immediately that the server didn't really start.
const startServer = async () => {
    try {
        //Connection to Database
        await connectToDB();

        //Setting up a port to communicate
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.error("Failed to start the server:", error)
        process.exitCode = 1;
    }
}

startServer();


//This would be the main file running and everything will be imported into this
import express from 'express';
const app = express();

//Read the data coming from the frontend in json format
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello World");
})

export default app
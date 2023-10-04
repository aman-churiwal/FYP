import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));


app.get('/', (req, res) => {
    res.send("Dhatt TMKC")
})
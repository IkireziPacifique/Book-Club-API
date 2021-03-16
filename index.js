import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

dotenv.config()

const port = process.env.PORT || 3306;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);


app.listen(port, () => {
    console.log(`Our Book Club API is now available on port ${port}`)
})

mysql://b98a4a9327d0ae:f52fbeee@us-cdbr-east-03.cleardb.com/heroku_d12a99ed0603b3f?reconnect=true

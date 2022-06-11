import * as applications from './applications-model.mjs';
import express from 'express';
import 'dotenv/config';


const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
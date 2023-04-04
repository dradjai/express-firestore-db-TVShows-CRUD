import express from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
// import CRUD Functions
import { addNewTv, getAllTv } from './src/tvLibrary.js';
app.use(express.json);


app.get('/tvShows', getAllTv);

app.post('/tvShows', addNewTv);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));


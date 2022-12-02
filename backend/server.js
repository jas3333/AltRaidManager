import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// routes
import characterRouter from './routes/routes.js';
app.use('/api/', characterRouter);
const PORT = 5005;

// app.get('/', (req, res) => {
//     res.sendFile('index.html');
// });

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
});

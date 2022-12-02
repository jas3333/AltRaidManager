import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/recipes');

// routes
import characterRouter from './routes/routes.js';
app.use('/api/', characterRouter);
const PORT = 5005;

// const recipeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     ingredients: {
//         type: [],
//         required: true,
//     },
//     directions: [],
// });
//
// const Recipe = mongoose.model('Recipe', recipeSchema);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

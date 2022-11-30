import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide character name.'],
    },
    raids: [],
});

export default mongoose.model('Character', CharacterSchema);

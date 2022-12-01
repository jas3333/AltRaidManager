import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide character name.'],
    },
    raids: [
        {
            name: {
                type: String,
                required: [true, 'Must have a name'],
            },
            status: {
                type: Boolean,
                required: [true, 'Must have a status'],
            },
        },
    ],
});

export default mongoose.model('Character', CharacterSchema);

import mongoose from 'mongoose';

const RaidSchema = new mongoose.Schema({
    raids: {
        type: [String],
        required: [true, 'Enter in a raid name...'],
    },
});

export default mongoose.model('Raid', RaidSchema);

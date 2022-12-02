import mongoose from 'mongoose';
import Characters from '../models/characters.js';
import Raids from '../models/raids.js';

mongoose.connect(`${process.env.MONGODB}/characterDB`);

const addCharacter = async (req, res) => {
    const newCharacter = new Characters(req.body);
    newCharacter.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Saving ${newCharacter}`);
        }
    });
};

const removeCharacter = async (req, res) => {
    res.send('Removing character');
    console.log('Removing character');
};

const sendCharacter = async (req, res) => {
    Characters.find({}, (error, characters) => {
        if (error) {
            console.log(error);
        } else {
            res.send(characters);
        }
    });
};

const updateRaid = async (req, res) => {
    const { name, raids } = req.body;
    Characters.replaceOne({ name: name }, { name: name, raids: raids }, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Updated raid status');
        }
    });
};

const updateCharacter = async (req, res) => {
    res.send('Updating character');
    console.log('Updating character');
};

const addRaid = async (req, res) => {
    console.log(req.body);
};

const sendRaids = async (req, res) => {
    console.log('Sending raids');
    Raids.find({}, (error, foundRaids) => {
        if (error) console.log(error);
        else res.send(foundRaids);
    });
};
export { addCharacter, removeCharacter, sendCharacter, updateCharacter, addRaid, sendRaids, updateRaid };

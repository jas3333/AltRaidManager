import Raids from '../models/raids.js';

const addCharacter = async (req, res) => {
    console.log(req.body);
};

const removeCharacter = async (req, res) => {
    res.send('Removing character');
    console.log('Removing character');
};

const sendCharacter = async (req, res) => {
    res.send('Sending character data');
    console.log('Sending character data');
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
export { addCharacter, removeCharacter, sendCharacter, updateCharacter, addRaid, sendRaids };

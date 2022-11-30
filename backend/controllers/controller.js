const addCharacter = async (req, res) => {
    res.send('Add Character');
    console.log('Adding character');
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

export { addCharacter, removeCharacter, sendCharacter, updateCharacter };

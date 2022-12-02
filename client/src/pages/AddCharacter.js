import { useEffect, useState } from 'react';
import axios from 'axios';

const raidsData = ['Kakul-Saydon', 'Vykas', 'Valtan', 'Argos', 'Aira/Oreha'];

const AddCharacter = () => {
    const [character, setCharacter] = useState('');
    const [raids, setRaids] = useState(raidsData);
    const [selectedRaids, setSelectedRaids] = useState([]);

    const getRaids = async () => {
        const response = await axios.get('http://10.0.0.49:5005/api/sendRaid');
        console.log(response);
    };

    const handleChange = (event) => {
        if (event.target.checked) {
            setSelectedRaids([...selectedRaids, { name: event.target.value, status: true }]);
        } else {
            setSelectedRaids(selectedRaids.filter((item) => item !== event.target.value));
        }
    };

    // useEffect(() => {
    //     getRaids();
    // }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newCharacter = { name: character, raids: selectedRaids };

        try {
            const response = await axios.post('http://10.0.0.49:5005/api/addCharacter', newCharacter);
            console.log('Sending new character data...');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container mg-top-vlg auto border radius-md pad-lg '>
            <form className='container-col pad-lg' onSubmit={handleSubmit}>
                <label className='mg-bot-sm'>Character name</label>

                <div className='container'>
                    <input
                        type='text'
                        value={character}
                        placeholder='Character name'
                        onChange={(event) => setCharacter(event.target.value)}
                        className='input-text'
                    />
                </div>

                <div className='container-col mg-top-md text-center'>
                    <h2>Raids</h2>
                    <div className='underline-full mg-bot-sm'></div>
                </div>
                {raids.map((raid, index) => {
                    return (
                        <div className='container mg-top-sm mg-bot-sm' key={index}>
                            <label className='size-sm'>{raid}</label>
                            <input
                                type='checkbox'
                                value={raid}
                                className='input-checkbox'
                                name='raidSelection'
                                onChange={handleChange}
                            />
                        </div>
                    );
                })}

                <button type='submit' className='btn full btn-h-md mg-top-md'>
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddCharacter;

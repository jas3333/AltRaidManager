import axios from 'axios';
import { useEffect, useState } from 'react';

const Settings = () => {
    const [raidList, setRaidList] = useState([]);
    const [raid, setRaid] = useState('');

    const getRaids = async () => {
        const response = await axios.get('http://localhost:5005/api/sendRaid');
        console.log(response);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newRaid = [...raidList, raid];
        setRaid('');

        const response = await axios.post('http://localhost:5005/api/addRaid', newRaid);
    };

    useEffect(() => {
        getRaids();
    }, []);

    return (
        <div className='container-col mg-top-vlg border auto pad-lg radius-md'>
            <h1 className='text-center'>Settings</h1>
            <div className='underline-full'></div>
            <div className='container pad-lg'>
                <form className='container-col auto' onSubmit={handleSubmit}>
                    <label>Add raid</label>
                    <div className='container'>
                        <input
                            type='text'
                            name=''
                            value={raid}
                            className='input-text'
                            placeholder='Raid name'
                            onChange={(event) => setRaid(event.target.value)}
                        />
                        <button type='submit' className='btn btn-sm mg-left-sm'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Settings;

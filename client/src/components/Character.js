import axios from 'axios';
import { useEffect, useState } from 'react';

const Character = ({ name, raids }) => {
    const [raidList, setRaidList] = useState(raids);

    const toggleRaid = async (id) => {
        setRaidList(
            raidList.map((raid) => {
                if (raid._id === id) {
                    raid.status = !raid.status;
                }
                return { name: raid.name, status: raid.status, _id: raid._id };
            })
        );
        const updatedRaid = { name: name, raids: raidList };

        const response = await axios.put('http://localhost:5005/api/updateRaidStatus', updatedRaid);
    };

    return (
        <div className='container-col radius-md pad-lg size-sm border shadow mg-left-lg '>
            <h1 className='text-center'>{name}</h1>
            <div className='underline-full'></div>
            <div className='container-col mg-top-md'>
                {raidList.map((raid, index) => {
                    return (
                        <div className='container mg-top-sm' key={index}>
                            <h3
                                onClick={() => toggleRaid(raid._id)}
                                className={`${raid.status ? 'pointer' : 'strike pointer'}`}
                            >
                                {raid.name}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Character;

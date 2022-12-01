import axios from 'axios';
import { useEffect, useState } from 'react';
import Character from '../components/Character';

const Home = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try {
            const { data } = await axios.get('http://localhost:5005/api/sendCharacter');
            setCharacters(data);
            console.log('Setting characters');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className='container eighty auto mg-top-vlg'>
            {characters.map((char) => {
                return <Character key={char.id} {...char} />;
            })}
        </div>
    );
};

export default Home;

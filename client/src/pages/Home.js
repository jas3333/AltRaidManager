import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import Character from '../components/Character';

const Home = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = useCallback(async () => {
        try {
            const { data } = await axios.get('http://10.0.0.49:5005/api/sendCharacter');
            setCharacters(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getCharacters();
    }, [getCharacters]);

    return (
        <div className='container eighty mg-top-vlg auto content-center'>
            {characters.map((char) => {
                return <Character key={char._id} {...char} />;
            })}
        </div>
    );
};

export default Home;

import { useState } from "react";
import './Home.css';

const URL = 'https://rickandmortyapi.com/api/character';

export const Home = () => {
    const [characters, setCharacters] = useState([]);

    const handleGetApi = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCharacters(data.results);
    };

    return (
        <div className="container">
            <button onClick={handleGetApi} className="btnCards">GENERAR CARDS</button>
            <div className="characters">

                {characters.map(character => (
                    <div key={character.id} className="character-card">
                        <h3>{character.name}</h3>
                        <img src={character.image} />
                        <p>{character.gender}</p>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

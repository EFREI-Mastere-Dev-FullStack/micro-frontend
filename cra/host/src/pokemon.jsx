import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pokemon = () => {
    const [pokemonId, setPokemonId] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setPokemonId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            setPokemonData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>trouve ton pokemon bg</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    ID du pokemon :
                    <input type="text" value={pokemonId} onChange={handleInputChange} />
                </label>
                <button type="submit">Search</button>
            </form>

            {isLoading && <div>Loading...</div>}

            {error && <div>Error: {error.message}</div>}

            {pokemonData && (
                <div>
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <h3>Abilities:</h3>
                    <ul>
                        {pokemonData.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Pokemon;

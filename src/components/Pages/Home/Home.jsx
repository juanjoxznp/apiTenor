import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; 

export const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await axios.get('https://tenor.googleapis.com/v2/search', {
          params: {
            q: query || 'trending',
            key: 'AIzaSyC6zKW8NbdAgZDrR1D459n_kFiPRK0jQUQ',
            limit: 20
          }
        });
        setGifs(response.data.results);
      } catch (error) {
        console.error('Error fetching the GIFs:', error);
      }
    };

    fetchGifs(); 
  }, [query]);

  return (
    <div className="container">
      <h1>GIFS TENOR</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs"
        className="search-input"
      />
      <div className="gif-container">
        {gifs.map(gif => (
          <img key={gif.id} src={gif.media_formats.gif.url} alt={gif.title} className="gif-image" />
        ))}
      </div>
    </div>
  );
};


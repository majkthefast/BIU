import React, { useState, useEffect } from 'react';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [rating, setRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random?client_id=q1kaFKMmJnczbzMKietiide0hl4TZPxPGzbKAIUtjFc');
      const data = await response.json();
      setImageUrl(data.urls.regular);
      setRating(0);
      setTotalVotes(0);
    } catch (error) {
      console.error('Błąd podczas pobierania zdjęcia:', error);
    }
  };

  const handleVote = (rating) => {
    setRating(rating);
    setTotalVotes(totalVotes + 1);
  };

  const handleNextImage = () => {
    fetchRandomImage();
  };

  const calculateAverageRating = () => {
    if (totalVotes === 0) {
      return 0;
    }
    return rating / totalVotes;
  };

  return (
    <div>
      <h1>Galeria Zdjęć</h1>
      <img src={imageUrl} alt="Zdjęcie" />

      <div>
        <h3>Oceń zdjęcie:</h3>
        <div>
          <button onClick={() => handleVote(1)}>1 gwiazdka</button>
          <button onClick={() => handleVote(2)}>2 gwiazdki</button>
          <button onClick={() => handleVote(3)}>3 gwiazdki</button>
          <button onClick={() => handleVote(4)}>4 gwiazdki</button>
          <button onClick={() => handleVote(5)}>5 gwiazdek</button>
        </div>
        <p>Średnia ocena: {calculateAverageRating().toFixed(2)}</p>
      </div>

      <div>
        <h3>Szczegóły zdjęcia:</h3>
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">Szczegóły zdjęcia</a>
      </div>

      <div>
        <button onClick={handleNextImage}>&lt; Poprzednie</button>
        <button onClick={handleNextImage}>Następne &gt;</button>
      </div>
    </div>
  );
};

export default App;

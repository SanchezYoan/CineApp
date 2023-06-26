import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import Form from "../components/Form";

const Home = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d9a485e1fea3cef0a6e4e1e568b65394&query=code&language=fr-FR`
      )
      .then((res) => setMovieData(res.data.results));
    // console.log(movieData);
  });

  return (
    <div className="header">
      <nav>
        <ul>
          <i className="fas fa-home">
            <a href="/">Accueil</a>
          </i>
          <i className="fas fa-heart">
            <a href="/likes">Coups de coeur</a>
          </i>
        </ul>
      </nav>
      <h1>React Movie</h1>
      <Form />
      <div className="result">
        {movieData.map((movie, index) => (
          <Card moviedata={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;

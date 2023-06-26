import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
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
          <a href="/">Accueil</a>
          <a href="/">Coups de coeur</a>
        </ul>
      </nav>
      <h1>React Movie</h1>
      <input type="text" onChange={(e) => setInputSearch(e.target.value)} />
      <input type="submit" />
      <div className="result">
        {movieData
          .filter((movie) => movie.title.includes(inputSearch))
          .map((movie, index) => (
            <Card moviedata={movie} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Home;

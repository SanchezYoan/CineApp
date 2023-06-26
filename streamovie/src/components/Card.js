// import React, { useState } from "react";

const Card = ({ moviedata }) => {
  // const [item, setItem] = useState([]);
  // console.log(item);

  const data = {
    title: moviedata.title,
    date: moviedata.release_date,
    img: moviedata.strMealThumb,
    genre: moviedata.genre_ids.map((genre) => <li>{genre}</li>),
    note: moviedata.vote_average,
    synopsis: moviedata.overview,
  };

  const liked = () => {
    localStorage.title = data.title;
    localStorage.date = data.date;
    localStorage.synopsis = data.synopsis;
  };
  return (
    <div className="card">
      <img src="img/poster.jpg" alt={data.title} />
      <h2>{data.title}</h2>
      <h5>Sorti le : {data.date} </h5>
      <h4>{data.note.toFixed(1)}/10</h4>
      <ul>{data.genre}</ul>
      <h3>Synopsis</h3>
      <p>{data.synopsis}</p>
      <button className="btn" onClick={() => liked()}>
        Ajouter aux coups de coeur
      </button>
    </div>
  );
};

export default Card;

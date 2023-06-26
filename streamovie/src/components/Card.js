import React from "react";

const Card = ({ moviedata }) => {
  const data = {
    title: moviedata.original_title,
    date: moviedata.release_date,
    img: moviedata.strMealThumb,
    instructions: moviedata.strInstructions,
    genre: moviedata.genre_ids.map((genre) => <li>{genre}</li>),
    note: moviedata.vote_average,
    synopsis: moviedata.overview,
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
      <button className="btn">Ajouter aux coups de coeur</button>
    </div>
  );
};

export default Card;

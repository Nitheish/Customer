import React, { useEffect, useState } from 'react';
import './home.css';
import { FaPlay } from "react-icons/fa";

const API_KEY = 'f3a0bbdff39a2e877b5586ba7781a0ea';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const Card = ({ title, description, image, rating }) => {
    return (
      <div className="card">
        <div className="card-image">
          <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />

        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-rating">
          <span>{rating}</span>
          <i className="fa fa-star"></i>
        </div>
        <div className="card-play">
          <FaPlay style={{ color: 'white' }} />
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* <div className="top-bar" style={{ backgroundColor: "blue", height: "100px" }}>
    
      </div> */}
      <div className="background-image">
        <h1 style={{ textAlign: "center", paddingTop: "50vh",color:'white',fontSize:'100px' }}>Our Special Movie</h1>
        <div className="card-container">
          {movies.map(movie => (
            <Card key={movie.id} title={movie.title} image={movie.poster_path} rating={movie.vote_average} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

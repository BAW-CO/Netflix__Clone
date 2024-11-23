import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcxMDk4ZDM4NTc5ODhiYTkzY2I0OGNhMTFiNGY1ZiIsIm5iZiI6MTczMTk2MzQwNy4zODI4OTY3LCJzdWIiOiI2NzNiYTg4ZDE1Y2NiZjM0MTRkZWQ2ODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WktWKZLxBKIVZ-mUGoeQ8vJg5By4_pSkb7z-liGIT6A'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  
    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handleWheel);
    }
  
    // Clean up the event listener
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [])
  
  
  return (
    <div className='title-cards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref = {cardsRef}>
        {apiData && apiData.map((movie) => (
          <Link to={`/player/${movie.id}`}className="card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
            <p>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )}

export default TitleCards

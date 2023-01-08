import React from 'react';

    
const movieCard = ({movie}) =>{
    return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster!== 'N/A' ? movie.Poster : 'https://vieplaceholder.com/400'} alt="imgPoser" />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h1>{movie.Title}</h1>
      </div>
    </div>
    )
    
  }

 
export default movieCard
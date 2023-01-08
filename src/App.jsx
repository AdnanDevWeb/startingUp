import { useEffect, useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
// api key 92aaa473

const API_URL = "http://www.omdbapi.com?apikey=92aaa473"
const movie1 = {
  "Title": "Naruto: Shippuden",
  "Year": "2007–2017",
  "imdbID": "tt0988824",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
}


const App = () => {
  const [movies , setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  async function searchMovies(title){
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('batman')
  },[])
  return (
    <div className='App'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
         type="text" 
         placeholder='Search for movies' 
         value={searchTerm}
         onChange={(e)=> setSearchTerm(e.target.value)}
         />
         <img
         src={SearchIcon} 
         alt="search"
         onClick={()=>searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 
        ? (

            <div className="container">
              {
                movies.map(movie => {
                  return (
                      <MovieCard movie={movie} />
                  )
                })
              }
            </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies</h2>
          </div>
        )}
      
    </div>
  )
}

export default App

import './App.css';
import { useState, useEffect } from 'react';
import getMovie from './components/js/fetchAPI'

import NavigationBar from './components/index'
import Container from './components/Container'
import MovieCard from './components/MovieCard'


function App() {

  // 要不要写成?  
  const API_KEY = `api_key=ba9d938fb74cec3f1e5f84f1774aee3b`;
  const BASE_URL = `https://api.themoviedb.org/3`;
  const SEARCH_CONTENT = `&language=en-US&page=`;
  const API_URL = BASE_URL + `/movie/popular?` + API_KEY + SEARCH_CONTENT;

  const [movies, setMovies] = useState({
    loading:true, 
    data:[]
  });
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getMovie(API_URL, page)
      .then((res) => {
        setMovies({
          loading:false, 
          data:res.results
        })
        console.log(res)
      })
      .catch(e => console.log("error: ", e));
  }, []);
  
  return (
    <div className="App">
      <NavigationBar />
      {
        !movies.loading && <Container movieList={movies.data}/>
      }
      { !movies.loading && movies.data.map(el => {
        return <MovieCard movie={el} />
      })}
      
      
    </div>
  );
}

export default App;

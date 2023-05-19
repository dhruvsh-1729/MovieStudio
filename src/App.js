import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie';
import MoviesContext from './context/MovieContext';
import Signup from './components/Signup/Signup';
import PreLoader from './components/PreLoader/PreLoader';

function App() {
  const API_KEY = "api_key=6e16a5d151e300aff30ce69dfc770cef";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2022-10-22&" + API_KEY;
  const [movies, setMovies] = useState([])
  const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

  const [home, setHome] = useState(false);

  const getMovies = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
    setTimeout(() => {
      setHome(true)
    }, 2000)
  }, [])

  return (
    <div>
      <MoviesContext.Provider value={{ movies, setMovies }}>
        {!home && <PreLoader />}
        {home &&
          <Router>

            <Navbar />

            <Routes>
            <Route exact path="/" element={<Movies />} />
              <Route exact path="/login" element={<Form />} />
              <Route exact path="/movie/:id" element={<Movie />} />
              <Route exact path="/signup" element={<Signup />} />

            </Routes>

          </Router>
        }
      </MoviesContext.Provider>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import MovieList from './MovieList';
import movieList from '../assets/api/movie'
import './style.css'

const Movies = () => {
    const [data,setData] = useState(movieList)
    const ondel = (no) => {
        setData(data.filter(movie=>movie.no !== no))
    }
    return (
        <div className="wrap">
            <MovieList data={data} ondel={ondel}/>
        </div>
    );
};

export default Movies;
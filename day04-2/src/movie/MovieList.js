import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data,ondel}) => {
    return (
        <>
            {
                data.map(movie => <MovieItem key={movie.no} movie={movie} ondel={ondel}/>)
            }
        </>
    );
};

export default MovieList;
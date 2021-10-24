import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data, onDel}) => {
    return (
        <>{/* 플레그먼트로 감싸줌 */}
        {
            data.map(item =>  <MovieItem key={item.no} item={item} onDel={onDel} />)
        }
           
        </>
    );
};

export default MovieList;
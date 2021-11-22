import React, { useState } from 'react';
import './style.css';
import dataList from '../assets/api/movie.json';
import MovieList from './MovieList';
import MovieView from './MovieView';
import Modal from './Modal';

const Movies = () => {
    const [data , setData] = useState(dataList)
    const [movie, setMovie] = useState(data[0])

    const onOver = (rank) => {
        // console.log(rank)
        setMovie(data.find(item => item.rank === rank))
    }

    const [isActive,setIsActive] = useState(false)

    const onOpen = () => {
        setIsActive(true)
    }

    return (
        <div className="gallery">
            <MovieView movie={movie} onOpen={onOpen}/>
            <MovieList data={data} onOver={onOver} setIsActive={setIsActive}/>
            {
                isActive &&
                <Modal movie={movie} setIsActive={setIsActive}/>
            }
        </div>
    );
};

export default Movies;
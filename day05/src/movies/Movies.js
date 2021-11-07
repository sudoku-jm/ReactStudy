import React, { useState } from 'react';
import './style.css'
import dataList from '../assets/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [ data , setData ] = useState(dataList)
    const [movie , setMovie] = useState(data[0])

    const onOver = (rank) => {
        // alert(rank)
        // setMovie(data[rank - 1])     //좋은 방법은 아님
        setMovie(data.find(item => item.rank === rank) )
    }


    const [isActive,setIsActive] = useState(false)

    // const onClose = () => {
    //     setIsActive(false)
    // }
    
    const onOpen = () => {
        setIsActive(true)
    }


    return (
        <div className="gallery">
            <MovieView movie={movie} onOpen={onOpen}/>
            <MovieList data={data} onOver={onOver} />
            {
                isActive &&
                <Modal movie={movie} setIsActive={setIsActive}/>
            }
        </div>
    );
};

export default Movies;
import React, { useState } from 'react';
import './style.css';
import imgList from '../assets/api/movie'
import MovieList from './MovieList';

const Movies = () => {
    const [data,setData] = useState(imgList)

    //삭제 
    // id ? 
    // MovieItem.js 버튼 클릭시 onDel(no)로 넘어온 값
    const onDel = (id) => {
        setData(
            data.filter(item => item.no !== id)
        )
    }
    return (
        <div className="wrap">
            <MovieList data={data} onDel={onDel} />
        </div>
    );
};

export default Movies;
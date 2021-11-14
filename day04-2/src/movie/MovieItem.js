import React from 'react';

const MovieItem = ({movie,ondel}) => {
    const {no,poster,title,date,actor,director} = movie
    return (
        <article>
            <div className="left">
                <img src={poster} alt={title}/>
            </div>
            <div className="right">
                <h3>{title}</h3>
                <ul>
                    <li>출연진 : {actor}</li>
                    <li>감독 : {director}</li>
                    <li>개봉일 : {date}</li>
                </ul>
                <p>
                    <button onClick={() => ondel(no)}>제거</button>
                </p>
            </div>
        </article>
    );
};

export default MovieItem;
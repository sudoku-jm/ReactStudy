import React, { useState } from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Modal = ({movie, setIsActive}) => {
    const {thumbUrl, movieNm , director } = movie
    
    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h3>{movieNm}</h3>
                <div>
                    <img src={thumbUrl} alt={movieNm}/>
                </div>
                <strong>감독 : {director}</strong>
                <p className="more">
                    <AiOutlineCloseCircle onClick={() => setIsActive(false)}/>
                </p>
            </div>
        </div>
    );
};

export default Modal;
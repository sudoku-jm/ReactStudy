import React, { useEffect } from 'react';

const Test8Sub = ( {msg , isShow, setIsShow} ) => {
    
    useEffect( () => {
        const timer = setTimeout( () => {
            setIsShow(false)
        },3000)
        return () => {
            clearTimeout(timer)
        }
    },[isShow])


    return (
        <div style={{margin:15, padding:'15px 60px',backgroundColor:'beige'}}>
            <h2> 메세지 : {msg} </h2>
        </div>
    );
};

export default Test8Sub;
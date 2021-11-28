import React, { useEffect } from 'react';

let num = 0;

const Test5Sub = () => {
    
    useEffect( () => {
        return( num++ )   
    })

    return (
        <div>
            <p>Test5Sub : {num}</p>
        </div>
    );
};


export default Test5Sub;
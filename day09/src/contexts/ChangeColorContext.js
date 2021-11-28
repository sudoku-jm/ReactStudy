import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = (props) => {
    const [color,setColor] = useState('hotpink')
    const onColor = (color) => {
        setColor(color)
    }
    return (
        <ChangeColorContext.Provider value={{color,onColor }}>
            {props.children}    
            {/* <ChangeColor/> */}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;
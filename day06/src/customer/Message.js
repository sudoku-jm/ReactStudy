import React, { useEffect } from 'react';

const Message = ({msg,isShow,setIsShow}) => {

    useEffect( () => {
        const timer = setTimeout( () => {
            setIsShow(false)
        },3000)
        return () => {
            clearTimeout(timer)
        }
    },[isShow])

    return (
        
        <div className={`message ${isShow ? 'on' : ''}`}>
            { msg }
        </div>
    );
};

export default Message;
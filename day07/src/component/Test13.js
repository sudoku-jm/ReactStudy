import React from 'react';
/* styled-jsx */

const Test13 = () => {
    return (
        <>
        <div className="container">
            <p className="title">styled jsx</p>
            <button className="button">버튼</button>
        </div>
        

        <style jsx>{`
            .container{width:400px;border:1px solid #aaa; border-radius: 20px;padding:10px;margin:10px;display:flex;justify-content: space-around;align-items: center;}
            .title{color:#999;}
            .button{background:#ddd;border:none;padding:10px 25px;border-radius: 10px;transition: .5s;}
        `}</style>

        </>
    );
};

export default Test13;
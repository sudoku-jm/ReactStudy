import React from 'react';
/** @jsxImportSource @emotion/react **/
import {jsx , css} from '@emotion/react'

const Test12 = () => {
    const containerStyle = css`
    width:400px;border:1px solid #aaa; border-radius: 20px;padding:10px;margin:10px;display:flex;justify-content: space-around;align-items: center;
    `

    const titleStyle = css({
        textAlign:'center',
        fontSize : 25,
        color:'tomato',
        padding:10
    })
    
    const buttonStyle = css`
        background:#ddd;border:none;padding:10px 25px;border-radius: 10px;transition: .5s;
        &:hover{
            background:tomato;
        }
    `

    return (
        <div>
            <h2 css={titleStyle}>emotion 스타일적용</h2>
            <div css={containerStyle}>
                <p>emotion입니다</p>
                <button css={buttonStyle}>버튼</button>
            </div>
        </div>
    );
};

export default Test12;
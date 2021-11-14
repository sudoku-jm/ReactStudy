import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border:1px solid #999; padding:20px; margin:15px;
    width : ${props => props.width};
`
const Button = styled.button`
    margin:10px; padding: 0px 34px 25px;font-size:40px;cursor:pointer; outline:none; border:none;
    &.down::after{content:'📥';}
    &.up::after{content:'📤';}
    &:hover{background:tomato;}

    &:disabled{
        filter : grayscale(100%);
        background: #999;
        cursor: not-allowed;
    }
`

const Test10 = () => {
    const [count , setCount] = useState(1)
    const [max , setMax] = useState(10)
    const [min , setMin] = useState(0)

    const increment = () => {
        //10까지 증가 버튼 비활성 disabled
        setCount( count > max ? max : count + 1)
    }
    const decrement = () => {
        //0까지 감소 버튼 비활성 disabled
        setCount( count < min ? min : count - 1)
    }

    return (
        <Container width="300px">
            <h2>숫자 : {count}</h2>
            <Button onClick={decrement} className="down" disabled={count === min}></Button>
            <Button onClick={increment} className="up" disabled={count === max}>​</Button>
        </Container>
    );
};

export default Test10;
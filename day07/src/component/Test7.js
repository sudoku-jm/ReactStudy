import React from 'react';
import styled from 'styled-components'

const Test7 = () => {
    return (
        <Container>
            <Title>styled-components</Title>
            <Button>버튼</Button>
        </Container>
    );
};

export default Test7;

const Container = styled.div`
    width:400px;border:1px solid #aaa; border-radius: 20px;padding:10px;margin:10px;display:flex;justify-content: space-around;align-items: center;
`
const Title = styled.p`
    color:#999;
`
const Button = styled.button`
    background:#ddd;border:none;padding:10px 25px;border-radius: 10px;transition: .5s;
    &:hover{
        background:tomato;
    }
`
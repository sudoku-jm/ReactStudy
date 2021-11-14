import React from 'react';
import styled,{ css } from 'styled-components'

const Container = styled.div`
    border:1px solid #000; margin:15px; 
    padding:20px;
    width : ${props => props.w};
    background: ${props => props.bg? props.bg : 'skyblue'};
`
const Box = styled.button`
    margin:10px; border:none; height:35px;
    width: ${ props => props.width ? props.width : '100px'};
    background-color:${ props => props.bg ? props.bg : '#dcdcdc'};

    /* 주어진 속성에 css만 다시 설정가능 */
    ${ props => props.good && css`
        background: green;
        width:400px;
        height:45px;
        color:#000;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            background:hotpink;
        }
    `}
`

const Test9 = () => {
    return (
        <Container w="500px" bg="yellow">
            <Box width="200px" bg="pink">test</Box>
            <Box width="150px" bg="lime">test</Box>
            <Box width="200px" bg="blue">test</Box>
            <Box width="120px">test</Box>
            <Box>test</Box>
            <Box good>test</Box>
        </Container>
    );
};

export default Test9;
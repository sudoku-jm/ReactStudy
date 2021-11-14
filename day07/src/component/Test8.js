import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border:1px solid #333;
    padding:20px;
    width:${ props => props.ww };
    height:${ props => props.height};
    background:${ props => props.bgColor};
    font-size:25px;
    color:${ props => props.color};
`

const Test8 = () => {
    return (
        <Container ww="250px" bgColor="yellow" height="80px" color="green">
            props 처리가 가능하다
        </Container>
    );
};

export default Test8;
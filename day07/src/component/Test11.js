import React from 'react';
import styled, { keyframes } from 'styled-components'
/* css animation */

const Container = styled.div`
    display:flex; min-height:100vh; justify-content: center; align-items: center; background: tomato;
`

const rotateFrames = keyframes`
    0%{ transform : translateY(0) }
    25%{ transform : translateY(-20px) rotate(20deg)}
    50%{ transform : translateY(10px) }
    75%{ transform : translateY(-15px) rotate(-20deg) }
    100%{ transform : translateY(0) }
`
const MagicHat = styled.div`
    font-size:100px;
    animation: ${rotateFrames} 3s infinite cubic-bezier(0.165, 0.84, 0.44, 1);
`

const Test11 = () => {
    return (
        <Container>
            <MagicHat>🎩</MagicHat>
        </Container>
    );
};

export default Test11;
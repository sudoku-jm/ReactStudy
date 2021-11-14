import React from 'react';
import styled from 'styled-components'
/* styled컴포넌트 설치후 import함 */

const Container = styled.div`
    width: 300px; padding:20px; border:1px solid #333; margin:20px;
`
const Box1 = styled.section`
    padding:20px;background:pink;transition:.3s; margin-bottom:15px;cursor:pointer;
    &:hover{
        background:skyblue;
    }
`
const Box2 = styled('article')`
    padding:15px; background:tomato;transition:.5s;box-sizing:border-box;margin-bottom:15px;width:100%;
    &:hover{
        width:150%; background:lime;
    }
`
const Box3 = styled('article')`
    padding: 15px;background:gray;color:white;border-radius:8px;
`
const Button = styled.button`
    padding:10px 40px;margin:10px; border:none; background: #333; color:white;
    &:hover{
        background: pink; color:#000;
    }
`

const Test6 = () => {
    return (
        <Container>
            <Box1>안녕하세요</Box1>
            <Box2>안녕하세요</Box2>
            <Box3>안녕하세요</Box3>
            <Button>확인확인</Button>
        </Container>
    );
};

export default Test6;


/* 

    https://styled-components.com/

    https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components


    styled component ? (js안에서 css 쓰기)
    sass기본
    import styled from 'styled-components'
    스타일 - 컴포넌트이름
    const 컴포넌트명 = styled.태그`...`
    const 컴포넌트명 = styled('태그')`...`

    
*/
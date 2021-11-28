import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import './reset.css'
import axios from 'axios';

const Container = styled.div`
    width:1400px;margin:10px auto; display:flex; flex-wrap:wrap;justify-content: center;
`
const Article = styled.article`
    padding:10px; width:300px; margin:10px;margin-bottom:15px; border:1px solid #e5e5e5;
    a{
        h2{font-size: 20px;margin-bottom:10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
        img{ width:300px;height:200px;}
        p{font-size:15px;line-height:1.7;}
        span{display:block;text-align:right;font-size:12px;color:#888;}
    }
`

const Test2 = () => {
    const [data,setData] = useState([])
    
    useEffect ( () => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-21&sortBy=publishedAt&apiKey=ab4fcd0499b24f01a20c052933c40261'
        axios.get(url)
            .then( res => setData(res.data.articles))
    },[])

    return (
        <Container>
            {
                data.map( (item,index) => <Article key={item.index}>
                    <a href={item.url} target="_blank">
                        <h2>{item.title}</h2>
                        <img src={item.urlToImage} alt={item.title}/>
                        <p>{item.content}</p>
                        <span>{item.publishedAt}</span>
                    </a>
                </Article>)
            }
        </Container>
    );
};

export default Test2;
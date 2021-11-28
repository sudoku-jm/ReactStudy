import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global';
import axios from 'axios'
import GalleryList from './GalleryList';
import GallerySearch from './GallerySearch';

//pixabayStyle 컴포넌트 별도 관리
import { Container } from '../styled/pixabayStyle';

const Gallery = () => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const [text,setText] = useState('dog')

    useEffect ( () => {
        const API_KEY = '2923385-ca284ed3f66133a8962e87e57'
        const url =`https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`

        axios.get(url)
             .then(res => {
                 setData(res.data.hits)
                 setIsLoading(false)
                 setError('')
                })
              .catch( error => {
                  setData([])
                  setIsLoading(true)
                  setError('에러발생')
              })
    },[text])

    //검색
    const onSearch = (text) => {
        setText(text)
    }

    return (
        <>
        {/* reset 스타일 적용 */}
        <GlobalStyle/>  
        <Container>
            <GallerySearch onSearch={onSearch}/>
            {
                //로딩중이면?
                isLoading && data.length === 0 && (<h1>No IMAGES FOUND T^T...</h1>)
            }
            {
                //데이터 있으면?
                data && !isLoading && <GalleryList data={data}/>
            }
            {
                //에러면?
                error ? error : null
            }

            
        </Container>
        </>
    );
};

export default Gallery;
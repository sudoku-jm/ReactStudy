
import React, { useState } from 'react';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';
import './style.css';
import imgList from '../api/dataImg';

const Gallery = () => {
    const [data,setData] = useState(imgList)
    const [cat,setCat] = useState(data[0])
    
    //cat에 대한 데이터 변경이 이루어진다.
    const onView = (id) => {
        setCat(
            data.find(item => item.id === id)
        )
    }

    return (
        <div className="wrap">

            {/* 
                cat={cat}은
                cat 에 대한 변경된 데이터가 각 컴포넌트로 전달
            */}
            <GalleryView data={data} cat={cat} onView={onView} />
            <GalleryText cat={cat}/>
        </div>
    );
};

export default Gallery;
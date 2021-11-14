import React, { useState } from 'react';
import './style.css';
import galleryList from '../assets/api/galleryList';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';

const Gallery = () => {
    const [data,setData] = useState(galleryList)
    const [gall,setGall] = useState(data[0])

    const onView = (id) => {
        setGall(data.find( item => item.id === id))
    }

    return (
        <div className="wrap">
            <GalleryView gall={gall} data={data} onView={onView}/>
            <GalleryText gall={gall}/>
        </div>
    );
};

export default Gallery;
import React from 'react';
import Masonry from 'react-masonry-css'
import GalleryItem from './GalleryItem';

import {GalleryContainer} from '../styled/pixabayStyle'

const GalleryList = ( { data } ) => {
    return (
        <GalleryContainer>
            <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {/* array of JSX items */}
            {
                data.map(item => <GalleryItem key={item.id} item={item}/>)
            }
            </Masonry>
        </GalleryContainer>
    );
};

export default GalleryList;


/* 
     메이슨리
     https://www.npmjs.com/package/react-masonry-css

      import , css , <Masonry></Masonry> 가져온다.
*/
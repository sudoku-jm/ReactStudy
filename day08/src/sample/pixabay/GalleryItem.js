import React from 'react';
import {GalleryBox} from '../styled/pixabayStyle'

const GalleryItem = ( { item } ) => {
    const {views,downloads,likes,webformatURL,tags,user} = item
    const taglist = tags.split(',')


    return (
        <GalleryBox>
            <img src={webformatURL} alt={user} />
            <h3>{user}</h3>
            <ul>
                <li><span>조회수</span>{views}</li>
                <li><span>다운로드</span>{downloads}</li>
                <li><span>좋아요</span>{likes}</li>
            </ul>
            <p>
                {
                    taglist.map(tag => <span>#{tag}</span>)
                }
            </p>
        </GalleryBox>
    );
};

export default GalleryItem;
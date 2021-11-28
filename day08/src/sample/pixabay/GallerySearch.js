import React, { useRef, useState } from 'react';
import {GalleyForm} from '../styled/pixabayStyle'

const GallerySearch = ( {onSearch} ) => {
    const textRef = useRef('')
    const [txt,setTxt] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if( !txt ) return

        //검색
        onSearch(txt)
        
        setTxt('')
        textRef.current.focus()
    }

    return (
        <GalleyForm onSubmit={onSubmit}>
            <input type="text" value={txt} onChange={e => setTxt(e.target.value)} ref={textRef} />
            <button type="submit">검색</button>
        </GalleyForm>
    );
};

export default GallerySearch;
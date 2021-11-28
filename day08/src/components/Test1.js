import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {
    const [data,setData] = useState([])
    const [txt,setTxt] = useState('')

    //외부에서 데이터 가져오기(한번만[])
    useEffect( () => {
        const url = `https://hn.algolia.com/api/v1/search?query=${txt}`
        axios.get(url)
             .then( res => setData(res.data.hits))
    },[txt])

    return (
        <div>
            <input type="text" value={txt} onChange={e=>setTxt(e.target.value)} />
            <ul>
                {
                    data.map( item => <li key={item.objectID}>
                        {item.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;
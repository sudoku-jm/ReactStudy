import React, { useEffect, useMemo, useState } from 'react';


const user = [
    {id : 1, name:'홍길동1'},
    {id : 2, name:'이승기'},
    {id : 3, name:'차학연'},
    {id : 4, name:'전지현'},
    {id : 5, name:'dog'},
    {id : 6, name:'DOGGGG'},
    {id : 7, name:'cat'},
    {id : 8, name:'Cat'},
    {id : 9, name:'GOOGLE'},
    {id : 10, name:'Naver'},
]

const Test6 = () => {
    const [text,setText] = useState('')
    const [data,setData] = useState( user )

    /* useEffect : 검색 누르고 서치하기 */
    const [search, setSearch] = useState('')
    const onSearch = () => {
        setSearch(text)
    }
   /*  useEffect( () => {
        //특정문자열 찾기 , 없으면 -1
        // setData( user.filter( item => item.name.toLowerCase().indexOf( text.toLowerCase() ) !== -1 ))
        setData( user.filter( item => item.name.toLowerCase().includes( text.toLowerCase() )))
    },[search])
 */
    /* useEffect : 화면에 뿌리고 난 뒤 업데이트 */
    //값이 바뀔 때 마다. 업데이트를 하는 것.
    // useEffect( () => {
    //     //특정문자열 찾기 , 없으면 -1
    //     // setData( user.filter( item => item.name.toLowerCase().indexOf( text.toLowerCase() ) !== -1 ))
    //     setData( user.filter( item => item.name.toLowerCase().includes( text.toLowerCase() )))
    // },[text])


    return (
        <div>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test6;
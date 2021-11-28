import React, { useCallback, useMemo, useState } from 'react';

const Test9 = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const onAdd = useCallback( () => {
        setData([...data, text])
        setText('')
    },[data, text]) // 데이터 추가될 때, text 바뀔 때 안쓰면 한 번만 실행 됨

    const textSize = useMemo( () => {
        return text.length
    },[text])   //text가 바뀔때마다 업데이트

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={onAdd}>추가</button>

            <h3>{text}</h3>
            <h3>{text.length}</h3>
            <hr/>

            <h3>수업용 : {textSize}</h3>
            <hr/>

            <ul>
                {
                    data.map( (item,index)=> <li key={index}>{index} / {item}
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Test9;
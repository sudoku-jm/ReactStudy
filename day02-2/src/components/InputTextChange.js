import React , {useState} from 'react';

const InputTextChange = () => {
    const [userid , setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    //해당하는 태그의 내용 뽑기.
    //e.target
    const handleChageId = (e) => {
        setUserid( e.target.value )
    }
    
    const handleChangePw = (e) => {
        setUserpw( e.target.value )
    }

    const handleReset = () => {
        setUserid('')
        setUserpw('')
    }

    return (
        <div>
            <input type="text" onChange={handleChageId} placeholder="id" value={userid}/>
            <input type="text" onChange={handleChangePw} placeholder="pw" value={userpw}/>
            <button onClick={handleReset}>초기화</button>
            <h3>
                id : {userid} / pw : {userpw}
            </h3>
        </div>
    );
};

export default InputTextChange;
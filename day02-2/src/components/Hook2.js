import React, {useState} from 'react';

const Hook2 = () => {
    /* 
        const [상태변수, 상태변수변경을 도와주는 함수] = useState(초기값);
        const [변수, 함수] = useState(초기값);  
    */
    const [name, setName] = useState('차학연')
    const [color, setColor] = useState('green')

    const onName1 = () => {
        setName('정택운')
    }
    const onName2 = () => {
        setName('이재환')
    }
    const onName3 = () => {
        setName('김원식')
    }



    return (
        <>
            <h2 style={{color:color}}>useState</h2>
            <h3>이름:{name} / 컬러 :{color}</h3>

            <p>
                <button onClick={onName1}>정택운</button>
                <button onClick={onName2}>이재환</button>
                <button onClick={onName3}>김원식</button>
            </p>

            <p>
                <button onClick={() => setColor('pink') }>pink</button>
                <button onClick={() => setColor('blue')}>blue</button>
                <button onClick={() => setColor('orange')}>orange</button>
            </p>
        </>
    );
};

export default Hook2;
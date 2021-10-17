import React, { useState } from 'react';

const Name = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <h3>Name 컴포넌트</h3>
            <p>
                <label>이름 : </label>
                <input type="text" value={name} onChange={ e => setName(e.target.value) } />
                <span style={{marginLeft:15}}>{name}</span>
            </p>
        </div>
    );
};

const Animail = ( { ani , changeInput } ) => {

    return (
        <div>
            <h3>Animail 컴포넌트</h3>
            <label>좋아하는 동물 : </label>
            <input type="text" value={ani} onChange={changeInput} />
            <span style={{marginLeft:15}}>{ani}</span>
        </div>
    );
};

const Display = ( { ani }) => {
    return (
        <div>
            <h3>Display 컴포넌트</h3>
            <h1>내가 좋아하는 동물은 { ani }입니다.</h1>
        </div>
    );
};

const Test7 = () => {
    
    /* 부모컴포넌트 -> 자식컴포넌트 전달 */
    const [ani,setAni] = useState('동물')

    const changeInput = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            {/* <h3>Main 컴포넌트</h3> */}

            <Name />
            <hr />
            {/* 자식컴포넌트로 전달 */}
            <Animail ani={ani} changeInput={changeInput} />
            <hr/>
            <Display ani={ani}/>

        </div>
    );
};

export default Test7;
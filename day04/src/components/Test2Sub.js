import React, { useRef, useState } from 'react';

const Test2Sub = () => {
    const no = useRef(1)    //1번부터 번호,  고유번호
    const idRef = useRef(null)  //처음으로 포커스
    const [data, setData] = useState([])    // 데이터, 담으려는 그릇
    const [form, setForm ] = useState({     // 객체 로 만듦. 초기화. changeInput할 때 사용.
        userid : '',
        userpw : ''
    })

    //비구조 할당
    const {userid, userpw} = form

    //change
    const changeInput = (e) => {
        const {value,name} = e.target
        setForm({
            ...form,
            [name] : value
        })
     
    }

    //추가
    const onAdd = (e) => {
        e.preventDefault()  //form태그 submit 막아줌

        setData([   //배열
            ...data,    // 값 복사해옴
            {
                id : no.current++, //Ref는 current따라옴
                //키와 값이 동일하면 둘 다 안써도 된다.
                userid,     
                userpw
                // userid:userid,
                // userpw:userpw
            }
        ])

        setForm({
            userid : '',
            userpw : ''
        })

        idRef.current.focus()
    }

    return (
        <div>
            {/* enter 로 추가 */}
            <form onSubmit={onAdd}>
                <input type="text" value={userid} name="userid" onChange={changeInput} ref={idRef}/>
                <input type="text" value={userpw} name="userpw" onChange={changeInput} />
                <button onClick={onAdd}>추가</button>
            </form>
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.userid} / {item.userpw} </li>)
                }
            </ul>
        </div>
    );
};

export default Test2Sub;
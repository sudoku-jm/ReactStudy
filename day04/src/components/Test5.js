import React, { useRef, useState } from 'react';


const Item = ({item ,onDel}) => {
    const {id, text} = item
    return (
        <p>
            번호 : {id} / 내용 : {text}
            <button style={{marginLeft:10}} onClick={() => onDel(id)}>삭제</button>
        </p>
    );
};

const List = ({data,onDel}) => {
    return (
        <div style={{marginTop:30}}>
            {
                data.map(item =>  <Item key={item.id} item={item} onDel={onDel}/>)
            }
        </div>
    );
};

const Form = ({onAdd}) => {
    const [text, setText] = useState('')
    const textRef = useRef(null)

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onInsert = (text) => {
        //공백이 들어가는 것 막아줌
        if(!text) return
        
        //추가
        onAdd(text)
        //비우기
        setText('') 
        //포커스
        textRef.current.focus()
    }


    return (
        <div>
            <input type="text" value={text} onChange={changeInput} ref={textRef}/>
            <button onClick={() => onInsert(text)}>추가</button>
        </div>
    );
};


const Test5 = () => {
    
    const [data,setData] = useState([
        {id : 1, text:'저녁먹기'},
        {id : 2, text:'운동하기'},
        {id : 3, text:'복습하기'},
        {id : 4, text:'청소하기'},
        {id : 5, text:'데이트'},
    ])

    const no = useRef(6)    // 6번부터 추가될 것이므로.


    //삭제 onDel
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }


    //추가 onAdd
    const onAdd = (text) => {
        //방법1
        // 스프레드 연산자로 넣기
        // setData([    //배열객체
        //     ...data,
        //     {id : no.current++, text}
        // ])


        //방법2
        //concat으로 넣기
        setData(data.concat({id:no.current++, text}))

    }

   
    return (
        <div>
            <h1>할일 관리하기</h1>
            <Form onAdd={onAdd}/>
            <List data={data} onDel={onDel}/>
        </div>
    );
};

export default Test5;


/* 
concat 사용법
예)
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
*/
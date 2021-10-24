import React, { useRef, useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    //데이터 추가하기위해 
    //그 다음 번호 6번부터 나오게 !
    const no = useRef(6)    
    const [data, setData] = useState([
        {id : 1, name: '홍길동'},
        {id : 2, name: '강호동'},
        {id : 3, name: '유재석'},
        {id : 4, name: '이승철'},
        {id : 5, name: '김철수'},
    ])

    const onAdd1 = () => {  //버튼 김준환과 연결
        setData([
            ...data,
            {id:no.current++, name : '김준환'}
        ])
    }
    const onAdd2 = () => {  //버튼 전지현 연결
        setData([
            ...data,
            {id:no.current++, name : '전지현'}
        ])
    }
    const onAdd3 = () => {  //버튼 채송화 연결
        setData([
            ...data,
            {id : no.current++, name:'채송화'}
        ])
    }


    //추가
    const onAdd = ( text ) => {// 매개변수 ,자식props에서 타고 옴
        setData([
            ...data,
            {id : no.current++, name:text}
        ])
    }

    //삭제
    const onDel = (id) => { //id == 매개변수 , 자식props에서 타고 옴
        setData(
            data.filter(item => item.id !== id)
        )
    }

    /* 
    (예)
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

    */

    //수정1
    //홍길동 (id : 1) -> 전지현으로 변경
    const onMod1 = (id) => {//매개변수, 자식 props에서 타고 옴
        setData(
            data.map(item  => {
                if(item.id === id){
                    //1~5부터 돌면서 같으면 수정
                    return {
                        ...item,        // 값 들고와서
                        name:'전지현'   // 수정
                    }
                }else{
                    return item //같지않으면 그냥 넘김
                }
            })
        )
    }

    //수정2
    //강호동(id : 2) -> 조정석으로 변경
    const onMod2 = (id) => {
        setData(
            //삼항연산자
            //같으면 수정, 그렇지 않으면 그냥 넘김
            data.map( item => item.id === id? {
                 ...item,
                 name:'조정석'
            } : item)
        )
    }

    return (
        <div>
            {
                data.map(item => <p key={item.id}>{item.id} / {item.name}</p>)
            }
            <hr/>
            <h2>데이터 추가/삭제/수정</h2>
            <Test3Sub onAdd1 = {onAdd1} onAdd2 = {onAdd2} onAdd3 = {onAdd3} onAdd={onAdd} onDel={onDel} onMod1={onMod1} onMod2={onMod2} />
        </div>
    );
};

export default Test3;
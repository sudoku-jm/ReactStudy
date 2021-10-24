import React, { useState } from 'react';
import './style.css'

/* 이미지 객체화 */
const imgList = [
    {id : 1, title : '고양이1', image:'./images/cat0.jpg' ,desc:'고양이1에 대한 이미지의 설명입니다.'},
    {id : 2, title : '고양이2', image:'./images/cat1.jpg' ,desc:'고양이2에 대한 이미지의 설명입니다.'},
    {id : 3, title : '고양이3', image:'./images/cat2.jpg' ,desc:'고양이3에 대한 이미지의 설명입니다.'},
    {id : 4, title : '고양이4', image:'./images/cat3.jpg' ,desc:'고양이4에 대한 이미지의 설명입니다.'},
    {id : 5, title : '고양이5', image:'./images/cat4.jpg' ,desc:'고양이5에 대한 이미지의 설명입니다.'},
    {id : 6, title : '고양이6', image:'./images/cat5.jpg' ,desc:'고양이6에 대한 이미지의 설명입니다.'},
    {id : 7, title : '고양이7', image:'./images/cat6.jpg' ,desc:'고양이7에 대한 이미지의 설명입니다.'}
]

const GalleryTest = () => {

    const [data,setData] = useState(imgList)
    const [cat, setCat] = useState( data[0] )

    const onView = (id) => {
        //방법1
        // setCat(data[id-1])

        //방법2 : find , findIndex
        //값 1개만 찾아서 반환
        setCat(
            // data에서 해당 id를 모두 돌려 매개변수로 받은것 (=클릭한 id와 같은 것) 찾기
            data.find(item => item.id === id)
          
        )

        /* 
            (예)
            find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 
            그런 요소가 없다면 undefined를 반환합니다.
            const array1 = [5, 12, 8, 130, 44];
            const found = array1.find(element => element > 10);

            console.log(found);
            // expected output: 12
         */
    }

    return (
        <div className="wrap">
            <div className="bigview">
                <div className="bigimg">
                    <img src={cat.image} alt={cat.title}/>
                    <h2>{cat.title}</h2>
                </div>
                <ul>
                    {
                        data.map(item => <li key={item.id} onClick={() => onView(item.id)}>
                            <img src={item.image} alt={item.title}/>
                            </li>)
                    }
                </ul>
            </div>
            <div className="text">
                <strong>{cat.title}</strong>
                <p>{cat.desc}</p>
            </div>
        </div>
    );
};

export default GalleryTest;
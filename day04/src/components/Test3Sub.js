import React from 'react';

const Test3Sub = ( {onAdd1, onAdd2, onAdd3, onAdd, onDel , onMod1 , onMod2} ) => {
    return (
        /* 
            데이터 추가/삭제/수정
            자식컴포넌트 -> 부모컴포넌트로 전달 
        */
        <div>
            <h3> 데이터 추가 </h3>    
            <p>
                <button onClick={onAdd1}>김준환</button>
                <button onClick={onAdd2}>전지현</button>
                <button onClick={onAdd3}>채송화</button>
            </p>
            <p>
                {/* 
                    () => 과 같이 함수로 반드시 묶어서 해줘야함 
                    그렇지 않으면 바로 실행되며 오류뜸.
                */}
                <button onClick={() => onAdd('차학연')}>차학연</button>
                <button onClick={() => onAdd('정택운')}>정택운</button>
                <button onClick={() => onAdd('이재환')}>이재환</button>
            </p>
            <h3> 데이터 삭제 </h3>   
            <p>
                {/* 
                    각자 들고있는 고유번호(id)로 지우기
                */}
                <button onClick={() => onDel(1)}>홍길동</button>
                <button onClick={() => onDel(3)}>유재석</button>
                <button onClick={() => onDel(4)}>이승철</button>
            </p> 
            <h3> 데이터 수정 </h3>    
            <p>
                <button onClick={() => onMod1(1)}>수정</button>
                <button onClick={() => onMod2(2)}>수정</button>
            </p>
        </div>
    );
};

export default Test3Sub;
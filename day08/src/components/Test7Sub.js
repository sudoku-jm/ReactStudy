import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log('getColor')
    switch( color ){
        case 'tomato' : return '토마토';
        case 'pink' : return '핑크';
        case 'orange' : return '오렌지';
        case 'yellow' : return '노랑';
        default : return '색 없음'
    }
}
const getDrama = (drama) => {
    console.log('getDrama')
    switch( drama ){
        case '지금 헤어지는 중입니다.' : return '지금 헤어지는 중입니다. 설명입니다';
        case '슬기로운 의사생활' : return '슬기로운 의사생활 설명입니다';
        case '지리산' : return '지리산 설명입니다';
        case '오징어게임' : return '오징어게임 설명입니다';
        default : return '드라마 없음'
    }
}

const Test7Sub = ({color,drama}) => {
    // const colorInfo = getColor( color )
    // const dramaInfo = getDrama( drama )

    const colorInfo = useMemo( () => getColor( color ) , [color] )
    const dramaInfo = useMemo ( () => getDrama( drama ) , [drama])

    return (
        <div>
            <h4> 좋아하는 색 : {color}</h4>
            <p>색 설명 :  {colorInfo}</p>
            <h4> 좋아하는 드라마 : {drama}</h4>
            <p>드라마 설명 :  {dramaInfo}</p>

        </div>
    );
};

export default Test7Sub;


/* 

처음 호출 getColor , getDrama
글씨 쓸 때마다 getColor,getDrama 동시에 계속 바뀌는 문제.
메모리적인 부분 처리 필요하다. => useMemo 사용 . return값만 기억시킴.

*/
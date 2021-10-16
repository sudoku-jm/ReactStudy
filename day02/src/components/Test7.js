import React from 'react';

const Test7 = () => {

    const handleClick1 = () => {
        alert('확인')
    }
    const handleClick2 = () => {
        alert('확인2')
    }
    const handleClick3 = () => {
        alert('확인3')
    }
    const handleClick4 = (num) => {
        alert(num)
    }
    const handleClick5 = (num1, num2) => {
        alert(num1, num2)
    }

    return (
        <div>
                <h2>이벤트 처리 방법</h2>
                {/* 
                    <태그 이벤트 = {함수명} /> 
                    on_+ 첫글자 대문자
                    onClick
                */}
                <p>
                    <button onClick={ handleClick1 }>클릭</button>
                    <button onClick={ handleClick2 }>클릭</button>
                    <button onClick={ handleClick3 }>클릭</button>
                </p>
                <p>
                    {/* 내용이 많지 않으면 바로 함수 사용 */}
                    <button onClick={ () => { alert('test') } }>클릭</button>
                    <button onClick={ () => { alert('test1') } }>클릭</button>
                    <button onClick={ () => { alert('test2') } }>클릭</button>
                </p>
                <p>
                    {/* 
                    
                    <button onClick={ handleClick4(100) }>클릭</button>
                    함수 명 다음에(값)이 들어가면 실행되자마자 실행. 클릭 시 실행안함 = 오류

                    <button onClick={ () => handleClick4(100) }>클릭</button>
                    값 실행되려면 () =>
                    넣어준다.
                */}
                    <button onClick={ () => handleClick4(100) }>클릭</button>
                    <button onClick={ () => handleClick5(50,100) }>클릭</button>
                </p>
        </div>
    );
};

export default Test7;
import React from 'react';

const Test3 = () => {
    //함수영역 - 모든제어문 if,for,switch~case 등등
    const isLogin = true
    const done1 = false
    const done2 = undefined

    const btnLogin = (isLog) => {
        if(isLog === true){
            return (<button>함수 LOGIN</button>)
        }else{
            return (<button>함수 LOGOUT</button>)
        }
    }

    return (
        <>
            <h2>JSX 조건문 : 삼항, &&, || </h2>

            {
            btnLogin(true)
            // btnLogin(false)
            }

            <hr />
            <p>
                {
                    isLogin === true?
                    <button>로그인</button>:
                    <button>로그아웃</button>
                }
            </p>

            <p>
                {
                    isLogin ? '참값' : '거짓값'
                }
            </p>

            <p>
                {
                    isLogin && '로그인 입니다.'
                }
            </p>

            <p>
                {done1 || 'done1은 거짓입니다.'}
            </p>

            <p>
                {done1 === false && '거짓입니다.222'}
            </p>
            
            {
                done2 || <h2>조회된 게시글이 없습니다.</h2>
            }

            {
                /*
                조건문 : 삼항연산자. , && ,|| 
                같다 ===,
                다르다 !==

                {조건 ? 참 : 거짓}
                {조건 && 참}
                {조건 || 거짓}

                undefined,null,0,false,'',(빈문자열) 중에 하나를 return 할 경우 정상적인 화면 렌더링이 이루어지지 않음
                특히 undefined 변수를 바로 리턴하는 경우 에러발생
                */
                
            }
        </>
    );
};

export default Test3;
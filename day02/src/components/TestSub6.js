import React from 'react';
import PropTypes from 'prop-types';

const TestSub6 = ({name, age, addr, tel, color, done}) => {
    return (
        <div style={{border:`3px solid ${color}`, margin:20, padding:20}}> 
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>컬러 : {color}</li>
                <li>동의여부 : {done? 'O' : 'X'}</li>
            </ul>
        </div>
    );
};


TestSub6.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired,
  addr : PropTypes.string,
  tel : PropTypes.string,
  color : PropTypes.string,
  done : PropTypes.bool
};

// props의 초깃값을 정의합니다.
TestSub6.defaultProps = {
    name: 'Stranger',
    age : 20,
    addr : '서울',
    tel : '010-0000-1111',
    color : 'blue',
    done : false
  };


export default TestSub6;

/* 
PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다. 

컴포넌트는  props의 필수여부를 지정하거나 props의 dataType을 지정할 때 => typescript 규칙에 맞지 않는 props에 대해서 브라우저 개발자 콘솔에 경고 메세지 출력

형식)
import PropTypes from 'prop-types';
컴포넌트명.propTypes = {
  props명: PropTypes.타입.isRequired(필수)
  props명: PropTypes.타입
};

*/
import React from 'react';
import PropTypes from 'prop-types';

const PropTypeTestSub = ({name, age, addr, color, done}) => {
    return (
        <div>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>컬러 : {color}</li>
                <li>동의여부 : {done ? <span style={{color:`${color}`}}>'Y'</span> : <span style={{color:'red'}}>'N'</span>}</li>
            </ul> 
        </div>
    );
};



/* 데이터 유효성 검사 */
//isRequired : 필수값
PropTypeTestSub.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    addr : PropTypes.string,
    color : PropTypes.string,
    done : PropTypes.bool.isRequired
}


//기본값
PropTypeTestSub.defaultProps = {
    name : 'Stranger',
    age : 20,
    addr : '대한민국',
    color :'white',
    done : false
}



export default PropTypeTestSub;
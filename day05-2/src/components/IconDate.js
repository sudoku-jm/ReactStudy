import React from 'react';
/* 천단위 */
import Numeral from "numeral"
/* 아이콘 */
import { FcAlarmClock } from "react-icons/fc"
import { IoArrowBackOutline } from "react-icons/io5"
/* 날짜 */
import moment from "moment"
import 'moment/locale/ko'

const IconDate = () => {
    return (
        <div>
            <strong>천단위</strong>
            <ul>
                <li>{Numeral(123456789).format(0,0)}</li>
                <li>{Numeral(98765000).format(0,0)}</li>
            </ul>
            <strong>아이콘</strong>
            <ul>
                <li><FcAlarmClock style={{fontSize:40}}/></li>
                <li><IoArrowBackOutline style={{fontSize:40}}/></li>
            </ul>
            <strong>날짜</strong>
            <ul>
                <li>{moment().format('YYYY.MM.DD HH:mm:ss a')}</li>
                <li>{moment('20211118').format('dddd')}</li>
                <li>{moment('20211118').format('LL')}</li>
                <li>{moment('20211118').format('llll')}</li>
            </ul>
        </div>
    );
};

export default IconDate;
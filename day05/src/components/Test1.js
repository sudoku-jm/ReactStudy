import React from 'react';
/* 천단위 */
import Numeral from "numeral";

/* 아이콘 */
import { Fa500Px , FaAirbnb, FaAndroid} from "react-icons/fa";

/* 날짜 */
import moment from "moment"


const Test1 = () => {
    return (
        <div>
            {/* 천단위 */}
            <h2>{Numeral(12345678).format(0,0)}</h2>
            <h2>{Numeral(6500000).format(0,0)}</h2>
            {/* 아이콘 */}
            <h2><Fa500Px color="red"/></h2>
            <h2><FaAirbnb style={{fontSize:50,color:'pink'}} /></h2>
            <h2><FaAndroid style={{fontSize:50,color:'lightgreen'}} /></h2>
            {/* 날짜 */}
            <h2>{moment('20211031').format('YYYY.MM.DD')}</h2>
            <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
            <h2>{moment('20211031').format('dddd')}</h2>
        </div>
    );
};

export default Test1;
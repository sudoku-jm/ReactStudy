import React from 'react';
/* 천단위 */
import Numeral from "numeral";
/* 아이콘 */
import {AiFillCaretDown, AiFillCaretUp, AiOutlineEllipsis} from "react-icons/ai";

const MovieItem = ({item,onOver}) => {
    const {rank, movieNm, salesAmt, audiCnt, rankInten} = item
    return (
        <>
        {/* 
         <th>순위</th>
        <th>영화명</th>
        <th>매출액</th>
        <th>관객수</th>
        <th>증감률</th>
        */}
            <tr onMouseOver={() => onOver(rank)}>
                <td>{rank}</td>
                <td>{movieNm}</td>
                <td>{Numeral(salesAmt).format(0,0)}</td>
                <td>{Numeral(audiCnt).format(0,0)}</td>
                <td>
                   {rankInten > 0 && <AiFillCaretUp color="red"/>}
                   {rankInten < 0 && <AiFillCaretDown color="blue"/>}
                   {rankInten === 0 && <AiOutlineEllipsis color="grey"/>}
                   <span style={{marginLeft : 10}}>{rankInten}</span>
                </td>
            </tr>
        </>
    );
};

export default MovieItem;
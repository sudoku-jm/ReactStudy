import React from 'react';
/* 천단위 */
import Numeral from "numeral";
/* 아이콘 */
import {AiFillCaretDown, AiFillCaretUp, AiOutlineEllipsis} from "react-icons/ai";


const MovieItem = ( {item , onOver, setIsActive} ) => {
    const {rank, movieNm, salesAmt , audiCnt , rankInten} = item
    return (
        <>
            <tr onMouseOver={() => onOver(rank)} onClick={() => setIsActive(true)}>
                <td>{rank}</td>
                <td>{movieNm}</td>
                <td>{Numeral(salesAmt).format(0,0)}원</td>
                <td>{Numeral(audiCnt).format(0,0)}명</td>
                <td>
                    {rankInten > 0 && <AiFillCaretUp color="red"/>}
                    {rankInten < 0 && <AiFillCaretDown color="blue"/>}
                    {rankInten === 0 && <AiOutlineEllipsis color="grey"/>}
                    <span style={{marginLeft:10}}>{rankInten}</span>
                </td>
            </tr>
        </>
    );
};

export default MovieItem;
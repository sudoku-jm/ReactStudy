import React from 'react';
import BusniessList from './BusniessList';
import './style.css';
/* data list를 따로 뺌 */
import dataList from '../assets/api/data';

const Business = () => {
    
    return (
        <section className="business">
            <div className="inner">
                <h2>BUSINESS</h2>
                <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
                <BusniessList dataList={dataList}/>              

                <p className="more"><a href="#">View More</a></p>
            </div>
        </section>
    );
};

export default Business;
import React from 'react';
import BusinessList from './BusinessList';
import './style.css'
import dataList from '../assets/api/data'

const Business = () => {
    return (
        <section className="business">
            <div className="inner">
                <h2>BUSINESS</h2>
                <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
                <BusinessList dataList={dataList} />    {/* props전달 dataList 값 */}
                <p className="more"><a href="#">View More</a></p>
            </div>
        </section>
    );
};

export default Business;
import React, { useState } from 'react';
import dataList from '../assets/api/coffee'
import CoffeeList from './CoffeeList';
import Menu from './Menu';
import './style.css'

//방법1
//자체 메뉴 리스트 배열로 생성 
// const menuList = ['all','coldbrew','espresso','frappuccino','fizzio']


//방법2
//기존 dataList.name에서 불러와 활용 : new Set()
//Set은 중복이 허용되지 않는 객체이다. 안에 이미 같은 값이 존재한다면 추가되지 않는다. 
const menuList = ['all',...new Set(dataList.map(item => item.name))]

const Starbucks = () => {

    const [data, setData] = useState(dataList)

    const onTab = (name) => {
        if(name === 'all'){
            //all 이면 다 보여주기
            setData(dataList)   
        }else{
            setData(
                //data.filter가 아니라 dataList.filter를 해야 두번째 tab클릭 시 데이터 전체를 다시 불러와서 필터가능.
                dataList.filter(item => item.name === name)
            )
        }
    }

    return (
        <div className="wrap">
            <h1>Starbucks Coffee Menu</h1>
            <Menu menuList={menuList} onTab={onTab}/>
            <CoffeeList data={data}/>
        </div>
    );
};

export default Starbucks;
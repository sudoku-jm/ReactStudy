import React, { useState } from 'react';
import dataList from '../assets/api/coffee'
import Menu from './Menu';
import CoffeeList from './CoffeeList';
import './style.css'

//방법1
// const menuList = ['all','coldbrew','espresso','frappuccino','fizzio']

//방법2
// const arr = dataList.map(item => item.name)
//dataList map으로 돌려 중복되는 값 제외하고 name 찾아서 넣어줌.
// const menuList = ['all',...new Set(arr)]
/* 
예)
const arr = [7, 3, 1, 3, 3, 7];
const arr2 = [...new Set(arr)] // [ 7, 3, 1 ]
*/

//방법3
const menuList = ['all',...new Set(dataList.map(item => item.name))]


const Starbucks = () => {
    const [data,setData] = useState(dataList)

    const onView = (name) => {
        // console.log(name)
        if( name === 'all'){
            setData(dataList)
        }else{  
            //filter이용
            setData(
            //data를 filter를 하는게 아니라 매번 클릭할 때 마다 dataList를 filter한다
            dataList.filter(item => item.name === name)

            )
        }
    }

    return (
        <div className="wrap">
            <h1>STARBUCKS MENU</h1>
            <Menu menuList={menuList} onView={onView} />
            <CoffeeList data={data}/>
        </div>
    );
};

export default Starbucks;
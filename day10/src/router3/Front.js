import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({data}) => {
    // :id 값 받기 -> const {이름} = useParams()

    const {id} = useParams()        //Link에 적힌 id들을 가지고 옴

    console.log();

    return (
        <div>
            <h1>Front page</h1>
            {
                data.filter( item => item.title == id )
                    .map( (item,index) => <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.info}</p>
                    </div>)
            }
        </div>
    );
};

export default Front;
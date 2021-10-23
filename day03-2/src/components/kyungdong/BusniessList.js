import React from 'react';
import BusniessItem from './BusniessItem';

const BusniessList = ({dataList}) => {
    return (
        <ul className="list">
          {
              dataList.map( (item, index) => <BusniessItem key={item.id} item={item} /> )

          }
        </ul>
    );
};

export default BusniessList;
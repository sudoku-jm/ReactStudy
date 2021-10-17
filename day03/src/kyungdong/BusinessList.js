import React from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = ({ dataList }) => {
    return (
        <ul className="list">
            {
                /* props명="값" 으로 해도 되지만 map으로 한꺼번에 보냄. */
                dataList.map( (item, index)  => <BusinessItem key={item.id} item={item}/> )
            }
        </ul>
    );
};

export default BusinessList;
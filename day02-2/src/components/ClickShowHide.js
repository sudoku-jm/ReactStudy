import React ,{useState} from 'react';

const ClickShowHide = () => {
    const [visible,setVisible] = useState(false)

    const onShow = () => {
        setVisible(true)
    }
    const onHide = () => {
        setVisible(false)
    }

    const onToggle = () => {
        setVisible(!visible)
    }

    const boxStyle = {
        margin:10,
        border : '1px solid #ccc',
        backgroundColor : 'pink',
        padding : 20
    }

    return (
        <> 
           <h3>버튼 클릭 시 박스 show hide</h3> 
           <button onClick={onShow}>보이기</button>
           <button onClick={onHide}>숨기기</button>
           <button onClick={onToggle}>toggle button</button>

            {
                visible === true ?
                <div style={boxStyle}>box!!</div>
                :null
            }



        </>
        
    );
};

export default ClickShowHide;
import React from 'react';

const Test4 = () => {
    /* 
        {
            속성 : 값 , 
            fontSize : '20px',
            width : 400 ,  
            backgroundColor : 'pink'
        }
    */
   
    const style1 = {
        backgroundColor : 'pink', fontSize:30, padding:15, margin:20, textAlign:'center'
    }

    const style2 = {
        width:300, height:100, border:'1px solid #000', backgroundColor:'yellow', fontSize:25, lineHeight:4, textIndent:30
    }

    return (
        <div>
            <h2>JSX 스타일 작성</h2>
            <p style={style1}>오늘은 일요일입니다.</p>
            <p style={style2}>오늘은 일요일입니다.</p>
            <p style={{
                margin:'0 20px',
                padding:20,
                width:300,
                boxSizing:'border-box',
                textAlign:'center',
                backgroundColor:'skyblue',
                borderRadius:10,
                fontWeight:'bold',
                color:'#111',
                fontSize:14,
                letterSpacing:-1,
                boxShadow : '3px 3px 3px rgba(0,0,0,0.2)'
            }}
                //style
                /* 
                    style={객체}
                    style={{속성:값}}
                */
            >오늘은 일요일입니다.</p>
            <p>오늘은 일요일입니다.</p>
        </div>
    );
};

export default Test4;
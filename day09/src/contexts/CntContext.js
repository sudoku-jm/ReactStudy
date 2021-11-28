import React, { createContext, useReducer } from 'react';
/* reducer활용 */

export const CntContext = createContext()

const initialState = {count : 0}
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' : 
            return {
                ...state,
                count : state.count + action.step
            }
        case 'DECREMENT' : 
            return  {
                ...state,
                count : state.count - action.step
            }
        case 'RESET' : 
            return {
                ...state,
                count : 0
            }
        default : 
            return  {count : state}
    }
}

const CntProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CntContext.Provider value={{state , dispatch}}>
           {props.children}
        </CntContext.Provider>
    );
};

export default CntProvider;
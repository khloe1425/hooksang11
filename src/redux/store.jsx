import { configureStore } from '@reduxjs/toolkit'
import numberReducer from './reducers/numberReducer'

// Tạo store
export const store = configureStore({
    //root reducer: tổng hợp các reducer (các state)
    reducer:{
        // number:numberReducer
        // numberReducer: numberReducer
        numberReducer
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



// state:(state = 1)=>{
//     return state;
// },
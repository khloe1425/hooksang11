// slice : tạo Reducer, action
// rxslice
import { createSlice } from '@reduxjs/toolkit'

// Khai báo giá trị mặc định của state
const initialState = {
  number: 0
}

// numberReducer 
// reducer(state dữ liệu truyền cho các component kết nối đến store)
// action (đẩy dữ liệu lên store) 
const numberReducer = createSlice({
  name: "numberReducer",
  initialState,
  reducers: {
    // các hàm action tương ứng với nghiệp vụ => thay thế cách dùng của action creator ở  class component
    // action: chứa data được đẩy lên store
    changeNumberAction: (state, action) => {
      console.log(state, action);
      console.log(action.payload);
      state.number += action.payload
    }
  }
});

//export để các component có kết nối đến store sử dung để đẩy data lên store
export const { changeNumberAction } = numberReducer.actions
//export reducer để gắn vào configureStore
export default numberReducer.reducer
// rxslice
import { createSlice } from '@reduxjs/toolkit'

//Dữ liệu nào cần lưu state (dữ liệu thay đổi => cần render lại UI)
// Kiểu dữ liệu 
// name, content => object => array object
const initialState = {
    arrComment: [
        { name: "user1", content: 'ahhihi' },
        { name: "user2", content: 'Hello cybersoft' },
    ]
}

const fakeBookReducer = createSlice({
    name: 'fakeBookReducer',
    initialState,
    reducers: {
        //state: giá trị ban đầu của state (initialState)
        //action: chứa data được đẩy lên từ component
        addCommentAction:(state, action) => { 
            console.log(action)
            state.arrComment = [
                ...state.arrComment, action.payload
            ]
         }
    }
});

export const { addCommentAction } = fakeBookReducer.actions

export default fakeBookReducer.reducer
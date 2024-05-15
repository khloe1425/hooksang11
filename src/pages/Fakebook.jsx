
// rfc: react function component
// rfcredux => component connect với redux
//  rafce : react arrow function component
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../redux/reducers/fakeBookReducer'

const Fakebook = () => {
    //*Hook
    // useSelector (kết nối đến store, lấy state đem xuống component )
    //kết quả return là object initialState
    let initialStateFakeBook = useSelector((state) => {
        // state: reducer tổng
        return state.fakeBookReducer //lấy cụ thể reducer cần
    })
    // bóc tách mảng arrComment
    let { arrComment } = initialStateFakeBook;

    //*rút gọn
    // let { arrComment } = useSelector(state => state.fakeBookReducer)

    // useDispatch => đẩy data lên store
    const dispatch = useDispatch()

    //*Lưu data lấy từ form: useState (nhận dữ liệu đổi, render lại UI), useRef  (nhận dữ liệu đổi, không render lại UI) 
    //Khai báo state 
    // useState => 1 mảng chứa 2 phần tử [giá trị state, hàm giúp setState]
    let [userComment, setUserComment] = useState({})
    //giá trị khởi tạo
    let commentRef = useRef({
        name: '',
        content: ''
    })


    //*Hàm xử lý tính năng
    // tham số event (e, evt, event) => sự kiện có sẵn của thẻ HTML (reactjs cung cấp sẵn cho jsx)

    // nfn
    let handleChangeRef = (e) => {
        // useRef cung cấp current để truy xuất thuộc tính của đối tượng được tạo
        let { id, value } = e.target;
        // commentRef.current.name = value
        commentRef.current[id] = value;
        console.log(commentRef.current);
    }

    //gắn với sự kiện onSubmit (giúp handle khi user gõ enter để gửi dữ liệu, dùng với các thư viện formik)
    const handleSubmit = (e) => {
        //onSubmit => load lại page
        e.preventDefault();// ngăn load page

        //khi click button submit => đẩy data lên store
        // đổi địa chỉ object action 
        const action = addCommentAction({...commentRef.current})
        dispatch(action)
    }







    let handleChange = (e) => {

        console.log("value: ", e.target.value)
        console.log("id: ", e.target.id)
        let { id, value } = e.target;
        // id: name, content => [id]: tạo động tên thuộc tính 
        // [id]: value => name: "user123"
        // copy thuộc tính ban đầu , thêm thuộc tính mới
        setUserComment({
            ...userComment,
            [id]: value
        })
    }

    console.log(userComment)




    let renderComment = () => {

        return arrComment.map((item) => {
            return <div className='row' key={item.name}>
                <div className="col-2">
                    <img src={`https://i.pravatar.cc/150?u=${item.name}`} alt="" />
                </div>
                <div className="col-10">
                    <p>{item.name}</p>
                    <p>{item.content}</p>
                </div>
            </div>
        })
    }


    return (
        <div className='container'>
            {renderComment()}


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input id='name' name='name' onChange={handleChangeRef} type="text" className="form-control" />

                </div>
                <div className="form-group">
                    <label>Content</label>
                    <input id='content' name='content' onChange={handleChangeRef} type="text" className="form-control" />

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Fakebook
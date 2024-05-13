import React from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import { changeNumberAction } from '../redux/reducers/numberReducer'


function DemoReduxToolkit(props) {
    //class: this.props
    //function: dùng tham số props được cung cấp sẵn của react function component
    // C1: sử dụng connect, mapStateToProps, props
    //C2: Hook redux: useSelector, useDispatch

    //kết nối đến store => lấy state từ store về component
    // state: reducer tổng => bóc tách đến numberReducer => lấy thuộc tính number
    let number = useSelector((state)=>{
        console.log(state)
        console.log(state.numberReducer)
        return state.numberReducer.number
    })
    // let number = useSelector((state) => state.numberReducer.number)
    //* useDispatch(): đẩy data lên store
    const dispatch = useDispatch()

  return (
    <div className='container'>
        <h2>Change Number</h2>
          <p>{number}</p>
        {/* <p>{props.number}</p> */}
        <button className='btn btn-success' onClick={() => { 
            // tạo action
            let action = changeNumberAction(1)
            //dispatch() => đẩy data lên store
            dispatch(action)

         }}>Tăng số</button>
         <button className='btn btn-danger' onClick={() => { 
              let action = changeNumberAction(-1)
                dispatch(action)
          }} >Giảm số</button>

    </div>
  )
}

export default DemoReduxToolkit

// const mapStateToProps = (state) => ({
//*    // state: reducer tổng => bóc tách đến numberReducer => lấy thuộc tính number
//     number: state.numberReducer.number
// })

// export default connect(mapStateToProps)(DemoReduxToolkit)
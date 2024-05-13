// rfc: react function component
import React, { useState } from "react";

export default function DemoState() {
  //* HOOK => các hàm của react giúp thao tác với function component
  //* State
  // 1. Xác đinh state: dữ liệu cần lưu vào state, kiểu dữ liệu
  // 2. xác định nơi gọi setState (ở button) - đổi giá trị state và render lại UI

  // let number = 0; // dữ liệu lưu state, kiểu number
  //* useState(giá trị mặc định) => return [giá trị của state, hàm giúp setState]
  //Bóc tách phần tử của mảng
  let [number, setNumber] = useState(1);

  let userObj = {
    avatar: "https://i.pravatar.cc?u=1",
    name: "Nguyễn Thị Khách Hàng",
  };

  let [user, setUser] = useState(userObj);

  return (
    <div className="container">
      <h2>Demo state</h2>
      <p>Number: {number} </p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-success"
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
        className="btn btn-danger"
      >
        -
      </button>

      <div className="col-3">
        <div className="card">
          <img src={user.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// class MyClass{
//     //state có sẵn bên class
//     state = {
//         number: 0
//     }
//     <p>{this.state.number}</p>
//     <button onClick={()=>{
//         let newState = {
//             number: 0
//         }
//             this.setState(newState)
//     }}>+</button>
// }

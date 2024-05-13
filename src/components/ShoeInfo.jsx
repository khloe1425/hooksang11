import React from "react";
import { useNavigate } from "react-router-dom";

const ShoeInfo = ({ shoe, huhu, col = "col-3" }) => {
  const navigate = useNavigate();
  // console.log(props);
  return (
    <div className={col}>
      <img className="w-100" src={shoe.image} alt="" />
      {/* tên sản phẩm  */}
      <h3>{shoe.name}</h3>
      {/* giá tiền  */}
      <p>{shoe.price}</p>
      {/* số lượng sản phẩm  */}
      <p>{shoe.quantity}</p>
      <button
        onClick={() => {
          // chuyển hướng người dùng tới trang
          navigate(`/shoe-detail/${shoe.id}`);
        }}
        className="btn btn-dark"
      >
        Xem chi tiết
      </button>
    </div>
  );
};

export default ShoeInfo;

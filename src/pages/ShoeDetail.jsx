import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../service/config";
import ShoeInfo from "../components/ShoeInfo";
import { ToastContainer, toast } from "react-toastify";
import { NotificationContext } from "../template/HomeTemplate";

const ShoeDetail = () => {
  const notification = useContext(NotificationContext);
  console.log(notification);
  const [shoeDetail, setShoeDetail] = useState({});
  const [number, setNumber] = useState(1);
  // destructuring
  const { id } = useParams();
  // tạo một useEffect chạy quá trình mouting để hiển thị sản phẩm mà người dùng click vào

  // ở useEffect sẽ chạy quá trình updating cho component, nghĩa là khi có id từ useParams thay đổi thì sẽ thực hiện chạy gọi dữ liệu mới
  // Vì sao ko sử dụng useEffect chạy mounting, vì bản chất useEffect đó chỉ chạy 1 lần duy nhất khi component được khởi tạo, nên nếu thay đổi giá trị id từ việc người dùng tương tác thì dữ liệu sẽ không thay đổi
  useEffect(() => {
    console.log("Tôi đã được chạy lại");
    http
      .get(`/api/Produc/getbyid?id=${id}`)
      .then((res) => {
        // console.log(res);
        setShoeDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
        // hiển thị thông báo lỗi
        notification.handleNotification("Vui lòng thử lại sau", "error");
      });

    // unmounting
    return () => {
      console.log("Người sử dụng vừa thoát khỏi trang shoe detail");
      // api tracking thời gian sử dụng
    };
  }, [id]);

  // console.log(id);
  console.log(shoeDetail);
  return (
    <>
      <div>
        <p>{number}</p>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Tăng giá trị number
        </button>
      </div>
      <div className="d-flex">
        <div className="image_detail">
          <img src={shoeDetail.image} alt="" />
        </div>
        <div className="info_detail">
          {/* tên sản phẩm  */}
          <h1>{shoeDetail.name}</h1>
          {/* giá sản phẩm  */}
          <p>Giá tiền: {shoeDetail.price}</p>
          {/* size giày  */}
          <div>
            <h2>Size giày của sản phẩm</h2>
            {/* mỗi button là 1 size giày  */}
            {shoeDetail.size?.map((item, index) => {
              return <button className="btn btn-dark mr-3">{item}</button>;
            })}
          </div>
        </div>
      </div>
      {/* // sản phẩm liên quan */}
      <div className="row">
        {/* hiển thị những sản phẩm liên quan  */}
        {shoeDetail.relatedProducts?.map((item, index) => {
          return <ShoeInfo col={"col-4"} shoe={item} />;
        })}
      </div>
    </>
  );
};

export default ShoeDetail;

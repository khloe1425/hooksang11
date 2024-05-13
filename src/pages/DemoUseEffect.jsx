import React, { useEffect, useState } from "react";
import { http } from "../service/config";
import { useNavigate } from "react-router-dom";
import ShoeInfo from "../components/ShoeInfo";
import { toast } from "react-toastify";

const DemoUseEffect = () => {
  const [products, setProducts] = useState([]);
  const [listMovie, setListMoive] = useState();
  // ở life cycle sẽ luôn có 3 quá trình chính
  // Khi component được khởi tạo và xuất hiện trên giao diện (mounting)
  // Khi component được update lại dữ liệu (updating)
  // Khi component biến mất khỏi giao diện (unmounting)
  // mounting
  useEffect(() => {
    console.log(
      "Tôi là mounting chạy lần đầu tiên khi component được khởi tạo"
    );
    // thực hiện gọi dữ liệu danh sách giày cho trang
    http
      .get("/api/Product")
      .then((res) => {
        // console.log(res.data.content);
        // gọi phương thức setState cập nhật lại dữ liệu
        setProducts(res.data.content);
      })
      .catch((err) => {
        // Thông báo lỗi cho người dùng
        // thời gian đóng 3s
        // thông báo hiện ở giữa màn hình
        toast.error("Danh sách giày có vấn đề, thử lại sau nhé", {
          autoClose: 3000,
          position: "top-center",
        });
        console.log(err);
      });

    // B2. Thực hiện tạo một chức năng lấy danh sách các sản phẩm phim có trong api movie new được cung cấp
    // let data = {
    //   hoTen: "Quang Khải",
    //   email: "quangkhai0901@gmail.com",
    // };
    // http
    //   .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", data)
    //   .then((res) => {
    //     // console.log(res);
    //     setListMoive(res.data.content);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // B3. Tạo một state listMovie và thực hiện lưu trữ danh sách phim
    // B4. thực hiện từ state đang lưu trữ dữ liệu, tạo một giao diện cho người dùng, có cấu trúc một dòng gồm 6 cột, hiển thị lên các thông tin gồm hình ảnh phim, tên phim, đánh giá, hot
  }, []);

  // console.log(products);
  return (
    <div>
      <h1>Demo về mounting trong react thông qua danh sách giày</h1>
      <div className="row">
        {products.map((item, index) => {
          return <ShoeInfo shoe={item} huhu="abc" />;
        })}
      </div>

      {/* hiển thị danh sách phim  */}
      <div className="row">
        {/* kiểm tra khi listMovie có dữ liệu thì sẽ chạy hàm map */}
        {listMovie?.map((item) => {
          console.log(item);
          return (
            <div className="col-2">
              <img src={item.hinhAnh} className="w-100" alt="" />
              {/* tên phim  */}
              <h3>{item.tenPhim}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;

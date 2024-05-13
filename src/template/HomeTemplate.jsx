import React, { createContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export let NotificationContext = createContext();

export default function HomeTemplate() {
  // tạo một hàm thông báo lỗi sử dụng chung cho tất cả component con
  const showNotification = (content, type) => {
    const options = {
      autoClose: 2000,
      position: "top-left",
    };
    switch (type) {
      case "success":
        return toast.success(content, { ...options, position: "top-center" });
      case "error":
        return toast.error(content, options);
      case "warn":
        return toast.warn(content, { ...options, position: "top-center" });
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        handleNotification: showNotification,
      }}
    >
      <div>
        <Header />
        <div className="content">
          {/* load các nội dung của component dùng thiết kế HomeTemplate */}
          <Outlet />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </NotificationContext.Provider>
  );
}

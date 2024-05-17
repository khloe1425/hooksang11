import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';



export default function Login() {

  //initialValues: giá trị lấy từ form
  const formik = useFormik({
    initialValues: {
      // email: '',
      taiKhoan: '',
      matKhau: ''
    },
    validationSchema: Yup.object({
      // email: Yup.string().email("Email chưa đúng định dạng").required("Email không được để trống"),
      // password: Yup.string().min(6, "Tối thiểu 6 ký tự").max(8, "Tối đa 8 ký tự").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/g,"Phải có 1 ký tự số, 1 ký tự đặc biệt, 1 ký tự in hoa").required("Pass không được để trống")
    }),
    // async: đặt trc hàm cần xử lý bất đồng bộ
    onSubmit: async userLogin => {
      //các xử lý sau khi user click button submit
      console.log(userLogin)
      //call api để post userLogin cho BE
      //await: đặt trước hàm call api
      try {
        //thành công
        let res = await axios({
          url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
          method: 'POST',
          headers: { 'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMSIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwNDk5MjQwMCwiZXhwIjoxNzI5MjcwODAwfQ.e_09en7cnMlh5fiMZWSMobMs9zSCjIXHgq-eMFxPlqg' },
          data: userLogin
        })

        console.log(res.data.content)

      } catch (error) {
        //thất bai
        console.log(error)
      }
      
      // res.then().catch() (promise)
      

    },
  });




  // console.log(formik.values)
  // console.log(formik.errors)

  return (
    <div className='container'>
      <form className='w-50' onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tài khoản</label>
          {/* <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          type="text" className="form-control" name='email' id="email" />
    
          {formik.errors.email ? (
            <p className='text-danger'>{formik.errors.email}</p>
          ) : null} */}

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taiKhoan}
            type="text" className="form-control" name='taiKhoan' id="taiKhoan" />

        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.matKhau}
            type="text" className="form-control" name='matKhau' id="matKhau" />
          {/* click icon xem pass => đổi type của password => text */}
          {/* <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          type="password" className="form-control" id="password" name='password' />
          {formik.errors.password ? (
            <p className='text-danger'>{formik.errors.password}</p>
          ) : null} */}

        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>


    </div>
  )
  
}

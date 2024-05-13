import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {

    if (!localStorage.getItem('userLogin')) {

        //chưa đang nhập => login
        alert("Bạn chưa đăng nhập")
        return <Navigate to="/login" />
    }

    //Đã đăng nhập
    return (
        <div>Profile</div>
    )
}

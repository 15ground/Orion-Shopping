import React from "react";

export default function FormInfo() {
  return (
    <div>
      <div className="form">
        <label htmlFor="hoTen">Họ tên khách hàng</label>
        <input
          type="text"
          placeholder="Điền họ và tên"
          name="* Họ tên"
          id="hoTen"
        />
        <div className="error" />
        <label htmlFor="soDienThoai">Số điện thoại</label>
        <input
          type="text"
          placeholder="Điền số điện thoại"
          name="* Số điện thoại"
          id="soDienThoai"
        />
        <div className="error" />
        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Điền email" name="* Email" id="Email" />
        <div className="error" />
        <label htmlFor="ngaySinh">Ngày sinh</label>
        <input type="Date" name="* Ngày sinh" id="ngaySinh" />
        <div className="error" />
        <label htmlFor="thoiGian">Thời gian nhận hàng (Từ 8h-18h)</label>
        <input
          type="number"
          placeholder="Điền thời gian nhận hàng"
          name="* Thời gian nhận hàng"
          id="thoiGian"
        />
        <div className="error" />
        <button className="btn">Tiến hành thanh toán</button>
      </div>
    </div>
  );
}

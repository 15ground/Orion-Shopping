import React from "react";
import "../css/cart.css";
export default function Cart() {
  return (
    <div>
      <div className="box">
        <div className="danh-sach-gio-hang" id="gioHang">
          <div className="sanPham">
            <img
              src="https://media3.scdn.vn/img3/2019/11_7/t0VZHh_simg_de2fe0_500x500_maxb.jpg"
              alt=""
              className="hinhAnh"
            />
            <p className="tenSanPham">Bánh ChocoPie Trung Quốc Nhái</p>
            <div className="khungGia">
              <span className="giaGoc">8000d</span>
              <span className="giaBan">200.000đ</span>
            </div>
            <input type="number" defaultValue={1} className="soLuong" />
            <img src="/css/images/remove.png" alt="" className="nutXoa" />
          </div>
        </div>
        <div className="thanhTien">
          <p className="text">Thành tiền:</p>
          <p className="tongThanhTien" id="tongTien"></p>
        </div>
      </div>
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

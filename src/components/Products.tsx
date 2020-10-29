import React from "react";
export default function Products() {
  return (
    <div>
      <div id="hien-thi-san-pham">
        <div className="san-pham">
          <div className="hinh-anh">
            <img
              src="https://media3.scdn.vn/img3/2019/11_7/t0VZHh_simg_de2fe0_500x500_maxb.jpg"
              alt=""
            />
          </div>
          <h1 className="ten-san-pham">ChocoPie Dark</h1>
          <span className="gia-goc">150.000d</span>
          <span className="gia-ban">200.000</span>
          <p className="khu-vuc">Co.op Mart</p>
          <button className="btn-them">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Header() {
  return (
    <Router>
      <header>
        <div id="box">
          <div className="menubar">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <div className="menu">
              <nav>
                <ul>
                  <li>
                    <Link to="/" className="active" target="_blank">
                      <b>TRANG CHỦ</b>
                    </Link>
                  </li>
                  <li>
                    <a href="index.tsx" target="_blank">
                      <b>Ý KIẾN KHÁCH HÀNG</b>
                    </a>
                  </li>
                  <li>
                    <a href="danhsachsp.html" target="_blank">
                      <b>SẢN PHẨM</b>
                    </a>
                  </li>
                  <li>
                    <a href="index.tsx" target="_blank">
                      <b>VỀ ORION</b>
                    </a>
                  </li>
                  <li>
                    <a href="index.tsx" target="_blank">
                      <b>LIÊN HỆ</b>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
}

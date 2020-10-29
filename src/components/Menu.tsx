import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
export default function Menu() {
  return (
    <Router>
      <div>
        <div id="menulv1">
          <nav>
            <ul>
              <li>
                <a href="index.tsx">Bánh Chocopie</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.tsx">Original</a>
                  </li>
                  <li>
                    <a href="index.tsx">Chocopie Dark</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.tsx">Bánh Custas</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.tsx">Custas trứng</a>
                  </li>
                  <li>
                    <a href="index.tsx">Custas sữa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.tsx">Bánh Gouté</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.tsx">Gouté mè đen</a>
                  </li>
                  <li>
                    <a href="index.tsx">Gouté mè trắng</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/add" target="_blank">
                  Thêm sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/cart" target="_blank">
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
}

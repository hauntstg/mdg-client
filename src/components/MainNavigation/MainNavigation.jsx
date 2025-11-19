import { NavLink, useNavigate } from "react-router-dom";
import "./MainNavigation.css";

export default function MainNavigation() {
  const navigate = useNavigate();
  return (
    <div className="main-navigation container-fluid">
      <div className="main-navigation-content">
        <div className="header-wrap-left col-6" onClick={() => navigate("/")}>
          <img src="/images/logo/minhdang-logo.png" alt="Minh Đăng Logo" />
          <img src="/images/logo/haitri-logo.png" alt="Hải Trí Logo" />
          <img src="/images/logo/qtt-logo.png" alt="QTT Logo" />
        </div>
        <div className="header-wrap-right col-6">
          <div className="header-wrap-navbar rounded-top">
            <ul>
              <li className="drop-down">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  <span>TRANG CHỦ</span>
                </NavLink>
              </li>
              <li className="drop-down">
                <NavLink
                  to="/bai-viet"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  <span>TRUYỀN THÔNG</span>
                </NavLink>
              </li>
              <li className="drop-down">
                <NavLink
                  to="/cer"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  <span>CHỨNG NHẬN</span>
                </NavLink>
              </li>
              {/* <li className="drop-down">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  <span>LIÊN HỆ</span>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="md-banner">
        <img src="/images/nhamay/haitri-nhamay.jpeg" alt="Minh Đăng banner" />
      </div>
    </div>
  );
}

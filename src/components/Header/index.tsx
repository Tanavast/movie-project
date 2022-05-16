import React, { FC } from "react";
import { Layout, Row, Menu } from "antd";
import { LoginOutlined, SolutionOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { useLocationCheck } from "../../hooks/useLocationCheck";
import "./index.css";
import Search from "./Search";

const Navbar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  const navigate = useNavigate();
  const isLoginLocation = useLocationCheck("/login");
  const isRegisterLocation = useLocationCheck("/register");

  return (
    <Layout.Header>
      <Row justify="end" className="header">
        <Search />
        <Menu mode="horizontal" selectable={false} className="nav-menu" overflowedIndicator={false}>
          {isAuth ? (
            <>
              <div className="user-name__container">
                <div className="user-icon">
                  <UserOutlined />
                </div>
                <span className="user-name">{user.username}</span>
              </div>
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => logout()}>
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                key="login"
                icon={<LoginOutlined />}
                onClick={() => navigate("/login", { replace: true })}
                disabled={isLoginLocation}
              >
                Login
              </Menu.Item>
              <Menu.Item
                key="register"
                icon={<SolutionOutlined />}
                onClick={() => navigate("/register", { replace: true })}
                disabled={isRegisterLocation}
              >
                Register
              </Menu.Item>
            </>
          )}
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

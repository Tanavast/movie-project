import React, { FC, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
import { rules } from "../../utils/rules";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface LoginProps {
  firstInput: string;
  secondInput: string;
  buttonText: string;
}

const LoginForm: FC<LoginProps> = ({ firstInput, secondInput, buttonText }) => {
  const { login } = useActions();
  const { isLoading, error } = useTypedSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    login(username, password);
  };

  return (
    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onSubmit}>
      <Form.Item name="username" rules={[rules.required()]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={firstInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="password" rules={[rules.required()]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={secondInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
          {buttonText}
        </Button>
      </Form.Item>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </Form>
  );
};

export default LoginForm;

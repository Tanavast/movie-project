import React from "react";
import Form from "../../components/Form";
import { Layout, Row, Card } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <Layout>
          <Row justify="center" align="middle" className="h100">
            <Card title="Login">
              <Form firstInput="Username" secondInput="Password" buttonText="Login" />
            </Card>
          </Row>
        </Layout>
      )}
    </>
  );
};

export default Login;

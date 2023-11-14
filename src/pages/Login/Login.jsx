import { useState } from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import { Container } from "../../styled-components/Container.styled";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
console.log(loginData);
  return (
    <>
      <Container>
        <LoginHeader />
        <LoginForm setFormData={setLoginData} />
      </Container>
    </>
  );
};

export default Login;

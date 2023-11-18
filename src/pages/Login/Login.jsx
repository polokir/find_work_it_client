import { useState } from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import { Container } from "../../styled-components/Container.styled";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { fetchLoginEmployee, fetchLoginRecrut } from "../../redux/slice/auth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthUser } from "../../redux/slice/auth";

export const setToken = (token) =>{
  if("accessToken" in token){
    window.localStorage.setItem('token',token.accessToken);
  }else{
    alert('Something wrong');
  }
}

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const isAuth = useSelector(isAuthUser);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    let data = await dispatch(fetchLoginRecrut(loginData));
    if(data.meta.requestStatus ==="rejected") {
      data = await dispatch(fetchLoginEmployee(loginData));
    }

    setToken(data.payload.tokens)
    console.log(data);
  };

  if(isAuth){
    return <Navigate to="/"/>
  }
  return (
    <>
      <Container>
        <LoginHeader />
        <LoginForm setFormData={setLoginData} submit={handleLogin} />
      </Container>
    </>
  );
};

export default Login;

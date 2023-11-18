import { Form, Input, InputContainer, Reglink, SubmitButton, TitleForm } from "./LoginForm.styled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from '@mui/icons-material/Key';
import { Link } from "react-router-dom";

const LoginForm = ({ setFormData,submit }) => {
  return (
    <Form onSubmit={(e) => submit(e)}>
        <TitleForm>Вхід в акаунт</TitleForm>
      <InputContainer>
        <Input
          type="email"
          placeholder="Пошта..."
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, email: e.target.value }))
          }
        />
        <AlternateEmailIcon  style={{ position: "absolute",  left: "1%", top:"30%",color: "#0082D1"}}/>
      </InputContainer>
      <InputContainer>
        <Input
          type="password"
          placeholder="Пароль..."
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }))
          }
        />
        <KeyIcon  style={{ position: "absolute", left: "1%", top:"30%", color:"#FFD100"}} />
      </InputContainer>
      <SubmitButton type="submit">Вхід</SubmitButton>
      <Link style={{textDecoration:"none"}} to="/register">
        <Reglink>Зареєструватись</Reglink>
      </Link>
    </Form>
  );
};

export default LoginForm;

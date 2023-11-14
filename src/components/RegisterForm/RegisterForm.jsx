import {
  Form,
  Input,
  InputContainer,
  SubmitButton,
  TitleForm,
} from "../LoginForm/LoginForm.styled";
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from '@mui/icons-material/Key';

const RegisterForm = ({ setFormData,isRecrut }) => {
  

  return (
    <Form>
      <TitleForm>Реєстрація {(isRecrut ? "роботодавцям" : "шукачам")}</TitleForm>
      <InputContainer>
      
        <Input
          type="text"
          placeholder="Ім'я..."
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, name: e.target.value }))
          }
        />
        <BadgeIcon style={{ position: "absolute",  left: "1%", top:"30%",color: "#7ac7fa"}}/>
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
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
    </Form>
  );
};

export default RegisterForm;

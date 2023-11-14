import {
  Form,
  Input,
  InputContainer,
  SubmitButton,
  TitleForm,
} from "../LoginForm/LoginForm.styled";

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
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Пошта..."
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, email: e.target.value }))
          }
        />
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
      </InputContainer>

      <SubmitButton type="submit">Вхід</SubmitButton>
    </Form>
  );
};

export default RegisterForm;

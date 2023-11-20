import {
  Form,
  Input,
  InputContainer,
  SubmitButton,
  TitleForm,
} from "../LoginForm/LoginForm.styled";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RadarIcon from "@mui/icons-material/Radar";
import BusinessIcon from "@mui/icons-material/Business";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  registerEmployee, registerRecrut } from "../../redux/slice/auth";
import { setToken } from "../../pages/Login/Login";



const RegisterForm = ({ isRecrut }) => {
  const [registerData, setRegisterData] = useState({});
  const disapatch = useDispatch();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (isRecrut) {
      const data = await disapatch(registerRecrut(registerData));
      console.log(data);
      setToken(data.payload.tokens);
    } else {
      const data = await disapatch(registerEmployee(registerData));
      console.log(data);
      setToken(data.payload);
    }
    
    setRegisterData({});
    e.preventDefault();
  };

  console.log(registerData);
  return (
    <Form onSubmit={(e) => handleRegistration(e)}>
      <TitleForm>Реєстрація {isRecrut ? "роботодавцям" : "шукачам"}</TitleForm>
      <InputContainer>
        <Input
          type="text"
          placeholder="Ім'я..."
          onChange={(e) =>
            setRegisterData((prevData) => ({
              ...prevData,
              name: e.target.value,
            }))
          }
        />
        <BadgeIcon
          style={{
            position: "absolute",
            left: "1%",
            top: "30%",
            color: "#7ac7fa",
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Пошта..."
          onChange={(e) =>
            setRegisterData((prevData) => ({
              ...prevData,
              email: e.target.value,
            }))
          }
        />
        <AlternateEmailIcon
          style={{
            position: "absolute",
            left: "1%",
            top: "30%",
            color: "#0082D1",
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          type="password"
          placeholder="Пароль..."
          onChange={(e) =>
            setRegisterData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }))
          }
        />
        <KeyIcon
          style={{
            position: "absolute",
            left: "1%",
            top: "30%",
            color: "#FFD100",
          }}
        />
      </InputContainer>
      {isRecrut ? (
        <>
          <InputContainer>
            <Input
              type="text"
              placeholder="Назва компанії..."
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  company_name: e.target.value,
                }))
              }
            />
            <BusinessIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#0082D1",
              }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Тип компанії..."
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  type_of_company: e.target.value,
                }))
              }
            />
            <BusinessIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#FFD100",
              }}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <InputContainer>
            <Input
              type="number"
              placeholder="Вік..."
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  age: e.target.value,
                }))
              }
            />
            <AccessibilityIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#0082D1",
              }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="number"
              placeholder="Досвід роботи..."
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  experience: e.target.value,
                }))
              }
            />
            <WorkHistoryIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#FFD100",
              }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Місто"
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  city: e.target.value,
                }))
              }
            />
            <LocationCityIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#0082D1",
              }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Посада..."
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  position: e.target.value,
                }))
              }
            />
            <RadarIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#FFD100",
              }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Навички... (Введить чрез пробіл)"
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  skills: (e.target.value).split(" "),
                }))
              }
            />
            <RadarIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#FFD100",
              }}
            />
          </InputContainer>
        </>
      )}

      <SubmitButton type="submit">Реєстрація</SubmitButton>
    </Form>
  );
};

export default RegisterForm;

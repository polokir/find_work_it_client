import {
  Form,
  Input,
  InputContainer,
  OptionItem,
  SelectList,
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerEmployee, registerRecrut } from "../../redux/slice/auth";
import { setToken } from "../../pages/Login/Login";
import { useNavigate } from "react-router-dom";

import Cities from "../../constant_lists/ukr.json";
import Positions from "../../constant_lists/positions.json";
import { nanoid } from "@reduxjs/toolkit";
import { SelectionList } from "../CityInput/CityInput";

const RegisterForm = ({ isRecrut }) => {
  const [registerData, setRegisterData] = useState({});
  const disapatch = useDispatch();
  const navigate = useNavigate();
  const [potCity, setPotCity] = useState([]);
  const [potentialPos, setPotenPos] = useState([]);
  const [isCityFocus, setIsCityFocus] = useState(false);
  const [isPosFocus, setIsPosFocus] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (registerData.position && registerData.position.trim().length > 2) {
        setPotenPos(
          Positions.professions.filter((profession) =>
            profession.name
              .toLowerCase()
              .startsWith(registerData.position.toLowerCase())
          )
        );
      }
    };

    if (registerData.position) {
      handlePosition();
    }
  }, [registerData.position]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    let data;
    if (isRecrut) {
      data = await disapatch(registerRecrut(registerData));
      console.log(data);
      setToken(data.payload.accessToken);
    } else {
      data = await disapatch(registerEmployee(registerData));
      console.log(data);
      setToken(data.payload.accessToken);
    }

    setRegisterData({});
    if (data.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
    e.preventDefault();
  };

  console.log(isCityFocus);
  console.log(potCity);
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
              value={registerData.city}
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  city: e.target.value,
                }))
              }
              onFocus={() => {
                setIsCityFocus(true);
              }}
            />
            <LocationCityIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#0082D1",
              }}
            />
            <SelectionList
              focus={isCityFocus}
              inputedData={registerData.city}
              potentialCandidates={potCity}
              setInputed={setRegisterData}
              setFocus={setIsCityFocus}
              setPotentialCandidates={setPotCity}
              field={"city"}
              array={Cities}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Посада..."
              value={registerData.position}
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  position: e.target.value,
                }))
              }
              onFocus={() => setIsPosFocus(true)}
            />
            <RadarIcon
              style={{
                position: "absolute",
                left: "1%",
                top: "30%",
                color: "#FFD100",
              }}
            />
            {/* <SelectionList
              array={Positions}
              focus={isPosFocus}
              inputedData={registerData.position}
              potentialCandidates={potentialPos}
              setInputed={setRegisterData}
            /> */}
            <SelectList focus={isPosFocus}>
              {registerData.position &&
                potentialPos &&
                potentialPos.map((item) => (
                  <OptionItem
                    key={nanoid(3)}
                    onClick={(e) => {
                      setRegisterData((prevData) => ({
                        ...prevData,
                        position: `${item.name}`,
                      }));
                      setIsPosFocus(false);
                    }}
                  >
                    {item.name}
                  </OptionItem>
                ))}
            </SelectList>
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Навички... (Введить через пробіл)"
              onChange={(e) =>
                setRegisterData((prevData) => ({
                  ...prevData,
                  skills: e.target.value.split(" "),
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

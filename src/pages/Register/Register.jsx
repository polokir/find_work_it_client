import { useState } from "react";
import HeaderLight from "../../components/HeaderLight/HeaderLight";
import { Container } from "../../styled-components/Container.styled";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HailIcon from '@mui/icons-material/Hail';
import {
  LinkChanger,
  MainContainer,
  MainText,
  Title,
  TitleContainer,
} from "./Register.styled";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  const [isRecrut, setIsRecrut] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(isRecrut);
  return (
    <div style={{ backgroundColor: "#eeeeee" }}>
      <HeaderLight selector={isRecrut} setSelector={setIsRecrut} />
      <Container>
        <MainContainer>
          {isRecrut ? (
            <>
              <TitleContainer>
                <Title>
                  Зареєструйтеся та опублікуйте
                  <span style={{ color: "#0082D1" }}> безкоштовну </span>
                  <span style={{ color: "#FFD100" }}>вакансію</span>
                </Title>
                <MainText>
                  Отримуйте відгуки на вакансії та знаходьте кандидатів в
                  найбільшій базі резюме в Україні
                </MainText>
                <LinkChanger
                  selector={isRecrut}
                  onClick={() => setIsRecrut(false)}
                >
                  <PersonSearchIcon style={{ marginRight: "5px" }} />Я шукаю
                  роботу
                </LinkChanger>
              </TitleContainer>
            </>
          ) : (
            <>
              <TitleContainer>
                <Title>Вітаємо на work
                <span style={{ color: "#0082D1" }}>init</span>
                <span style={{ color: "#FFD100" }}>.ua</span> для пошукачів</Title>
                <MainText>
                  Відгукуйтесь на вакансії та публікуйте резюме в базі для
                  сотень зацікавлених роботодавців
                </MainText>
                <LinkChanger
                  selector={isRecrut}
                  onClick={() => setIsRecrut(true)}
                >
                  <HailIcon style={{ marginRight: "5px" }} />Я шукаю
                  працівників
                </LinkChanger>
              </TitleContainer>
            </>
          )}
          <RegisterForm isRecrut={isRecrut} setFormData={setRegisterData} />
        </MainContainer>
      </Container>
    </div>
  );
};

export default Register;

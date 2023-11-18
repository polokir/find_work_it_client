import { Link } from "react-router-dom";
import { Container } from "../../styled-components/Container.styled";
import {
  ButtonList,
  Header,
  HeaderContainer,
  LoginButton,
  MenuButton,
  MenuList,
} from "../../styled-components/Header.styled";
import LoginIcon from '@mui/icons-material/Login';
import LogoText from "../LogoText/LogoText";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from "react-redux";

const MyHeader = ({isAuth,clicked,setClicked}) => {
  const recruiter = useSelector(state=>state.auth.recruiter)

  return (
    <Header>
      <Container>
        <HeaderContainer>
          <LogoText/>
          <MenuList>
            <li>
              <MenuButton clicked={!clicked} onClick={() => setClicked(false)}>Шукачу</MenuButton>
            </li>
            <li>
              <MenuButton clicked={clicked} onClick={() => setClicked(true)}>Роботодавцю</MenuButton>
            </li>
          </MenuList>
          {
            isAuth ? (
              <ButtonList>
              <li>
                <Link style={{textDecoration:"none"}} to="/profile">
                  <LoginButton> <PersonAddIcon style={{paddingRight:"5px"}} fontSize="medium"/> Мій профіль</LoginButton>
                </Link>
              </li>
              <li>
                 {recruiter && (
                   <Link style={{textDecoration:"none"}} to="/createVacancy">
                   <LoginButton> <PersonAddIcon style={{paddingRight:"5px"}} fontSize="medium"/> Створити вакансію</LoginButton>
                 </Link>
                )}
              </li>
               
            </ButtonList>
            ):(
              <ButtonList>
              <li>
                <Link style={{textDecoration:"none"}} to="/login">
                 <LoginButton> <LoginIcon style={{paddingRight:"5px"}} fontSize="medium"/> Увійти</LoginButton>
                </Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/register">
                  <LoginButton> <PersonAddIcon style={{paddingRight:"5px"}} fontSize="medium"/> Зареєструватися</LoginButton>
                </Link>
              </li>
               
            </ButtonList>
            )
          }
         
         
        </HeaderContainer>
      </Container>
    </Header>
  );
};

export default MyHeader;

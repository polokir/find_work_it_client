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
import { useState } from "react";
import LogoText from "../LogoText/LogoText";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MyHeader = ({clicked,setClicked}) => {
  
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
          <ButtonList>
            <li>
              <Link style={{textDecoration:"none"}} to="/login">
               <LoginButton> <LoginIcon style={{paddingRight:"5px"}} fontSize="medium"/> Увійти</LoginButton>
              </Link>
            </li>
            {
              clicked &&
              <li>
                <Link style={{textDecoration:"none"}} to="/register">
                  <LoginButton> <PersonAddIcon style={{paddingRight:"5px"}} fontSize="medium"/> Зареєструватися</LoginButton>
                </Link>
              </li>
            } 
          </ButtonList>
         
        </HeaderContainer>
      </Container>
    </Header>
  );
};

export default MyHeader;

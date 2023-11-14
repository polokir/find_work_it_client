import { Link } from "react-router-dom";
import { Container } from "../../styled-components/Container.styled";
import {
  Header,
  HeaderContainer,
  LoginButton,
  MenuButton,
  MenuList,
} from "../../styled-components/Header.styled";
import LoginIcon from '@mui/icons-material/Login';
import { useState } from "react";
import LogoText from "../LogoText/LogoText";


const MyHeader = () => {
  const [clicked,setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Header>
      <Container>
        <HeaderContainer>
          <LogoText/>
          <MenuList>
            <li>
              <MenuButton clicked={!clicked} onClick={handleClick}>Шукачу</MenuButton>
            </li>
            <li>
              <MenuButton clicked={clicked} onClick={handleClick}>Роботодавцю</MenuButton>
            </li>
          </MenuList>
          <Link style={{textDecoration:"none"}} to="/login">
            <LoginButton> <LoginIcon style={{paddingRight:"5px"}} fontSize="medium"/> Увійти</LoginButton>
          </Link>
        </HeaderContainer>
      </Container>
    </Header>
  );
};

export default MyHeader;

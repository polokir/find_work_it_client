import { Container } from "../../styled-components/Container.styled";
import {
  HeaderContainer,
  MenuList,
} from "../../styled-components/Header.styled";
import LogoText from "../LogoText/LogoText";
import {
  HeaderWhite,
  LightButton,
} from "./HeaderLight.styled";

import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const HeaderLight = ({selector,setSelector}) => {
  return (
    <HeaderWhite>
      <Container>
        
        <HeaderContainer>
        <LogoText/>
          <MenuList>
            <li>
              <LightButton clicked={!selector} onClick={()=>setSelector(false)}>Шукачам</LightButton>
            </li>
            <li>
              <LightButton clicked={selector} onClick={()=>setSelector(true)}>Роботодавцям</LightButton>
            </li>
          </MenuList>
          <Link to="/">
            <CloseIcon style={{color:"red"}} fontSize="large"/>
          </Link>
        </HeaderContainer>
      </Container>
    </HeaderWhite>
  );
};

export default HeaderLight;

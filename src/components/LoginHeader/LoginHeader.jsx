import { CloseOutlined } from "@mui/icons-material";

import LogoText from "../LogoText/LogoText";
import { LoginHeaderContainer } from "./LoginHeader.styled";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <LoginHeaderContainer>
      <div style={{ width: "20px" }}></div>
      <LogoText />
      <Link to="/">
        <CloseOutlined fontSize="large" />
      </Link>
    </LoginHeaderContainer>
  );
};

export default LoginHeader;

import styled from "styled-components";

export const Header = styled.div`
  background-color: #faa679;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.a`
  text-decoration: none;
  color: #212121;
  font-family: "Hind Siliguri", sans-serif;
  font-size: 35px;
  font-weight: 600;
`;

export const MenuButton = styled.button`
  font-family: "Roboto", sans-serif;
  border: 0;
  height: 30px;
  padding: 5px 10px;
  background-color: #FAA679;
  color: #fff;
  font-weight: 500;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: ${({ clicked }) => (clicked ? '#fff' : '#FAA679')};
  color: ${({ clicked }) => (clicked? '#FAA679' : '#fff')};

  cursor: pointer;
  &:hover{
    background-color: #fff;
    color: #FAA679;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  border: 1px solid #fff;
`;

export const LoginButton = styled.p`
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: medium;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover{
    background-color: #fff;
    color: #FAA679;
  }

`

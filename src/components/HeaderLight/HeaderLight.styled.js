import styled from "styled-components";

export const HeaderWhite = styled.header`
background-color: #fff;
padding: 30px 0;
`




export const LightButton = styled.button`
  font-family: "Roboto", sans-serif;
  border: 0;
  height: 30px;
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: ${({ clicked }) => (!clicked ? '#fff' : '#eeeeee')};
  color: ${({ clicked }) => (!clicked? 'black' : '#FAA679')};
`

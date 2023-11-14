import styled from "styled-components";
import variables from "../../setting/variables";

export const Form = styled.form`
  width: 280px;
  padding: 5px;
  ${variables.breakPoints.mobile} {
    width: 300px;
    padding: 5px;
  }

  ${variables.breakPoints.tablet} {
    width: 480px;
    padding: 40px;
  }

  ${variables.breakPoints.desktop} {
    width: 600px;
    padding: 40px;

  }
  margin: 0 auto;
  align-items: center;
  gap: 20px;
  
  background-color: #eeeeee;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  width: 100%;
 
  padding: 10px 0;
  padding-left: 40px;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
  ${variables.breakPoints.mobile} {
    font-size: 14px;
  }

  ${variables.breakPoints.tablet} {
    font-size: 16px;
    height: 48px;
  }

  ${variables.breakPoints.desktop} {
    font-size: 18px;
    height: 60px;
  }
  &:focus {
    outline: 1px solid #999999;
  }
`;

export const SubmitButton = styled.button`
  width: 60%;
  height: 40px;
  font-size: 20px;
  padding: 5px 0;
  font-family: "Roboto", sans-serif;
  border:0;
  border: 1px solid #999999;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #e59999;
  color: #fff;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  &:hover{
    background-color: #fff;
    color: #e59999;
  }
`;

export const TitleForm = styled.h3`
text-align: center;
font-size: 24px;
font-weight: 700;
font-family: "Roboto", sans-serif;
margin-bottom: 25px;
`
export const Reglink = styled.p`
color: #000000;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
margin: auto;
`

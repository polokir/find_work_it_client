import styled from "styled-components";

export const VacancyTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;
export const RecrutDetail = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  align-items: center;
`;
export const RecrutAvatar = styled.img`
  width: 35px;
  border-radius: 50%;
`;

export const RecrutText = styled.p`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2px;
  }
`;

export const VacancySection = styled.section`
  padding: 30px 0;
`;

export const InfoSection = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
  gap: 30px;
`;

export const MagicButton = styled.button`
  width: 40%;
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
  background-color: #e59999;
  color: #fff;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  &:hover{
    background-color: #fff;
    color: #e59999;
  }
`;

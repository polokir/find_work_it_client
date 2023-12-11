import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding:30px 0;
`;

export const Avatar = styled.div`

`;

export const AvatarImg = styled.img`
  width: 200px;
  border-radius: 50%;
  cursor: pointer;
`;
export const DescList = styled.ul``;

export const DescText = styled.p`
  font-family: "Hind Siliguri", sans-serif;
  font-size: 20px;
`;

export const VacancyList = styled.ul`
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
export const VacancyItem = styled.li`
  position: relative;
  background-color: #fff;
  width: 95%;
  padding: 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;
export const VacancyTitle = styled.h3`
  font-family: "Hind Siliguri", sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const VacancyDesc = styled.p`
  font-family: "Hind Siliguri", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 80%;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
`;

export const DeleteButton = styled.button`
position: absolute;
top: 0;
right: 0;
`
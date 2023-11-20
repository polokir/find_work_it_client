import styled from "styled-components";

export const CandidateList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const CandidateItem = styled.li`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  outline: 1px solid #eeee;
  padding: 20px;
`;
export const CandidatePhoto = styled.img`
  border-radius: 50%;
`;

export const CandidateName = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;
export const CandidateEmail = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
`;



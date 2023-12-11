import {
  Avatar,
  AvatarImg,
  DescList,
  DescText,
  ProfileContainer,
} from "./RecrutBlock.styled";

import VacancyEnum from "../VacancyEnum/VacancyEnum";
import { useRef, useState } from "react";
import axios from "../../redux/axios-config";
import { Button } from "@mui/material";

const RecrutBlock = ({ recrut, employee, vacancies, setVacancies }) => {
  const imgRef = useRef(null);
  const resRef = useRef(null);
  const [imageURL, setImageUrl] = useState("");
  const [resume, setRezume] = useState("");
console.log(setVacancies,"ENUM")
  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("avatar", file);
      if (recrut) {
        const { data } = await axios.patch("/api/recrut/avatars", formData);
        console.log(data);
        setImageUrl(data.avatarURL);
      } else {
        const { data } = await axios.patch("/api/employee/avatar", formData);
        console.log(data);
        setImageUrl(data.avatarURL);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleChangeRezumeFile = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("rezume", file);
      const result = await axios.patch("/api/employee/rezume", formData);
      console.log(result)
      setRezume(result.data.resumeUrl);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  console.log(imageURL);
  return (
    <>
      {recrut ? (
        <>
          <ProfileContainer>
            <Avatar>
              <AvatarImg
                onClick={(e) => {
                  imgRef.current.click();
                }}
                src={
                  imageURL
                    ? `http://localhost:4444/public/${imageURL}`
                    : `http://localhost:4444/public/${recrut.avatarURL}`
                }
                alt="avatar"
              />
              <input
                ref={imgRef}
                onChange={handleChangeFile}
                type="file"
                hidden
              />
            </Avatar>
            <DescList>
              <li>
                <DescText>Email: {recrut.email}</DescText>
              </li>
              <li>
                <DescText>Ім'я: {recrut.name}</DescText>
              </li>
              <li>
                <DescText>Назва компанії: {recrut.company_name}</DescText>
              </li>
            </DescList>
          </ProfileContainer>

          <VacancyEnum setVacancies={setVacancies} vacancies={vacancies} />
        </>
      ) : (
        <>
          <ProfileContainer>
            <Avatar>
              <AvatarImg
                onClick={(e) => {
                  imgRef.current.click();
                }}
                src={
                  imageURL
                    ? `http://localhost:4444/public/${imageURL}`
                    : `http://localhost:4444/public/${employee.avatarURL}`
                }
                alt="avatar"
              />
              <input
                ref={imgRef}
                onChange={handleChangeFile}
                type="file"
                hidden
              />
            </Avatar>
            <DescList>
              <li>
                <DescText>Email: {employee.email}</DescText>
              </li>
              <li>
                <DescText>Ім'я: {employee.name}</DescText>
              </li>
              <li>
                <DescText>Вік: {employee.age}</DescText>
              </li>
              <li>
                <DescText>
                  Навички: {employee.skills.map((item) => `${item}, `)}
                </DescText>
              </li>
            </DescList>
          </ProfileContainer>
          <ProfileContainer>
            <Button onClick={(e) => resRef.current.click()}>
              Завантажити резюме
            </Button>
            <input
                ref={resRef}
                onChange={handleChangeRezumeFile}
                type="file"
                hidden
              />
          </ProfileContainer>

          <VacancyEnum vacancies={vacancies} />
        </>
      )}
    </>
  );
};

export default RecrutBlock;

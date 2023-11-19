import {
  Avatar,
  AvatarImg,
  DescList,
  DescText,
  ProfileContainer,
} from "./RecrutBlock.styled";

import noAvatar from "../../assets/no-avatar.webp";
import VacancyEnum from "../VacancyEnum/VacancyEnum";

const RecrutBlock = ({ recrut, vacancies }) => {
  return (
    <>
      <ProfileContainer>
        <Avatar>
          <AvatarImg src={recrut.avatar || noAvatar} alt="avatar" />
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

      <VacancyEnum vacancies={vacancies}/>
    </>
  );
};

export default RecrutBlock;

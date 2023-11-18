import {
  Avatar,
  AvatarImg,
  DescList,
  DescText,
  Info,
  InfoContainer,
  ProfileContainer,
  VacancyDesc,
  VacancyItem,
  VacancyList,
  VacancyTitle,
} from "./RecrutBlock.styled";

import noAvatar from "../../assets/no-avatar.webp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import { Block } from "@mui/icons-material";

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

      <VacancyList>
        {vacancies &&
          vacancies.map((vacancy) => (
            <VacancyItem key={vacancy.id}>
              <InfoContainer>
                <Info>
                  <AccessTimeIcon
                    style={{ marginRight: "5px" }}
                    fontSize="small"
                  />
                  {new Date(vacancy.createdAt).toLocaleDateString("en-GB")}
                </Info>
                <Info>
                  <GroupIcon style={{ marginRight: "5px" }} fontSize="small" />
                  {vacancy.apply_count}
                </Info>
              </InfoContainer>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/vacancy/${vacancy._id}`}
              >
                <VacancyTitle>{vacancy.title}</VacancyTitle>
              </Link>
              <VacancyDesc>{vacancy.text.slice(0, 200)}...</VacancyDesc>
            </VacancyItem>
          ))}
      </VacancyList>
    </>
  );
};

export default RecrutBlock;

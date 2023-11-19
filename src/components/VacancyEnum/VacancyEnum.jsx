import {
    Info,
    InfoContainer,
    VacancyDesc,
    VacancyItem,
    VacancyList,
    VacancyTitle,
  } from "../RecrutBlock/RecrutBlock.styled";
  
  import AccessTimeIcon from "@mui/icons-material/AccessTime";
  import GroupIcon from "@mui/icons-material/Group";
  import { Link } from "react-router-dom";

const VacancyEnum = ({vacancies}) =>{
    return(
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
    )
}

export default VacancyEnum;
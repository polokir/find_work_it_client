import {
  DeleteButton,
  Info,
  InfoContainer,
  VacancyDesc,
  VacancyItem,
  VacancyList,
  VacancyTitle,
} from "../RecrutBlock/RecrutBlock.styled";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "../../redux/axios-config";

const VacancyEnum = ({ vacancies,setVacancies }) => {
  const user = useSelector((state) => state.auth.recruiter);

  const deleteVacancy = async (id) =>{
    const deleted = await axios.delete(`vacancy/${id}`);
    setVacancies(prevState => prevState.filter(item=>item.id !==id))
  }
  console.log(user);
  return (
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
            {user.id === vacancy.recruiter && (
              <DeleteButton onClick={()=>(deleteVacancy(vacancy._id))}>
                <DeleteIcon />
              </DeleteButton>
            )}
          </VacancyItem>
        ))}
    </VacancyList>
  );
};

export default VacancyEnum;

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
import { useEffect, useState } from "react";

//Golang
//Kotlin
//Objrctive C
// Swift
// Flutter

import { ReactComponent as AngularIcon } from "../../assets/angular.svg";
import { ReactComponent as CppIcon } from "../../assets/c-plus-plus.svg";
import { ReactComponent as CsharpIcon } from "../../assets/csharp.svg";
import { ReactComponent as JavaIcon } from "../../assets/java.svg";
import { ReactComponent as JsIcon } from "../../assets/js.svg";
import { ReactComponent as VueIcon } from "../../assets/logo-vue.svg";
import { ReactComponent as PhpIcon } from "../../assets/php.svg";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as RubyIcon } from "../../assets/ruby.svg";
import { ReactComponent as PythonIcon } from "../../assets/python.svg";
import { ReactComponent as TsIcon } from "../../assets/typescript.svg";

const VacancyEnum = ({ vacancies, setVacancies }) => {
  const user = useSelector((state) => state.auth);
  console.log(user, "|VACANCY ENUM|");
  const [isDelete, setIsDelete] = useState(false);
  const [del, setDel] = useState();

  const deleteVacancy = async (id) => {
    const deleted = await axios.delete(`vacancy/${id}`);
    //setVacancies(prevState => [...prevState.filter(item=>item.id !== id)])
    setDel(id);
    setIsDelete(true);
  };

  useEffect(() => {
    const fios = () => {
      if (isDelete) {
        setVacancies((prevState) => [
          ...prevState.filter((item) => item._id !== del),
        ]);
        setIsDelete(false);
      }
    };
    fios();
  }, [isDelete, del, setVacancies]);

  return (
    <>
    <VacancyList>
      {vacancies &&
        vacancies.map((vacancy) => (
          <VacancyItem key={vacancy._id}>
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
              <Info>
                {vacancy.skills.toLowerCase().includes("angular") && (
                  <AngularIcon style={{marginLeft:"5px"}} width={30} height={24} />
                )}

                {vacancy.skills.toLowerCase().includes("c++") && (
                  <CppIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {(vacancy.skills.toLowerCase().includes("c#") ||
                  vacancy.skills.toLowerCase().includes(".net")) && (
                  <CsharpIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("java") && (
                  <JavaIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {(vacancy.skills.toLowerCase().includes("javascript") ||
                  vacancy.skills.toLowerCase().includes("js")) && (
                  <JsIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("vue") && (
                  <VueIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("php") && (
                  <PhpIcon style={{marginLeft:"5px"}}  width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("python") && (
                  <PythonIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("react") && (
                  <ReactIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("ruby") && (
                  <RubyIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}

                {vacancy.skills.toLowerCase().includes("typescript") && (
                  <TsIcon style={{marginLeft:"5px"}} width={30} height={30} />
                )}
              </Info>
            </InfoContainer>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/vacancy/${vacancy._id}`}
            >
              <VacancyTitle>{vacancy.title}</VacancyTitle>
            </Link>
            <VacancyDesc>{vacancy.text.slice(0, 200)}...</VacancyDesc>
            {user.recruiter && user.recruiter.id === vacancy.recruiter && (
              <DeleteButton onClick={() => deleteVacancy(vacancy._id)}>
                <DeleteIcon />
              </DeleteButton>
            )}
          </VacancyItem>
        ))}
    </VacancyList>
    </>
  );
};

export default VacancyEnum;

import axios from "../../redux/axios-config";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../styled-components/Container.styled";
import NoAvatar from "../../assets/no-avatar.webp";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

import {
  InfoSection,
  MagicButton,
  RecrutAvatar,
  RecrutDetail,
  RecrutText,
  VacancySection,
  VacancyTitle,
} from "./Vacancy.styled";
import ReactMarkdown from "react-markdown";
import styles from "./markdown.module.css";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useSelector } from "react-redux";

const Vacancy = () => {
  const params = useParams();
  const [vacancy, setVacancy] = useState();
  const isRecrut = useSelector((state) => state.auth.recruiter);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVacancy = async () => {
      const result = await axios.get(`vacancy/${params.id}`);
      console.log(result, "|VACANCY BY ID|");
      setVacancy(result.data);
    };
    if (params.id) {
      fetchVacancy();
    }
  }, []);

  const handleVacancy = async () => {
    if (isRecrut) {
      console.log("Navigate");
      navigate(`/vacancy/${params.id}/candidates`);
    } else {
      const result = await axios.patch(`/vacancy/apply/${params.id}`);
      if (result.statusText === "OK") {
        toast.success("pidar")
        setTimeout(()=>{
          return navigate('/');
        },1000)
        return;
      }
      toast.success("gondon")
    }
  };
  return (
    <>
      {vacancy && (
        <VacancySection>
          <Container>
            <LoginHeader />
            <VacancyTitle>{vacancy.title}</VacancyTitle>
            <RecrutDetail>
              <div>
                <RecrutAvatar src={NoAvatar} />
              </div>
              <div>
                <RecrutText>{vacancy.recruiter.name}</RecrutText>
                <RecrutText>{vacancy.recruiter.company_name}</RecrutText>
              </div>
              <div>
                <RecrutText style={{ marginLeft: "10px" }}>
                  <MyLocationIcon
                    style={{ marginRight: "3px" }}
                    fontSize="small"
                  />{" "}
                  {vacancy.location || "Дистанційно"}
                </RecrutText>
                <RecrutText>{vacancy.year_of_experience} роки досвіду</RecrutText>
              </div>
            </RecrutDetail>
            <ReactMarkdown
              className={styles.markdowm}
              children={vacancy.text}
            />
            <InfoSection>
              <RecrutText>
                <AccessTimeIcon fontSize="small" />{" "}
                {new Date(vacancy.createdAt).toLocaleDateString("en-GB")}
              </RecrutText>

              <RecrutText>
                <PersonIcon fontSize="small" /> {vacancy.apply_count}
              </RecrutText>
            </InfoSection>
            <MagicButton onClick={handleVacancy}>
              {isRecrut && isRecrut.id === vacancy.recruiter._id
                ? "Подивитися шукачів"
                : "Відгукнутись"}
            </MagicButton>
          </Container>
        </VacancySection>
      )}
       <ToastContainer/>
    </>
  );
};

export default Vacancy;

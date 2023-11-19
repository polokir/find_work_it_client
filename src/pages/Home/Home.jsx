import { useState } from "react";
import MyHeader from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import axios from "../../redux/axios-config";
import { useEffect } from "react";
import VacancyEnum from "../../components/VacancyEnum/VacancyEnum";
import { Container } from "../../styled-components/Container.styled";

const Home = ({ isAuth }) => {
  const [isRecrut, setIsRecrut] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [query, setQuery] = useState("");
  
  const handleSearch = async () =>{
    
  }

  useEffect(() => {
    const fetchVacancies = async () => {
      const result = await axios.get("vacancy");
      console.log(result, "|VACANCIES|");
      setVacancies(result.data);
    };
    if (isAuth) {
      fetchVacancies();
    }
  }, []);
  return (
    <>
      <MyHeader isAuth={isAuth} setClicked={setIsRecrut} clicked={isRecrut} />
      <Hero isRecrut={isRecrut} setInput={setQuery}  />
      <div style={{ padding: "30px 0", backgroundColor: "#eeee" }}>
        <Container>
          <VacancyEnum vacancies={vacancies} />
        </Container>
      </div>
    </>
  );
};
export default Home;

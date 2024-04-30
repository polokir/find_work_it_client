import { useState } from "react";
import MyHeader from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import axios from "../../redux/axios-config";
import { useEffect } from "react";
import VacancyEnum from "../../components/VacancyEnum/VacancyEnum";
import { Container } from "../../styled-components/Container.styled";
import { useDispatch } from "react-redux";
import { logoutEmployee, logoutUser } from "../../redux/slice/auth";
import { PaginationItem } from "@mui/material";

const Home = ({ isAuth }) => {
  const dispatch = useDispatch();
  const [isRecrut, setIsRecrut] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearch,setIsSearch] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);

  const handleSearch = async (e) =>{
    e.preventDefault();
    const result = await axios.get(`/vacancy/search?title=${query}`);
    console.log(result.data)
    setVacancies(result.data);
    setIsSearch(true);
  }

  const handleLogout = async () =>{
    return isRecrut ? dispatch(logoutUser()) : dispatch(logoutEmployee())
  }

  useEffect(() => {
    const fetchVacancies = async () => {
      const result = await axios.get(`vacancy?page=${itemOffset}&limit=${20}`);
      // console.log(result, "|VACANCIES|");
      setVacancies(result.data);
    };
    if (isAuth && query === "") {
      fetchVacancies();
    }
  }, [isSearch,query]);

  console.log(vacancies)
  return (
    <>
      <MyHeader isAuth={isAuth} setClicked={setIsRecrut} clicked={isRecrut} logout={handleLogout} />
      <Hero isRecrut={isRecrut} setInput={setQuery} handleSearch={handleSearch}  />
      <div style={{ padding: "30px 0", backgroundColor: "#eeee" }}>
        <Container>
          {vacancies && 
            <VacancyEnum vacancies={vacancies} setVacancies={setVacancies}/>
          }
          
        </Container>
      </div>
      
    </>
  );
};
export default Home;

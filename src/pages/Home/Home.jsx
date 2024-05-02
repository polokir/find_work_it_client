import { useState } from "react";
import MyHeader from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import axios from "../../redux/axios-config";
import { useEffect } from "react";
import VacancyEnum from "../../components/VacancyEnum/VacancyEnum";
import { Container } from "../../styled-components/Container.styled";
import { useDispatch } from "react-redux";
import { logout, logoutEmployee, logoutUser } from "../../redux/slice/auth";
import { Pagination } from "@mui/material";

const Home = ({ isAuth }) => {
  const dispatch = useDispatch();
  const [isRecrut, setIsRecrut] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearch,setIsSearch] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount,setPageCont] = useState(0)

  const handleSearch = async (e) =>{
    e.preventDefault();
    const result = await axios.get(`/vacancy/search?title=${query}`);
    console.log(result.data)
    setVacancies(result.data);
    setIsSearch(true);
  }

  const handleLogout = async () =>{
    dispatch(logout);
    return isRecrut ? dispatch(logoutUser()) : dispatch(logoutEmployee())
  }

  const handlePageClick = (e,v) => {
    setPage(v);
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  useEffect(()=>{
    const updateTotal = async () =>{
      const {data} = await axios.get('vacancy/totalnumb');
      
      setPageCont(Math.ceil(data.total/20));
    }
    updateTotal();
  },[page]);

  useEffect(() => {
    const fetchVacancies = async () => {
      const {data} = await axios.get(`vacancy?page=${page}&limit=${20}`);
      setVacancies(data);
    };
    if (isAuth && query === "") {
      fetchVacancies();
    }
  }, [isAuth, query, page]);

  console.log(page)
  return (
    <>
      <MyHeader isAuth={isAuth} setClicked={setIsRecrut} clicked={isRecrut} logout={handleLogout} />
      <Hero isRecrut={isRecrut} setInput={setQuery} handleSearch={handleSearch}  />
      <div style={{ padding: "30px 0", backgroundColor: "#eeee" }}>
        <Container>
          {vacancies && 
            <VacancyEnum vacancies={vacancies} setVacancies={setVacancies}/>
          }
          

         {vacancies.length > 19 && <Pagination count={pageCount} page={page} onChange={handlePageClick}/>} 
        </Container>
      </div>
      
    </>
  );
};
export default Home;

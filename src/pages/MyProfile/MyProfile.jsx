import { Container } from "../../styled-components/Container.styled";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../redux/axios-config";
import RecrutBlock from "../../components/RecrutBlock/RecrutBlock";

const MyProfile = () => {
  const user = useSelector((state) => state.auth);
  const [recrutVacancies, setRecrutVacancies] = useState([]);

  useEffect(() => {
    const fetchMyvacan = async () => {
      const result =(user.recruiter) ? await axios.get("vacancy/recrut/vacancies") : await axios.get("vacancy/employee/applied");
      setRecrutVacancies(result.data);
    };
    fetchMyvacan();
  }, []);
  console.log(recrutVacancies);
  return (
    <Container>
      <LoginHeader />
      <RecrutBlock
        recrut={user.recruiter}
        employee={user.employee}
        vacancies={recrutVacancies}
        setVacancies={setRecrutVacancies}
      />
    </Container>
  );
};

export default MyProfile;

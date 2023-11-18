import axios from "../../redux/axios-config";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../styled-components/Container.styled";

import LoginHeader from "../../components/LoginHeader/LoginHeader";

const Vacancy = () => {
  const params = useParams();
  const [vacancy, setVacancy] = useState();

  useEffect(() => {
    const fetchVacancy = async () => {
      const result = await axios.get(`vacancy/${params.id}`);
      setVacancy(result.data);
    };
    if (params.id) {
      fetchVacancy();
    }
  }, []);

  return (
    <>
      <LoginHeader />
      <Container>
        
      </Container>
    </>
  );
};

export default Vacancy;

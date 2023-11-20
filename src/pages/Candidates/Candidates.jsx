import { useParams } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import { Container } from "../../styled-components/Container.styled";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../redux/axios-config";
import CandidateEnum from "../../components/CandidatesEnum/CandidatesEnum";

const Candidates = () => {
  const params = useParams();
  const [candidates,setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () =>{
        const result= await axios.get(`vacancy/can/${params.id}`);
        setCandidates(result.data);
    }
    fetchCandidates();
  }, []);

  console.log(candidates)
  return (
    <Container>
      <LoginHeader />
        <CandidateEnum candidates={candidates}/>
    </Container>
  );
};

export default Candidates;

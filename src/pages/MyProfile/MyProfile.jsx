import {Container} from "../../styled-components/Container.styled";
import LoginHeader from "../../components/LoginHeader/LoginHeader"
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../redux/axios-config";
import RecrutBlock from "../../components/RecrutBlock/RecrutBlock";

const MyProfile = () => {
    const user  = useSelector(state=>state.auth);
    const [recrutVacancies,setRecrutVacancies] = useState();

    useEffect(()=>{
        const fetchMyvacan = async () =>{
            const result = await axios.get("vacancy/recrut/vacancies");
            setRecrutVacancies(result.data);
        }
        if(user.recruiter){
            fetchMyvacan();
        }
    },[])
    console.log(recrutVacancies)
    return(
        <Container>
            <LoginHeader/>
            <RecrutBlock recrut={user.recruiter} vacancies={recrutVacancies}/>
        </Container>
    )
}

export default MyProfile;
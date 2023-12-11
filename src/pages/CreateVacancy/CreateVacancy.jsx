import { useState } from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import VacancyForm from "../../components/VacancyForm/VacancyForm";
import { Container } from "../../styled-components/Container.styled";
import { useCallback } from "react";
import axios from "../../redux/axios-config"
const CreateVacancy = () => {
  const [fields, setFields] = useState({ text: "" });
  const [description, setDescription] = useState("");
  const changeHandler = useCallback((description) =>{
    setDescription(description)
    setFields((prevData=>({...prevData,text: description})));
  },[])

  console.log(fields)
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
     
      const data = await axios.post("/vacancy",fields);
      console.log(data,"|NEW VACANCY|")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <Container>
      <LoginHeader />
      <VacancyForm
        desc={description}
        setDesc={changeHandler}
        text={fields}
        setText={setFields}
        submit = {submitHandler}
      />
    </Container>
  );
};

export default CreateVacancy;

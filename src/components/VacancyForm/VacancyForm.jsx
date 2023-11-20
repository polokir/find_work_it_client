import { Form, Input, InputContainer, SubmitButton, TextArea, TitleForm } from "./VacancyForm.styled";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useMemo } from "react";
import { useParams } from "react-router-dom";
const VacancyForm = ({setText,desc, setDesc,submit}) => {
  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Уведіть текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );
  const id = useParams();
  

  return (
    <Form onSubmit={(e)=>submit(e)}>
      <TitleForm>Нова вакансія</TitleForm>
      <InputContainer>
        <Input type="text" placeholder="Загловок вакансії..." 
        onChange={(e) => setText((prevData =>({
          ...prevData,
          title: e.target.value,
        })))}/>
      </InputContainer>

      <InputContainer>
        <SimpleMDE value={desc} 
        onChange={setDesc} options={options}/>
      </InputContainer>

      <InputContainer>
        <Input type="text" placeholder="Навички..."
        onChange={(e) => setText((prevData =>({
          ...prevData,
          skills: e.target.value,
        })))}/>
      </InputContainer>

      <InputContainer>
        <Input type="text" placeholder="Посилання на тестове завдання..."
        onChange={(e) => setText((prevData =>({
          ...prevData,
          test_task_link: e.target.value,
        })))}/>
      </InputContainer>

      <InputContainer>
        <Input type="text" placeholder="Заробітня плата..."
        salary={(e) => setText((prevData =>({
          ...prevData,
          salary: e.target.value,
        })))}/>
      </InputContainer>

      <InputContainer>
        <Input type="number" placeholder="Досвід..."
        onChange={(e) => setText((prevData =>({
          ...prevData,
          year_of_experience: e.target.value,
        })))}/>
      </InputContainer>

      <InputContainer>
        <Input type="text" placeholder="Місто"
        onChange={(e) => setText((prevData =>({
          ...prevData,
          location: e.target.value,
        })))}/>
      </InputContainer>
      <SubmitButton>Створити</SubmitButton>
    </Form>
  );
};

export default VacancyForm;

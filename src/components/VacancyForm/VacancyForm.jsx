import {
  Form,
  Input,
  InputContainer,
  SubmitButton,
  TextArea,
  TitleForm,
} from "./VacancyForm.styled";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SelectionList } from "../CityInput/CityInput";

import Cities from "../../constant_lists/ukr.json";

const VacancyForm = ({ setText, desc, setDesc, submit,text }) => {
  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Уведіть текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );
  const id = useParams();
  const [potCity, setPotCity] = useState([]);
  const [isCityFocus, setIsCityFocus] = useState(false);

  return (
    <Form onSubmit={(e) => submit(e)}>
      <TitleForm>Нова вакансія</TitleForm>
      <InputContainer>
        <Input
          type="text"
          placeholder="Загловок вакансії..."
          onChange={(e) =>
            setText((prevData) => ({
              ...prevData,
              title: e.target.value,
            }))
          }
        />
      </InputContainer>

      <InputContainer>
        <SimpleMDE value={desc} onChange={setDesc} options={options} />
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Навички..."
          onChange={(e) =>
            setText((prevData) => ({
              ...prevData,
              skills: e.target.value,
            }))
          }
        />
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Посилання на тестове завдання..."
          onChange={(e) =>
            setText((prevData) => ({
              ...prevData,
              test_task_link: e.target.value,
            }))
          }
        />
      </InputContainer>

      <InputContainer>
        <Input
          type="number"
          placeholder="Заробітня плата..."
          onChange={(e) =>
            setText((prevData) => ({
              ...prevData,
              salary: e.target.value,
            }))
          }
        />
      </InputContainer>

      <InputContainer>
        <Input
          type="number"
          placeholder="Досвід..."
          onChange={(e) =>
            setText((prevData) => ({
              ...prevData,
              year_of_experience: e.target.value,
            }))
          }
        />
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Місто"
          value={text.location}
          onChange={(e) =>
            setText((prevData) => ({
              ...prevData,
              location: e.target.value,
            }))
          }
          onFocus={()=>setIsCityFocus(true)}
        />

        <SelectionList
          focus={isCityFocus}
          inputedData={text.location}
          potentialCandidates={potCity}
          setInputed={setText}
          setFocus={setIsCityFocus}
          setPotentialCandidates={setPotCity}
          array={Cities}
          field={"location"}
        />
      </InputContainer>
      <SubmitButton>Створити</SubmitButton>
    </Form>
  );
};

export default VacancyForm;

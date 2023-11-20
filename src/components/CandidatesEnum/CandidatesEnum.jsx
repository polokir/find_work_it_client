import { CandidateEmail, CandidateItem, CandidateList, CandidateName, CandidatePhoto } from "./CandidatesEnum.styled";

const CandidateEnum = ({ candidates }) => {
  return (<CandidateList>{
         candidates.map((item) =>(
            <CandidateItem>
                <div>
                    <CandidatePhoto src={`http://localhost:4444/public/${item.avatarURL}`}/>
                </div>
                <CandidateName>{item.name}</CandidateName>
                <CandidateEmail>{item.email}</CandidateEmail>
                <CandidateEmail>{item.age} років</CandidateEmail>
                <CandidateEmail>Категорія: {item.position} </CandidateEmail>
                <CandidateEmail>Місто: {item.city}</CandidateEmail>
                <a href={`http://localhost:4444/public/${item.resumeUrl}`}>Реземе</a>
            </CandidateItem>
         ))
    }</CandidateList>);
};

export default CandidateEnum;

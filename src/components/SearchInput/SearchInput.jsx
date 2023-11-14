import { FindButton, Input, InputContainer } from "./SearchInput.styled";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const SearchInput = () => {
  return (
    <form action="">
    <InputContainer>
    <div style={{width:"80%", position:"relative",display:"flex",alignItems:"center"}}>
      <Input type="text" placeholder="Ваша професія?"/>
      <SearchOutlinedIcon style={{position:"absolute", left:"15px", fontSize:"25px", top:"15px"}}/>
    </div>
      
      <FindButton type="submit">
        <SearchOutlinedIcon fontSize="medium"/>
        Знайти</FindButton>
    </InputContainer>
    </form>
  );
};

export default SearchInput;

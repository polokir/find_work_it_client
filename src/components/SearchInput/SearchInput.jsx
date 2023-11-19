import { FindButton, Input, InputContainer } from "./SearchInput.styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchInput = ({ isRecrut, setInput }) => {
  return (
    <form action="">
      <InputContainer>
        <div
          style={{
            width: "80%",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={isRecrut ? "Знайти працівника" : "Ваша професія"}
          />
          <SearchOutlinedIcon
            style={{
              position: "absolute",
              left: "15px",
              fontSize: "25px",
              top: "15px",
            }}
          />
        </div>

        <FindButton type="submit">
          <SearchOutlinedIcon fontSize="medium" />
          Знайти
        </FindButton>
      </InputContainer>
    </form>
  );
};

export default SearchInput;

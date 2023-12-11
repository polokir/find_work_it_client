import { Container } from "../../styled-components/Container.styled";
import {
  HeroSection,
  HeroText,
  HeroTitle,
  TitleContainer,
} from "./Hero.styled";
import cat from "../../assets/cat.png";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";

const Hero = ({ isRecrut, setInput, handleSearch }) => {
  return (
    <HeroSection>
      <Container>
        <TitleContainer>
          {isRecrut ? (
            <>
              <HeroTitle>workinit.ua — працює на вас</HeroTitle>
              <HeroText>
                Розміщуйте вакансію безкоштовно. Тисячі кандидатів чекають на
                неї
              </HeroText>
              <HeroText>
                <Link style={{textDecoration:"underline",color:"inherit"}} to="vacancy/statistic">
                  {" "}
                  Ми підготували для вас свіжу підбірку статистики ринку.
                </Link>
              </HeroText>
            </>
          ) : (
            <>
              <HeroTitle>робота - двигун прогресу</HeroTitle>
              <HeroText>Знайди роботу своєї мрії серед тисяч вакансій</HeroText>
            </>
          )}
        </TitleContainer>
        <SearchInput
          isRecrut={isRecrut}
          setInput={setInput}
          handleSearch={handleSearch}
        />
      </Container>
    </HeroSection>
  );
};

export default Hero;

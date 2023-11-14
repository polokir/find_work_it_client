import { Container } from "../../styled-components/Container.styled";
import { HeroSection, HeroText, HeroTitle, TitleContainer } from "./Hero.styled";
import cat from "../../assets/cat.png";
import SearchInput from "../SearchInput/SearchInput";

const Hero = ({ isRecrut }) => {
  return (
    <HeroSection>
      <Container>
        <TitleContainer>
          {isRecrut ? (
            <>
            <HeroTitle>workinit.ua — працює на вас</HeroTitle>
            <HeroText>Розміщуйте вакансію безкоштовно. Тисячі кандидатів чекають на неї</HeroText>

            </>
          ) : (
            <>
              <HeroTitle>робота - двигун прогресу</HeroTitle>
              <HeroText>Знайди роботу своєї мрії серед тисяч вакансій</HeroText>
            </>
          )}
        </TitleContainer>
        <SearchInput isRecrut={isRecrut} />
      </Container>
    </HeroSection>
  );
};

export default Hero;

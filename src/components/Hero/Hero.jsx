import { Container } from "../../styled-components/Container.styled";
import { HeroSection, HeroTitle, TitleContainer } from "./Hero.styled";
import cat from "../../assets/cat.png";
import SearchInput from "../SearchInput/SearchInput";

const Hero = () => {
    return(
        <HeroSection>
            <Container>
                <TitleContainer>
                    <img src={cat} alt="" />
                    <HeroTitle>робота - двигун прогресу</HeroTitle>
                </TitleContainer>
                <SearchInput/>
            </Container>
        </HeroSection>
        
    )
}

export default Hero;
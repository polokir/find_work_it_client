import styled from 'styled-components';
import variables from '../../setting/variables';

export const MainContainer = styled.div`
display: flex;
align-items: center;
`
export const TitleContainer = styled.div`
display: none;
${variables.breakPoints.tablet}{
    display: block;
    width: 50%;
}
${variables.breakPoints.desktop}{
    display: block;
    width: 50%;
}
`

export const Title = styled.h1`

font-family: "Roboto", sans-serif;
font-weight: 700;
font-size: 32px;
margin-bottom: 20px;
`
export const MainText = styled.p`
max-width: 420px;
font-family: "Roboto", sans-serif;
font-family: "Roboto", sans-serif;
font-weight: 700;
font-size: 20px;
margin-bottom: 40px;
`

                
export const LinkChanger = styled.p`
font-family: "Roboto", sans-serif;
display: flex;
align-items: center;
font-size: 16px;
font-weight: 700;
color: ${({selector})=>(selector ? "#0082D1" : "#FFD100")};
cursor: pointer;

`

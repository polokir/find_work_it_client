import styled from "styled-components";
import variables from "../setting/variables";

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 15px;

 ${variables.breakPoints.mobile} {
    width: 480px;
  }

 ${variables.breakPoints.tablet} {
    width: 768px;
  }

  ${variables.breakPoints.desktop} {
    width: 1200px;
  }
`;

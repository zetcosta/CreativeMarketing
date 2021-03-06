import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle, Row } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
  }
`;

const StyledRow = styled(Row)`
  width: 82%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 90%;
  @media (max-width: 1200px) {
    width: 90%;
    text-align: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 500px) {
    width: 225px;
    height: 225px;
  }
`;

// const I = styled.i`
//   color: #a1aeb7;
//   font-size: 1.75em;
//   margin-right: 1em;
// `;

export default function Member({ title, description, img, name }) {
  return (
    <Wrapper>
      <StyledRow>
        <StyledColumn>
          <Img src={img} alt="" />
        </StyledColumn>
        <StyledColumn>
          <StyledTextColumn>
            <Subtitle>{name}</Subtitle>
            <Text title>{title}</Text>
            <Text>{description}</Text>
            {/* <Row margin=".5em 0">
            <I className="fab fa-facebook-f" />
            <I className="fab fa-linkedin-in" />
            <I className="fab fa-medium-m" />
          </Row> */}
          </StyledTextColumn>
        </StyledColumn>
      </StyledRow>
    </Wrapper>
  );
}

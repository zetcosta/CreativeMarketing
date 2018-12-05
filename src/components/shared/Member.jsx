import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle, Row } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 500px;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 100%;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 70%;
  @media (max-width: 780px) {
    width: 90%;
    text-align: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 70%;
  @media (max-width: 780px) {
    width: 90%;
  }
`;

const Box = styled.div`
  width: 450px;
  height: 450px;
  background: #f1f5f7;
  border-radius: 3px;
`;

// const I = styled.i`
//   color: #a1aeb7;
//   font-size: 1.75em;
//   margin-right: 1em;
// `;

export default function Member({ title, description, img, name }) {
  return (
    <Wrapper>
      <StyledColumn>
        <Box />
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
    </Wrapper>
  );
}
import React from "react";
import styled from "styled-components";
import { Column, Title, Row, Text, Button } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  @media (max-width: 780px) {
    padding: 2em 0 3em 0;
    text-align: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 780px) {
    text-align: center;
    width: 95%;
  }
`;

export default function Apply({ title, text }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <StyledColumn>
        <Text>{text}</Text>
        {/* <Subtitle>William Whatley, Senior Developer</Subtitle> */}
        <Row margin=".5em 0">
          <Button className="drift-open-chat" primary>
            Apply today
          </Button>
        </Row>
      </StyledColumn>
    </Wrapper>
  );
}
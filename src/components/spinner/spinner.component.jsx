import React from "react";
import { PageContainer, TextContainer, Text } from "./spinner.style";

const Spinner = (props) => {
  return (
    <PageContainer>
      <TextContainer>
        <Text>{props.message}</Text>
      </TextContainer>
    </PageContainer>
  );
};

Spinner.defaultProps = {
  message: "Buffering...",
};

export default Spinner;

import React from "react";
import {
  PageContainer,
  MessageContainer,
  Message,
  PopularContainer,
  Items,
} from "./not-found.style";
const NotFound = () => {
  return (
    <PageContainer>
      <MessageContainer>
        <Message>Oooops...Item was not found</Message>
      </MessageContainer>
      <PopularContainer>
        <Items>This is the popular item</Items>
        <Items>This is the popular item</Items>
        <Items>This is the popular item</Items>
      </PopularContainer>
    </PageContainer>
  );
};

export default NotFound;

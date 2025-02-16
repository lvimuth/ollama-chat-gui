import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  margin: 10px 0;
`;

const Bubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: ${({ sender }) =>
    sender === "user" ? "#3498db" : "#ecf0f1"};
  color: ${({ sender }) => (sender === "user" ? "white" : "black")};
`;

function Message({ message }) {
  return (
    <MessageContainer sender={message.sender}>
      <Bubble sender={message.sender}>
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </Bubble>
    </MessageContainer>
  );
}

export default Message;
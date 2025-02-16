import React from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  overflow-y: auto;
`;

const ChatItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ active }) => (active ? "#34495e" : "transparent")};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #34495e;
  }
`;

function ChatHistory({ chatHistory, setActiveChat }) {
  return (
    <HistoryContainer>
      {chatHistory.map((chat, index) => (
        <ChatItem
          key={index}
          active={chat.active}
          onClick={() => setActiveChat(chat)}
        >
          {chat.title}
        </ChatItem>
      ))}
    </HistoryContainer>
  );
}

export default ChatHistory;

import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { sendMessageToOllama } from "../utils/api";

const WindowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

function ChatWindow({ activeChat, setChatHistory, selectedModel }) {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    if (!selectedModel) {
      alert("Please select a model first!");
      return;
    }

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const response = await sendMessageToOllama(message, selectedModel);
    const botMessage = { text: response, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <WindowContainer>
      <MessagesContainer>
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Message message={msg} />
            </motion.div>
          ))}
        </AnimatePresence>
      </MessagesContainer>
      <ChatInput onSendMessage={handleSendMessage} />
    </WindowContainer>
  );
}

export default ChatWindow;

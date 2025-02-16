import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatHistory from "./components/ChatHistory";
import ChatWindow from "./components/ChatWindow";
import ModelSelector from "./components/ModelSelector";
import GlobalStyles from "./styles/GlobalStyles";
import { fetchModels } from "./utils/api";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    fetchModels().then((data) => setModels(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <ChatHistory chatHistory={chatHistory} setActiveChat={setActiveChat} />
        <ChatWindow
          activeChat={activeChat}
          setChatHistory={setChatHistory}
          selectedModel={selectedModel}
        />
        <ModelSelector
          models={models}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />
      </AppContainer>
    </>
  );
}

export default App;

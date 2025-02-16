import React from "react";
import styled from "styled-components";

const SelectorContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

function ModelSelector({ models, selectedModel, setSelectedModel }) {
  return (
    <SelectorContainer>
      <Select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="">Select a model</option>
        {models.map((model, index) => (
          <option key={index} value={model.name}>
            {model.name}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
}

export default ModelSelector;

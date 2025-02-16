import axios from "axios";

const OLLAMA_API_URL = "http://localhost:11434";

export const fetchModels = async () => {
  try {
    const response = await axios.get(`${OLLAMA_API_URL}/api/tags`);
    console.log("Fetched models:", response.data.models);
    return response.data.models;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
};

export const sendMessageToOllama = async (message, model) => {
  try {
    const response = await axios.post(`${OLLAMA_API_URL}/api/generate`, {
      model,
      prompt: message,
    });
    return response.data.response;
  } catch (error) {
    console.error("Error sending message to Ollama:", error);
    return "Sorry, something went wrong.";
  }
};

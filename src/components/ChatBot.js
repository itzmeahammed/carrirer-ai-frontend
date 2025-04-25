import React, { useState } from "react";
import axios from "../axios";
import { FaSpinner } from "react-icons/fa"; // Importing spinner icon for loading animation
import { Link } from "react-router-dom";
import Sidebar from "./sidebar"; // Import Sidebar component
import ReactMarkdown from "react-markdown"; // Import react-markdown to render markdown
import remarkGfm from "remark-gfm"; // Import remark-gfm for enhanced markdown parsing
import "./ChatBot.css"; // Assuming you'll add the styles in this file

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message) return; // Prevent sending empty messages
    setChatHistory([...chatHistory, { user: message }]);
    setIsLoading(true);

    try {
      // Send message to the backend
      const response = await axios.post("http://localhost:6777/chat", {
        message,
      });
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { bot: response.data.advice },
      ]);
    } catch (error) {
      console.error("Error in chatting", error);
    }
    setIsLoading(false);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleCareerSuggestion = async () => {
    const userId = localStorage.getItem("user_id"); // Get the user_id from localStorage
    if (!userId) return;

    setChatHistory([
      ...chatHistory,
      { user: "Can you suggest a career path for me?" },
    ]);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:6777/get-career-path",
        {
          user_id: userId,
        }
      );
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { bot: response.data.career_suggestion },
      ]);
    } catch (error) {
      console.error("Error in getting career suggestion", error);
    }
    setIsLoading(false);
  };

  return (
    <div className='chatbot-container'>
      <Sidebar /> {/* Include Sidebar here */}
      <div className='chatbox'>
        <h1 className='chat-header'>Welcome to Career Path AI Chatbot</h1>
        <div className='chat-history'>
          {chatHistory.map((entry, index) => (
            <div key={index} className='chat-entry'>
              {entry.user && (
                <div className='chat-bubble user-bubble'>
                  <div className='avatar user-avatar'></div>
                  <span>{entry.user}</span>
                </div>
              )}
              {entry.bot && (
                <div className='chat-bubble bot-bubble'>
                  <div className='avatar bot-avatar'></div>
                  <span>
                    {isLoading && index === chatHistory.length - 1 ? (
                      <FaSpinner className='spinner' />
                    ) : (
                      // Render the bot's response using react-markdown
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {entry.bot}
                      </ReactMarkdown>
                    )}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='chat-input-container'>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Ask something about career paths...'
            className='chat-input'
          />
          <button onClick={handleSendMessage} className='send-button'>
            Send
          </button>
          <button onClick={handleCareerSuggestion} className='send-button'>
            Get Career Suggestion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

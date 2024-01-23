import React, { useState } from "react";
import { TbMessages } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

const ChatCard = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm facing mobility challenges and would love to connect with others who understand. Any tips for making daily activities easier?",
      type: "receiver",
    },
    {
      text: "Hi there! I've been using a wheelchair for a few years and found that ramps and wider doorways make a big difference. Happy to share more tips!",
      type: "sender",
    },
    {
      text: "That's great advice! I'm also looking for accessible transportation options. Any recommendations?",
      type: "receiver",
    },
    {
      text: "Absolutely! I've had success with accessible ride-sharing services. They provide wheelchair-friendly vehicles. Let me know if you need more info!",
      type: "sender",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") {
      // Don't send empty messages
      return;
    }

    // Add the new message to the messages array
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, type: "sender" },
    ]);

    // Clear the input field
    setInputValue("");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "1.5rem",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "2.5rem",
            minHeight: "2.5rem",
            backgroundColor: "blue",
            opacity: "0.65",
            borderRadius: "0.5rem",
          }}
        >
          <TbMessages style={{ color: "white", fontSize: "1.4rem" }} />
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 550 }}>
          Mobility Challenges
        </div>
      </div>
      <hr />
      <div
        style={{
          backgroundColor: "lightgray",
          borderRadius: "1.5rem",
          padding: "1rem",
          width: "100%",
          marginTop: "1rem",
          maxHeight: "70vh",
          overflowY: "scroll",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: message.type === "sender" ? "#2234da" : "gray",
              width: "45%",
              padding: "1rem",
              borderRadius: "1rem",
              margin: "1rem",
              marginLeft: message.type === "receiver" ? "0" : "auto",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: "550",
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "lightgray",
          borderRadius: "1.5rem",
          padding: "1rem",
          width: "100%",
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          height: "5.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter message"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            color: "#2234da",
            width: "100%",
            fontSize: "1rem",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: "#2234da",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "1rem",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "550",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span>Send</span>
          <VscSend />
        </button>
      </div>
    </div>
  );
};

export default ChatCard;

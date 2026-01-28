import React, { useState, useEffect, useRef } from "react";
import chatbotGif from "../../../assets/chatbot.gif"; // Import the gif image
import { PaperPlaneRight, XCircle } from "@phosphor-icons/react";
import replyLoadingGIF from "../../../assets/reply-loading.gif" // Import loading GIF

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([
        {
            text: "Hello! How can I assist you with farming or organic farming today?",
            sender: "bot",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const chatContainerRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (userInput.trim() !== "") {
            // Add user's message to chat
            const newMessages = [
                ...messages,
                { text: userInput, sender: "user" },
            ];
            setMessages(newMessages);
            setUserInput(""); // Clear input field

            setIsLoading(true); // Set loading to true before sending the message

            try {
                // Replace with your actual Gemini API key
                const geminiApiKey = 'AIzaSyAdPHUPF3huKtTaD4pbbpSQsKsOppJY3GA'; // Make sure to replace with the correct key
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

                // Prepare the request body with the user query
                const requestBody = {
                    contents: [{
                        parts: [{
                            text: `You are an expert assistant with extensive knowledge in the field of farming, specifically organic farming. Your job is to assist the user by providing helpful, accurate, and educational responses regarding the following topics:\n\n1. **Organic Farming**: Knowledge of organic farming practices, such as soil health, biodiversity, crop rotation, pest management, and sustainable farming techniques.\n2. **Sustainable Agriculture**: Techniques and methods that minimize environmental impact, including sustainable irrigation, water conservation, and ethical treatment of animals.\n3. **Crop and Livestock Management**: Best practices for growing crops and raising livestock organically, focusing on organic techniques.\n4. **Farming Techniques**: Recommendations on sustainable farming practices like no-till farming, permaculture, and agroecology.\n\nIf the user asks a question that is unrelated to farming, agriculture, or organic farming, politely inform them that you only provide assistance related to farming topics.\n\nUser Question: ${userInput}`
                        }]
                    }]
                };

                // Call Gemini API with the correct endpoint
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                const data = await response.json();
                console.log(data);  // Log the response to check the data format

                // Extract the response text from Gemini API response
                if (data && data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
                    const botResponse = { text: data.candidates[0].content.parts[0].text, sender: 'bot' };
                    setMessages((prevMessages) => [...prevMessages, botResponse]);
                } else {
                    // Fallback for when no valid response is found
                    const fallbackMessage = { 
                        text: "Sorry, I wasn't able to understand that. Can you please ask something related to farming or organic farming?", 
                        sender: "bot" 
                    };
                    setMessages((prevMessages) => [...prevMessages, fallbackMessage]);
                }
            } catch (error) {
                console.error('Error:', error);
                const errorMessage = { text: "Sorry, there was an error while processing your query. Please try again.", sender: 'bot' };
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            } finally {
                setIsLoading(false);  // Set loading to false once response is received
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && userInput.trim() !== "") {
            handleSendMessage();
        }
    };

    // Auto scroll to the bottom after each message
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const inputRef = useRef();
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus(); // Set focus on input when chat window opens
        }
    }, [isOpen]);

    // Function to convert markdown-like text to HTML (for basic formatting)
    const convertMarkdownToHtml = (text) => {
        // Bold (replace **bold** with <b>bold</b>)
        text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
        
        // Italics (replace *italic* with <i>italic</i>)
        text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");
        
        // Links (replace [text](url) with <a href="url">text</a>)
        text = text.replace(/\[([^\]]+)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // Newlines (replace newlines with <br />)
        text = text.replace(/\n/g, "<br />");

        // Lists (simple unordered list)
        text = text.replace(/^\*\s(.*)$/gm, "<ul><li>$1</li></ul>");
        
        // Code (replace `code` with <code>code</code>)
        text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

        return text;
    };

    return (
        <div>
            {/* Chatbot button with GIF */}
            <div
                className={`fixed bottom-6 right-8 cursor-pointer flex justify-center items-center
                transition-all duration-700 ease-in-out ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
                onClick={toggleChat}
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 10,
                    transform: isOpen ? "scale(0)" : "scale(1)",
                }}
            >
                <img
                    src={chatbotGif}
                    alt="Chatbot"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Chat panel (chat window) */}
            <div
                className={`fixed bottom-6 right-8 transition-all duration-700 ease-in-out z-50
                ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
                w-[400px] h-[550px] bg-white border-2 border-gray-200 rounded-lg shadow-xl overflow-hidden`}
                style={{
                    transformOrigin: "bottom right",
                    transform: isOpen ? "scale(1)" : "scale(0)",
                    opacity: isOpen ? 1 : 0,
                    transition: "all 0.7s ease-in-out",
                    borderRadius: "15px",
                }}
            >
                <div className="bg-primary-600 text-white p-5 flex justify-between items-center rounded-t-lg">
                    <span className="text-xl font-semibold">
                        Ask Me Anything
                    </span>
                    <button
                        className="text-white text-3xl"
                        onClick={toggleChat}
                    >
                        <XCircle />
                    </button>
                </div>

                <div
                    ref={chatContainerRef}
                    className="p-5 h-[calc(100%-150px)] overflow-y-auto space-y-6 custom-scrollbar"
                    style={{
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                    }}
                >
                    {/* Display messages */}
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
                        >
                            <div
                                className={`flex items-start space-x-3 ${message.sender === "bot" ? "flex-row" : "flex-row-reverse"}`}
                            >
                                {/* Avatar with gif (Bot) */}
                                {message.sender === "bot" && (
                                    <div className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center`}>
                                        <img
                                            src={chatbotGif}
                                            alt="Bot Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* The message container */}
                                <div
                                    className={`w-full p-4 rounded-lg ${message.sender === "bot" ? "text-primary-900" : "text-primary-900"}`}
                                    style={{
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                                        wordBreak: "break-word",
                                        whiteSpace: "normal",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    {/* Render the converted HTML */}
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: convertMarkdownToHtml(message.text),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Show loading GIF if bot is processing */}
                    {isLoading && (
                        <div className="flex justify-leftr items-center space-x-3">
                            <img
                                src={replyLoadingGIF}
                                alt="Loading..."
                                className="w-16 h-16 animate-spin"
                            />
                        </div>
                    )}
                </div>

                {/* Input area (fixed at the bottom) */}
                <div className="bg-white p-4 flex justify-between items-center border-t border-primary-200 rounded-b-lg sticky bottom-0">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                        onKeyDown={handleKeyDown}
                        className="w-full p-4 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ease-in-out"
                        placeholder="Type a message..."
                        style={{ fontSize: "16px" }}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="p-3 mx-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-200"
                    >
                        <PaperPlaneRight className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

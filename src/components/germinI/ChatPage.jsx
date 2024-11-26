import React, { useState } from 'react';
import './chat.css';
import { FaFileUpload, FaMicrophone } from 'react-icons/fa';
import LeftBar from '../leftbar/Leftbar';

const ChatWindow = ({ messages, sendMessage }) => {
    const [message, setMessage] = React.useState('');
    const [error, setError] = useState("")
    const [value, setValue] = useState("")
    const [chatHistory, setChatHistory] = useState([])
    const [loading, setLoading] = useState(false)

    const supriseOptions = [
        "Who is the Father of Ai?",
        "What is the color of water",
        "What is the Capital of Cameroon",
        "How many countries are there in Africa?",
        "Who is the father of philosophy"
    ]

    const supriseMe = () => {
        const randomSuprise = supriseOptions[Math.floor(Math.random() * supriseOptions.length)]
        setValue(randomSuprise)
    }

    const handleResponse = async () => {
        setLoading(true)
        if (!value) {
            setError("Input field is empty")
        }

        try {

            // HANDLE RESPONSE FROM THE BACKEND
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    history: chatHistory,
                    message: value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }

            }
            const response = await fetch('http://localhost:8000/chat', options)
            const data = await response.text()
            console.log(data);
            // set the history
            setChatHistory(prev => [...prev, {
                role: "user",
                parts: [{ text: value }]
            },

            {
                role: "model",
                parts: [{ text: data }]
            }

            ])

            setValue("")

        } catch (err) {
            setError("Error occured while getting chat")

        } finally {
            setLoading(false)
        }
    };

    const clearChat = () => {
        setValue("")
        setError("")
        setChatHistory([])
    }
    // console.log("get chat " + chatHistory[0].parts.text)

    return (
        <div className="chat-window">
            <div className="middle">

            </div>
            <div className="img-screen">
                <img src="/ai.png" alt="" />
            </div>
            <div className="chat">
                {chatHistory.map((chatItem, i) => (
                    <div className="chating" key={i}>
                        {loading && <p className='loading'>loading...</p>}

                        

                        <div className={chatItem.role === "user" ? "question" : "answer"}>

                            <div className="role">
                                {chatItem.role === "model" ? <img src="/ai.png" className='model-avatar' alt='model' /> : <img src="/user.png" className='model-avatar' alt='user' />

                                }
                                <span>{chatItem.role}</span>:
                            </div>

                            {chatItem.parts[0].text}<span className=''></span></div>

                    </div>


                ))}


            </div>




            <button className="suprise" onClick={supriseMe} disabled={chatHistory.length > 0}>Suprise me</button>

            <div className="input">
                <span>
                    <div className="items">
                        <FaMicrophone />
                        <FaFileUpload />
                    </div>
                </span>
                <input
                    type="text"
                    value={value}
                    placeholder="Type your message..."
                    onChange={(e) => setValue(e.target.value)}
                />
                {!error ? (
                    <button onClick={handleResponse}>Ask Seed</button>

                ) : (
                    <button onClick={clearChat}>Clear</button>

                )}

            </div>
            {error && (<p className='error'>{error}</p>)}

            <div className="right">
                <LeftBar />
            </div>
        </div>
    );
};

export default ChatWindow;


// <div className="messages">
//     {messages.map((msg, index) => (
//         <div key={index} className="message">
//             {msg}
//         </div>
//     ))}
// </div>
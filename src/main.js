import React from 'react';
// import Sidebar from './Sidebar';
// import ChatWindow from './ChatWindow';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ChatWindow from './components/germinI/ChatPage';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftbar/Leftbar';

const Main = () => {
    const [chats, setChats] = React.useState([
        { name: 'General', messages: ['Hello, everyone!', 'How are you all doing?', 'This is a general chat.', 'Welcome to the general chat!', 'Feel free to discuss anything here.', 'What’s new today?', 'Anyone watched the latest movie?', 'Share your thoughts!', 'Good morning!', 'Have a great day!'] },
        { name: 'Work', messages: ['Morning team!', 'Any updates on the project?', 'Don’t forget the deadline.', 'Let’s have a meeting at 2 PM.', 'Great job on the presentation!', 'Who’s handling the next task?', 'Can someone review my work?', 'I need help with this bug.', 'Reminder: Client meeting tomorrow.', 'Thanks for your hard work!'] },
        { name: 'Friends', messages: ['Hey guys!', 'What’s the plan for the weekend?', 'Let’s catch up soon.', 'Missing our hangouts.', 'Any new places to try?', 'Who’s up for a movie night?', 'Remember the good old days?', 'Let’s plan a trip!', 'Happy birthday, John!', 'Stay in touch!'] },
    ]);
    const [currentChat, setCurrentChat] = React.useState(0);

    const selectChat = (index) => {
        setCurrentChat(index);
    };

    const sendMessage = (message) => {
        const newChats = [...chats];
        newChats[currentChat].messages.push(message);
        setChats(newChats);
    };

    return (
        <div className="app">
            <Navbar />
            <Sidebar chats={chats} selectChat={selectChat} />
            <ChatWindow
                messages={chats[currentChat].messages}
                sendMessage={sendMessage}
            />
        </div>
    );
};

export default Main;

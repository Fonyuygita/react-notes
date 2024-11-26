import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './Todo.css';

const images = [

    'https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/757240/pexels-photo-757240.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/757240/pexels-photo-757240.jpeg?auto=compress&cs=tinysrgb&w=600'

];

function App() {
    const [todos, setTodos] = useState(() => { const savedTodos = localStorage.getItem('todos'); return savedTodos ? JSON.parse(savedTodos) : []; });
    const [input, setInput] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)); }, [todos]);



    const addTodo = () => {
        if (input.trim()) {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setTodos([...todos, { text: input, completed: false, time }]);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const toggleTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const updateTodo = (index, text) => {
        const newTodos = [...todos];
        newTodos[index].text = text;
        setTodos(newTodos);
    };

    return (
        <div className="app-container">
            <div className="slideshow">
                <img src={images[currentImageIndex]} alt="Slideshow" />
            </div>
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>
                    <FaPlus />
                </button>
            </div>
            <div className="todos-container">
                {todos.map((todo, index) => (
                    <div className="todo-item" key={index}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(index)}
                        />
                        <input
                            className={`todo-text ${todo.completed ? 'completed' : ''}`}
                            value={todo.text}
                            onChange={e => updateTodo(index, e.target.value)}
                        />
                        <button onClick={() => deleteTodo(index)}>
                            <FaTrash />
                        </button>
                        <span className="todo-time">{todo.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

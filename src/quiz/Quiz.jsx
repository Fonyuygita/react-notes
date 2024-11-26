import React, { useState, useEffect } from 'react';
// import { getCountries } from './service/api';
import './quiz.css';
import { getCountries } from '../services/api';

const QuizApp = () => {
    const [countries, setCountries] = useState([]);
    const [currentCountry, setCurrentCountry] = useState({});
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data = await getCountries();
            console.log(data)
            setCountries(data);
            setCurrentCountry(data[Math.floor(Math.random() * data.length)]);
        }
        fetchData();
    }, []);

    const checkAnswer = () => {
        if (userAnswer.toLowerCase() === currentCountry.capital.toLowerCase()) {
            setScore(score + 1);
            setUserAnswer('');
            setCurrentCountry(countries[Math.floor(Math.random() * countries.length)]);
        } else {
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setScore(0);
        setGameOver(false);
        setUserAnswer('');
        setCurrentCountry(countries[Math.floor(Math.random() * countries.length)]);
    };
    console.log(countries)
    console.log(currentCountry.capital)

    return (
        <div className="app">
            <header>
                <h1>Country Capital Game</h1>
            </header>
            <main>
                {gameOver ? (
                    <div className="game-over">
                        <h2>Game Over!</h2>
                        <p>Your Score: {score}</p>
                        <button onClick={resetGame}>Start Over</button>
                    </div>
                ) : (
                    <div className="game">
                        <h2>What is the capital of {currentCountry.capital}?</h2>
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <button onClick={checkAnswer}>Submit</button>
                        <p>Score: {score}</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default QuizApp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const { advice } = response.data.slip;
            setAdvice(advice);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGetAdvice = () => {
        fetchAdvice();
    };

    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={handleGetAdvice}>
                    <span>I NEED ADVICE!</span>
                </button>
            </div>
        </div>
    );
}

export default App;

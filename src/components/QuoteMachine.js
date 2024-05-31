import React, { useState, useEffect } from 'react';
import './QuoteMachine.css';
import { FaTwitter } from 'react-icons/fa';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaTwitter /> {/* Icono de Twitter */}
        </a>
    </div>
  );
};

export default QuoteMachine;

import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.scss';
const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
function App() {
  const [quote,setQuote]=useState("adsa");
  const [author,setAuthor]=useState("dasd");
  const [quotesArray,setquotesArray]=useState(null);
  const [currentQuote, setCurrentQuote] = useState({ author: '', quote: '' });
  const fetchQuotes = async (url) =>{
    const response = await fetch(url);
    const prasedJSON = await response.json();
    setquotesArray(prasedJSON.quotes);
  }
  const getRandomquote = ()=>{
    let randomNumber=Math.floor(quotesArray.length*Math.random())
    setQuote(quotesArray[randomNumber].quote);
    setAuthor(quotesArray[randomNumber].author);
  }
  useEffect(()=>{
    fetchQuotes(quoteURL)
  },[quoteURL]);  
  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text">{quote}</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={()=>getRandomquote()}>c</button>        
        <a id="tweet-quote" href="twitter.com/intent/tweet">d</a>
      </div>
    </div>
  );
}

export default App;

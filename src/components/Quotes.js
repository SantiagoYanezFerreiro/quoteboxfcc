import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNumber = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNumber];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  }

  function handleClick() {
    getQuote();
  }

  return (
    <div id="quote-box">
      <div id="text">
        <p class="quote-text">
          <i class="fa-sharp fa-solid fa-quote-left"></i>
          {quote}
        </p>
      </div>
      <div id="author">
        <p>{author}</p>
      </div>
      <div id="buttons">
        <div id="tweet-quote">
          <a href={`https://twitter.com/intent/tweet`}>
            <i class="fa-brands fa-twitter twitter-icon"></i>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">
          Get New Quote!
        </button>
      </div>
    </div>
  );
}

/*quote author props*/

import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div id="quote-box">
      <div id="text">
        <p></p>
      </div>
      <div id="author">
        <p></p>
      </div>
      <div id="buttons">
        <div id="tweet-quote">
          <a href="twitter.com/intent/tweet">Tweet link</a>
        </div>
        <button id="new-quote"></button>
      </div>
    </div>
  );
}

/*quote author props*/

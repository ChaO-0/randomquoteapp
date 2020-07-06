import React, { useState, useEffect } from "react";
import { getRandomColor, getRandomQuote } from "./getRandom";

const SimpleCard = () => {
  const [Quote, setQuote] = useState({
    content: "",
    author: "",
    error: "",
    loading: false,
  });
  const [Color, setColor] = useState("");

  useEffect(() => {
    const color = getRandomColor();
    document.body.style = `background: ${color}`;
    setColor(color);
    getRandomQuote(setQuote);
  }, []);

  const handleClick = () => {
    setQuote({ ...Quote, loading: true });
    const color = getRandomColor();
    setTimeout(() => {
      document.body.style = `background: ${color}`;
      setColor(color);
      getRandomQuote(setQuote);
    }, 500);
  };

  return (
    <>
      <blockquote style={{ color: !!Color ? Color : "" }}>
        <div className={Quote.loading ? "quote fade" : "quote"}>
          {!!Quote.content
            ? Quote.content
            : Quote.error
            ? Quote.error
            : "Loading..."}
        </div>
        <span
          className={Quote.loading ? "fade" : ""}
          style={{ color: !!Color ? Color : "" }}
        >
          -
          {!!Quote.author
            ? Quote.author
            : Quote.error
            ? Quote.error
            : "Loading..."}
        </span>
        <div>
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${Quote.content}" -${Quote.author}`}
            target="_blank"
          >
            <button
              className="soc"
              style={{ background: !!Color ? Color : "" }}
            >
              <i className="fa fa-twitter"></i>
            </button>{" "}
          </a>
          <button
            className="new-quote"
            style={{ background: !!Color ? Color : "" }}
            onClick={handleClick}
          >
            New Quote
          </button>
        </div>
      </blockquote>
      <div className="footer">Copyright&copy;ChaO</div>
    </>
  );
};

export default SimpleCard;

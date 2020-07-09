import React, { useState, useEffect } from "react";
import { getRandomColor } from "./getRandom";
import { fetchQuote } from "../redux/actions";
import { connect } from "react-redux";
import QuoteContent from "./QuoteContent";
import QuoteButtons from "./QuoteButtons";

const SimpleCard = ({ fetchQuote }) => {
  const [Color, setColor] = useState("");

  const setBodyColor = (color) => {
    document.body.style = `background: ${color}`;
  };

  useEffect(() => {
    const color = getRandomColor();
    setBodyColor(color);
    setColor(color);
    fetchQuote();
  }, [fetchQuote]);

  const handleClick = () => {
    const color = getRandomColor();
    setBodyColor(color);
    setColor(color);
    fetchQuote();
  };

  return (
    <>
      <blockquote style={{ color: !!Color ? Color : "" }}>
        <QuoteContent color={Color} />
        <QuoteButtons color={Color} handleClick={handleClick} />
      </blockquote>
      <div data-testid="footer" className="footer">
        Copyright&copy;ChaO
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(null, mapDispatchToProps)(SimpleCard);

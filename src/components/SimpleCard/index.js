import React, { useState, useEffect } from "react";
import { getRandomColor } from "./getRandom";
import { fetchQuote } from "../redux/actions";
import { connect } from "react-redux";
import QuoteContent from "./QuoteContent";
import QuoteButtons from "./QuoteButtons";

const SimpleCard = ({ fetchQuote }) => {
  // State yang akan digunakan untuk mengubah warna pada font, button dan body
  // dengan menggunakan useState hook
  const [Color, setColor] = useState("");

  const setBodyColor = (color) => {
    document.body.style = `background: ${color}`;
  };

  // Lifecycle, namun menggunakan hook. Sama seperti componentDidMount,
  // agar fetchAPI dilakukan pada saat komponen di render dan tidak hanya saat di klik saja
  useEffect(() => {
    const color = getRandomColor();
    setBodyColor(color);
    setColor(color);
    fetchQuote();
  }, [fetchQuote]);

  // Fungsi handle click untuk mengatur event onClick agar warna body dan font berubah sesuai fungsi
  // getRandomColor
  const handleClick = () => {
    const color = getRandomColor();
    setBodyColor(color);
    setColor(color);
    fetchQuote();
  };

  return (
    <>
      <blockquote style={{ color: !!Color ? Color : "" }}>
        {/* Composing and Extracting Component untuk memenuhi syarat ke 4 
        dan untuk mempermudah pembacaan kode */}
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

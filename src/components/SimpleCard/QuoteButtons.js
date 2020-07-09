import React from "react";
import { connect } from "react-redux";

// Component ini berfungsi untuk menampilkan button serta
// Melakukan fetchAPI disaat button di klik
const QuoteButtons = ({ quote, author, color, handleClick }) => {
  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" -${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="soc"
          style={{ background: !!color ? color : "" }}
          aria-label="Left Align"
        >
          <i className="fa fa-twitter"></i>
        </button>
      </a>
      <button
        className="new-quote"
        style={{ background: !!color ? color : "" }}
        onClick={handleClick}
        aria-label="Right Align"
      >
        New Quote
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quote: state.quote.content,
  author: state.quote.author,
});

// Connect reducer ke component
export default connect(mapStateToProps)(QuoteButtons);
export { QuoteButtons };

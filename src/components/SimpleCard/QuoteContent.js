import React from "react";
import { connect } from "react-redux";

const QuoteContent = ({ quote, author, error, loading, color }) => {
  return (
    <>
      <div className={loading ? "quote fade" : "quote"}>
        {quote ? quote : error ? error : ""}
      </div>
      <span
        className={loading ? "fade" : ""}
        style={{ color: !!color ? color : "" }}
      >
        -{!!author ? author : error ? error : ""}
      </span>
    </>
  );
};

const mapStateToProps = (state) => ({
  quote: state.quote.content,
  author: state.quote.author,
  error: state.error,
  loading: state.loading,
});

export default connect(mapStateToProps)(QuoteContent);
export { QuoteContent };

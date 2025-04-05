import React from "react";
import { connect } from "react-redux";

// Component ini berfungsi untuk menampilkan quote yang didapat pada saat
// Melakukan fetch API, serta untuk lebih mempercantik component ini
// Saat loading component(request) saya membuat fade in dan fade out secara manual
const QuoteContent = ({ quote, author, error, loading, color }) => {
  console.log({ quote, author });
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
  quote: state.quote.quote,
  author: state.quote.author,
  error: state.error,
  loading: state.loading,
});

export default connect(mapStateToProps)(QuoteContent);
export { QuoteContent };

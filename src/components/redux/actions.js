import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const fetchQuoteRequest = () => ({
  type: FETCH_QUOTE_REQUEST,
});

export const fetchQuoteSuccess = (quote) => ({
  type: FETCH_QUOTE_SUCCESS,
  payload: quote,
});

export const fetchQuoteFailure = (error) => ({
  type: FETCH_QUOTE_FAILURE,
  payload: error,
});

//Fetch API untuk mendapatkan data quotes
export const fetchQuote = () => (dispatch) => {
  dispatch(fetchQuoteRequest());
  setTimeout(() => {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => {
        const quote = res.data;
        dispatch(fetchQuoteSuccess(quote));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchQuoteFailure(error));
      });
  }, 300);
};

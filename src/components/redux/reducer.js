import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "./actionTypes";

const initState = {
  quote: [],
  error: "",
  loading: false,
};

// Reducer untuk memberitahu redux apa yang harus dilakukan saat melakukan fetch API
const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        quote: action.payload,
        error: "",
      };
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
        quote: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

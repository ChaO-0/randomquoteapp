import axios from "axios";

const getRandomColor = () => {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  const random = Math.floor(Math.random() * 12);
  return colors[random];
};

const getRandomQuote = (setQuote) => {
  const url = "https://api.quotable.io/random";
  axios
    .get(url)
    .then((res) => {
      setQuote({
        content: res.data.content,
        author: res.data.author,
        loading: false,
      });
    })
    .catch((err) =>
      setQuote({
        error: err,
      })
    );
};

export { getRandomColor, getRandomQuote };
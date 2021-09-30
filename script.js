const searchBtn = document.getElementById("submit");
const search = document.getElementById("myInput");
const price = document.getElementById("price-body");

let data = [];
let prices = [];

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  data.push(search.value);
  console.log(data);

  randomPrice();
  updateDOM(randomPrice);
});

const updateDOM = (func) => {
  price.innerText = `$${prices[1]}`;
};

const randomPrice = () => {
  for (i = 0; i < 3; i++) {
    let price = Math.floor(Math.random() * 100000);
    prices.push(price);
  }
  console.log(prices);
};

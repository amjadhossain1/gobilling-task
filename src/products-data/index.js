import electronics from "./electronics";
import homeLifeStyle from "./home-lifestyle";
import menFashions from "./men-fashions";
import womenFashions from "./women-fashions";

const productsData = [
  ...electronics,
  ...homeLifeStyle,
  ...menFashions,
  ...womenFashions,
];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(productsData);

export default productsData;

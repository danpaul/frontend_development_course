// const myFunction = () => {
//   console.log("foo!");
// };

// module.exports = myFunction;

export const fruitType = "fruit";

export const printFruit = ({ type, name }) => {
  console.log(`Fruit type: ${type}, name: ${name}`);
};

export default class Fruit {
  constructor({ type = fruitType, name } = {}) {
    this.type = type;
    this.name = name;
  }
}

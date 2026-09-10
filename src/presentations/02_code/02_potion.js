/*
Alice has a potion that makes her grow or shrink.
She can either drink the "Eat Me" potion or the "Drink Me" potion.
When she eats the "Eat Me" potion, she grows.
When she drinks the "Drink Me" potion, she shrinks.

What is the expected output?

*/

const getPotion = (eatMe) => {
  if (eatMe) {
    return (alice) => {
      return alice.toUpperCase();
    };
  }
  return (alice) => {
    return alice.toLowerCase();
  };
};

const takePotion = (alice, potion) => {
  return potion(alice);
};

const alice = "Alice";
console.log(takePotion(alice, getPotion(true)));
console.log(takePotion(alice, getPotion(false)));

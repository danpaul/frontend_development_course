const alice = {
    name: "Alice",
    greet() {
      console.log(this.name);
    },
  };
  
  alice.greet();
  
  const greet = alice.greet;
  greet();
  
  const hatter = { name: "Mad Hatter", greet };
  hatter.greet();
  
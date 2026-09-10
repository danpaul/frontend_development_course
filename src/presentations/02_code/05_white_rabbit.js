/*
  The White Rabbit is always late.

  Don't run this yet. Write down the order of the console.log lines.
  Compare with a partner, then:  node 05_white_rabbit.js
*/

import https from "node:https";

function getJson(url, callback) {
  https
    .get(url, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        callback(JSON.parse(body));
      });
    })
    .on("error", (err) => {
      console.error("Request failed:", err.message);
    });
}

console.log("Alice: I'll ask the catalog for a reader.");

getJson("https://jsonplaceholder.typicode.com/users/1", (user) => {
  console.log("Catalog:", user.name);

  getJson(
    `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    (posts) => {
      console.log("Catalog: first title is", posts[0].title);
    },
  );
});

console.log("Alice: Meanwhile I'll look around the stacks.");

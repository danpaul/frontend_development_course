/*
  Same catalog requests as 05_white_rabbit.js, now with promises.

  Don't run this yet. Write down the order of the console.log lines.
  Compare with a partner, then:  node 06_white_rabbit_promise.js
*/

import https from "node:https";

function getJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          resolve(JSON.parse(body));
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

console.log("Alice: I'll ask the catalog for a reader.");

getJson("https://jsonplaceholder.typicode.com/users/1")
  .then((user) => {
    console.log("Catalog:", user.name);
    return getJson(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    );
  })
  .then((posts) => {
    console.log("Catalog: first title is", posts[0].title);
  })
  .catch((err) => {
    console.error("Request failed:", err.message);
  })
  .finally(() => {
    console.log("Catalog: that's all I have.");
  });

console.log("Alice: Meanwhile I'll look around the stacks.");

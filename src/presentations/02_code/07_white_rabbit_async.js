/*
  Same catalog requests as 06_white_rabbit_promise.js, now with async/await.

  Don't run this yet. Write down the order of the console.log lines.
  Compare with a partner, then:  node 07_white_rabbit_async.js
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

async function askCatalog() {
  try {
    const user = await getJson(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    console.log("Catalog:", user.name);

    const posts = await getJson(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    );
    console.log("Catalog: first title is", posts[0].title);
  } catch (err) {
    console.error("Request failed:", err.message);
  } finally {
    console.log("Catalog: that's all I have.");
  }
}

console.log("Alice: I'll ask the catalog for a reader.");

askCatalog();

console.log("Alice: Meanwhile I'll look around the stacks.");

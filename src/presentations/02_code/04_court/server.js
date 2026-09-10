/*
  The Queen's Court
  Bug:      GET /sentence?name=Alice  →  Off with Alice's head! (undefined)
  Expected: Off with Alice's head! (Wonderland)

  Run:  node server.js
  Open: http://localhost:3000
*/

const http = require("http");
const fs = require("fs");
const path = require("path");

const court = {
  place: "Wonderland",
  sentence(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const name = url.searchParams.get("name") || "someone";
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Off with ${name}'s head! (${this.place})`);
  },
};

const handleSentence = court.sentence;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/sentence") {
    return handleSentence(req, res);
  }

  if (url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync(path.join(__dirname, "index.html")));
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("Court is in session: http://localhost:3000");
});

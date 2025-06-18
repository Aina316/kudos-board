const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>KUDOSBOARD</title>
      </head>
      <body>
        <h1>Hello, Guys!</h1>
        <p>Welcome to my Kudos Board.</p>
      </body>
    </html>
  `);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

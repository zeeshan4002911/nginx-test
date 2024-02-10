const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("I am an endpoint");
})

const PORT = 7777;
app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})
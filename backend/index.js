const express = require("express");
const app = express() ;
const db = require("./data-base/db")

app.use(express.json());

app.get("/leaderboard", (req, res) => {
    db.query("select * from users order by score DESC", (err, results) => {
    res.send(results);
});
});

app.post("/score", (req, res) => {
    console.log(req.body)
    db.query("INSERT INTO users (pseudo, score) VALUES (?, ?)", [req.body.pseudo, req.body.score], (err, results) => {
        res.send(results)
    
});
})

app.listen(3000, () => {
    console.log("hello")
});


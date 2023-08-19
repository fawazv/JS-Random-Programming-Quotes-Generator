import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://programming-quotesapi.vercel.app/api/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            quote: result.data.quote,
            author: result.data.author,
        });
    } catch (error) {
        console.log(error.response.data)
        res.status(500)
      }
});


app.get("/newquote", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
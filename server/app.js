const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

app.use(cors());


//routes

app.get("/api/standings", (req, res) => {
    const fetchStanding = async () => {
        const response = await axios.get("https://ph.global.nba.com/stats2/season/conferencestanding.json?locale=en");
        res.send(response.data);
    }
    fetchStanding();
});

app.get("/api/latestNews", (req, res) => {
    const fetchNews = async () => {
        const news = [];
        const response = await axios.get("https://nba.smart.com.ph");
        const data = response.data;
        const $ = cheerio.load(data);
        $(".side a", data).each((i,elements)=>{
            const url = $(elements).attr('href');
            const rawImg = $(elements).find('.box > .image').attr('style');
            const title = $(elements).find('.content > h3').text();
            const subTitle = $(elements).find('.content > h4').text();
            const img = rawImg.slice(23, (rawImg.length - 2));
            news.push({
                url,
                img,
                title,
                subTitle
            })
        })
        res.send(news)
    }
    fetchNews();
})

//server
app.listen(5000, () => {
    console.log("Server started on port 8080");
});
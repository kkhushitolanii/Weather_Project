const express= require("express");
const app=express();
const https=require("https")
app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=57d0183d83418a8b559868b2f5ded828"
    https.get(url,function(response){
        //console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata=JSON.parse(data)
            const temp=weatherdata.main.temp
            const des=weatherdata.weather[0].description
            const icon=weatherdata.weather[0].icon
            const imageurl="https://openweathermap.org/img/wn/" + icon+ "@2x.png"
            res.write("<h1>The temperature in Lucknow is"+ temp +"degree Celcius.</h1>");
            res.write("<p>The weather is currently "+ des);
            res.write("<img src="+ imageurl+">")
            res.send();
        })
    })
})

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})
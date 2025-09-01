import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

  const countries = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AR: "Argentina",
  AU: "Australia",
  BR: "Brazil",
  CA: "Canada",
  CN: "China",
  EG: "Egypt",
  FR: "France",
  DE: "Germany",
  IN: "India",
  JP: "Japan",
  MX: "Mexico",
  SA: "Saudi Arabia",
  ZA: "South Africa",
  ES: "Spain",
  TR: "Turkey",
  GB: "United Kingdom",
  US: "United States"
};

var data,country,city;
app.get("/",(req,res)=>{
         res.render("index.ejs",{info:data,co:country,ci:city});
});
app.get("/home",(req,res)=>{
         res.redirect("/");
});
app.get("/about",(req,res)=>{
          res.render("about.ejs");
});
app.get("/contact",(req,res)=>{
          res.render("contact.ejs");
});


app.post("/country",async (req,res)=>{
    try{
        if(req.body.city!==''&&req.body.country!==''){
        const response=await axios.get(`https://geocode.maps.co/search?q=${req.body.city}&${countries[req.body.country]}
        &api_key=68a4c568aaa58236206650hyteed6cb`);
        var lat=response.data[0].lat;
        var lon=response.data[0].lon;

        const response2=await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`);
        
        data=response2.data.daily;
        country=countries[req.body.country];
        city=req.body.city;

        }
        res.redirect("/");
    }
    catch(error){
        console.log("server failed with: ",error.message);
        res.sendStatus(500);
    }


});


app.listen(port,()=>{
    console.log(`server is on port: ${port}`);
})
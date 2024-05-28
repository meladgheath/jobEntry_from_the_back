import express from "express" ;
import dotenv from "dotenv";



const app = new express();
dotenv.config();

const port =  "9180"

app.listen(port, function () {
    console.log("Listing to port "+port);
});

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express.json());

app.use(express.static('build'));


app.get('/',(req,res)=> {
    let message = '<h1>React is here </h1>'
    ;
    res.send(message) ;
    res.end() ;
});

app.get('*',(req,res)=> {
    res.sendFile('index.html',{root: 'build'});
})


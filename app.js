import express from "express" ;
import bodyParser from "body-parser";
import {delete_account_id, get_account, post_account} from "./account/process.js";
import {delete_manangement, get_management, post_management} from "./management/process.js";
import {delete_restr, get_restr_id, get_restr_ID_id, post_restr} from "./restr/process.js";



const app = new express();
app.listen(3003, function () {
    console.log("Listening  on port 3003");
});
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express.json());

// app.use(express.static('build'));


app.get('/',(req,res)=> {
    let message = '<h1>Welcome to Node Js . . .</h1>' +
        '<h3>/subscribe [post]</h3>' +
    '<p> - name </p>' +
    '<p> - nationalID </p>' +
     '<p> - birth_day </p>' +
        '<p> - img </p>' +
        '<hr/>'
    ;
    res.send(message) ;
    res.end() ;
});

/*
app.get('*',(req,res)=> {
    res.sendFile('build/index.html');
})
*/
app.post('/account', post_account)
app.get('/account', get_account)
app.delete('/account/:id', delete_account_id)

app.post('/management', post_management)
app.get('/management', get_management)
app.delete('/management/:id', delete_manangement)

app.post('/restrictions',post_restr)
app.get('/restrictions/:id', get_restr_id)
app.get('/restrictions/ID/:id', get_restr_ID_id)
app.delete('/restrictions/:id',delete_restr)
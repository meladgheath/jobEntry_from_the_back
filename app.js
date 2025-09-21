import express from "express" ;
import path   from 'path'
import { fileURLToPath } from 'url';


import {delete_account_id, get_account, getOne_account, post_account} from "./account/process.js";
import {delete_manangement, get_management, post_management} from "./management/process.js";
import {
    delete_restr,
    get_restr_id,
    get_restr_ID_id,
    get_status_in_id,
    post_restr,
    update_restr
} from "./restr/process.js";
import {delete_user, get_users, login, post_users} from "./users/process.js";
import {post_store} from "./store/process.js";
import {deleteTas, getByresID, getTasWithTotal, post_tas} from "./tas/process.js";

const app = new express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.post('/account', post_account)
app.get('/account', get_account)
app.get('/accounts/:id',getOne_account)

app.delete('/account/:id', delete_account_id)

app.post('/management', post_management)
app.get('/management', get_management)
app.delete('/management/:id', delete_manangement)

app.post('/restrictions',post_restr)
app.get('/restrictions/:id', get_restr_id)
app.get('/restrictions/status/:id', get_status_in_id)
app.get('/restrictions/ID/:id', get_restr_ID_id)
app.put('/restrictions/ID/:id', update_restr)
app.delete('/restrictions/:id',delete_restr)

app.post('/users',post_users)
app.get('/users', get_users)
app.delete('/users/:id', delete_user)
app.post('/login',login)

app.post('/store', post_store)

app.post('/tas',post_tas)
app.get('/tas/res/:id',getByresID)
app.get('/tas/:total/:id',getTasWithTotal)
app.delete('/tas/:id',deleteTas)
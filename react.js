/*
const PdfPrinter = require('pdfmake');
const fs = require('fs');
const path = require('path');
*/



import express from "express" ;
import PdfPrinter from 'pdfmake'
import fs from 'fs'
import path   from 'path'
import { fileURLToPath } from 'url';
import arabicReshaper from 'arabic-reshaper';
import bidi from 'bidi-js';
import PDFDocument from 'pdfkit'


import {delete_account_id, get_account, getOne_account, post_account} from "./account/process.js";
import {delete_manangement, get_management, post_management} from "./management/process.js";
import {delete_restr, get_restr_id, get_restr_ID_id, post_restr} from "./restr/process.js";
import {delete_user, get_users, login, post_users} from "./users/process.js";
import {post_store} from "./store/process.js";


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

/*/!*
app.get('*',(req,res)=> {
    res.sendFile('build/index.html');
})
*!/*/
app.post('/account', post_account)
app.get('/account', get_account)
app.get('/accounts/:id', getOne_account)

app.delete('/account/:id', delete_account_id)

app.post('/management', post_management)
app.get('/management', get_management)
app.delete('/management/:id', delete_manangement)

app.post('/restrictions',post_restr)
app.get('/restrictions/:id', get_restr_id)
app.get('/restrictions/ID/:id', get_restr_ID_id)
app.delete('/restrictions/:id',delete_restr)

app.post('/users',post_users)
app.get('/users', get_users)
app.delete('/users/:id', delete_user)
app.post('/login',login)

app.post('/store', post_store)


// Define the font files
const fonts = {
    Amiri: {
        normal: path.join(__dirname, 'fonts/Amiri-Regular.ttf'),
        bold: path.join(__dirname, 'fonts/Amiri-Bold.ttf'),
        italics: path.join(__dirname, 'fonts/Amiri-Italic.ttf'),
        bolditalics: path.join(__dirname, 'fonts/Amiri-BoldItalic.ttf')
    }
};

const printer = new PdfPrinter(fonts);

const generatePDF = (text, callback) => {

    const reshapedText = arabicReshaper.re(text);
    const bidiText = bidi(reshapedText);

    const docDefinition = {
        content: [
            // { text, font: 'Amiri', alignment: 'right' }
            { text: bidiText , font: 'Amiri', alignment: 'right' }
        ],
        defaultStyle: {
            font: 'Amiri'
        }
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const fileName = 'report.pdf';
    const writeStream = fs.createWriteStream(fileName);
    pdfDoc.pipe(writeStream);
    pdfDoc.end();

    writeStream.on('finish', () => {
        callback(null, fileName);
    });

    writeStream.on('error', (error) => {
        callback(error);
    });
};



app.get('/generate-pdf-report', (req, res) => {
    const arabicText = "هذا نص باللغة العربية"; // Your Arabic text here

    generatePDF(arabicText, (err, fileName) => {
        if (err) {
            return res.status(500).send('Error generating PDF');
        }
        res.download(fileName, fileName, (err) => {
            if (err) {
                console.log('Error downloading the file:', err);
            }
            fs.unlinkSync(fileName); // Delete the file after download
        });
    });
})
app.get('/gsr', (req, res) => {
    const reportData = "هذا تقريرك انت الخاص بك يا رجل "; // Fetch or generate your report data

    // Write the report data to a text file
    fs.writeFileSync('report.txt', reportData);

    // Create a PDF document
    const doc = new PDFDocument();
    const pdfPath = 'report.pdf';

    // Pipe the PDF into a writable stream
    doc.pipe(fs.createWriteStream(pdfPath));

    // Read the text file and add its content to the PDF
    const textContent = fs.readFileSync('report.txt', 'utf8');
    doc.text(textContent);

    // Finalize the PDF file
    doc.end();

    // Wait for the PDF to be written to disk before sending the response
    doc.on('finish', () => {
        // Download the PDF file
        res.download(pdfPath, 'report.pdf', (err) => {
            if (err) {
                console.log('Error downloading the file:', err);
            }
            // Delete the text and PDF files after download
            fs.unlinkSync('report.txt');
            fs.unlinkSync(pdfPath);
        });
    });
});
app.get('/gr', (req, res) => {
    const reportData = "هذا تقريرك انت الخاص بك يا رجل "; // Fetch or generate your report data

    fs.writeFileSync('report.txt', reportData);

    res.download('report.txt', 'report.txt', (err) => {
        if (err) {
            console.log('Error downloading the file:', err);
        }
        fs.unlinkSync('report.txt'); // Delete the file after download
    });
});
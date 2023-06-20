const express = require('express');
const fileuploader = require('express-fileuploader');
const pdfParse = require('pdf-parse');


const app = express();


app.use('/', express.static("html"));
app.use(fileuploader);

app.post('/read-pdf',(request, response) =>{

    if(!request.files && !request.files.pdffiles){
        response.status(400);
        response.end();
    }

    pdfParse(request.files.pdffiles).then(result => {
        response.send(result.text);
    })
});


app.listen(3000);
const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine','ejs');

// listen for requests
app.listen(3000);

app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/pages/WebPage.html');//set content type automatically
})

app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, (req, res)=> {
    res.sendFile(__dirname + "/" + req.params[0] + "." + req.params[1]);
});
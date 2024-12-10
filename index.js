const express = require('express');
const app = express();
const port = 5000;

// inbuilt  Middleware 
app.use(express.json());

// creating of a middleware

const loggingMiddleWare =  function (req,res,next){
    console.log("Logging Data");
    next();
}

// Loading middleware into application 

app.use(loggingMiddleWare);

const AuthMiddleWare = function (req, res , next){
    console.log('Autherisation In');
    next();
}

app.use(AuthMiddleWare);

const ValidationMiddleWare = function  (req,res , next){app.get('/', (req, res) => {
    res.send('Hello World!')
  })

    console.log('Validation ');
    next();
}

app.use(ValidationMiddleWare);


app.get('/',(req,res) => {
    console.log('Main Route Page');
    console.log(req.body);
    res.send('hello');
})

app.listen(port,() =>{
    console.log(`Villen Listing on port ${port}`)
})
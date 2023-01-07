const { CalcApi } = require('./lib/app/api/CalcApi');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.get('/info', function (_req, res)
{
    res.send('My Calculator Services v1.0');
})

app.post('/calculate/:num1/:num2/:operation', function (req, res)
{
    let api = new CalcApi();
    res.json(api.calculate(parseInt(req.params.num1), parseInt(req.params.num2), req.params.operation));
})

app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}!`);
});

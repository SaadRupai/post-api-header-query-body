let express = require('express');
let bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

app.post('/query', (req, res) => {
    try {
        //query
        let name = req.query.name;
        let age = req.query.age;

        //header
        let userAgent = req.header('User-Agent');
        let userPass = req.header('password');

        //body
        let jsonBody = req.body;
        let bodyCity = jsonBody.city;
        let bodyUni = jsonBody.uni;
        let bodyID = jsonBody['id'];

        res.send('name: ' + name + ", " + 'age: ' + age + ", " + 'user-agent: ' + userAgent + ", " + 'password: ' + userPass + ", " + 'city: ' + bodyCity + ", " + 'uni: ' + bodyUni + ", " + 'id: ' + bodyID);
    }
    catch (error) {
        console.log('connection error' + error);
    }
});

app.listen(8000, () => {
    console.log("server connection successful!");
});



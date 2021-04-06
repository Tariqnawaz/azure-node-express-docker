const express = require('express');
const database  = require( 'ronin-database' )

const app = express();
const port = 3000;
database.connect( process.env.CONNECTIONSTRING )

let test = 'bismillahirehmanirrahim';
console.log(test);

app.get('/', (req, res) => {
    res.send('Welcome to express application');
});

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.post('/notes',(req, res) => {
    const {name, text, owner} = req.body;
    res.send(`post request name: ${name} text: ${text} owner: ${owner}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
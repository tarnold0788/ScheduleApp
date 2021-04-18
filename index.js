const Express = require('express');

app = Express();
port = 3000;



app.use('/static', Express.static('public'));

app.post('/', )

app.get('/', (req, res) => {
    res.send('Request recieved');
})

app.listen(port, () => { });
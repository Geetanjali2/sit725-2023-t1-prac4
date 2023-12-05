var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'Earth',
    path: 'images/Earth.jpg',
    link: 'About this image',
    description: 'Beauty of Universe'
},
{
    title: 'Anime',
    path: 'images/spy.jpg',
    link: 'About this anime',
    description: 'Description of this anime'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
    'article-one' :
{
    title:'Article one | Samiksha Haware',
    heading:'Article one',
    date:'August 19,2017',
    content:
              `     <h1>
                    This is first article
                </h1>
                `
},
    'article-two' :
{
    title:'Article two | Samiksha Haware',
    heading:'Article two',
    date:'August 20,2017',
    content:
              `     <h1>
                    This is second article
                </h1>
                `
}

};

function createTemplate(data)
{
    var title=data.title;
    var content=data.content;
    var date=data.date;
    var htmltemplate=
        `
         <html>
         <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=width-device, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <a ref="/"> Home</a>
                <hr/>
                <div>
                    <h1>
                        ${content}
                    </h1>
                    <h1>
                        ${date}
                    </h1>
                </div>
            </div>
        </body>
        </html>
        `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName',function(req,res)
{
    var articleName=req.params.articleName;
    
  res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

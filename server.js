var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one' : {
    title:'Charu Chhimpa Artice-one',
    heading:'Article-One',
    date:'Oct-5,2016',
    content: `<p>
                   This is the content of my first article.  This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                </p>
                <p>
                   This is the content of my first article.  This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                </p>
                <p>
                   This is the content of my first article.  This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                </p>`
    },
    'article-two':{
         title:'Charu Chhimpa Artice-two',
    heading:'Article-Two',
    date:'Oct-5,2016',
    content: `<p>
                   This is the content of my second article.
                   <p>`
    },
    'article-three':{
         title:'Charu Chhimpa Artice-three',
    heading:'Article-Three',
    date:'Oct-5,2016',
    content: `<p>
                   This is the content of my third article.
                </p>`
    }
    
        
};
function createTemplate (data) {
var title=data.title;
var date= data.date;
var heading =data.heading;
var content=data.content;

var htmlContent=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content ="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
               
            </div>
        </div>
    </body>
</html>

`;
return htmlContent;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get("/counter",function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get("/submit-name",function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});
app.get('/ui/cm-overlay.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cm-overlay.css'));
});
app.get('/ui/font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.css'));
});
app.get('/ui/owl.carousel.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'owl.carousel.css'));
});
app.get('/ui/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});
app.get('/ui/owl.theme.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'owl.theme.css'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/bars.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bars.js'));
});
app.get('/ui/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.js'));
});
app.get('/ui/jarallax.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jarallax.js'));
});
app.get('/ui/SmoothScroll.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SmoothScroll.min.js'));
});
app.get('/ui/jquery-1.11.1.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-1.11.1.min.js'));
});
app.get('/ui/jquery.cm-overlay.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.cm-overlay.js'));
});
app.get('/ui/jquery.mobile.custom.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.mobile.custom.min.js'));
});
app.get('/ui/jquery.tools.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.tools.min.js'));
});
app.get('/ui/owl.carousel.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'owl.carousel.js'));
});

app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});
app.get('/ui/3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.jpg'));
});
app.get('/ui/6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '6.jpg'));
});
app.get('/ui/arrows.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arrows.png'));
});
app.get('/ui/close.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'close.png'));
});
app.get('/ui/f1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'f1.jpg'));
});
app.get('/ui/f4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'f4.jpg'));
});
app.get('/ui/next.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'next.png'));
});
app.get('/ui/p1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p1.jpg'));
});
app.get('/ui/p2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p2.jpg'));
});
app.get('/ui/p3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p3.jpg'));
});
app.get('/ui/p4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p4.jpg'));
});
app.get('/ui/p5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p5.jpg'));
});
app.get('/ui/p6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p6.jpg'));
});
app.get('/ui/p7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p7.jpg'));
});
app.get('/ui/p8.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p8.jpg'));
});
app.get('/ui/p9.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p9.jpg'));
});
app.get('/ui/prev.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prev.png'));
});
app.get('/ui/s2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 's2.jpg'));
});

app.get('/ui/FontAwesome.otf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'FontAwesome.otf'));
});
app.get('/ui/fontawesome-webfont.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fontawesome-webfont.eot'));
});
app.get('/ui/fontawesome-webfont.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fontawesome-webfont.svg'));
});
app.get('/ui/fontawesome-webfont.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fontawesome-webfont.ttf'));
});
app.get('/ui/fontawesome-webfont.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fontawesome-webfont.woff'));
});
app.get('/ui/fontawesome-webfont.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fontawesome-webfont.woff2'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

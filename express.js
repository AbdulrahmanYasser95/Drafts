'use strict';

const lodash = require('lodash');
const uuidv4 = require('uuid/v4');

const express = require('express');

const app = express();
app.use(express.json());

// Your code starts here.
// Placeholders for all requests are provided for your convenience.

var users = [{
    user_id: '2edfb152-c339-4271-a1d3-8a311fe276ee',
    login: 'user42',
    password: 'pass'
}, {
    user_id: '4474b5ba-3623-43d0-ae81-fff7caaa7cb9',
    login: 'user10',
    password: 'pass'
}, {
    user_id: '10374c66-3529-4858-af27-1079c6f16403',
    login: 'user12',
    password: 'pass21'
}];

var validTokens = [];
var articles = [];
var currentUser = 0;

function checkIFUserIsCreated(userName) {
    var userIndex = lodash.findIndex(users, { 'login': userName });
    return (userIndex >= 0)
};

app.post('/api/user', (req, res) => {
    // ...
    console.log(req.body);
    console.log(req.headers);
    
    if (lodash.isEmpty(req.body)) {
        res.status(400);
        res.send();
    } else if (checkIFUserIsCreated(req.body.login)) {
        res.status(201);
        res.send();
    } else {
        users.append(req.body);
        res.status(200);
        res.send();
    }
});

app.post('/api/authenticate', (req, res) => {
    // ...
    if (lodash.isEmpty(req.body)) {
        res.status(400);
        res.send();
    } else if (!checkIFUserIsCreated(req.body.login)) {
        res.status(404);
        res.send();
    } else if (checkIFUserIsCreated(req.body.login)) {
        var userIndex = lodash.findIndex(users, { 'login': req.body.login });
        if (users[userIndex].password != req.body.password) {
            res.status(401);
            res.send();
        } else {
            res.status(200);
            var token = uuidv4();
            validTokens.push(token);
            currentUser = req.body.user_id;
            res.json({ "token": token });
        }
    }
});

app.post('/api/logout', (req, res) => {
    // ...
    // console.log(req.headers);
    if (req.headers['authentication-header'] !== undefined) {
        var token = req.headers['authentication-header'];
        console.log(token);

        if (validTokens.indexOf(token) > -1) {
            currentUser = 0;
            validTokens = [];
            console.log(validTokens);
            res.status(200);
            res.send();
        } else {
            res.status(401);
            res.send();
        }
    } else {
        console.log('no token received');
        res.status(401);
        res.send();
    }

});

app.post('/api/articles', (req, res) => {
    // ...
    console.log(req.headers);
    var token = req.headers['authentication-header'];
    var articleId = req.body.article_id;
    console.log(articleId);

    if (lodash.isEmpty(req.body)) {
        res.status(200);
        res.send();
    } else if (validTokens.indexOf(token) == -1) {
        res.status(401);
        res.send();
    } else {
        var article = req.body;
        article.creator = currentUser;
        articles.push();
        res.status(201);
        res.send();
    }
});

app.get('/api/articles', (req, res) => {
    // ...
    var token = req.headers['authentication-header'];
    
    var publicArticles = lodash.find(articles, ['visibility', 'public']);
    console.log(publicArticles);
    
    var loggedInArticles = lodash.find(articles, ['visibility', 'logged_in']);
    console.log(loggedInArticles);
    
    var sendersArticles = lodash.find(articles, ['creator', currentUser]);
    console.log(loggedInArticles);
    
    if (articles.length = 0){
            // res.status(200);
            res.send();
        }
    else if (token == undefined) {
        var viewableArticles = publicArticles;
        res.status(200);
        res.send(publicArticles);
    }
    else if (validTokens.indexOf(token) > -1) {
        // res.status(200);
        res.send();
    }
    else {
        var viewableArticles = publicArticles.concat(loggedInArticles);
    }
    
});

exports.default = app.listen(process.env.HTTP_PORT || 3000);
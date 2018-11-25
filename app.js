var app = require('koa')();
var api = require('koa-router')();
var user = require('./user');

api.use('/users', user.routes());

app.use(api.routes());
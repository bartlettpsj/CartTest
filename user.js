var router = require('koa-router')();

// responds to /users and /users:id
router
  .get('/', async (ctx, next) => { ctx.body = {greeting: "hello cart"} })
  .get('/:id', async (ctx, next) => { ctx.body = {greeting: "hello cart"} });

module.exports = router;
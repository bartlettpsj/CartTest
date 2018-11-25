const app = new (require('koa'))();
const router = new (require('koa-router'))();

const Cart = require('./cart');
const cart = new Cart();
const cartRoutes = cart.routes();

// router.get('/data/:id', async (ctx, next) => { ctx.body = { greeting: "hello" } });


app.use(cartRoutes);

app
    .use(router.routes())
    .listen(3000);

console.log(`Koa listening at http://localhost:3000`);

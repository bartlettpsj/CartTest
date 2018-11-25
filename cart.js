const router = new (require('koa-router'))({prefix: '/cart'});

module.exports = class Cart {

  updateCtx(ctx, { body, status } = {}) {
    if (body) ctx.body = body;
    if (status) ctx.status = status;
  }

  routes() {
    return router
      .get('/:id', async (ctx, next) => this.updateCtx(ctx, await this.getCart(ctx.params.id)))
      .put('/', async (ctx, next) => ctx.body = this.updateCart(123))
      .post('/', async (ctx, next) => ctx.body = await this.createCart())
      .routes();
  }

  // Will return a cart Id to be populated - nothing in it
  async createCart() {

    return {id: 123};
  }

  async getCart(cartId) {
    console.log('getting the cart', cartId);
    return {
      status: 200,
      body: {
        id: cartId,
        name: 'carty'
      }
    }
  }

  // will update the cart and calculate taxes and fees based on the items
  async updateCart(cart) {
  }


}
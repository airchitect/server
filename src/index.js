import Koa from 'koa';
import './builder';

const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);

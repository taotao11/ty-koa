import * as Koa from "koa";
import * as KoaRouter from "koa-router";
import * as path from "path";
import KoaDecoratorRouter, {
  loadDecoratorRouter
} from "koa-router-decorator-plugin";

const app = new Koa();
const router = new KoaRouter();

// 1.加载配置 controller 文件
loadDecoratorRouter({
  dir: path.join(__dirname, "controller"),
  extension: ".ts"
});
console.log(path.join(__dirname, "controller"));
router.get("/heartbeats", async (ctx, _) => {
  ctx.body = "success";
});

app.use(router.routes()).use(router.allowedMethods());

// 2.app.use 使用已配置的路由
app.use(KoaDecoratorRouter.routes()).use(KoaDecoratorRouter.allowedMethods());

app.listen(4000);
console.log('Server is runing !!')

// import * as Koa from 'koa'
// import * as Router from 'koa-router'
// import * as fs from "fs";//优雅写法
// const app = new Koa();
// const router = new Router();

// router.get('/*',async(ctx) => {
//     ctx.body = "Hellow World !";
// })

// app.use(router.routes());


// app.listen(3001);

// console.log('Server is runing !!')
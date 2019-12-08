import { Controller, RequestMapping } from "koa-router-decorator-plugin";

@Controller({ prefix: "/prefix" })
export default class {
  @RequestMapping({ method: "GET", url: "/example02" })
  async example01(ctx, _) {
    ctx.body = "example02";
  }

  @RequestMapping({ method: "GET", url: ["/example03", "/example04"] })
  async example02(ctx, _) {
      
    ctx.body = "example03";
    console.log(ctx)
    console.log('ctr-----')
    console.log('_:'+_)
  }
}
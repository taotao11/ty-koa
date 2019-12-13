import { Controller, RequestMapping } from "koa-router-decorator-plugin";

@Controller({ prefix: "/prefix" })
export default class {
  @RequestMapping({ method: "GET", url: "/example02" })
  async example01(ctx, _) {
    ctx.body = "example02";
  }

  @RequestMapping({ method: "GET", url: ["/example03", "/example04"] })
  async example02(ctx, _) {
     // ctx.body = 'hello';
     let url = ctx.url;
     let request = ctx.request;
     let req_query = request.query;
     let req_queryString = request.querystring;
     
     ctx.body = {
         url,
         req_query,
         req_queryString
     }
    console.log(ctx)
    console.log('ctr-----')
    console.log('_:'+_)
  }
}
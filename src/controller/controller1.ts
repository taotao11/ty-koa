import { Controller, RequestMapping } from "koa-router-decorator-plugin";

@Controller
export default class {
  @RequestMapping({ method: "GET", url: "/example01" })
  async example01(ctx) {
    ctx.body = ctx.request;
  }
}
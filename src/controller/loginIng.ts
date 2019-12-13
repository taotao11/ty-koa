import { Controller, RequestMapping } from "koa-router-decorator-plugin";
import result = require('../beans/ResultBean')
import user = require('../beans/UserBean')
@Controller({prefix:'/lo'})
export default class {

    @RequestMapping({ method: "GET", url: "/login" })
    async login(ctx,_){
        let request = ctx.request;
        let req_query = request.query;
        let name = req_query.name;
        let pas = req_query.pas;
        let userb = new user.UserBean(req_query.name,req_query.age,req_query.sex);
        new result.ResultBean(200,"msg",null)
        if(name != null){
            ctx.body = result.ResultBean.getSucc('success',userb);
        }
    }
    

}
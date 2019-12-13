export class ResultBean {
    private code:number = null;
    private msg:string = null;
    private data:any = null;
    constructor(code : number,msg : string,data : any){
        this.code =code;
        this.msg = msg;
        this.data = data;
    }
    public setCode(code : number) : void{
        this.code = code;
    }
    public getCode() : number{
        return this.code;
    }
    
    public setMsg(msg : string) : void{
        this.msg = msg;
    }
    public getMsg() : string{
        return this.msg;
    }
    public setData(data : any) : void{
        this.data = data;
    }
    public getData() : any{
        return this.data;
    }
    public static success(msg:string) : ResultBean{
        return new ResultBean(200,msg,null);
    }
    public static getSucc(msg:string,data: any) : ResultBean{
        return new ResultBean(200,msg,data);

    }
    public static err(msg:string) : ResultBean{
        return new ResultBean(500,msg,null);
    }
}
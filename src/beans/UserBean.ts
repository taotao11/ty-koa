/**
 * 用户实体
 */
export class UserBean{
    //姓名
    private name:string;
    //年龄
    private age:number;
    //性别 1男2女
    private sex:string;
    constructor(name:string,age:number,sex:string){
        this.age = age;
        this.name = name;
        this.sex = sex;
    }
    public setSex(sex : string) : void{
        this.sex = sex;
    }
    public getSex() : string{
        return this.sex;
    }
    public setName(name : string) : void{
        this.name = name;
    }
    public getName() : string{
        return this.name;
    }
    public setAge(age : number) : void{
        this.age = age;
    }
    public getAge() : number{
        return this.age;
    }
    public toString(){
        console.log('姓名：' + this.name+'年龄：'+ this.age+'性别：'+this.sex == '1'?'男' : '女');
    }

}
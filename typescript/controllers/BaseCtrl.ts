module Controllers
{
  export class BaseCtrl{
    //arguments: [0] app,[1] cName|ctrlName,[2..] deps
    public registerTo()
    {
      var app=arguments[0];
      var cName:String = arguments[1];
      var deps=Array.prototype.slice.call(arguments,2);
      var invoker=deps;
      var that=this;
      invoker.push(function(){
        that.run.apply(that,arguments);
      });
      app.controller(cName,invoker);
    }
    public run()
    {
      console.log("To be override");
    }
  }

}

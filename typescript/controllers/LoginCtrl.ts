module Controllers
{
  class LoginCtrl extends BaseCtrl{
    public run(){
      console.log("I am here");
    }
  }
  export var loginCtrl:LoginCtrl=new LoginCtrl();
}

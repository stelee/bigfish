var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoginCtrl = (function (_super) {
    __extends(LoginCtrl, _super);
    function LoginCtrl() {
        _super.apply(this, arguments);
    }
    LoginCtrl.prototype.run = function () {
        console.log("I am here");
    };
    return LoginCtrl;
})(BaseCtrl);
exports.loginCtrl = new LoginCtrl();

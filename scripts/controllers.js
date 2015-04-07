var Controllers;
(function (Controllers) {
    var BaseCtrl = (function () {
        function BaseCtrl() {
        }
        BaseCtrl.prototype.registerTo = function () {
            var app = arguments[0];
            var cName = arguments[1];
            var deps = Array.prototype.slice.call(arguments, 2);
            var invoker = deps;
            var that = this;
            invoker.push(function () {
                that.run.apply(that, arguments);
            });
            app.controller(cName, invoker);
        };
        BaseCtrl.prototype.run = function () {
            console.log("To be override");
        };
        return BaseCtrl;
    })();
    Controllers.BaseCtrl = BaseCtrl;
})(Controllers || (Controllers = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Controllers;
(function (Controllers) {
    var LoginCtrl = (function (_super) {
        __extends(LoginCtrl, _super);
        function LoginCtrl() {
            _super.apply(this, arguments);
        }
        LoginCtrl.prototype.run = function () {
            console.log("I am here");
        };
        return LoginCtrl;
    })(Controllers.BaseCtrl);
    Controllers.loginCtrl = new LoginCtrl();
})(Controllers || (Controllers = {}));

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

export var renderAfter = function (fn, time) {
    if (time === void 0) { time = 0; }
    setTimeout(function () {
        fn();
    }, time);
};
//# sourceMappingURL=utils.js.map
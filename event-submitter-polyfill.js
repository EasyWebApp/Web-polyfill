/**
 * Primary author: Tobias Buschor (https://stackoverflow.com/a/61110260)
 *
 * Secondary authors: lingziyb & TechQuery
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubmitableButton = void 0;
    exports.SubmitableButton = 'button, input[type="button"], input[type="submit"], input[type="image"]';
    var last_button;
    if (typeof document !== 'undefined' && typeof SubmitEvent !== 'function') {
        document.addEventListener('click', function (event) {
            var _a, _b;
            return (last_button = (_b = (_a = event.target).closest) === null || _b === void 0 ? void 0 : _b.call(_a, exports.SubmitableButton));
        }, true);
        document.addEventListener('submit', function (event) {
            if (last_button && event.submitter)
                return;
            Object.defineProperty(Object.getPrototypeOf(event), 'submitter', {
                configurable: true,
                enumerable: true,
                get: function () {
                    var form = this.target, canditates = [document.activeElement, last_button];
                    for (var _i = 0, canditates_1 = canditates; _i < canditates_1.length; _i++) {
                        var control = canditates_1[_i];
                        if ((control === null || control === void 0 ? void 0 : control.matches(exports.SubmitableButton)) &&
                            form === control.form)
                            return control;
                    }
                    return null;
                }
            });
        }, true);
        document.addEventListener('submit', function () { return (last_button = undefined); });
    }
});

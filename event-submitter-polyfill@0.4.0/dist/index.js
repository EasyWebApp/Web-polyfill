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
    var last_buttons = [];
    function capturer(event) {
        var button = event.target instanceof Element &&
            event.target.closest(exports.SubmitableButton);
        if (button &&
            button.form &&
            (event instanceof MouseEvent || event.key === 'Enter' || event.key === ' '))
            last_buttons.push(button);
    }
    function definer(event) {
        var submitter = last_buttons.find(function (button) { return button.form === event.target; });
        if (submitter)
            last_buttons = last_buttons.filter(function (button) { return button !== submitter; });
        Object.defineProperty(event, 'submitter', {
            configurable: true,
            enumerable: true,
            get: function () { return submitter || null; }
        });
    }
    if (typeof document !== 'undefined' && typeof SubmitEvent !== 'function') {
        var preventDefault_1 = Event.prototype.preventDefault;
        Event.prototype.preventDefault = function () {
            if (this instanceof KeyboardEvent || this instanceof MouseEvent) {
                var submitter_1 = this.target.closest(exports.SubmitableButton);
                last_buttons = last_buttons.filter(function (button) { return button !== submitter_1; });
            }
            return preventDefault_1.call(this);
        };
        document.addEventListener('click', capturer, true);
        document.addEventListener('keyup', capturer, true);
        document.addEventListener('submit', definer, true);
    }
});

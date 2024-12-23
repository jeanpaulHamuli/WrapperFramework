"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: "FeatureB",
    setup: function () {
        var newTask = (0, vue_1.ref)("");
        var tasks = (0, vue_1.ref)([]);
        var addTask = function () {
            if (newTask.value.trim()) {
                tasks.value.push(newTask.value.trim());
                newTask.value = "";
            }
        };
        var removeTask = function (index) {
            tasks.value.splice(index, 1);
        };
        return {
            newTask: newTask,
            tasks: tasks,
            addTask: addTask,
            removeTask: removeTask,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-[30px] py-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("px-16 mx-auto") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-white shadow-md rounded-lg p-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.addTask) }, { id: ("todo-form") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex mb-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign(__assign({ type: ("text"), value: ((__VLS_ctx.newTask)) }, { class: ("w-full px-4 py-2 mr-2 rounded-lgborder-gray-300 focus:outline-nonefocus:border-blue-500 bg-transparent outline-none text-black") }), { id: ("todo-input"), placeholder: ("Add new task"), required: (true) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("hover:bg-transparent hover:text-black border :hover:border-black") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ id: ("todo-list"), });
    var _loop_1 = function (task, index) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ class: ("flex justify-between items-center mb-3") }, { key: ((index)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-black") }));
        (task);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.removeTask(index);
            } }, { class: ("flex justify-center items-center cursor-pointer hover:bg-gray-100 p-2 rounded") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ xmlns: ("http://www.w3.org/2000/svg"), width: ("20"), height: ("20"), viewBox: ("0 0 20 20"), fill: ("none") }, { class: ("hover:fill-red-600") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M15.3028 15.3033C15.6283 14.9779 15.6283 14.4502 15.3028 14.1248L11.1786 10.0006L15.304 5.87523C15.6294 5.54979 15.6294 5.02215 15.304 4.69672C14.9785 4.37128 14.4509 4.37128 14.1254 4.69672L10.0001 8.82207L5.87474 4.69671C5.5493 4.37128 5.02166 4.37128 4.69623 4.69671C4.37079 5.02215 4.37079 5.54979 4.69623 5.87523L8.82158 10.0006L4.69736 14.1248C4.37192 14.4502 4.37192 14.9779 4.69736 15.3033C5.0228 15.6288 5.55043 15.6288 5.87587 15.3033L10.0001 11.1791L14.1243 15.3033C14.4498 15.6288 14.9774 15.6288 15.3028 15.3033Z"), fill: ("#EF4444"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-red-500 hover:text-red-600 ml-1") }));
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.tasks)); _i < _a.length; _i++) {
        var _b = _a[_i], task = _b[0], index = _b[1];
        _loop_1(task, index);
    }
    __VLS_styleScopedClasses['text-[30px]'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-16'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['rounded-lgborder-gray-300'];
    __VLS_styleScopedClasses['focus:outline-nonefocus:border-blue-500'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['outline-none'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['hover:bg-transparent'];
    __VLS_styleScopedClasses['hover:text-black'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses[':hover:border-black'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:fill-red-600'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['hover:text-red-600'];
    __VLS_styleScopedClasses['ml-1'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self;

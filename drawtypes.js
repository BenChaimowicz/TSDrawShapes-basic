"use strict";
let min = 1;
let max;
var DrawType;
(function (DrawType) {
    DrawType[DrawType["star"] = 0] = "star";
    DrawType[DrawType["ascending"] = 1] = "ascending";
    DrawType[DrawType["descending"] = 2] = "descending";
})(DrawType || (DrawType = {}));

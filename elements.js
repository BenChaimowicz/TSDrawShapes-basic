"use strict";
let pageContainer = document.getElementById('pageContainer');
let drawBox = document.getElementById('drawBox');
let spantry = document.getElementById('spantry');
let shapeRadios = [];
let shapeLeng = document.getElementsByName('shape').length;
for (let i = 0; i < shapeLeng; i++) {
    shapeRadios.push(document.getElementsByName('shape')[i]);
}
let styleRadios = [];
let styleLeng = document.getElementsByName('style').length;
for (let i = 0; i < styleLeng; i++) {
    styleRadios.push(document.getElementsByName('style')[i]);
}
let widthInput = document.getElementById('widthInput');
let heightInput = document.getElementById('heightInput');
let drawBtn = document.getElementById('drawBtn');

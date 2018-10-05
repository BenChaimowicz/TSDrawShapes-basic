"use strict";
class Shape {
    constructor(w, h, fill, chars) {
        this.width = w;
        this.drawFill = fill;
    }
    draw() {
    }
}
class Square extends Shape {
    constructor(w, h, fill, chars) {
        super(w, h, fill, chars);
        this.width = this.height = w;
    }
    draw() {
    }
}
class Rectangle extends Shape {
    constructor(w, h, fill, chars) {
        super(w, h, fill, chars);
    }
    draw() {
    }
}
class Triangle extends Shape {
    constructor(w, h, fill, chars) {
        super(w, h, fill, chars);
    }
    draw() {
    }
}

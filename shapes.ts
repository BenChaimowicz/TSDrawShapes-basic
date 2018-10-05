class Shape {
    width: number;
    height!: number;
    drawFill: boolean;

    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        this.width = w;
        this.drawFill = fill;
    }

    draw() {

    }
}

class Square extends Shape {

    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        super(w, h, fill, chars);
        this.width = this.height = w;
    }

    draw() {
        
    }
}


class Rectangle extends Shape {
    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        super(w, h, fill, chars);
    }

    draw() {

    }
}


class Triangle extends Shape {
    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        super(w, h, fill, chars);
    }

    draw() {

    }
}
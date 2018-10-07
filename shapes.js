"use strict";
class Shape {
    constructor(w, h, fill, chars) {
        this.width = w;
        this.drawFill = fill;
        switch (chars) {
            case DrawType.star:
                this.char = '*';
                break;
            case DrawType.ascending:
            case DrawType.descending:
                this.char = '1';
                this.drawFill = true;
                break;
            default:
                break;
        }
    }
    shapeSpecs(loc) {
        loc.innerHTML += '</br>';
        loc.innerHTML += this.name + ' Perimiter: ' + this.perimiter.toFixed(2) + '</br>';
        loc.innerHTML += this.name + ' Area: ' + this.area.toFixed(2);
    }
}
class Square extends Shape {
    constructor(w, h, fill, chars) {
        super(w, h, fill, chars);
        this.name = 'Square';
        this.width = this.height = w;
        this.perimiter = this.width * 4;
        this.area = Math.pow(this.width, 2);
    }
    drawStarFill(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                loc.innerHTML += '* ';
            }
            loc.innerHTML += "</br>";
        }
        this.shapeSpecs(loc);
    }
    drawStarBorder(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (i == 0 || j == 0 || i == this.height - 1 || j == this.width - 1) {
                    loc.innerHTML += '* ';
                }
                else {
                    loc.innerHTML += '&nbsp&nbsp';
                }
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawAscending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 1; j <= this.width; j++) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawDescending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = this.width; j >= 1; j--) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
}
class Rectangle extends Shape {
    constructor(w, h, fill, chars) {
        super(w, h, fill, chars);
        this.name = 'Rectangle';
        this.width = w;
        this.height = h;
        this.perimiter = this.width * 2 + this.height * 2;
        this.area = this.width * this.height;
    }
    drawStarFill(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                loc.innerHTML += '* ';
            }
            loc.innerHTML += "</br>";
        }
        this.shapeSpecs(loc);
    }
    drawStarBorder(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (i == 0 || j == 0 || i == this.height - 1 || j == this.width - 1) {
                    loc.innerHTML += '* ';
                }
                else {
                    loc.innerHTML += '&nbsp&nbsp';
                }
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawAscending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 1; j <= this.width; j++) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawDescending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = this.width; j >= 1; j--) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
}
class Triangle extends Shape {
    constructor(w, h, fill, chars) {
        super(w, h, fill, chars);
        this.name = 'Triangle';
        this.height = this.width = w;
        this.yeter = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
        this.perimiter = this.yeter + this.width + this.height;
        this.area = this.width * this.height / 2;
    }
    drawStarFill(loc) {
        for (let i = 0; i <= this.height; i++) {
            for (let j = 0; j < i; j++) {
                loc.innerHTML += '* ';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawStarBorder(loc) {
        for (let i = 0; i <= this.height; i++) {
            for (let j = 0; j < i; j++) {
                if (i == 0 || j == 0 || i == this.height || j == this.width || j == i - 1) {
                    loc.innerHTML += '* ';
                }
                else {
                    loc.innerHTML += '&nbsp&nbsp';
                }
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawAscending(loc) {
        for (let i = 0; i <= this.height; i++) {
            for (let j = 1; j <= i; j++) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
    drawDescending(loc) {
        for (let i = this.height; i >= 1; i--) {
            for (let j = this.width; j >= i; j--) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
}

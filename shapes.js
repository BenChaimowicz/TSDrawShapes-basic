"use strict";
class Shape {
    constructor(w, fill, chars) {
        this.loc = spantry;
        this.width = w;
        this.drawFill = fill;
        this.chars = chars;
    }
    autoDraw() {
        switch (this.chars) {
            case DrawType.star:
                this.drawFill == true ? this.drawStarFill(this.loc) : this.drawStarBorder(this.loc);
                break;
            case DrawType.ascending:
                this.drawAscending(this.loc);
                break;
            case DrawType.descending:
                this.drawDescending(this.loc);
                break;
        }
    }
    drawStarFill(loc) { }
    drawStarBorder(loc) { }
    drawAscending(loc) { }
    drawDescending(loc) { }
    shapeSpecs() {
        this.loc.innerHTML += '</br>';
        this.loc.innerHTML += this.name + ' Perimiter: ' + this.perimiter.toFixed(2) + '</br>';
        this.loc.innerHTML += this.name + ' Area: ' + this.area.toFixed(2);
    }
}
class Square extends Shape {
    constructor(w, fill, chars) {
        super(w, fill, chars);
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
        this.shapeSpecs();
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
        this.shapeSpecs();
    }
    drawAscending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 1; j <= this.width; j++) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs();
    }
    drawDescending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = this.width; j >= 1; j--) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs();
    }
}
class Rectangle extends Shape {
    constructor(w, h, fill, chars) {
        super(w, fill, chars);
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
        this.shapeSpecs();
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
        this.shapeSpecs();
    }
    drawAscending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 1; j <= this.width; j++) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs();
    }
    drawDescending(loc) {
        for (let i = 0; i < this.height; i++) {
            for (let j = this.width; j >= 1; j--) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs();
    }
}
class Triangle extends Shape {
    constructor(w, fill, chars) {
        super(w, fill, chars);
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
        this.shapeSpecs();
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
        this.shapeSpecs();
    }
    drawAscending(loc) {
        for (let i = 0; i <= this.height; i++) {
            for (let j = 1; j <= i; j++) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs();
    }
    drawDescending(loc) {
        for (let i = this.height; i >= 1; i--) {
            for (let j = this.width; j >= i; j--) {
                loc.innerHTML += j + '&nbsp';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs();
    }
}

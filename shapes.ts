class Shape {
    name: string;
    width: number;
    height: number;
    drawFill: boolean;
    char: string;
    fontSize: string;
    perimiter: number;
    area: number;

    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
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
    shapeSpecs(loc: HTMLSpanElement) {
        loc.innerHTML += '</br>';
        loc.innerHTML += this.name + ' Perimiter: ' + this.perimiter.toString() + '</br>';
        loc.innerHTML += this.name + ' Area: ' + this.area.toString();
    }
}

class Square extends Shape {
    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        super(w, h, fill, chars);
        this.name = 'Square';
        this.width = this.height = w;
        this.perimiter = this.width * 4;
        this.area = Math.pow(this.width, 2);
    }

    drawStarFill(loc: HTMLDivElement) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                loc.innerHTML += '* ';
            }
            loc.innerHTML += "</br>";
        }
        this.shapeSpecs(loc);
    }

    drawStarBorder(loc: HTMLSpanElement) {
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                if (i == 0 || j == 0 || i == this.height - 1 || j == this.width - 1) {
                    loc.innerHTML += '* ';
                } else { loc.innerHTML += '&nbsp&nbsp';}
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
}


class Rectangle extends Shape {
    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        super(w, h, fill, chars);
        this.name = 'Rectangle';
        this.width = w;
        this.height = h;
        this.perimiter = this.width * 2 + this.height * 2;
        this.area = this.width * this.height;
    }

    drawStarFill(loc: HTMLDivElement) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                loc.innerHTML += '* ';
            }
            loc.innerHTML += "</br>";
        }
        this.shapeSpecs(loc);
    }
    drawStarBorder(loc: HTMLSpanElement) {
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                if (i == 0 || j == 0 || i == this.height - 1 || j == this.width - 1) {
                    loc.innerHTML += '* ';
                } else { loc.innerHTML += '&nbsp&nbsp';}
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }
}


class Triangle extends Shape {

    yeter: number;

    constructor(w: number, h: number, fill: boolean, chars: DrawType) {
        super(w, h, fill, chars);
        this.name = 'Triangle';
        this.height = this.width = w;
        this.yeter = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
        this.perimiter = this.yeter + this.width + this.height;
        this.area = this.width * this.height / 2;
    }

    drawStarFill(loc: HTMLDivElement) {
        for (let i = 0; i <= this.height; i++){
            for (let j = 0; j < i; j++){
                loc.innerHTML += '* ';
            }
            loc.innerHTML += '</br>';
        }
        this.shapeSpecs(loc);
    }

}
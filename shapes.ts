class Shape {
    private width: number;
    private height: number;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }

    draw() {
        
    }
}

class Square extends Shape{
    constructor(w:number,h:number) {
        super(w, h);
    }

    draw() {
        
    }
}
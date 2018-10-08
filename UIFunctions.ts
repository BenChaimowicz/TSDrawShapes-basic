// UI Functions

function ShapeCreator() {
    let shapeChoice = prompt('Shape Drawer \n Select shape to draw: \n 1. Square 2. Rectangle 3. Triangle');
    let whArr: number[];
    let dtArr: any[];

    switch (shapeChoice) {
        case '1': // Square
            whArr = sizePrompt();
            dtArr = drawPrompt();
            var square: Square = new Square(whArr[0], dtArr[0], dtArr[1]);
            square.autoDraw();
            break;
        case '2': // Rectangle
            whArr = sizePrompt(true);
            dtArr = drawPrompt();
            var rect: Rectangle = new Rectangle(whArr[0], whArr[1], dtArr[0], dtArr[1]);
            rect.autoDraw();
            break;
        case '3': // Triangle
            whArr = sizePrompt();
            dtArr = drawPrompt();
            var triangle: Triangle = new Triangle(whArr[0], dtArr[0], dtArr[1]);
            triangle.autoDraw();
            break;
        default:
            alert('ERROR! Input must be 1,2 or 3.');
    }
}

function sizePrompt(hreq: boolean = false): number[] {
    let width: number = parseFloat(prompt('Enter width: '));
    
    while (width <= 0 || width == null || Number.isInteger(width) != true) {
        alert('ERROR! Number must be an INTEGER greater than 0!');
        width= parseFloat(prompt('Enter width: '));
    }
    if (hreq == true) {
        let height: number = parseFloat(prompt('Enter Height: '));
        while (height <= 0 || height == null || Number.isInteger(height) != true) {
            alert('ERROR! Number must be an INTEGER greater than 0!');
            height = parseFloat(prompt('Enter Height: '));
        }
        return [width, height];
    }
    return [width];
}

function drawPrompt():any[] {
    let drawChoice: number = parseFloat(prompt('Choose Drawing Style: \n 1. **** -Fill \n 2. *   * -Only borders \n 3. 1234 \n 4. 4321'));
    
    if (Number.isInteger(drawChoice) == true) {
        switch (drawChoice) {
            case 1:
                return [true, DrawType.star];
            case 2:
                return [false, DrawType.star];
            case 3:
                return [true, DrawType.ascending];
            case 4:
                return [true, DrawType.descending];
            default:
                alert('ERROR! Input must be 1,2,3 or 4!');
                throw new Error('Invalid Input Detected! Program stopped!');
                break;
        }
    } else {alert('Entry must be an integer!')}
}

"use strict";
// UI Functions
// function ShapeCreator() {
//     let shapeChoice = prompt('Shape Drawer \n Select shape to draw: \n 1. Square 2. Rectangle 3. Triangle');
//     let whArr: number[];
//     let dtArr: any[];
//     switch (shapeChoice) {
//         case '1': // Square
//             whArr = sizePrompt();
//             dtArr = drawPrompt();
//             var square: Square = new Square(whArr[0], dtArr[0], dtArr[1]);
//             square.autoDraw();
//             break;
//         case '2': // Rectangle
//             whArr = sizePrompt(true);
//             dtArr = drawPrompt();
//             var rect: Rectangle = new Rectangle(whArr[0], whArr[1], dtArr[0], dtArr[1]);
//             rect.autoDraw();
//             break;
//         case '3': // Triangle
//             whArr = sizePrompt();
//             dtArr = drawPrompt();
//             var triangle: Triangle = new Triangle(whArr[0], dtArr[0], dtArr[1]);
//             triangle.autoDraw();
//             break;
//         default:
//             alert('ERROR! Input must be 1,2 or 3.');
//     }
// }
// function sizePrompt(hreq: boolean = false): number[] {
//     let width: number = parseFloat(prompt('Enter width: '));
//     while (width <= 0 || width == null || Number.isInteger(width) != true) {
//         alert('ERROR! Number must be an INTEGER greater than 0!');
//         width= parseFloat(prompt('Enter width: '));
//     }
//     if (hreq == true) {
//         let height: number = parseFloat(prompt('Enter Height: '));
//         while (height <= 0 || height == null || Number.isInteger(height) != true) {
//             alert('ERROR! Number must be an INTEGER greater than 0!');
//             height = parseFloat(prompt('Enter Height: '));
//         }
//         return [width, height];
//     }
//     return [width];
// }
// function drawPrompt():any[] {
//     let drawChoice: number = parseFloat(prompt('Choose Drawing Style: \n 1. **** -Fill \n 2. *   * -Only borders \n 3. 1234 \n 4. 4321'));
//     if (Number.isInteger(drawChoice) == true) {
//         switch (drawChoice) {
//             case 1:
//                 return [true, DrawType.star];
//             case 2:
//                 return [false, DrawType.star];
//             case 3:
//                 return [true, DrawType.ascending];
//             case 4:
//                 return [true, DrawType.descending];
//             default:
//                 alert('ERROR! Input must be 1,2,3 or 4!');
//                 throw new Error('Invalid Input Detected! Program stopped!');
//                 break;
//         }
//     } else {alert('Entry must be an integer!')}
// }
// Improved UI Functions
drawBtn.setAttribute('onclick', 'drawFromUI()');
function drawFromUI() {
    spantry.textContent = '';
    let shapeBuilder;
    let shapeChosen = checkShape();
    let styleChosen = checkStyle();
    let sizeArr = setSize();
    function setSize() {
        if (shapeChosen != 1) {
            heightInput.value = widthInput.value;
        }
        if (parseInt(widthInput.value) < 1 || parseInt(heightInput.value) < 1 || heightInput.value == '') {
            widthInput.value = '1';
            heightInput.value = '1';
        }
        return [parseInt(widthInput.value), parseInt(heightInput.value)];
    }
    function checkShape() {
        for (let i = 0; i < shapeRadios.length; i++) {
            if (shapeRadios[i].checked) {
                return i;
            }
        }
    }
    function checkStyle() {
        for (let i = 0; i < styleRadios.length; i++) {
            if (styleRadios[0].checked) {
                return [true, DrawType.star];
            }
            if (styleRadios[1].checked) {
                return [false, DrawType.star];
            }
            if (styleRadios[2].checked) {
                return [true, DrawType.ascending];
            }
            if (styleRadios[3].checked) {
                return [true, DrawType.descending];
            }
        }
    }
    shapeBuilder = [sizeArr[0], sizeArr[1], styleChosen[0], styleChosen[1]];
    var shape;
    switch (shapeChosen) {
        case 0:
            shape = new Square(shapeBuilder[0], shapeBuilder[2], shapeBuilder[3]);
            break;
        case 1:
            shape = new Rectangle(shapeBuilder[0], shapeBuilder[1], shapeBuilder[2], shapeBuilder[3]);
            break;
        case 2:
            shape = new Triangle(shapeBuilder[0], shapeBuilder[2], shapeBuilder[3]);
            break;
    }
    shape.autoDraw();
}

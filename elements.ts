let pageContainer: HTMLDivElement = document.getElementById('pageContainer') as HTMLDivElement;
let drawBox: HTMLDivElement = document.getElementById('drawBox') as HTMLDivElement;
let spantry: HTMLSpanElement = document.getElementById('spantry') as HTMLSpanElement;

let shapeRadios: HTMLInputElement[] = [];
let shapeLeng: number = document.getElementsByName('shape').length;

for (let i = 0; i < shapeLeng; i++){
    shapeRadios.push(document.getElementsByName('shape')[i] as HTMLInputElement);
}

let styleRadios: HTMLInputElement[] = [];
let styleLeng: number = document.getElementsByName('style').length;

for (let i = 0; i < styleLeng; i++){
    styleRadios.push(document.getElementsByName('style')[i] as HTMLInputElement);
}

let widthInput: HTMLInputElement = document.getElementById('widthInput') as HTMLInputElement;
let heightInput: HTMLInputElement = document.getElementById('heightInput') as HTMLInputElement;

let drawBtn: HTMLButtonElement = document.getElementById('drawBtn') as HTMLButtonElement;

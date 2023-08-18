// for calcutale triangle area
function calculateTriangleArea(){
    const baseField = document.getElementById("triangle-base").value;
    const base = parseFloat(baseField);

    const heightField = document.getElementById("triangle-height").value;
    const height = parseFloat(heightField);
    document.getElementById("triangle-base").value = '';
    document.getElementById("triangle-height").value = '';
    if(isNaN(base) || isNaN(height)){
        alert("Please insert a number")
        return;
    }
    const area = 0.5 * base * height;
    const areaFixed = area.toFixed(2); 
    document.getElementById("triangle-area").innerText = areaFixed;
    // add calculation entry
    addToCalculationEntry("Triangel",areaFixed);
}
// for calcutale rectangle area
function calculateRectangleArea(){
    const widthField = document.getElementById("rectangle-width").value;
    const width = parseFloat(widthField);

    const lengthField = document.getElementById("rectangle-length").value;
    const length = parseFloat(lengthField);
    document.getElementById("rectangle-width").value = '';
    document.getElementById("rectangle-length").value = '';
    if(isNaN(width) || isNaN(length)){
        alert("Please insert a number");
        return;
    }
    const area = width * length;
    const areaFixed = area.toFixed(2) 
    document.getElementById("rectangle-area").innerText = areaFixed;
    // add calculation entry
    addToCalculationEntry("Rectangle",areaFixed);
}
// for calcutale parallelogram area
function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    document.getElementById("parallelogram-base").value = '';
    document.getElementById("parallelogram-height").value = ''
    if(isNaN(base) || isNaN(height)){
        alert("Please insert a number");
        return;
    }
    const area = base * height;
    const areaFixed = area.toFixed(2);
    setTextField("parallelogram-area",areaFixed);
    // add calculation entry
    addToCalculationEntry("Parallelogram",areaFixed);
}
// for calcutale rhombus area
function calculateRhombusArea(){
    const diagonal1 = getInputValue("rhombus-diagonal1");
    const diagonal2 = getInputValue("rhombus-diagonal2");
    document.getElementById("rhombus-diagonal1").value = '';
    document.getElementById("rhombus-diagonal2").value = ''
    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert("Please insert a number");
        return;
    }
    const area = 0.5 * diagonal1 * diagonal2;
    const areaFixed = area.toFixed(2);
    setTextField("rhombus-area",areaFixed);
    // add calculation entry
    addToCalculationEntry("Rhombus",areaFixed);
}
// for calcutale ellipse area
function calculateEllipseArea(){
    const majorRadius = getInputValue("ellipse-major-radius");
    const minorRadius = getInputValue("ellipse-minor-radius");
    document.getElementById("ellipse-major-radius").value = '';
    document.getElementById("ellipse-minor-radius").value = ''
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert("Please insert a number");
        return;
    }
    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2)
    setTextField("ellipse-area",areaTwoDecimal);
    // add calculation entry
    addToCalculationEntry("Ellipse",areaTwoDecimal)
}
// for calculate pentagon area
function calculatePentagonArea(){
    const perimeter = getInputValue("pentagon-perimeter");
    const apothem = getInputValue("pentagon-apothem");
    document.getElementById("pentagon-perimeter").value = '';
    document.getElementById("pentagon-apothem").value = '';
    if(isNaN(perimeter) || isNaN(apothem)){
        alert("Please insert a number");
        return;
    }
    const area = 0.5 * perimeter * apothem;
    const areaFixed = area.toFixed(2);
    setTextField("pentagon-area",areaFixed);
    addToCalculationEntry("Pentagon",areaFixed);
}
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId).value;
    const value = parseFloat(inputField);
    return value;
}
function setTextField(elementId,area){
    document.getElementById(elementId).innerText = area;
}
// add to calculation entry first parameter is name second parameter is area value
function addToCalculationEntry(elementId,area){
    const calculatetionEntry = document.getElementById("calculation-entry");
    const count = calculatetionEntry.childElementCount;
    const p = document.createElement('p')
    p.classList = "my-4"
    p.innerHTML = `${count + 1} ${elementId} ${area} <button class= "btn btn-success btn-small">Convert</button>`
    calculatetionEntry.appendChild(p)
}
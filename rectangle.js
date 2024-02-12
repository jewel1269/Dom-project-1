function calculateRectangleArea(){
    const rectangleLength = document.getElementById('rectangle-length');
    const lengthText = rectangleLength.value;
     const lengthTangle = parseFloat(lengthText);
    console.log(lengthTangle);

    const rectangleWidth = document.getElementById('rectangle-width');
    const widthText = rectangleWidth.value;
    const widthTangle = parseFloat(widthText);
    console.log(widthTangle);

    const area = lengthTangle * widthTangle;
    console.log(area);


    const result = document.getElementById('rectriangle-Area');
    result.innerText = area;

 }
 
/**
 * objective : get base , height of a triangle. ca
 * 
 * 
 */

//Triangle

function calculateTriangleArea(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseJewel = triangleBase.value;
    const base = parseFloat(triangleBaseJewel)
    console.log(base);



    const triangleHeight = document.getElementById('triangle-height');
    const triangleInput = triangleHeight.value;
    const height = parseFloat(triangleInput);
    console.log(height);

//calculate
    const area = 0.5 * base * height;
    console.log('This is the result', area);

    //display triangle area 

    const triangleArea =  document.getElementById('triangle-area');
    triangleArea.innerText = area;
    

    
} 




 


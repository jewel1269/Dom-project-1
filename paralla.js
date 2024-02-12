function calculateParallalogram(){
 const baseInput = document.getElementById('parallelogram-base');
    const parallelogramBase = baseInput.value;
    const base = parseFloat(parallelogramBase);
  console.log(base)



     const  heightInput = document.getElementById('parallelogram-heigth')
     const parallelogramHeight = heightInput.value;
     const height = parseFloat(parallelogramHeight);
     console.log(height)


     const area = base * height;
     console.log(area);

     const output = document.getElementById('parallelogram-jewel');
     output.innerText = area;

   
}


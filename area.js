const inputSide=document.querySelectorAll(".inputSide");
const btnCalculateArea=document.querySelector("#btn-area")
const outputAreaTriangle=document.querySelector("#outputAreaTriangle");

function heronsSum(side1, side2, side3) {
  const s = (side1 + side2 + side3) / 2;
  return s * (s - side1) * (s - side2) * (s - side3);
}

function handlingClick() {
  let area = Math.sqrt(heronsSum(Number(inputSide[0].value), Number(inputSide[1].value), Number(inputSide[2].value)));

  console.log(area)
  outputAreaTriangle.innerText = "Area of a triangle using Heron's formula is" + area;
}


btnCalculateArea.addEventListener("click",handlingClick) 
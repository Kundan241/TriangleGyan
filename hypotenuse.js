const inputSide=document.querySelectorAll(".inputSide");
const btnCalculateHypotenuse=document.querySelector("#btn-hypotenuse")
const outputHypotenuseArea=document.querySelector("#outputHypotenuse");

function sumOfSides(side1,side2)
{
    return (side1*side1+side2*side2);
}

function handlingClick()
{
    
let hypotenuse=Math.sqrt(sumOfSides(inputSide[0].value,inputSide[1].value))

outputHypotenuseArea.innerText="The length of hypotenuse is "+hypotenuse;
}

btnCalculateHypotenuse.addEventListener("click",handlingClick) 
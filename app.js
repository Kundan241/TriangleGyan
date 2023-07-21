const angle=document.querySelectorAll(".angle");
const btnIsTriangle=document.querySelector("#btn-isTriangle")

const outputArea=document.querySelector("#output")

function handlingClick()
{
    if(Number(angle[0].value)+Number(angle[1].value)+Number(angle[2].value)===180)
    {
      outputArea.innerText="Yee! it is a triangle";
    }
    else{
        outputArea.innerText="Oops it is not a triangle";
    }
}

btnIsTriangle.addEventListener("click",handlingClick)
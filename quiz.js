// Corrected JavaScript
const submitButton = document.querySelector("#btn-summitAnswer");
const formAnswers = document.querySelector("#quiz-form");



submitButton.addEventListener("click",function clickHandler()
{
        let result= new FormData(formAnswers);
        
        for(let a of  result.values)
        {
            console.log(a);
        }
});

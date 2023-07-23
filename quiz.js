// Corrected JavaScript
const submitButton = document.querySelector("#btn-summitAnswer");
const formAnswers = document.querySelector("#quiz-form");
const outputQuiz=document.querySelector("#outputQuiz");

let index=0;
let correctAnswerArray = ["90°", "one right angle", "14, 15, 26", "Equilateral triangle", "85°", "10°", "a + b + c", "no", "45°"];


submitButton.addEventListener("click",function clickHandler()
{
        let result= new FormData(formAnswers);
        let score=0;
        for(let [key,value] of  result)
        {

            if(correctAnswerArray[index]==value){
                score=score+1;
            }
            else{
                score=score-1;
            }
            console.log(score);
            index=index
            =1;
        }
        console.log(score)
        
        outputQuiz.innerHTML="your score is "+score;

});

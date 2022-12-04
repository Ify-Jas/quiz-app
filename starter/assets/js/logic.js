
//var currentQuestionIndex = 0;
var questionWrap = document.getElementById('question-wrapper');
var btn = document.getElementById('start');
var timer = document.getElementById('time');
var end = document.getElementById('end-screen');







btn.addEventListener('click', function() {
    questionWrap.classList.remove('hide');
    timer.innerText = 70;
    var runTimer = setInterval(function(){
        timer.innerText--;  
        if (timer.innerText <= 0) {
            clearInterval(runTimer);
        }
    }, 1000);
    

    

});


var currentQuestionIndex = 0;

    
function quiz() {
    
    questionWrap.innerHTML = `
    <h3>${questions[currentQuestionIndex].main}</h3>
    <ul></ul>
    `;
    var ul = questionWrap.querySelector('ul');

    var arr = questions[currentQuestionIndex].choicesArr;

    for(var choice of arr){
       ul.insertAdjacentHTML('beforeend', `<li>${choice}</li>`);

    }
    questionWrap.addEventListener('click', function(event) {
       var answer = questions[currentQuestionIndex].answer;
       var result = event.target.innerText;
       var audioCorrect = new Audio('./assets/sfx/correct.wav');
       var audioIncorrect = new Audio('./assets/sfx/incorrect.wav');
       if(result !== answer && currentQuestionIndex < 5) {
           timer.innerText -=10;
           audioIncorrect.play();
           currentQuestionIndex++; 
           console.log(currentQuestionIndex);
           quiz();
          
        }else {
           audioCorrect.play();
           currentQuestionIndex++; 
           console.log(currentQuestionIndex);
           quiz();
           
        } 
        if(currentQuestionIndex == 4 || timer.innerText == 0) {
            end.classList.remove('hide');
        }
    
            
              
    }); 
    

    
    
} 

console.log(currentQuestionIndex);

quiz();












  
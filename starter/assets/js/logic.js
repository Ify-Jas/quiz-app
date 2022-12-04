
var currentQuestionIndex = 0;
var questionWrap = document.getElementById('question-wrapper');
var btn = document.getElementById('start');
var timer = document.getElementById('time');







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
    if(result !== answer){
        timer.innerText -=10;
        audioIncorrect.play();
    } else {
        audioCorrect.play();
    }
    currentQuestionIndex++;
    
    
    

});





  
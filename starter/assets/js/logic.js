
var currentQuestionIndex = 0;
var questionWrap = document.getElementById('question-wrapper');
var btn = document.getElementById('start');
var timer = document.getElementById('time');
var end = document.getElementById('end-screen');
var score = document.getElementById('highscores');
var submitBtn = document.getElementById('submit');

var time = 40;

    


btn.addEventListener('click', function() {
    questionWrap.classList.remove('hide');
    timer.innerText = time;
    
    //runTimer == true;
    var runTimer = setInterval(function(){
        time--;  
        timer.innerText = time;
        if (time <= 0 || currentQuestionIndex > 4) {
            clearInterval(runTimer);
        }
    }, 1000);
   
    

});
function quiz(){
    questionWrap.innerHTML = `
    <h3>${questions[currentQuestionIndex].main}</h3>
    <ul></ul>
    `;
    var ul = questionWrap.querySelector('ul');

    var arr = questions[currentQuestionIndex].choicesArr;

    for(var choice of arr){
        ul.insertAdjacentHTML('beforeend', `<li>${choice}</li>`);

    };
   

}

questionWrap.addEventListener('click', function(event) {
    var answer = questions[currentQuestionIndex].answer;
    var result = event.target.innerText;
    currentQuestionIndex++;
    if(currentQuestionIndex > 4) {
        end.classList.remove('hide');
        submit();
    }  
    var audioCorrect = new Audio('./assets/sfx/correct.wav');
    var audioIncorrect = new Audio('./assets/sfx/incorrect.wav');
    if(result !== answer) {
        timer.innerText -=10;
        audioIncorrect.play();
        quiz();
       
      
    } if(result == answer) {
        audioCorrect.play();
        quiz();
        
    } 
    
    
       
      
}); quiz();





submitBtn.addEventListener('click', finish);


    


function finish () {
     //console.log(time);
    var initEl = document.getElementById('initials');
    var init = initEl.value;
    console.log(init);
    var userScore = {
        username: init,
        score: time
    
    };
    localStorage.setItem('player', JSON.stringify(userScore));
    var highscore = document.getElementById('highscores');
    var getHighScore = JSON.parse(localStorage.getItem('userScore'));
    highscore.innerHTML = getHighScore;
    
    
}

//activity 26, module 4.





 
 



    

   
    
    

    
    



























  
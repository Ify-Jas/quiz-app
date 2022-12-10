var highscores = document.getElementById('highscores');
highscores.value = localStorage.getItem('player', JSON.stringify(highscore))
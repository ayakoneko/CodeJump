let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0,};    

        updateScoreElement();
       

        document.querySelector('.js-rock-button').addEventListener('click', ()=>{
            playGame('rock');});

        document.querySelector('.js-paper-button').addEventListener('click', ()=>{
            playGame('paper');});

        document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
            playGame('scissors');});
            
        document.querySelector('.js-autoPlay-button').addEventListener('click', () => {
            autoPlay();});
        
        document.querySelector('.js-reset-button').addEventListener('click', () => {
            showResetConfirmation();});
          

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r') {playGame('rock');} 
            else if (event.key === 'p') {playGame('paper');}
            else if (event.key === 's') {playGame('scissors');}
            else if (event.key === 'a') {autoPlay();}
            else if (event.key === 'Backspace') {showResetConfirmation();}
        });


        function showResetConfirmation(){
            document.querySelector('.js-reset-confirmation').innerHTML = `
            Are you sure you want to reset the score? 
            <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
            <button class="js-reset-confirm-no reset-confirm-button">No</button>`;

            document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
                resetScore();
                hideResetConfirmation();
            });
            
            document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
                hideResetConfirmation();
            });
        }

        function hideResetConfirmation(){
            document.querySelector('.js-reset-confirmation').innerHTML = '';
        }

        function resetScore(){
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();

        }

        let isAutoPlaying = false;
        let intervalID; 

        function autoPlay(){
            if (!isAutoPlaying){
                intervalID = setInterval(function(){
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    }, 1000);
                isAutoPlaying = true;
                document.querySelector('.js-autoPlay-button').innerHTML = 'Stop Playing';
            } else {
                clearInterval(intervalID);
                isAutoPlaying = false;
                document.querySelector('.js-autoPlay-button').innerHTML = 'Auto Play';
            }
        }

        function playGame(playerMove){

            const computerMove = pickComputerMove();
            let result = '';

            if (playerMove === 'rock'){
                if (computerMove === 'rock'){
                    result='Tie.';
                }else if (computerMove === 'paper'){
                    result='You Lose.';
                }else if (computerMove === 'scissors'){
                    result='You Win.';
                }
            } else if (playerMove === 'paper'){
                if (computerMove === 'rock'){
                    result='You Win.';
                }else if (computerMove === 'paper'){
                    result='Tie.';
                }else if (computerMove === 'scissors'){
                    result='You Lose.';
                }
            }  else if (playerMove === 'scissors'){
                if (computerMove === 'rock'){
                    result='You Lose.';
                }else if (computerMove === 'paper'){
                    result='You Win.';
                }else if (computerMove === 'scissors'){
                    result='Tie.';
                }
            }

            if (result === 'You Win.'){
                score.wins ++;
            }else if (result === 'You Lose.'){
                score.losses ++;
            }else if (result === 'Tie.'){
                score.ties ++;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();
            
            document.querySelector('.js-result').innerHTML = result; 
            document.querySelector('.js-move').innerHTML = `You <img src="img/${playerMove}-emoji.png" class="move-icon"> <img src="img/${computerMove}-emoji.png" class="move-icon"> Computer`; 
                
            // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
        }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }


        let computerMove = '';
        function pickComputerMove(){

            const randomNumer = Math.random();

            if (randomNumer >=0 && randomNumer < 1/3 ){
                computerMove = 'rock';
            }else if (randomNumer >=1/3 && randomNumer < 2/3 ){
                computerMove = 'paper';
            }else if (randomNumer >=2/3 && randomNumer < 1 ){
                computerMove = 'scissors';
            }

            return computerMove
        }
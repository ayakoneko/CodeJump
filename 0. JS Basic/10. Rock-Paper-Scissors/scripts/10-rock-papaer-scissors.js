let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0,};    

        updateScoreElement();

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
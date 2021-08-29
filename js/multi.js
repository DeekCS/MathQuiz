
        var wrong = 0;
        var score = 0;

        // init variables
        let v1 = document.getElementById('v1');
        let v2 = document.getElementById('v2');
        let inputBox = document.getElementById('answ');
        let finalResult = document.getElementById('final1');
        let submitBtn = document.getElementById('submit');
        let operator = document.getElementById('operator');
        let restartGame = document.getElementById('restart');
        let levelUpBtn = document.getElementById('levelUp');
        let WinImage = document.getElementById('win');
        let LoseImage = document.getElementById('lose');



        // init audio resources
        let congratsSound = new Audio('Congratulations-sound.mp3');
        let sadSound = new Audio('sad.wav');
        let level = new Audio('level.wav');

        //Show numbers to user
        v1.style.visibility = "visible";
        v2.style.visibility = "visible";

        //Hide buttons at the beginning to user
        restartGame.style.visibility = "hidden";
        levelUpBtn.style.visibility = "hidden";
        WinImage.style.visibility = "hidden";
        LoseImage.style.visibility = "hidden";



        CheckGame = () => {
        let sumResult = num1 * num2;
        let userAnswer = inputBox.value;
        if (userAnswer == sumResult) {
            render();
            inputBox.value = " ";
            congratsSound.play();
            score++;
        if (score == 10) {
            let marks = 10 - wrong;
            if (marks >= 5) {
            level.play();
            finalResult.innerHTML = `you win and got ${marks}/10`
            WinImage.style.visibility = "visible";

                renderEndStyles();
            }else{
                sadSound.play();
                inputBox.value = " ";
                finalResult.innerHTML = `you lose and got ${marks}/10` 
                LoseImage.style.visibility = "visible";
                renderEndStyles();
            }
        }
        
    }else{ 
            wrong++;
            inputBox.value = " ";
            alert(`Correct Answer is ${sumResult} Try Again. `);
            }
    };

        //Rendering Random Numbers between 1 and 10
        render = () => {

            num1 = Math.floor(Math.random() * 10 + 1)
            num2 = Math.floor(Math.random() * 10 + 1)
            v1.innerHTML = num1;
            v2.innerHTML = num2;
        }

        window.onload = renderQus = () =>{
            render();
        }
        
        Restart = () => {
        window.location.reload();
        }

        LevelUp = () => {
            window.location.href="../division.html";
        }

        //Customize Buttons at the end of game
        renderEndStyles = () => {
            v1.style.visibility = "hidden";
            v2.style.visibility = "hidden";
            inputBox.style.visibility = "hidden";
            submitBtn.style.visibility = "hidden";
            operator.style.visibility = "hidden";
            restartGame.style.visibility = "visible";
            levelUpBtn.style.visibility = "visible";
        }
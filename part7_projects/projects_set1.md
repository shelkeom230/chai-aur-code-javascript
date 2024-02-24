# Projects related to markdown

## Projects solution codes on Github
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hpfhha?file=3-DigitalClock%2Fchaiaurcode.js)

[my GitHub](https://www.github.com/shelkeom230)
# Project 1
## solution code 
```javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='orange'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }
    })
})
```
# Project 2
## Solution code 

```javascript
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    const guide=document.querySelector('#guide')

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Please enter valid height ${height}`
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Please enter valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // display the results 
        results.innerHTML=`<span>Your BMI is: ${bmi}</span>`
    }
    if(weight<=18.9){
        guide.innerHTML=`You are Underweight`
    }else if(weight>18.9 && weight<=14.9){
        guide.innerHTML=`You are Normal weight`
    }else{
        guide.innerHTML=`You are Overweight`
    }

})
```

# Project 3
## solution code 

```javascript
const clock=document.getElementById('clock')

setInterval(() => {
    const date=new Date()

    clock.innerHTML=date.toLocaleTimeString()
}, 1000);
```

# Project 4
## solution code

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //validation of guess value
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter number greater than 1');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //checking the guess logic like low,high,equal
  if (guess === randomNumber) {
    displayMessage(`Your guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}
function displayGuess(guess) {
  //clean the values,update guess array
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //display low or high
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

# Project 5 
## solution code

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Key</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "SPACE" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table>
    </div>`;
});
```

# Project 6
## solution code 

```javascript
// generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalId = undefined;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBGColor, 1000);
    }
    function changeBGColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    // intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
```


# over 

```javascript
console.log('Basic projects done || chai aur code || js in Hindi')
```


# Projects related to markdown

## Projects solution codes on Github
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hpfhha?file=3-DigitalClock%2Fchaiaurcode.js)

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

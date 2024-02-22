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
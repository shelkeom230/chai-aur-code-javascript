const clock=document.getElementById('clock');

console.log(clock);

setInterval(() => {
    const date=new Date();

    clock.innerHTML=date.toLocaleTimeString();
}, 1000);
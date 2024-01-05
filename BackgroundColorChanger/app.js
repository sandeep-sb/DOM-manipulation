const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);

buttons.forEach(function(btn) {
    const color = btn.getAttribute('id');
    console.log(color);
    btn.addEventListener("click", function(e){
        console.log(e.target);
        const color = e.target.id;
        console.log(color);
        body.style.background = color;
    })
})
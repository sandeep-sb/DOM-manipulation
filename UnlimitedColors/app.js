const randomColor = function (){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(randomColor());

const body = document.querySelector("body");
let intervalId;

document.querySelector("#start").addEventListener("click", function(){
    if(!intervalId){
        intervalId = setInterval(changeBGColor, 1000);
    }

    function changeBGColor(){
        body.style.backgroundColor = randomColor();
    };
});

document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(intervalId);
    intervalId = null;
})

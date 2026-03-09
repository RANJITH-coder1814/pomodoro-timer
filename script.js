let time = 25 * 60;
let timer;
let running = false;

const display = document.querySelector(".timer");

function updateDisplay(){
let minutes = Math.floor(time / 60);
let seconds = time % 60;

display.textContent =
`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
}

document.getElementById("start").onclick = () =>{
if(!running){
running = true;

timer = setInterval(() => {
time--;

if(time <= 0){
clearInterval(timer);
alert("Time's up! Take a break.");
}

updateDisplay();

},1000);
}
};

document.getElementById("pause").onclick = () =>{
clearInterval(timer);
running = false;
};

document.getElementById("reset").onclick = () =>{
clearInterval(timer);
time = 25 * 60;
running = false;
updateDisplay();
};

updateDisplay();

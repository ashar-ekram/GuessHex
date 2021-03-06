var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var modeButtons=document.querySelectorAll(".mode");


for(var i=0; i<modeButtons.length; i++)
{
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor=pickColor();
    resetButton.textContent="New Colors";
    document.querySelector("h1").style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    colorDisplay.textContent=pickedColor;
    for(var i=0; i< squares.length; i++){
        if(i<numSquares){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
}

resetButton.addEventListener("click", function(){
    reset();
})

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        // alert(this.style.backgroundColor);
        var clickedColor=this.style.backgroundColor;
        console.log(clickedColor,pickedColor,colors[i]);
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again?";
            changeColors(clickedColor);
            document.querySelector("h1").style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try again";
        }
    });
}

function changeColors(color)
{
    for(var i=0; i<squares.length; i++)
        squares[i].style.backgroundColor=color;
}

function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];

    for(var i=0; i<num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
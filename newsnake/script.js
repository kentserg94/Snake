var snake = document.getElementById("snake");
var field = document.getElementById("field");
field = snake.offsetParent;
var timerId;

//start();
//food

var food = document.getElementById("food");
function topPositionFood() {
    var max=500;
    var min=0;

    var topPosition = Math.floor(Math.random()*(max - min) + min);

    if(topPosition%20==0){
        food.style.top=topPosition+"px";
    }
    else {
        topPositionFood();
    }
    
}
function leftPositionFood() {
    var max=500;
    var min=0;


    var leftPosition = Math.floor(Math.random()*(max - min) + min);
    if(leftPosition%20==0){
        food.style.left=leftPosition+"px";

    }
    else {
        leftPositionFood();
    }

}
function positionFood() {
    topPositionFood();
    leftPositionFood();
}

positionFood();




window.addEventListener("keydown", function(event) {
    if (event.keyCode == 68) {
        clearInterval(timerId);

        move(right);
    }
});


window.addEventListener("keydown", function(event) {
    if (event.keyCode == 65) {
        clearInterval(timerId);
        move(left);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 83) {
        clearInterval(timerId);
        move(down);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 87) {
        clearInterval(timerId);
        move(up);
    }
});

function start(){
    move(right);
}


function move(func){
    timerId = setInterval(function() {
        func();
        if(snake.offsetLeft==parseInt(String(food.style.left)) && snake.offsetTop==parseInt(String(food.style.top))){

            positionFood();
            addElementSnake();

        }


    }, 100);

}
function right(){

    var a;
    snake.style.left = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a+20)+"px";


}
function left(){

    var a;
    snake.style.left = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a-20)+"px";

}
function up(){

    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a-20)+"px";

}
function down(){

    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a+20)+"px";

}
function addElementSnake() {

}

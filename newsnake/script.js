var snake = document.getElementById("snake");
var field = document.getElementById("field");
field = snake.offsetParent;
var timerId;

//start();

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
    }, 100);

}
function right(){

    var a;
    snake.style.left = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a+20)+"px";
    console.log(snake.offsetLeft);

    //остановка анимации

    /*if(snake.offsetLeft>=480){
     clearInterval(timerId);
     }*/

}
function left(){

    var a;
    snake.style.left = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a-20)+"px";
    console.log(snake.offsetLeft);
}
function up(){

    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a-20)+"px";
    console.log(snake.offsetTop);
}
function down(){

    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a+20)+"px";
    console.log(snake.offsetTop);
}
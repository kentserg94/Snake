var snake = document.getElementById("snake");
var field = document.getElementById("field");
field = snake.offsetParent;
var timerId;
var direction = null;
var numberSnakeElement=0;
var add;
var elementSnake=[];

if(numberSnakeElement==4){
    start();
}


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
    if (event.keyCode == 68 && direction!=2 && direction!=1) {
        clearInterval(timerId);

        move(right);

    }
});


window.addEventListener("keydown", function(event) {
    if (event.keyCode == 65 && direction!=1 && direction!=2) {
        clearInterval(timerId);
        move(left);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 83 && direction!=3 && direction!=4) {
        clearInterval(timerId);
        move(down);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 87 && direction!=4 && direction!=3) {
        clearInterval(timerId);
        move(up);
    }
});

function start(){
    clearInterval(timerId);
    snake.style.left=0+'px';
    snake.style.top=0+'px';

    elementSnake.length=0;
}


function move(func){
    timerId = setInterval(function() {
        func();
        pos.snPosX.unshift(snake.style.left);
        pos.snPosY.unshift(snake.style.top);

        for (var i = 0; i<elementSnake.length; i++){
            elementSnake[i].style.left=pos.snPosX[i+1];
            elementSnake[i].style.top=pos.snPosY[i+1];
            elementSnake[i].style.display="block";

        }

        if(snake.offsetLeft==parseInt(String(food.style.left)) && snake.offsetTop==parseInt(String(food.style.top))){

            positionFood();

            addElementSnake(numberSnakeElement+1);
            document.getElementById("number"+numberSnakeElement);
            elementSnake.push(add);
            console.log(elementSnake);
            numberSnakeElement++;
            console.log(numberSnakeElement);



        }

        if(numberSnakeElement==4){
            start();
        }


    }, 100);

}
function right(){
    direction=1;
    var a;
    snake.style.left = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a+20)+"px";
    if(parseInt(String(snake.style.left))>480){
        snake.style.left=0+"px";
    }


}
function left(){
    direction=2;
    var a;
    snake.style.left = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a-20)+"px";
    if(parseInt(String(snake.style.left))<0){
        snake.style.left=480+"px";
    }

}
function up(){
    direction=3;
    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a-20)+"px";
    if(parseInt(String(snake.style.top))<0){
        snake.style.top=480+"px";
    }

}
function down(){
    direction=4;
    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a+20)+"px";
    if(parseInt(String(snake.style.top))>480){
        snake.style.top=0+"px";
    }

}
function addElementSnake(number) {
    add = field.appendChild(document.createElement("div"));
    add.className="element";
    add.setAttribute("id","number"+number);


}

var pos = {
    snPosX: [],
    snPosY: []

};
var snake = document.getElementById("snake");
var field = document.getElementById("field");
var point=document.getElementById("point");
var food = document.getElementById("food");

var timerId;
var direction = null;
var numberSnakeElement=0;
var createDivElement;
var elementSnake=[];


point.innerHTML="Score:"+numberSnakeElement;

var SnakeObj = {
    // snake: document.getElementById("snake"),
    snakeWidth: 20,
    snPosLeft: [],
    snPosTop: []

};





    function topPositionFood() {
        var max=500;
        var min=0;
        var topPosition = Math.floor(Math.random()*(max - min) + min);

            if(topPosition%20==0 ){

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
    snake.style.left=240+'px';
    snake.style.top=240+'px';
    numberSnakeElement=0;
    direction=null;



    for(var i=1; i<=elementSnake.length;i++){
        var x =document.getElementById("number"+String(i));
        x.remove();


    }
    elementSnake = [];
    SnakeObj.snPosX=[];
    SnakeObj.snPosTop=[];

}




function move(func){
    timerId = setInterval(function() {
        func();

        SnakeObj.snPosLeft.unshift(snake.style.left);
        SnakeObj.snPosTop.unshift(snake.style.top);

        contactCheck();
        posArrDelete();
        addPosInArr();

        //
        for (var checkPosition = 1; checkPosition < SnakeObj.snPosLeft.length; checkPosition++)
        {
            if(food.style.left==SnakeObj.snPosLeft[checkPosition] && food.style.top==SnakeObj.snPosTop[checkPosition]){
                positionFood();
            }

        }

        addDivToArr();

    }, 100);

}
function right(){
    direction=1;
    var a;
    a = snake.offsetLeft;
    snake.style.left=(a+SnakeObj.snakeWidth)+"px";
    if(parseInt(String(snake.style.left))>480){
        snake.style.left=0+"px";
    }


}
function left(){
    direction=2;
    var a;
    a = snake.offsetLeft;
    snake.style.left=(a-SnakeObj.snakeWidth)+"px";
    if(parseInt(String(snake.style.left))<0){
        snake.style.left=480+"px";
    }

}
function up(){
    direction=3;
    var a;
    a = snake.offsetTop;
    snake.style.top=(a-SnakeObj.snakeWidth)+"px";
    if(parseInt(String(snake.style.top))<0){
        snake.style.top=480+"px";
    }

}
function down(){
    direction=4;
    var a;
    a = snake.offsetTop;
    snake.style.top=(a+SnakeObj.snakeWidth)+"px";
    if(parseInt(String(snake.style.top))>480){
        snake.style.top=0+"px";
    }

}
function addElementSnake(number) {
    createDivElement = field.appendChild(document.createElement("div"));
    createDivElement.className="element";

    createDivElement.setAttribute("id","number"+number);

}

function contactCheck() {
    for (var check = 1; check < elementSnake.length; check++) {
        if (snake.style.left == SnakeObj.snPosLeft[check] && snake.style.top == SnakeObj.snPosTop[check]) {
            start();
        }
    }
}
function posArrDelete() {
    if (SnakeObj.snPosLeft.length > elementSnake.length + 1 && SnakeObj.snPosTop.length > elementSnake.length + 1) {
        SnakeObj.snPosLeft.splice(SnakeObj.snPosLeft.length - 1, 1);
        SnakeObj.snPosTop.splice(SnakeObj.snPosTop.length - 1, 1);
    }
}
function addDivToArr() {
    if (snake.offsetLeft == parseInt(String(food.style.left)) && snake.offsetTop == parseInt(String(food.style.top))) {

        positionFood();


        addElementSnake(numberSnakeElement + 1);
        document.getElementById("number" + numberSnakeElement);
        elementSnake.push(createDivElement);

        numberSnakeElement++;

        point.innerHTML = "Score:" + numberSnakeElement;


    }
}
function addPosInArr() {
    for (var i = 0; i < elementSnake.length; i++) {
        elementSnake[i].style.left = SnakeObj.snPosLeft[i + 1];
        elementSnake[i].style.top = SnakeObj.snPosTop[i + 1];
        elementSnake[i].style.display = "block";
        if (i % 2 == 0) {
            elementSnake[i].style.backgroundColor = "black";
        }
        else {
            elementSnake[i].style.backgroundColor = "blue";
        }

    }
}
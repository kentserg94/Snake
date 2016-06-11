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

var pos = {
    snPosX: [],
    snPosY: []

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
    pos.snPosX=[];
    pos.snPosY=[];

}


function contactCheck() {
    for (var check = 1; check < elementSnake.length; check++) {
        if (snake.style.left == pos.snPosX[check] && snake.style.top == pos.snPosY[check]) {
            start();
        }
    }
}
function move(func){
    timerId = setInterval(function() {
        func();
        pos.snPosX.unshift(snake.style.left);
        pos.snPosY.unshift(snake.style.top);

        contactCheck();

        if(pos.snPosX.length>elementSnake.length+1 && pos.snPosY.length>elementSnake.length+1){
            pos.snPosX.splice(pos.snPosX.length-1,1);
            pos.snPosY.splice(pos.snPosY.length-1,1);
        }

        for (var i = 0; i<elementSnake.length; i++){
            elementSnake[i].style.left=pos.snPosX[i+1];
            elementSnake[i].style.top=pos.snPosY[i+1];
            elementSnake[i].style.display="block";
            if(i%2==0){
                elementSnake[i].style.backgroundColor="black";
            }
            else{
                elementSnake[i].style.backgroundColor="blue";
            }

        }

        for (var checkPosition = 1; checkPosition < pos.snPosX.length; checkPosition++)
        {
            if(food.style.left==pos.snPosX[checkPosition] && food.style.top==pos.snPosY[checkPosition]){
                positionFood();
            }

        }

        if(snake.offsetLeft==parseInt(String(food.style.left)) && snake.offsetTop==parseInt(String(food.style.top))){

            positionFood();


            addElementSnake(numberSnakeElement+1);
            document.getElementById("number"+numberSnakeElement);
            elementSnake.push(createDivElement);

            numberSnakeElement++;

            point.innerHTML="Score:"+numberSnakeElement;


        }

    }, 100);

}
function right(){
    direction=1;
    var a;
    a = snake.offsetLeft;
    snake.style.left=(a+20)+"px";
    if(parseInt(String(snake.style.left))>480){
        snake.style.left=0+"px";
    }


}
function left(){
    direction=2;
    var a;
    a = snake.offsetLeft;
    snake.style.left=(a-20)+"px";
    if(parseInt(String(snake.style.left))<0){
        snake.style.left=480+"px";
    }

}
function up(){
    direction=3;
    var a;
    a = snake.offsetTop;
    snake.style.top=(a-20)+"px";
    if(parseInt(String(snake.style.top))<0){
        snake.style.top=480+"px";
    }

}
function down(){
    direction=4;
    var a;
    a = snake.offsetTop;
    snake.style.top=(a+20)+"px";
    if(parseInt(String(snake.style.top))>480){
        snake.style.top=0+"px";
    }

}
function addElementSnake(number) {
    createDivElement = field.appendChild(document.createElement("div"));
    createDivElement.className="element";

    createDivElement.setAttribute("id","number"+number);

}
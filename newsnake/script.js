var point=document.getElementById("point");
var timerId;
var numberSnakeElement=0;

var FieldObj={
    field:document.getElementById("field"),
    fieldWidth:400,
    fieldHeight:400
};

var SnakeObj = {
    snake: document.getElementById("snake"),
    snakeWidth: 20,
    snPosLeft: [],
    snPosTop: [],
    createDivElement: null,
    elementSnake:[],

     right: function(){
        this.direction=1;
        var a;
        a = this.snake.offsetLeft;
        this.snake.style.left=(a+SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.left))>FieldObj.fieldWidth-SnakeObj.snakeWidth){
                this.snake.style.left=0+"px";
            }

      
    },
    left: function (){
        this.direction=2;
        var a;
        a = this.snake.offsetLeft;
        this.snake.style.left=(a-SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.left))<0){
                this.snake.style.left=FieldObj.fieldWidth-SnakeObj.snakeWidth+"px";
            }

    },
     up: function(){
         this.direction=3;
        var a;
        a = this.snake.offsetTop;
         this.snake.style.top=(a-SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.top))<0){
                this.snake.style.top=FieldObj.fieldHeight-SnakeObj.snakeWidth+"px";
            }
         
    },
     down: function(){
         this.direction=4;
         var a;
         a = this.snake.offsetTop;
         this.snake.style.top=(a+SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.top))>FieldObj.fieldHeight-SnakeObj.snakeWidth){
                this.snake.style.top=0+"px";
            }
    
         
    },
    
    addElementSnake: function(number) {
        this.createDivElement = FieldObj.field.appendChild(document.createElement("div"));
        this.createDivElement.className="element";
        this.createDivElement.setAttribute("id","number"+number);

    }

};

var FoodObj = {
    food: document.getElementById("food"),
   
       topPositionFood: function () {
        var max=FieldObj.fieldHeight;
        var min=0;
        var topPosition = Math.floor(Math.random()*(max - min) + min);
    
            if(topPosition%SnakeObj.snakeWidth==0 ){
        
                this.food.style.top=topPosition+"px";
            }
            else {
                this.topPositionFood();
            }
    
    },
      leftPositionFood:function() {
        var max=FieldObj.fieldWidth;
        var min=0;
        var leftPosition = Math.floor(Math.random()*(max - min) + min);
    
            if(leftPosition%SnakeObj.snakeWidth==0){
        
        
                this.food.style.left=leftPosition+"px";
        
            }
            else {
                this.leftPositionFood();
            }
    
    },
     positionFood: function() {
    
        this.topPositionFood();
        this.leftPositionFood();
    }
};

function start(){

    clearInterval(timerId);
    SnakeObj.snake.style.left=0+'px';
    SnakeObj.snake.style.top=0+'px';
    numberSnakeElement=0;
    direction=null;



    for(var i=1; i<=SnakeObj.elementSnake.length;i++){
        var x =document.getElementById("number"+String(i));
        x.remove();
        }
    SnakeObj.elementSnake = [];
    SnakeObj.snPosLeft=[];
    SnakeObj.snPosTop=[];

}



function move(func){
    point.innerHTML="Score:"+SnakeObj.elementSnake.length;
    clearInterval(timerId);
    timerId = setInterval(function() {
        func();

        SnakeObj.snPosLeft.unshift(SnakeObj.snake.style.left);
        SnakeObj.snPosTop.unshift(SnakeObj.snake.style.top);

        contactCheck();
        posArrDelete();
        addPosInArr();
        checkFoodSpawn();
        addDivToArr();

    }, 100);

}

function contactCheck() {
    for (var check = 1; check < SnakeObj.elementSnake.length+1; check++) {
        if (SnakeObj.snake.style.left == SnakeObj.snPosLeft[check] && SnakeObj.snake.style.top == SnakeObj.snPosTop[check]) {
            start();
        }
    }
}

function checkFoodSpawn() {
    for (var checkPosition = 1; checkPosition < SnakeObj.snPosLeft.length; checkPosition++) {
        if (FoodObj.food.style.left == SnakeObj.snPosLeft[checkPosition] && FoodObj.food.style.top == SnakeObj.snPosTop[checkPosition]) {
            FoodObj.positionFood();
            checkFoodSpawn();
        }

    }
}

function posArrDelete() {
    if (SnakeObj.snPosLeft.length > SnakeObj.elementSnake.length + 1 && SnakeObj.snPosTop.length > SnakeObj.elementSnake.length + 1) {
        SnakeObj.snPosLeft.splice(SnakeObj.snPosLeft.length - 1, 1);
        SnakeObj.snPosTop.splice(SnakeObj.snPosTop.length - 1, 1);
    }
}
function addDivToArr() {
    if (SnakeObj.snake.offsetLeft == parseInt(String(FoodObj.food.style.left)) && SnakeObj.snake.offsetTop == parseInt(String(FoodObj.food.style.top))) {

        FoodObj.positionFood();


        SnakeObj.addElementSnake(numberSnakeElement + 1);
        document.getElementById("number" + numberSnakeElement);
        SnakeObj.elementSnake.push(SnakeObj.createDivElement);

        numberSnakeElement++;

        point.innerHTML = "Score:" + numberSnakeElement;


    }
}
function addPosInArr() {
    for (var i = 0; i <SnakeObj.elementSnake.length; i++) {
        SnakeObj.elementSnake[i].style.left = SnakeObj.snPosLeft[i + 1];
        SnakeObj.elementSnake[i].style.top = SnakeObj.snPosTop[i + 1];
        SnakeObj.elementSnake[i].style.display = "block";
        if (i % 2 == 0) {
            SnakeObj.elementSnake[i].style.backgroundColor = "black";
        }
        else {
            SnakeObj.elementSnake[i].style.backgroundColor = "blue";
        }

    }
}

function main() {
    start();
    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 68 && SnakeObj.direction!=2 && SnakeObj.direction!=1) {

            move(SnakeObj.right.bind(SnakeObj));
        }
    });


    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 65 && SnakeObj.direction!=1 && SnakeObj.direction!=2) {

            move(function(){
                SnakeObj.left();
            });
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 83 && SnakeObj.direction!=3 && SnakeObj.direction!=4) {

            move(SnakeObj.down.bind(SnakeObj));
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 87 && SnakeObj.direction!=4 && SnakeObj.direction!=3) {

            move(SnakeObj.up.bind(SnakeObj));
        }
    });

    FoodObj.positionFood();
    point.innerHTML="Score:"+SnakeObj.elementSnake.length;
}

main();
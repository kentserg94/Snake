"use strict";
;var point=document.getElementById("point");

var timerId;
var numberSnakeElement=0;
//если кто то будет менять этот код пожалуйста не трогайте объект values !!! ПОЖАЛУЙСТА!!!!Не пытайтесь понять как это работает

var values = {
    diff_value: null,
    size_value: null,
    width:null,
    getCheckedValue: function (form) {
        console.log("a"+form);
        var diffs = button.elements["diff"];

        for (var i = 0; i < diffs.length; i++) {
            if (diffs[i].checked) {
                this.diff_value = diffs[i].value;


            }
        }

        var sizes = button.elements["size"];

        for (var i = 0; i < sizes.length; i++) {
            if (sizes[i].checked) {
                this.size_value = sizes[i].value;


            }
        }
    }
};
var button = document.querySelector("form");
button.addEventListener("submit", function(event){
        event.preventDefault();
        var diffs = button.elements["diff"];

        for (var i = 0; i < diffs.length; i++) {
            if (diffs[i].checked) {
                values.diff_value = diffs[i].value;


            }
        }
        var sizes = button.elements["size"];

        for (var i = 0; i < sizes.length; i++) {
            if (sizes[i].checked) {
                values.size_value = sizes[i].value;


            }
        }

        values.getCheckedValue.bind(event.target);
        var score = document.getElementById("score");
        FieldObj.applyWidth();
        FieldObj.applyHeight();
        FieldObj.field.style.display = "block";
        score.style.display = "block";
        button.style.display = "none";
        // var width=parseInt(String(FieldObj.field.style.width));
        // values.width=width;
        main();

    }
);
var settings = {
    fieldSize: {
        small: 200,
        medium: 400,
        big: 800
    },
    difficulty: {
        easy: {
            speed: 100
        },
        medium: {
            speed: 75
        },
        hard: {
            speed: 50
        }
    },
    difficultySettings: function(){
        if (values.diff_value == "easy") {
            this.speed = this.difficulty.easy.speed
        }
        if (values.diff_value == "medium") {
            this.speed = this.difficulty.medium.speed
        }
        if (values.diff_value == "hard") {
            this.speed = this.difficulty.hard.speed
        }
        return this.speed
    },
    fieldSettings: function(){
        if (values.size_value == "small") {
            this.size = settings.fieldSize.small
        }
        if (values.size_value == "medium") {
            this.size = settings.fieldSize.medium
        }
        if (values.size_value == "big") {
            this.size = settings.fieldSize.big
        }
        return this.size
    }
};


// problem
var ScoreObj={
    score:document.getElementById("point"),
    scoreIncr:function () {
        var inc=0;
        this.score.innerHTML="Score:" + inc++;
    }
};

var FieldObj={
    field:document.getElementById("field"),
    fieldWidth:settings.fieldSettings,
    fieldHeight:settings.fieldSettings,
    applyWidth: function(){
        this.field.style.width = this.fieldWidth() + "px";
        return this.field.style.width;
    },
    applyHeight: function(){
        this.field.style.height = this.fieldHeight() + "px";
        return this.field.style.height
    }
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
            if(parseInt(String(this.snake.style.left))>FieldObj.fieldWidth()-SnakeObj.snakeWidth){
                this.snake.style.left=0+"px";
            }

      
    },
    left: function (){
        this.direction=2;
        var a;
        a = this.snake.offsetLeft;
        this.snake.style.left=(a-SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.left))<0){
                this.snake.style.left=FieldObj.fieldWidth()-SnakeObj.snakeWidth+"px";
            }

    },
     up: function(){
         this.direction=3;
        var a;
        a = this.snake.offsetTop;
         this.snake.style.top=(a-SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.top))<0){
                this.snake.style.top=FieldObj.fieldHeight()-SnakeObj.snakeWidth+"px";
            }
         
    },
     down: function(){
         this.direction=4;
         var a;
         a = this.snake.offsetTop;
         this.snake.style.top=(a+SnakeObj.snakeWidth)+"px";
            if(parseInt(String(this.snake.style.top))>FieldObj.fieldHeight()-SnakeObj.snakeWidth){
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
        var max=FieldObj.fieldWidth();

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
        var max=FieldObj.fieldWidth();
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
    SnakeObj.direction=null;



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

    }, settings.difficultySettings());

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
        point.innerHTML="Score:"+SnakeObj.elementSnake.length;
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
    console.log("a "+values.width);
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





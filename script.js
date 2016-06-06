/**
 * Created by Sergey on 05.06.2016.
 */
var snake = document.getElementById("snake");
var timerId = setTimeout(function () {

   
}, 2000);


addEventListener("keyup", function(event) {
    if (event.keyCode == 68) {
        timerId;
    }
        });


addEventListener("keyup", function(event) {
    if (event.keyCode == 65)

        left();
});

addEventListener("keyup", function(event) {
    if (event.keyCode == 83)

        bottom();
});

addEventListener("keyup", function(event) {
    if (event.keyCode == 87)

        up();
});


function right(){
{

        var a;
        snake.style.left = snake.offsetLeft;
        a = snake.offsetLeft;
        snake.style.left = (a + 10) + "px";



}


}
function left(){

    var a;
    snake.style.right = snake.offsetLeft;
    a = snake.offsetLeft;
    snake.style.left=(a-10)+"px";

}
function bottom(){

    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a+10)+"px";

}
function up(){

    var a;
    snake.style.top = snake.offsetTop;
    a = snake.offsetTop;
    snake.style.top=(a-10)+"px";

}
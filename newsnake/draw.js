function draw() {
    var score=document.createElement("div");
    score.className="score";
    score.setAttribute("id", "score");
    document.body.appendChild(score);
    var point=document.createElement("h2");
    point.setAttribute("id","point");
    score.appendChild(point);
    var field = document.createElement("div");
    field.setAttribute("id","field");
    document.body.appendChild(field);
    var snake=document.createElement("div");
    snake.setAttribute("id","snake");
    field.appendChild(snake);
    var food=document.createElement("div");
    food.setAttribute("id","food");
    field.appendChild(food);
}
draw();

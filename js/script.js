let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

/* Desenhar e definir cor */
function criarBG() {
    /* cor de fundo */
    context.fillStyle = "lightgreen";
    /* Desenha o retangulo do jogo */
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function criarComida() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "up")    direction = "down";
    if (event.keyCode == 39 && direction != "left")  direction = "right";
    if (event.keyCode == 40 && direction != "down")  direction = "up";
}

function iniciarJogo() {

    /* cobra aparecer do outro lado */
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0        && direction == "left")  snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "up")    snake[0].y = 0;
    if (snake[0].y < 0        && direction == "down")  snake[0].y = 16 * box;

    criarBG();
    criarCobra();
    criarComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /* Mover cobra */
    if (direction == "right") snakeX += box;
    if (direction == "left")  snakeX -= box;
    if (direction == "down")  snakeY -= box;
    if (direction == "up")    snakeY += box;

    /*  */
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop()
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    /*snake.pop();*/

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);

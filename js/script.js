let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
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

criarBG();
criarCobra();
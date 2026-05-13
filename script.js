let gameArea = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");
let score = 0;

function randomFruit() {
    let fruits = ["🍎", "🍌", "🍉", "🍓", "🍍"];
    return fruits[Math.floor(Math.random() * fruits.length)];
}

function spawnFruit() {
    let fruit = document.createElement("div");
    fruit.classList.add("fruit");
    fruit.textContent = randomFruit();

    // Random x position
    fruit.style.left = Math.random() * (window.innerWidth - 60) + "px";
    fruit.style.top = "500px";

    gameArea.appendChild(fruit);

    let fallSpeed = 2 + Math.random() * 3;

    // Falling animation
    let fall = setInterval(() => {
        fruit.style.top = fruit.offsetTop - fallSpeed + "px";

        // Remove fruit if out of screen
        if (fruit.offsetTop < -50) {
            fruit.remove();
            clearInterval(fall);
        }
    }, 20);

    // Slice logic
    fruit.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        fruit.style.transform = "scale(0)";
        setTimeout(() => fruit.remove(), 200);
        clearInterval(fall);
    });
}

setInterval(spawnFruit, 800);
let startTime = null;
let timerInterval = null;
let isGameStarted = false;
let stepCount = 0;
const maxSteps = 100;
let gameSession = 0;

const button = document.querySelector("button");
const timerDisplay = document.getElementById("timer");
const stepNumber = document.getElementById("stepNumber");
const historyList = document.getElementById("history-list");

function endGame(message) {
    clearInterval(timerInterval);
    timerInterval = null;
    button.textContent = "Bắt đầu";
    isGameStarted = false;
    alert(message);
    const finalTime = timerDisplay.textContent;
    gameSession++;
    const entry = document.createElement("div");
    entry.className = "grid grid-cols-4 gap-4 bg-gray-200 p-2 h-10 mt-2";
    entry.innerHTML = `
        <div class="flex rounded-md">${gameSession}</div>
        <div class="flex rounded-md">${stepCount}</div>
        <div class="flex rounded-md">${finalTime}</div>    
    `;
    historyList.appendChild(entry);
    historyList.scrollTop = historyList.scrollHeight;
    timerDisplay.textContent = "00:00";
    stepCount = 0;
    stepNumber.textContent = 0;
}

function checkWin() {
    const tiles = Array.from(document.getElementById("grid").children);
    const isWin = tiles.every((tile, index) => {
        if (index === tiles.length - 1) return tile.classList.contains("black-tile");
        return tile.innerHTML == index + 1;
    });

    if (isWin) {
        endGame("Chúc mừng bạn đã thắng!");
    }
}


button.addEventListener("click", function () {
    if (!timerInterval) {
        startTime = Date.now();
        isGameStarted = true;
        stepCount = 0;
        stepNumber.textContent = "0";

        button.textContent = "Kết thúc";
        timerInterval = setInterval(() => {
            const elapsedMs = Date.now() - startTime;
            const seconds = Math.floor(elapsedMs / 1000);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;

            const formatted = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
            timerDisplay.textContent = formatted;
        }, 1000);
    } else {
        endGame("Bạn đã kết thúc trò chơi!");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const cols = 4;

    function swap(frIndex, toIndex) {
        const tiles = Array.from(grid.children);
        const temp = tiles[frIndex].innerHTML;
        const tempClass = tiles[toIndex].className;
        tiles[frIndex].innerHTML = tiles[toIndex].innerHTML;
        tiles[toIndex].innerHTML = temp;

        const fromHadBlack = tiles[frIndex].classList.contains("black-tile","bg-black");
        const toHadBlack = tiles[toIndex].classList.contains("black-tile","bg-black");

        tiles[frIndex].className = tiles[toIndex].className;
        tiles[toIndex].className = tempClass;

        if (fromHadBlack) {
            tiles[frIndex].classList.remove("black-tile");
            tiles[toIndex].classList.add("black-tile");
        } else if (toHadBlack) {
            tiles[toIndex].classList.remove("black-tile");
            tiles[frIndex].classList.add("black-tile");
        }
    }

    function move(direction) {
        if (!isGameStarted) return;
        if (stepCount >= maxSteps) {
            endGame("Bạn đã hết lượt đi!");
            return;
        }

        const tiles = Array.from(grid.children);
        const emptyIndex = tiles.findIndex(tile => tile.classList.contains("black-tile"));
        let targetIndex = null;

        switch (direction) {
            case "ArrowUp":
            case "w":
                targetIndex = emptyIndex - cols;
                break;
            case "ArrowDown":
            case "s":
                targetIndex = emptyIndex + cols;
                break;
            case "ArrowLeft":
            case "a":
                if (emptyIndex % cols === 0) return;
                targetIndex = emptyIndex - 1;
                break;
            case "ArrowRight":
            case "d":
                if (emptyIndex % cols === cols - 1) return;
                targetIndex = emptyIndex + 1;
                break;
        }

        if (targetIndex >= 0 && targetIndex < tiles.length) {
            swap(emptyIndex, targetIndex);
            stepCount++;
            stepNumber.textContent = stepCount;
            checkWin();
        }
    }

    document.addEventListener("keydown", (event) => {
        const key = event.key;
        if (["w", "a", "s", "d", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
            move(key);
        }
    });
});

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let win = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGames = document.querySelector(".newgame");
let turnO = true;
enableBox = () => {
  for (box of boxes) {
    box.disabled = false;
  }
};
disBox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
set = () => {
  enableBox();
  win.classList.add("hide");
  msg.innerText = "";
  turnO = true;
};
newGame = () => {
  enableBox();
  win.classList.add("hide");
  msg.innerText = "";
  turnO = true;
};
newGames.addEventListener("click", () => {
  box.innerText = "";
  set();
});
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    reset.addEventListener("click", () => {
      box.innerText = "";
      set();
    });
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinPattern();
  });
});

const showWinner = (winner) => {
  win.classList.remove("hide");
  msg.innerText = `congratulations
   Winner is '${winner}'`;
};

const checkWinPattern = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
        disBox();
      }
    }
  }
};

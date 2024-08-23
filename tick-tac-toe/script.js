let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let win = document.querySelector(".msg-container");
let newgame=document.querySelector(".newgame")
let msg = document.querySelector("#msg");
let turnO = true;

const enableBox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const disBox = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const set = () => {
  enableBox();
  win.classList.add("hide");
  msg.innerText = "";
  turnO = true;
};

const showWinner = (winner) => {
  win.classList.remove("hide");
  msg.innerText = `Congratulations! 
  Winner is '${winner}'`;
};

const checkWinPattern = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("winner", pos1);
      showWinner(pos1);
      disBox();
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
    } else {
      box.innerText = "O";
    }
    turnO = !turnO;
    box.disabled = true;
    checkWinPattern();
  });
});

reset.addEventListener("click", () => {
  set();
});
newgame.addEventListener("click", () => {
  set();
});
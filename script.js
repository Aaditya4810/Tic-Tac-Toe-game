let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let new_game = document.querySelector("#new_game");
let reset = document.querySelector("#reset");

function print_winner(val) {
    msg.innerHTML = val + " won the game";
    msg.style.fontSize = "2rem";
    count=0;
}

let winner = 0;

let win_condition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function check_winner() {
    win_condition.forEach((win_pattern) => {
        let pos1 = win_pattern[0];     //return index
        let pos2 = win_pattern[1];
        let pos3 = win_pattern[2];
        val1 = boxes[pos1].innerText;  //wah index se box ka inner text access karenge
        val2 = boxes[pos2].innerText;
        val3 = boxes[pos3].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                winner = 1;                           //jitega toh winner=1 so no key can press
                print_winner(val1);
            }
        }
    });
}


let turn = "0";
let count = 0;

for (let box of boxes) {
    box.onclick = () => {
        if (box.innerText === "" && winner === 0) {      //check ,agar empty ho toh me button click kar sakte hai && winner=0
            if (turn === "0") {                                                            // koi jitna nhi hona chaiye
                box.innerText = "0";
                box.style.color = "blue";
                body.style.backgroundColor = " rgb(231, 154, 108)";
                turn = "X";

            } else {
                box.innerText = "X";
                box.style.color = "red";
                body.style.backgroundColor = " rgb(27, 152, 205)";
                turn = "0";
            }
            count++;
            check_winner();
            check_count();
        }
        else {                 //agar already khuch fill kar diya ho toh uss box ko access nhi kar sakte
            return;
        }

    }
}

function check_count() {
    if (count === 9) {
        msg.innerHTML = "Match Draw";
        msg.style.fontSize = "2rem";
    }
}


reset.onclick = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        count = 0;
    });
}


new_game.onclick = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        count = 0;
        msg.innerHTML = "";
        winner=0;
    });
}
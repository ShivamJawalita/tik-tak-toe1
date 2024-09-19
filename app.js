let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbuton");
let winneranouncement = document.querySelector(".winneranouncement");

let turn0 = true; // ture = 0 , false = x

const winpatern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0 === true) {
            box.innerText = "o";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        cheackwinner();
    })
})

let boxdissable =() =>{
    for(box of boxes){
        box.disabled  = true;
    }
}

let winner = (winner) =>{
    winneranouncement.innerText = `congratulation winner is  ${winner}`;
    winneranouncement.classList.remove("hide");
    boxdissable();
}


const cheackwinner = () => {
    for (let pattern of winpatern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner" , val1);
                winner(val1);
            }
        }
    }
}

const resetgame = () =>{
    turn0 = true;
    enablebox();
}
resetbtn.addEventListener("click" , resetgame);

const enablebox = () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        winneranouncement.classList.add("hide");

    }
}
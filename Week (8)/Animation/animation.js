let Jack = new Array(4);
let curPosition = 0;
let jumping;
let direction = "up";

Jack[0] = new Image();
Jack[0].src = "images/jump0.gif";
Jack[1] = new Image();
Jack[1].src = "images/jump1.gif";
Jack[2] = new Image();
Jack[2].src = "images/jump2.gif";
Jack[3] = new Image();
Jack[3].src = "images/jump3.gif";

function Jump() {
    if (direction === "up") {
        if (curPosition === 3) {
            curPosition--;
            direction = "down";
        } else {
            curPosition++;
        }
    } else {
        if (curPosition === 0) {
            curPosition++;
            direction = "up";
        } else {
            curPosition--;
        }
    }
    document.Jack.src = Jack[curPosition].src;
}

function startJumping() {
    if (jumping) {
        clearInterval(jumping);
    }
    jumping = setInterval("Jump()", 200);
}
//this massive if else statement will determine the winner
//winning is based on X and O positions within the array
//turns array will store the X's and O's as the players take their turns

var turns = ["", "", "", "", "", "", "", "", ""];

//checks for a horizontal win!!
if(turns[0] == "X" && turns[1] == "X" && turns[2] == "X"){
    console.log('first one');
    console.log('player1 wins!');
}
else if(turns[0] == "O" && turns[1] == "O" && turns[2] == "O"){
    console.log('player2 wins!');
}
else if (turns[3] == "X" && turns[4] == "X" && turns[5] == "X") {
    console.log('player1 wins!');
}
else if (turns[3] == "O" && turns[4] == "O" && turns[5] == "O") {
    console.log('player2 wins!');
}
else if (turns[6] == "X" && turns[7] == "X" && turns[8] == "X") {
    console.log('player1 wins!');
}
else if (turns[6] == "O" && turns[7] == "O" && turns[8] == "O") {
    console.log('player2 wins!');
}

//checks for a vertical win!!
else if (turns[0] == "X" && turns[3] == "X" && turns[6] == "X") {
    console.log('player1 wins!');
}
else if (turns[0] == "O" && turns[3] == "O" && turns[6] == "O") {
    console.log('player2 wins!');
}
else if (turns[1] == "X" && turns[4] == "X" && turns[7] == "X") {
    console.log('player1 wins!');
}
else if (turns[1] == "O" && turns[4] == "O" && turns[7] == "O") {
    console.log('player2 wins!');
}
else if (turns[2] == "X" && turns[5] == "X" && turns[8] == "X") {
    console.log('player1 wins!');
}
else if (turns[2] == "O" && turns[5] == "O" && turns[8] == "O") {
    console.log('player2 wins!');
}

//checks for a diagonal win!!
else if (turns[0] == "X" && turns[4] == "X" && turns[8] == "X") {
    console.log('player1 wins!');
}
else if (turns[0] == "O" && turns[4] == "O" && turns[8] == "O") {
    console.log('player2 wins!');
}
else if (turns[2] == "X" && turns[4] == "X" && turns[6] == "X") {
    console.log('player1 wins!');
}
else if (turns[2] == "O" && turns[4] == "O" && turns[6] == "O") {
    console.log('player2 wins!');
}
else {
    console.log('no winners! play again!');
}
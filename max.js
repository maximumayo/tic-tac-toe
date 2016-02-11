//this massive if else statement will determine the winner
//winning is based on X and O positions within the array
//moves_array array will store the X's and O's as the players take their moves_array

var moves_array = ["", "", "", "", "", "", "", "", ""];

//checks for a horizontal win!!
function find_winner(){
    console.log(turn_counter);
    if(moves_array[0] == "X" && moves_array[1] == "X" && moves_array[2] == "X"){
        console.log('first one');
        console.log(player + ' wins!');
    }
    else if(moves_array[0] == "O" && moves_array[1] == "O" && moves_array[2] == "O"){
        console.log(player + ' wins!');
    }
    else if (moves_array[3] == "X" && moves_array[4] == "X" && moves_array[5] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[3] == "O" && moves_array[4] == "O" && moves_array[5] == "O") {
        console.log('player2 wins!');
    }
    else if (moves_array[6] == "X" && moves_array[7] == "X" && moves_array[8] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[6] == "O" && moves_array[7] == "O" && moves_array[8] == "O") {
        console.log('player2 wins!');
    }

//checks for a vertical win!!
    else if (moves_array[0] == "X" && moves_array[3] == "X" && moves_array[6] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[0] == "O" && moves_array[3] == "O" && moves_array[6] == "O") {
        console.log('player2 wins!');
    }
    else if (moves_array[1] == "X" && moves_array[4] == "X" && moves_array[7] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[1] == "O" && moves_array[4] == "O" && moves_array[7] == "O") {
        console.log('player2 wins!');
    }
    else if (moves_array[2] == "X" && moves_array[5] == "X" && moves_array[8] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[2] == "O" && moves_array[5] == "O" && moves_array[8] == "O") {
        console.log('player2 wins!');
    }

//checks for a diagonal win!!
    else if (moves_array[0] == "X" && moves_array[4] == "X" && moves_array[8] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[0] == "O" && moves_array[4] == "O" && moves_array[8] == "O") {
        console.log('player2 wins!');
    }
    else if (moves_array[2] == "X" && moves_array[4] == "X" && moves_array[6] == "X") {
        console.log('player1 wins!');
    }
    else if (moves_array[2] == "O" && moves_array[4] == "O" && moves_array[6] == "O") {
        console.log('player2 wins!');
    }
    else {
        console.log('no winners! play again!');
    }
}

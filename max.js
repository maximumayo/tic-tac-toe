//this massive if else statement will determine the winner
//winning is based on X and O positions within the array
//moves_array array will store the X's and O's as the players take their moves_array

/*--------GLOBAL VARIABLES--------*/
var moves_array;
var winner_div;

/*--------HARD CODED 3X3 WIN CONDITION FUNCTION--------*/
//checks for a horizontal win!!
//function find_winner() {
//    console.log(turn_counter);
//     winner_div = $('<div>').text(player + ' wins!');
//
//    if (moves_array[0] == "X" && moves_array[1] == "X" && moves_array[2] == "X") {
//        console.log('first one');
//        console.log(player + ' wins!');
//
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[0] == "O" && moves_array[1] == "O" && moves_array[2] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[3] == "X" && moves_array[4] == "X" && moves_array[5] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[3] == "O" && moves_array[4] == "O" && moves_array[5] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[6] == "X" && moves_array[7] == "X" && moves_array[8] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[6] == "O" && moves_array[7] == "O" && moves_array[8] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//
////checks for a vertical win!!
//    else if (moves_array[0] == "X" && moves_array[3] == "X" && moves_array[6] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[0] == "O" && moves_array[3] == "O" && moves_array[6] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[1] == "X" && moves_array[4] == "X" && moves_array[7] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[1] == "O" && moves_array[4] == "O" && moves_array[7] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[2] == "X" && moves_array[5] == "X" && moves_array[8] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[2] == "O" && moves_array[5] == "O" && moves_array[8] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//
////checks for a diagonal win!!
//    else if (moves_array[0] == "X" && moves_array[4] == "X" && moves_array[8] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[0] == "O" && moves_array[4] == "O" && moves_array[8] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[2] == "X" && moves_array[4] == "X" && moves_array[6] == "X") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else if (moves_array[2] == "O" && moves_array[4] == "O" && moves_array[6] == "O") {
//        console.log(player + ' wins!');
//        $('#stats_area').append(winner_div);
//    }
//    else {
//        console.log('no winners! play again!');
//        turn_counter++;
//    }
//
//}

//document ready function
//contains click handler for creation of 5x5 board
$(document).ready(function () {
    $('#five_by').click(function () {
        create5x5();
    });
});


//dynamic 5x5 board creation
function create5x5() {
    board_size = 5;
    moves_array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    var new_button_container = $('<div>').addClass('col-xs-12 button_container');
    var new_parent_row = $('<div>').addClass('row');
    for (var i = 0; i < 5; i++) {
        var new_row = $('<div>').addClass('row square_row_five');
        for (var j = 0; j < 5; j++) {
            var new_button = $('<button>').addClass('square col-xs-2').attr({
                id: id_number,
                indicator: indicator_number
            });
            id_number++;
            indicator_number += indicator_number;
            console.log(indicator_number);
            $(new_row).append(new_button);
        }
        $(new_button_container).append(new_row);
    }
    $(new_parent_row).append(new_button_container);
    $('#game_area').append(new_parent_row);

    //maybe put these inside the board creation
    for (var o = 0; o < (board_size * board_size); o += board_size) {
        horizontal.push(o);
        for (var i = o + 1; i < o + board_size; i++) {
            horizontal.push(i);
        }
        wins.push(horizontal);
        horizontal = [];
    }


    for (var o = 0; o < board_size; o++) {
        vertical.push(o);
        for (var i = o + board_size; i < (board_size * board_size); i += board_size) {
            vertical.push(i);
        }
        wins.push(vertical);
        vertical = [];
    }


    for (var i = 0; i < (board_size * board_size); i += (board_size + 1)) {
        left_diag.push(i);
    }
    wins.push(left_diag);

    for (var i = board_size - 1; i < ((board_size * board_size) - 1); i += (board_size - 1)) {
        right_diag.push(i);
    }
    wins.push(right_diag);


    function win_condition(array) {
        for (var outer = 0; outer < wins.length; outer++) {
            var count = 0;
            for (var inner = 0; inner < board_size; inner++) {
                if (array[wins[outer][inner]] === player) {
                    count++;
                    if (count === board_size) {
                        //add dynamic div to say player won
                        console.log(player + " wins!");
                    }
                }
            }
        }
        if(turn_counter === (board_size * board_size)-1) {
            winner_div = $('<div>').text('DRAW!');
            $('#stats_area').append(winner_div);
        }
        turn_counter++;
    }

}
/*--------GLOBAL VARIABLES--------*/
var current_square = null;
var p1;
var p2;
var player = null;
var turn_counter = 0;
var id_number = 0;
var indicator_number = 1;


/*--------DOCUMENT READY FUNCTION--------*/
$(document).ready(function(){


    /*--------3X3 DYNAMIC BOARD CALL--------*/

//@purpose: calls to the create3x3() function in order to dynamically make the tic-tac-toe board on page load
//@params: none
//@return: none
//@globals: none
    $('#three_by').click(function(){
        create3x3();
    });


    /*--------SQUARE CLICK HANDLER--------*/

//@purpose: hold the click handler for each 'square' on our game board and allows them all to be clicked and then call to other functions
//@params: none
//@return: none
//@global: none
    $('#game_area').on('click', 'button', function(){
        console.log('square clicked');
        current_square = $(this);
        store_square($(this).attr('id'));
        win_condition(moves_array);
        player_turn();
        $(this).attr('disabled', true);
    });


    /*--------CHOOSE PLAYER SIGN CLICK HANDLER--------*/

//@purpose: a click handler that activates when the first player chooses which symbol they want to be by clicking the 'X' or 'O' buttons; calls to function player_select and player_turn
//@params: none
//@return: none
//@globals: none
    $('.player_sign').click(function(){
        console.log('choosing player button clicked');
        player_select($(this).text());
        player_turn();
    });


    $('.btn-primary').click(function(){
       reset_game();
    });

    //var winner_div = $('<div>').text(player + ' wins!');
});


/*--------STORES SQUARE VALUE/OUTPUTS TEXT FUNCTION--------*/

//@purpose: this takes the id value of the square you pressed and in that same index position in the empty array it stores the variable player which changes from 'X to 'O' depending on who's turn it is
//@params: square_value - the value of the id of the square clicked
//@return: none
//@globals:
//player - the value of 'X' or 'O' depending on who's turn it is
//current_square - hold the 'square' object you clicked
function store_square(square_value){
    console.log('store square called');
    moves_array[square_value] += player;
    console.log(moves_array);
    current_square.text(player);
}


/*--------PLAYER SIGN SELECTION FUNCTION--------*/

//@purpose: this function selects the sign that player1 (p1) is and then sets the other sign to player 2(p2)
//@params: button_value - the value of the actual button pressed...so either 'X' or 'O'
//@return: none
//@globals: none
function player_select(button_value){
    if (button_value === 'X'){
        p1 = button_value;
        p2 = 'O';
        console.log('p1 is x');

    } else {
        p1 = button_value;
        p2 = 'X';
        console.log('p1 is O');
    }
}


/*--------TOGGLES PLAYER TURN FUNCTION--------*/

//@purpose: to set the player's turn by toggling between the even and odd numbers that the turn_counter is
//@params: none
//@return: the text of who's turn it is
//@globals:
//turn_counter - keeps track of the amount of turn had in the game between both players
//player - holds the variable of the actual player and what symbol they are
function player_turn(){
    console.log('selecting player function');
    if(turn_counter %2 === 0){
        $('#player_turn').text('Player 1\'s turn');
        player = p1;
    } else {
        $('#player_turn').text('Player 2\'s turn');
        player = p2;
    }
}

//GLOBALS
var board_size = null;
var horizontal = [];
var vertical = [];
var left_diag = [];
var right_diag = [];
var wins = [];

/*--------DYNAMIC 3X3 BOARD CREATION--------*/

//@purpose: to dynamically create the 3x3 tic tac toe board using for loops
//@params: none
//@return: none really; you are creating all the elements here dynamically as then return those to the page
//@globals:
//indicator - a number used that helps create our dynamic win condition
//id_number - this number gets put as the id value of every element in order from 0-8
function create3x3(){
    board_size = 3;
    moves_array = ["", "", "", "", "", "", "", "", ""];
    var new_button_container = $('<div>').addClass('col-xs-12 button_container');
    var new_parent_row = $('<div>').addClass('row');
    for (var i=0; i<3; i++){
        var new_row = $('<div>').addClass('row square_row');
        for(var j=0; j<3; j++){
            var new_button = $('<button>').addClass('square col-xs-4').attr({id:id_number, indicator:indicator_number});
            id_number++;
            indicator_number+= indicator_number;
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

}


function win_condition(array) {
    for (var outer = 0; outer < wins.length; outer++) {
        var count = 0;
        for (var inner = 0; inner < board_size; inner++) {
            if (array[wins[outer][inner]] === player) {
                count++;
                if (count === board_size) {
                    //add dynamic div to say player won
                    winner_div = $('<div>').text(player + ' wins!');
                    console.log(player + " wins!");
                }
            }
        }
    }
    turn_counter++;
}

function reset_game() {
    moves_array = ["", "", "", "", "", "", "", "", ""];
    current_square = null;
    p1 = null;
    p2 = null;
    player = null;
    turn_counter = 0;
    id_number = 0;
    indicator_number = 1;
    $('#game_area > .row').remove();
    $(winner_div).remove();
}
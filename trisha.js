//GLOBAL VARIABLES//

//@purpose: hold the click handler for each 'square' on our game board and allows them all to be clicked and then call to other functions
//@params: none
//@return: none
//@global:
var current_square = null;
var p1;
var p2;
var player = null;
var turn_counter = 0;

$(document).ready(function () {
    $('.square').click(function () {
        console.log('square clicked');
        current_square = $(this);
        store_square($(this).attr('id'));
        find_winner();
        player_turn();
        $(this).attr('disabled', true);
    });

    //click on id='X' and it sets player1 to the (this).text('X')
    $('.player_sign').click(function () {
        console.log('choosing player button clicked');
        player_select($(this).text());
        player_turn();
    });
});

function store_square(square_value) {
    console.log('store square called');
    moves_array[square_value] += player;
    console.log(moves_array);
    current_square.text(player);
}

function player_select(button_value) {
    if (button_value === 'X') {
        p1 = button_value;
        p2 = 'O';
        console.log('p1 is x');

    } else {
        p1 = button_value;
        p2 = 'X';
        console.log('p1 is O');
    }
}

function player_turn() {
    console.log('selecting player function');
    if (turn_counter % 2 === 0) {
        $('#player_turn').text('Player 1\'s turn');
        player = p1;
    } else {
        $('#player_turn').text('Player 2\'s turn');
        player = p2;
    }
}
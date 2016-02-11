<<<<<<< HEAD
//GLOBAL VARIABLES//
=======
var current_square = null;
var p1;
var p2;
var player = null;
var turn_counter = 0;
var id_number = 0;
var indicator_number = 1;

$(document).ready(function(){

//@purpose:
//@params:
//@return:
//@globals:
//    $('#three_by').click(function(){
//        create3x3();
//    });

    create3x3();

>>>>>>> e5bd3a8844ac6dae64974da4e6d0193b281a5fb7

//@purpose: hold the click handler for each 'square' on our game board and allows them all to be clicked and then call to other functions
//@params: none
//@return: none
<<<<<<< HEAD
//@global:
var current_square = null;
var p1;
var p2;
var player = null;
var turn_counter = 0;

$(document).ready(function () {
    $('.square').click(function () {
=======
//@global: none
    $('.square').click(function(){
>>>>>>> e5bd3a8844ac6dae64974da4e6d0193b281a5fb7
        console.log('square clicked');
        current_square = $(this);
        store_square($(this).attr('id'));
        find_winner();
        player_turn();
        $(this).attr('disabled', true);
    });


//@purpose:
//@params:
//@return:
//@globals:
    //click on id='X' and it sets player1 to the (this).text('X')
    $('.player_sign').click(function () {
        console.log('choosing player button clicked');
        player_select($(this).text());
        player_turn();
    });
});


function store_square(square_value) {


//@purpose:
//@params:
//@return:
//@globals:
function store_square(square_value){

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


//@purpose:
//@params:
//@return:
//@globals:
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



//@purpose:
//@params:
//@return:
//@globals:
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


//@purpose:
//@params:
//@return:
//@globals:
function create3x3(){
    var new_button_container = $('<div>').addClass('col-xs-12 button_container');
    var new_parent_row = $('<div>').addClass('row');
    for (var i=0; i<3; i++){
        var new_row = $('<div>').addClass('row square_row');
        for(var j=0; j<3; j++){
            var new_button = $('<button>').addClass('square col-xs-4').attr({id:id_number, indicator:indicator_number});
            id_number++;
            indicator_number+= indicator_number;
            console.log(indicator_number);
            $(new_row).append(new_button);
        }
        $(new_button_container).append(new_row);
    }
    $(new_parent_row).append(new_button_container);
    $('#game_area').append(new_parent_row);
}
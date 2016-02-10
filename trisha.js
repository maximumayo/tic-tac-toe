//GLOBAL VARIABLES//
var player_moves_array = ['','','','','','','','',''];





//@purpose: hold the click handler for each 'square' on our game board and allows them all to be clicked and then call to other functions
//@params: none
//@return: none
//@global:
$(document).ready(function(){
    $('.square').click(function(){
        store_square($(this).attr('id'));
        console.log($(this).text());
    });
});

function store_square(square_value){
    player_moves_array[$(this).attr('id').val()] = square_value;
}
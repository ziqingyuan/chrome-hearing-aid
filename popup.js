$(function(){
    $('#name').keyup(function(){ //name is the input element
        $('#greet').text('Enter Text: ' + $('#name').val()); //updates greet to whatever input element we have
    })
})
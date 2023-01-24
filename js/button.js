alert("Hello Button");
$(function(){
    $("#theButton").on("click", function(){
        $('.addAHeader').after("<h1>Hello I'm The Header</h1>")
    })

    //
});
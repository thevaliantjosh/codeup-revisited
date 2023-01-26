$(function(){
    // alert("Welcome to Veridian Dynamics!");
    $('#go-to-top').on("click", function(e){
        e.preventDefault();
        alert("You clicked me you fool!");//this works
        $('html, body').animate({scrollTop: "0"} , 3000);
    })
})
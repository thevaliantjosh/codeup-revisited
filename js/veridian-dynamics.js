$(function(){
    // alert("Welcome to Veridian Dynamics!");
    $('#go-to-top').click(function(e){
        // alert("You clicked me you fool!");//this works
        $('.page-wrapper').animate({scrollTop: "0"} , 3000);
        // $('.page-wrapper').scrollTop();
    })
})
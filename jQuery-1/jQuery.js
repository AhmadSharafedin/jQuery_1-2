/*
Q1:
Check if jQuery is loaded
*/

$(document).ready(function(){
    if (jQuery){
    // alert("jQuery is loaded"); 
    }
} );


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$(document).ready(function (){
    $("#button3").click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 4000);
    });
});
/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$(document).ready(function(){
    var height = $('#box').height();
    var width = $('#box').width();

    $('#btn1').on('click', function() {
        $('#box').height('300px');
        $('#box').width('300px');
    });

    $('#btn2').on('click', function() {
        $('#box').height(height);
        $('#box').width(width);
    });
});







/*
Q4:
Learn how to fadein your boxes
*/

$(document).ready(function(){
    $("#delay").on('click',function(){
    
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });






/*
Q5:
User must first accept then he or she can signup
*/

$(document).ready(function () {
        $("#accept").on('click', function () {
        $("#submitbtn").attr("disabled", !this.checked);
    });
});


/*
Q6:
Let them print
*/

$(document).ready(function () {
    $('.printPage').on('click' , function(){
        window.print();
    });
    })

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
var maxLength = 20;
$('#rchars').text(20);
$('textarea').attr('maxLength', 20)
$('textarea').on('keyup' ,function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/






/*
Q9:
Add new div to your website
*/





/*
Q10:
Select values from a JSON object using jQuery
*/





/*
Q11:
Add element within ul list
*/





/*
Q12:
Know what user puts into textbox
*/





/*
Q13:
Change input value
*/





// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 




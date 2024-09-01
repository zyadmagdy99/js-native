$("#open,.bar").click(function (e) { 

   let optionwidth= $("#inneroption").offset().left;
   console.log(optionwidth);
   let inneropt = $("#inneroption").outerWidth();
   console.log(inneropt);
   if(optionwidth===0){
    $("#option").css({
        left: `-${inneropt}px`,
        tansion:"left 1s"
        
    });
   }else{
    $("#option").css({
        left: `0`,
        tansion:"left 1s"
        
    });
   }
   
});
$("#x").click(function (e) { 
    let optionwidth= $("#inneroption").offset().left;
   console.log(optionwidth);
   let inneropt = $("#inneroption").outerWidth();
   console.log(inneropt);
   if(optionwidth===0){
    $("#option").css({
        left: `-${inneropt}px`,
        tansion:"left 1s"
        
    });
   }else{
    $("#option").css({
        left: `0`,
        tansion:"left 1s"
        
    });
   }
});

$(".item").click(function () { 

    let ids =$(this).attr('href');
    var offset = $(ids).offset().top;
   
   
    $("html,body").animate({
     scrollTop:offset
 },1000)
     
   
});

$(".song1").click(function (e) { 

    $(".sing1").toggle(500);
    $(".sing2").hide(500);
    $(".sing3").hide(500);
    $(".sing4").hide(500);
    
});
$(".song2").click(function (e) { 

    $(".sing1").hide(500);
    $(".sing2").toggle(500);
    $(".sing3").hide(500);
    $(".sing4").hide(500);
});
$(".song3").click(function (e) { 

    $(".sing1").hide(500);
    $(".sing2").hide(500);
    $(".sing3").toggle(500);
    $(".sing4").hide(500);
});
$(".song4").click(function (e) { 

    $(".sing1").hide(500);
    $(".sing2").hide(500);
    $(".sing3").hide(500);
    $(".sing4").toggle(500);
});

$(document).ready(function() {
    let seconds = 10;
    let minutes = 45;
    let hours = 6;
    let days = 32;

    $("#seconds").text(` ${seconds}`);
    $("#minutes").text(` ${minutes}`);
    $("#hours").text(` ${hours}`);
    $("#days").text(` ${days}`);

    setInterval(function() {
        seconds--;
        if (seconds <= 0) {
            seconds = 60;
            minutes--;
        }
        if (minutes <= 0) {
            minutes = 60;
            hours--;
        }
        if (hours <= 0) {
            hours = 24;
            days--;
        }
        if (days <= 0) {
            days = 50;  
        }

        $("#seconds").text(` ${seconds}`);
        $("#minutes").text(` ${minutes}`);
        $("#hours").text(` ${hours}`);
        $("#days").text(` ${days}`);
    }, 1000);
});

let counter = 100


function update(){
    $("#counter").text(counter)
}
update()
$("#textarea").on('input', function() {
    let length = $(this).val().length;

    let newCounter = 100 - length;

    if (newCounter >= 0) {
        $(this).val($(this).val().substring(0, 99));

        counter = newCounter;
    } else {
        counter = 0;
    }

    update();
});

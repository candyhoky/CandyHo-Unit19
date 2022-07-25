$('#burger').on('click', function(){
    $('#mobile-nav-container').toggleClass('mobile-nav-show');
})
   
$(".close-nav").on("click", function(){
     $("#mobile-nav-container").addClass("mobile-nav-show");
})
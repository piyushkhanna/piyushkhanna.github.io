  $(document).ready(function() {
        $('.carousel').carousel({
            interval: 5000
        }); 
        $('.carousel').carousel('cycle');
    
   $('#top-nav').onePageNav({
                 currentClass: 'active',
                 changeHash: true,
                 scrollSpeed: 500
            });
  
   $("#ul_pastevents li:nth-child(3)").nextAll().hide();

   


});

function viewmore_pastevents(e)
{
   e.preventDefault();  
   if($("#a_pastevents_viewmore").text() == "View More...")
   { 
        $("#a_pastevents_viewmore").text("View Less..");
        $("#ul_pastevents li:nth-child(3)").nextAll().show();
   }
   else
   {
         $("#a_pastevents_viewmore").text("View More...");
         $("#ul_pastevents li:nth-child(3)").nextAll().hide();
   }
}


  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });


  });
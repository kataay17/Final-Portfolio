

$(document).ready(function(){



function scrollWindow()
{
window.scrollTo(0,0);
}
  
  // $(document).scrollTop(0);
  

    $('.color-overlay').hover(function(){
        $('h3', $(this)).slideToggle(200, 'linear').display(200, 'linear');
    });


  $("#teamButton").click(function(){
      $("#katie").fadeIn("slow");
    });

   $("#teamButton").click(function(){
      $("#hannah").fadeIn("slow");
    });

  
 



    // var slideW = $('#katie').width();

    // $("#teamButton").click(function(){
    //   $("#katie").animate({scrollRight: slideW }, 600);
    // });

});
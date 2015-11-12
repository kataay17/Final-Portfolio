// $(document).ready(function(){


  
//    // cache the window object
//    $window = $(window);
 
//    $('section[data-type="background"]').each(function(){
//      // declare the variable to affect the defined data-type
//      var $scroll = $(this);
                     
//       $(window).scroll(function() {
//         // HTML5 proves useful for helping with creating JS functions!
//         // also, negative value because we're scrolling upwards                             
//         var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
//         // background position
//         var coords = '50% '+ yPos + 'px';
 
//         // move the background
//         $scroll.css({ backgroundPosition: coords });    
//       }); // end window scroll
//    });  // end section function
// }); // close out script



$(document).ready(function(){


    $('.color-overlay').hover(function(){
        $('h3', $(this)).slideToggle(200, 'linear').display(200, 'linear');
    });

    // $('.skill').hover(function(){
    //     $('.skill').animate(200, 'linear').display(200, 'linear');
    // });

   

   

    
    
    // $('.color-overlay').hover( 
    // function () {
    //     $("h3").animate({ "top": "-=200px" }, "slow" );
    // },
    // function () {
    //     $("h3").animate({ "top": "+=200px" }, "slow" );
    // });
});

var timesClicked=1;
function FunctionMenu(x) {
		 x.classList.toggle("change");
          timesClicked++;
         if(timesClicked%2==0)
         {
             $('.divice_menu').removeClass('done');
        }
         else
         {
             $('.divice_menu').addClass('done');
         }
     }
function FunctionDone() {
        timesClicked++;
        $('.divice_menu').addClass('done');
        var elem = document.querySelector('#menu_top')
        elem.classList.toggle("change");
       
     }

$('.menu_site a').on('click', function(e){

        let id = $(this).attr('href');
        let el = $('#' + id).offset().top;
        let top = parseInt($(this).attr('data-top'));
        
        $("html").animate({ scrollTop: el  + top}, "slow");
    });

$('.preloader').click(false);
    
$( ".preloader" ).off( "click", "**" );

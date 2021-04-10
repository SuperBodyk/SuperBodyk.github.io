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
$('#lets_go').click(function(){
    var Name_people =$('#Name').val();
    var Phone_people=$('#Phone').val();
    var Email_people=$('#email').val();
    var Qwest_people=$('#qwest').val();
    if(Name_people=='')
    {
        $('#Name').css('background','#ff8080');
         window.alert("Заповніть поле: ім'я ");
        return false;
    }
     if((Phone_people=='')&&(Email_people==''))
    {
        $('#Phone').css('background','#ff8080');
         window.alert("Заповніть поле: номер телефону ");
        return false;
    }
    if(((Phone_people!='')||(Email_people!=''))&&(Name_people==''))
    {
        document.cookie='Phone_people='+Phone_people+';';
        document.cookie='Email_people='+Email_people+';';
        document.cookie='Name_people='+Name_people+';';
        document.cookie='Qwest_people='+Qwest_people+';';
        var url='../PHP/telegram.php';
        location.href=url;
        return false;
    }
});
$('.menu_site a').on('click', function(e){

        let id = $(this).attr('href');
        let el = $('#' + id).offset().top;
        let top = parseInt($(this).attr('data-top'));
        
        $("html").animate({ scrollTop: el  + top}, "slow");
    });

$('.preloader').click(false);
    
$( ".preloader" ).off( "click", "**" );

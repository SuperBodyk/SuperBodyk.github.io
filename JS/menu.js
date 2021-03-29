function FunctionMenu(x) {
		 x.classList.toggle("change");
          timesClicked++;
         if(timesClicked%2==0)
         {
             $('.menu_site').removeClass('done');
        }
         else
         {
             $('.menu_site').addClass('done');
         }
     }
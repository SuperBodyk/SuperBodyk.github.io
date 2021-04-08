function noScroll() {
  window.scrollTo(0, 0);
}
window.addEventListener('scroll', noScroll);


window.onload =function () {
	setTimeout(function(){
		var preoloader = document.getElementById('page-preloader');
		preoloader.classList.add('done');
		window.removeEventListener('scroll', noScroll);
		
	}, 500);
	// body...
}
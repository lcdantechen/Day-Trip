$(document).ready( function() {

	//for dropdown menu action
	$('.dropdown-toggle').dropdown();

	//Lazy Loader to load page on bottom
	$(function(){
    $('.lazy-wrapper').lazyLoader({
        ajaxLoader: 'get_datas.php' // script that gets items (from a database for example)
    });
});
	
});
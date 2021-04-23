$(document).ready(function(){
	
});

$('.fc_button').html((i, html) => {
    return '<span><i>' + $.trim(html).split('').join('</i><i>') + '</i></span>';
});

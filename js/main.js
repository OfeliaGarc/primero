var cosasQueHagoDespuesDeUnTiempo = function(){
	$('.yo').removeClass('animated swing');		
	console.log("Quitando clases");
};

var cosasQueHagoEnMouseOver = function(){
	console.log("Agregando clases");
	$('.yo').addClass('animated swing');

	setTimeout(cosasQueHagoDespuesDeUnTiempo, 1200);
};

var DespuesDeUnTiempo = function(){
	$('.text-me').removeClass('animated pulse');		
	console.log("Quitando clases");
};

var MouseOver = function(){
	console.log("Agregando clases");
	$('.text-me').addClass('animated pulse');

	setTimeout(DespuesDeUnTiempo, 700);
};

var despuesDelEfecto =function(){
	$('.text').removeClass('animated shake')
	console.log("Quitando la clase");
}

var otroEfecto = function(){
	console.log("Agregando la clase");
	$('.text').addClass('animated shake');

	setTimeout(despuesDelEfecto, 855);
}


/*............................ AQUI FUNCIONA .........................*/ 
	$(document).ready(function() {

		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    		event.preventDefault();
    		$(this).ekkoLightbox();
		});


	$('.yo').mouseover(cosasQueHagoEnMouseOver);

	$('.text-me').mouseover(MouseOver);

	$('.text').mouseover(otroEfecto);

});

/*..........................:D :D.............................*/
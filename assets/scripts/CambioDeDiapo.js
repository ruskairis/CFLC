function CambiarDiapostiva(id){
	if(id == 'reload'){
		location.reload()
	}
	var dataDiapo =$('#' + id +'.diapositiva');
	var srcName = dataDiapo.children('.srcName').html();
	var texto = dataDiapo.children('.texto').html();
	var opcion1Texto = dataDiapo.children('.opcion1Texto').html();
	var opcion1Id = dataDiapo.children('.opcion1Id').html();
	var opcion2Texto = dataDiapo.children('.opcion2Texto').html();
	var opcion2Id = dataDiapo.children('.opcion2Id').html();	var esFinal = dataDiapo.children('.EsFinal').html();
	if(esFinal == 'true'){
		$('#btnOpcion1').remove();
		$('#btnOpcion2').remove();
	}
	
		$('#mainText').html(texto);

		$('#btnOpcion1').html(opcion1Texto);
		$('#btnOpcion1').val(opcion1Id);
		$('#btnOpcion2').html(opcion2Texto);
		$('#btnOpcion2').val(opcion2Id);
		//La imagen esta en css ver que tocar para cambiarla
		// $('#bodyImg').attr('style',"background-image:url(\"assets/img/"+srcName+"\")");
		$('#backImg').attr('src','assets/img/' +srcName);
	
}



var app = {
	inicio: function(){
		this.iniciaFastClick();
		this.iniciaBotones();
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaBotones: function() {
	// var logo=document.getElementById('imagen2');
	// logo.addEventListener('click', this.abrepagina);

    var buttonAction = document.querySelector('#button-action');
    buttonAction.addEventListener('click', this.extraerBolillas);

 	var filterButtons = document.querySelectorAll('.button-filter');
    filterButtons[0].addEventListener('click', this.borrarBolillas);
    
    filterButtons[1].addEventListener('click', this.borrarTodo);
    
    filterButtons[2].addEventListener('click', this.salir);
    

	},

	// abrepagina:function(){
	// 	var url="http://isfdalvear.bue.infd.edu.ar/sitio/";
	// 	window.open(url);
	// },

	
	salir: function(){
		console.log('Exit button clicked');
		alert("Desarrollado por Armando Romero-2024");
		navigator.app.exitApp();
           
     },

	borrarBolillas: function(){
		document.getElementById('lista-bolillas').innerHTML = "";
	},

	borrarTodo: function(){
		document.getElementById('unidad').value = "";
		document.getElementById('bolilla').value = "";
		document.getElementById('lista-bolillas').innerHTML = "";
	},

	extraerBolillas: function() {
		valor1 = document.getElementById("unidad").value;
		valor2 = document.getElementById("bolilla").value;
		if( isNaN(valor1) || isNaN(valor2) || valor1<valor2 ) {
  			alert("No ha ingresado valores numéricos o las Unidades son mayores a las Bolillas!!!");
  			document.getElementById("unidad").value="";
  			document.getElementById("bolilla").value="";
		}
		else{
		var unidades = document.getElementById('unidad').value;
		var bolillas = document.getElementById('bolilla').value;
		var lista = document.getElementById('lista-bolillas');
		lista.textContent = "";
		var aleatorios =[];

		for(var i = 0; i < unidades; i++) {
			var num;
			do {
				num = Math.floor(Math.random() * unidades) + 1;
			} while(aleatorios.includes(num));
			aleatorios.push(num);
		}
		// var n=0;

			// for(var i=1 ; i<=unidades ; i++){
			// 		n=i;
			// 		do{
			// 			n=n-1;
			// 			if (aleatorios[i]==aleatorios[n]) {
			// 			aleatorios[i] = Math.floor(Math.random() * (unidades) + 1);
			// 			n=i;
			// 	   }

			// 	} while(n!=0);			
			

			// }
			//console.log(aleatorios);
			var newaleatorios = aleatorios.slice(0, bolillas);	
			console.log(newaleatorios);

			// Ordenar los números aleatorios
			newaleatorios.sort(function(a, b) {
				return a - b;
			});


				for(var i=0 ; i<bolillas ; i++){
					lista.textContent=lista.textContent + " - " + newaleatorios[i] + " - ";
				}
				
				
			}
			
			
	},
						

};


if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
  }
'use strict'

function Instrucciones() 
{
	alert("Unidad por dos digitos. Ejemplo 1 == 01"); 
}

function textoCodigo() 
{
	var codigo ="";
	var aux;
	var texto = document.getElementById('texto').value;
	var tamaño = texto.length;
	for (var i = 0; i < tamaño; i++) 
	{  
		var aux = texto.charAt(i);
		switch(aux)
		{
			case "a": 
			codigo = codigo.concat("01");
			break; 
			case "b": 
			codigo = codigo.concat("02");
			break;
			case "c": 
			codigo = codigo.concat("03");
			break; 
			case "d": 
			codigo = codigo.concat("04");
			break; 
			case "e": 
			codigo = codigo.concat("05");
			break; 
			case "f": 
			codigo = codigo.concat("06");
			break; 
			case "g": 
			codigo = codigo.concat("07");
			break; 
			case "h": 
			codigo = codigo.concat("08");
			break; 
			case "i": 
			codigo = codigo.concat("09");
			break; 
			case "j": 
			codigo = codigo.concat("10");
			break; 
			case "k": 
			codigo = codigo.concat("11");
			break; 
			case "l": 
			codigo = codigo.concat("12");
			break; 
			case "m": 
			codigo = codigo.concat("13");
			break; 
			case "n": 
			codigo = codigo.concat("14");
			break; 
			case "ñ": 
			codigo = codigo.concat("15");
			break; 
			case "o": 
			codigo = codigo.concat("16");
			break; 
			case "p": 
			codigo = codigo.concat("17");
			break; 
			case "q": 
			codigo = codigo.concat("18");
			break; 
			case "r": 
			codigo = codigo.concat("19");
			break; 
			case "s": 
			codigo = codigo.concat("20");
			break; 
			case "t": 
			codigo = codigo.concat("21");
			break; 
			case "u": 
			codigo = codigo.concat("22");
			break; 
			case "v": 
			codigo = codigo.concat("23");
			break; 
			case "w": 
			codigo = codigo.concat("24");
			break; 
			case "x": 
			codigo = codigo.concat("25");
			break;
			case "y": 
			codigo = codigo.concat("26");
			break;
			case "z": 
			codigo = codigo.concat("27");
			break;
		}
        
		
	}
	document.getElementById('resultado').innerText=codigo;
	alert("el codigo es: "+codigo)
    
}

function codigoTexto() 
{
	
	var a=0;
	var b=2;
	var codigo ="";
	var aux;
	var texto = document.getElementById('codigo2').value;
	var tamaño = texto.length;

	function numero(code) 
	{
		do
		{
			var aux = code.substring(a,b);
			
			switch(aux)
			
		{
			case "01": 
			codigo = codigo.concat("a");
			
			break; 
			case "02": 
			codigo = codigo.concat("b");
			
			break;
			case "03": 
			codigo = codigo.concat("c");
			
			break; 
			case "04": 
			codigo = codigo.concat("d");
			
			break; 
			case "05": 
			codigo = codigo.concat("e");
			
			break; 
			case "06": 
			codigo = codigo.concat("f");
			
			break; 
			case "07": 
			codigo = codigo.concat("g");
			
			break; 
			case "08": 
			codigo = codigo.concat("h");
			
			break; 
			case "09": 
			codigo = codigo.concat("i");
			
			break; 
			case "10": 
			codigo = codigo.concat("j");
			
			break; 
			case "11": 
			codigo = codigo.concat("k");
			
			break; 
			case "l2": 
			codigo = codigo.concat("l");
			
			break; 
			case "13": 
			codigo = codigo.concat("m");
			
			break; 
			case "14": 
			codigo = codigo.concat("n");
			
			break; 
			case "15": 
			codigo = codigo.concat("ñ");
			
			break; 
			case "16": 
			codigo = codigo.concat("o");
			
			break; 
			case "17": 
			codigo = codigo.concat("p");
			
			break; 
			case "18": 
			codigo = codigo.concat("q");
			
			break; 
			case "19": 
			codigo = codigo.concat("r");
			
			break; 
			case "20": 
			codigo = codigo.concat("s");
			
			break; 
			case "21": 
			codigo = codigo.concat("t");
			
			break; 
			case "22": 
			codigo = codigo.concat("u");
		
			break; 
			case "23": 
			codigo = codigo.concat("v");
			
			break; 
			case "24": 
			codigo = codigo.concat("w");
			
			break;
			case "25": 
			codigo = codigo.concat("x");
			
			break;
			case "26": 
			codigo = codigo.concat("y");
			
			break;
			case "27": 
			codigo = codigo.concat("z");
			
			break;
		}
		  a=a+2;
		  b=b+2;
		  
		} while(b<=tamaño);
       
        alert(codigo);
    }

    numero(texto);
}
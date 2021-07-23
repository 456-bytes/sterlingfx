function calcthis(a)
{ 
var perc = document.getElementById("percent").value;

var planperc=new Array(0,0,0,0,0);
var depo = document.getElementById("deposit").value;

if (perc == "perc1") {planperc=Array(250, 250, 250, 250, 250); min=50; max=1000;};
if (perc == "perc2") {planperc=Array(130, 130, 130, 130, 130); min=500; max=99999999;};
if (perc == "perc3") {planperc=Array(160, 160, 160, 160, 160); min=1000; max=99999999;};
if (perc == "perc4") {planperc=Array(200, 200, 200, 200, 200); min=1500; max=99999999;};
if (perc == "perc5") {planperc=Array(230, 230, 230, 230, 230); min=3000; max=99999999;};
if (perc == "perc6") {planperc=Array(300, 300, 300, 300, 300); min=5000; max=99999999;};
if (depo < min)
  {
	
	document.getElementById("inpvar2").innerHTML = "n/a";						
	alert ("Minimal deposit is $"+min);	
  } 
else
if (depo > max)
  {
	
	document.getElementById("inpvar2").innerHTML = "n/a";						
	alert ("Maximal deposit is $"+max);	
  } 
  
else
  {

	 
	  document.getElementById("inpvar2").innerHTML = planperc[0] * depo / 100;
	  
	
	if ( depo >=50)
	  {
		
		document.getElementById("inpvar2").innerHTML = planperc[1] * depo / 100;
		  }
	  
		if ( depo >= 500)
		  {
			
			document.getElementById("inpvar2").innerHTML = planperc[2] * depo / 100;
			  }
	  
			if ( depo >= 1000)
			  {
				
				document.getElementById("inpvar2").innerHTML = planperc[3] * depo / 100;
				  }
	  
				if ( depo >= 1500)
				  {
					
					document.getElementById("inpvar2").innerHTML = planperc[4] * depo / 100;
	  
                                                       
                                                }
			  
		  
	  
  }

}
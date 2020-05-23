<div id="input_div">
  <input type="button" value="-" id="moins" onclick="minusrq()">
    <input type="text" size="25" value="Rendang" id="rq" disabled>
    
    <input type="button" value="+" id="plus" onclick="plusrq()">

  <input type="button" value="-" id="moins" onclick="minusca()">
    <input type="text" size="25" value="Chili api" id="ca" disabled>
    
    <input type="button" value="+" id="plus" onclick="plusca()">

  
<br>
 <br>
<div>Calories   <input type="text" size="25" value="" id="totalcalories" disabled> Protein  <input type="text" size="25" value="" id="totalprotein" disabled> Fats <input type="text" size="25" value="" id="totalfats" disabled>
  
  
  
  <input type="button" value="calculate" id="totalc" onclick="Calculate()">
</div>








//  Rendang variables  
    var totalproteinrendang = 0;
    var totalcalrendang = 0;
    var totalfatrendang = 0;
    var rtc;
    var rtp;
    var rtf;
    var rq = -1;
    var rendang = 
  
        
 document.getElementById("rq");

//  Rendang  quantity and overall nutrients addtion and subtraction 

      function plusrq(){
        rq++;
        rendang.value = rq;
        // rendang nutrients
        totalcalrendang  = rq * 1500; 
        totalproteinrendang = rq * 10;
        totalfatrendang = rq * 20;
    }
    
      function minusrq(){
      if (rq > 0) {
        rq--;
        rendang.value = rq;
        //rendang calories need to update
        rtc  = rq * 1500; 
        //rendang protein need to update
        rtp  = rq * 10;
        //rendang fats need to update
        rtf  = rq * 20;
        
        
    totalcalrendang  = rtc - rq + rq;
    totalproteinrendang = rtp - rq + rq;
    totalfatrendang = rtf - rq + rq;    
      }  
    }

// Variables for chili api
var totalproteinchiliapi = 0;
    var totalcalchiliapi = 0;
    var totalfatchiliapi = 0;
    var catc;
    var catp;
    var catf;
    var ca = -1;
    var chiliapi = 
  
        
 document.getElementById("ca");

//  Chiliapi Quantity and overall nutrients addtion and subtraction 

      function plusca(){
        ca++;
        chiliapi.value =  ca;
        totalcalchiliapi  =  ca * 1500; 
        totalproteinchiliapi = ca * 10;
        totalfatchiliapi = ca * 20;
    }
    
      function minusca(){
      if (ca > 0) {
        ca--;
        chiliapi.value = ca;
        //Chiliapi calories need to update
        catc  = ca * 1000; 
        //Chiliapi Protein need to update
        catp  = ca * 5;
        //Chiliapi fats need to update
        catf  = ca * 5;

    totalcalchiliapi  = catc - ca + ca;
    totalproteinchiliapi = catp - ca + ca;
    totalfatchiliapi = catf - ca + ca;    
      }  
    }

// Final calculations of overall nutrients
 var calories =            document.getElementById("totalcalories");
 
var protein = document.getElementById("totalfats");

var fat = 
document.getElementById("totalprotein");
function Calculate(){
      totalcalrendang;
      totalcalchiliapi
        calories.value =  totalcalrendang + totalcalchiliapi;
  
  totalproteinrendang;
  totalproteinchiliapi
  
        protein.value = totalproteinrendang + totalproteinchiliapi;
  
   totalfatrendang;
  totalfatchiliapi;
  
        fat.value = totalfatrendang + totalfatchiliapi;
  
  
    }

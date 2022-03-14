var maleNames = [ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi',  'Kwame' ];
var femaleNames = ['Akosua',  'Adwoa', 'Abenaa', 'Akua',  'Yaa', 'Afua', 'Ama'];

function check(){
   var gender = document.getElementById("gender").value;
   var day = document.getElementById("day").value;
   var DD = parseInt(day);
   var month = document.getElementById("month").value;
   var MM = parseInt(month);
   var year = document.getElementById("year").value;
   var YY = parseInt(year.substr(2, 4));
   var CC = parseInt(year.substr(0, 2));

   var birthDay = parseInt(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7;

   if (DD <= 0 || DD > 31){
       alert("enter valid date");
   } 
   else if (MM <= 0 || MM > 12){
    alert("enter valid month");
} 
   else if (year <= 0){
    alert("enter valid year");
} 
if (gender === "male"){
    alert("hi handsome your name is " + maleNames[birthDay]);
}
  else if (gender === "female"){
    alert("hi beatiful your name is " + femaleNames[birthDay]) + "cutie";
}
}

    
    
    
    
    
    
    
    
    
    
    
    
    
  
   
    
    
    
   
    
     

    
   
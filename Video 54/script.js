alert("error");

console.log("error.....");  
console.log("error again....."); 

var a = prompt("Enter a number");   
var isTrue = confirm("Are you sure you want to leave this page?");

if(isTrue){
    console.log("your computer is going to explode");
}
else{
    console.log("you are safe");
}
console.log("your number is: " + a);
document.body.style.backgroundColor = "red";
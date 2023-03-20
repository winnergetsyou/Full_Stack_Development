//Game Design
// Variables x = points 
// Variables y = Game level
var x=0; 
var star = 1;


function Function1(number)
{
    
    
    if (x ==1 && (number % 2)== 0)
    {
        Function()
        n = "CLUE: I am hiding behind HiFi"
        document.getElementById("clue").innerHTML=n
         // adding Scroll down
         window.scrollTo(0,300);
    }
    if (x == 0)
    {
        Function()
        n = "CLUE: culprit hiding behind the Divisible by 2"
       document.getElementById("clue").innerHTML=n

    }
    
    
    if (x ==2 && number == 5)
    {
        Function()
        l = "You are the winner"
        document.getElementById("clue").innerHTML=l
    }
    
    
}




function Function()
{
   
    alert(" You find it ")
 x= x+1;
 console.log(x)
m = 'Points : '+ x
document.getElementById("points").innerHTML=m

}



console.log("so funny yeah, yes ofcourse")

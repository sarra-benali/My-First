console.log("ahaha")

function Food (label, cathegrie,img)
{
    var o = {}
    o.label=label
    o.cathegrie=cathegrie,   
    o.img=img;
    return o
}

var protfood = [Food ("hight protein","meat" ,"https://bit.ly/3DuQSuk"),Food ("hight protein","eggs" ,"https://bit.ly/3arYAsF"),Food ("hight protein", "sea food ","https://bit.ly/3ltpaIj")]
var fiberfood=[Food ("hight fiber","strawberry" ,"https://bit.ly/3v2OY1g"),Food ("hight fiber","almonds" ,"https://bit.ly/3Fzqem0"),Food ("hight fiber", "spinach ","https://bit.ly/3AAuUo8")]
var carbfood=[Food ("hight carbs","pasta" ,"https://bit.ly/2X2FKFC"),Food ("hight carbs","rice" ,"https://bit.ly/3lvl3f2"),Food ("hight carbs", "potatoes ","https://bit.ly/3oOwwrX")]

function Meal(carbs,protein,fiber)
{
  var o = {}
  o.carbs=carbs
  o.protein=protein
  o.fiber=fiber
  return o 
}

function calculate(){
    var goal=    $(":checked").val()
    var name=   $("#name").val()
     var lastname=  $("#lastname").val()

     localStorage.setItem("goal",JSON.stringify(goal))
     localStorage.setItem("name",JSON.stringify(name))
     localStorage.setItem("lastname",JSON.stringify(lastname))
     window.location.href="result.html"
     localStorage.setItem("protfood",JSON.stringify(protfood))
     localStorage.setItem("fiberfood",JSON.stringify(fiberfood))
     localStorage.setItem("carbfood",JSON.stringify(carbfood))
     



}
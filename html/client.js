var name= JSON.parse(localStorage.getItem("name"))
var lastname= JSON.parse(localStorage.getItem("lastname"))
var goal= JSON.parse(localStorage.getItem("goal"))
var protfood= JSON.parse(localStorage.getItem("protfood"))
var carbfood= JSON.parse(localStorage.getItem("carbfood"))
var fiberfood= JSON.parse(localStorage.getItem("fiberfood"))
console.log(protfood,fiberfood,carbfood)
$(document).ready(





    function(){
        if(goal==="lose weight")
        {
            var arr = ["30%","20%","50"]
        }
    
        if(goal==="gain muscle")
        {
            var arr = ["45%","35%","20"]
        }
        if(goal==="gain weight")
        {
            var arr = ["45%","35%","20"]
        }
        
        $("#percent").append("protein : "+arr[0]+"carbs :"+arr[1]+"fiber :"+arr[2])

        for(var i = 0 ; i<protfood.length ; i++)
        {
          $(".protein").append('<div id="protein">'+protfood[i].cathegrie+'<img src="'+protfood[i].img+'"></div>')
        }

        for(var i = 0 ; i<protfood.length ; i++)
        {
          $(".carbs").append('<div id="carbs">'+carbfood[i].cathegrie+'<img src="'+carbfood[i].img+'"></div>')
        }
        
        for(var i = 0 ; i<protfood.length ; i++)
        {
          $(".fiber").append('<div id="fiber">'+fiberfood[i].cathegrie+'<img src="'+fiberfood[i].img+'"></div>')
        }


    }
)
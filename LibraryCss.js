/*
Met deze library kun je css aanpassen bij elementen op de site zelf. Dit is te gebruiken voor een cms. Het plan is om meer css onderdelen te kunnen veranderen en meer functies toe te voegen.
*/
        
 
//variabelen voor de kleur en het html element
var xyz = [0, 0, 0];
var Selement;



//Haalt element op om css van aan te passen door erop te klikken
$("body").on("click", function(e){
    console.log( e.target.id ); 
    Selement = e.target.id;
    console.log(Selement);
});


//Verandert de height en width van het element gebaseerd op de positie van de muis
$('body').mousemove(function(){ 
    $('#' + Selement).mousemove(function(event){ 
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
            $( this ).height(event.pageY) - $(this).y;
        $( this ).width(event.pageX) - $(this).x;
    })
    
   
    //verandert de kleur van het element naar blauwer, groener of roder
   $('#' + Selement).keypress(function(e, color){
    console.log("anything");
        if(e.which == 49){ 
            xyz[0] += 5;
        $(this).css("background-color", "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")");          
        } 
       else if(e.which == 50){ 
            xyz[1] += 5;
        $(this).css("background-color", "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")");          
        } 
       else if(e.which == 51){ 
            xyz[2] += 5;
        $(this).css("background-color", "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")");          
        } 
}); 
    
});


       /*document.getElementById("hello").style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")";
        
        function extracolor(color)
        {
            var amount = document.getElementById("blue").value;
            xyz[color]+= amount;
            document.getElementById("hello").style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")";
            
        };*/

/*function edit()
{
    $( "button" )
  .mouseover(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
    
  .mousedown(function() {
    $(this).css("color", "yellow");
  })
 .keypress(function(e){
    if(e.which > 48 && e.which < 58){ 
        $( this ).height((e.which - 40) + 10);
    }
    else if (e.which == 48){
        $( this ).height(10);
    }
            
});
}*/
        
        
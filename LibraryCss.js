/*
Met deze library kun je css aanpassen bij elementen op de site zelf. Dit is te gebruiken voor een cms. Het plan is om meer css onderdelen te kunnen veranderen en meer functies toe te voegen.
*/
        
 
//variabelen voor de kleur en het html element
var xyz = [0, 0, 0, 1];
var Selement;
var SelPos;
var hold = false;

/*JQuery*/

//Haalt element op om css van aan te passen door erop te klikken
/*$("body").on("click", function(e){
    console.log( e.target.id ); 
    Selement = e.target.id;
    console.log(Selement);
});



//Verandert de height en width van het element gebaseerd op de positie van de muis
$('body').mousemove(function(event){ 
    //$('#' + Selement).mousemove(function(event){ 
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
        
        $('#' + Selement).css({ "position": "relative", "top": event.pageY, "left": event.pageX, "bottom": event.pageY, "right": event.pageX });
    //})
    
    $('#' + Selement).mousedown(function() {
      $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
            $( this ).height(event.pageY);
        $( this ).width(event.pageX);
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
    
});*/


 /*document.getElementById(Selement).style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")";
        
        function extracolor(color)
        {
            var amount = document.getElementById("blue").value;
            xyz[color]+= amount;
            document.getElementById(Selement).style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+")";
            
        };

function edit()
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

/*Javascript*/

//zit vast aan object


document.body.addEventListener("click", getid);

/*if (Selement)
    {*/
        document.body.onmousemove = function(){getposition(event)};
        document.body.onkeydown = function(){changecolor(event)};
        document.body.addEventListener("mousedown", changesize);
    

function getid(e)  
{
    
    console.log(Selement);
    if (e.target.id == Selement)
    {
        Selement =  null;   
    }
    else {
        Selement = e.target.id;
    }
}


function getposition(event)
{
    SelPos = document.getElementById(Selement);
    SelPos.style.position = "absolute";
    SelPos.style.left = event.pageX - 10;
    SelPos.style.top = event.pageY - 20;
    console.log(event.pageX + " " + event.pageY);
    
}

function changesize()
    {
        SelPos.style.height = event.pageY;
        SelPos.style.width = event.pageX;
        console.log("rgeidfh");
    }

function changecolor(e){
    
        var SelCol = document.getElementById(Selement);
        if(e.which == 49){ 
            xyz[0] += 5;
        SelCol.style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+","+xyz[3]+")";  
        } 
       else if(e.which == 50){ 
            xyz[1] += 5;
        SelCol.style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+","+xyz[3]+")";            
        } 
       else if(e.which == 51){ 
            xyz[2] += 5;
        SelCol.style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+","+xyz[3]+")";            
        } 
    else if(e.which == 52){ 
        xyz[3] += 0.1;
        SelCol.style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+","+xyz[3]+")";           
        } 
    else if(e.which == 53){ 
        xyz[3] -= 0.1;
        SelCol.style.backgroundColor = "rgb("+xyz[0]+","+xyz[1]+","+xyz[2]+","+xyz[3]+")"; 
        } 
}

     
        

$(document).ready(newGame())
var wins=0
var loses=0
function newGame(){
    var ruby=Math.floor(Math.random()*100+1);
    var diamond=Math.floor(Math.random()*5+1);
    var emerald=Math.floor(Math.random()*2+1);
    var sapphire=Math.floor(Math.random()*7+1);
    var goal=Math.floor(Math.random()*50+1);
    var yourNum=0;
    $("#ruby").click(function(){
        yourNum=yourNum+ruby;
        checkWin();
    })
    $("#diamond").click(function(){
        yourNum=yourNum+diamond;
        checkWin();
    })
    $("#emerald").click(function(){
        yourNum=yourNum+emerald;
        checkWin();
    })
    $("#sapphire").click(function(){
        yourNum=yourNum+sapphire;
        checkWin();
    })
    function checkWin(){
        if (yourNum===goal){
            wins++;
            setTimeout(newGame, 1000);
        }
        if (yourNum>goal){
            loses++;
            setTimeout(newGame, 1000);
        }
    }
    console.log(ruby);
    console.log(diamond);
    console.log(emerald);
    console.log(sapphire);
}
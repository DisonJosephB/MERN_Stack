var val = "X";
    
function choose(obj){
    if(obj.innerHTML==""){
        if(val == "X"){
            obj.innerHTML = val;
            val = "O";
        }else{
            obj.innerHTML = val;
            val = "X";
        }
        check();
    
    }
}
function check(){
    var box1 = document.getElementById("b1").innerHTML;
        var box2 = document.getElementById("b2").innerHTML;
        var box3 = document.getElementById("b3").innerHTML;
        var box4 = document.getElementById("b4").innerHTML;
        var box5 = document.getElementById("b5").innerHTML;
        var box6 = document.getElementById("b6").innerHTML;
        var box7 = document.getElementById("b7").innerHTML;
        var box8 = document.getElementById("b8").innerHTML;
        var box9 = document.getElementById("b9").innerHTML;

    if((box1==box2)&&(box1==box3)&&(box1!="")){
        window.alert(box1 + " Win");
        strikeWinner([document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3")]);
        reset();
    }
    if ((box4 == box5) && (box4 == box6) && box4 != "") {
        window.alert(box4 + " Wins");
        strikeWinner([document.getElementById("b4"), document.getElementById("b5"), document.getElementById("b6")]);
        reset();
    }
    if ((box7 == box8) && (box7 == box9) && box7 != "") {
        window.alert(box7 + " Wins");
        strikeWinner([document.getElementById("b7"), document.getElementById("b8"), document.getElementById("b9")]);
        reset();
    }
    if ((box1 == box4) && (box1 == box7) && box1 != "") {
        window.alert(box1 + " Wins");
        strikeWinner([document.getElementById("b1"), document.getElementById("b4"), document.getElementById("b7")]);
        reset();
    }
    if ((box2 == box5) && (box2 == box8) && box2 != "") {
        window.alert(box2 + " Wins");
        strikeWinner([document.getElementById("b2"), document.getElementById("b5"), document.getElementById("b8")]);
        reset();
    }
    if ((box3 == box6) && (box3 == box9) && box3 != "") {
        window.alert(box3 + " Wins");
        strikeWinner([document.getElementById("b3"), document.getElementById("b6"), document.getElementById("b9")]);
        reset();
    }
    if ((box1 == box5) && (box1 == box9) && box1 != "") {
        window.alert(box1 + " Wins");
        // strikeWinner([document.getElementById("b1"), document.getElementById("b5"), document.getElementById("b9")]);
        reset();
    }
    if ((box3 == box5) && (box3 == box7) && box3 != "") {
        window.alert(box3 + " Wins");
        // strikeWinner([document.getElementById("b3"), document.getElementById("b5"), document.getElementById("b7")]);
        reset();
    }
}
function strikeWinner(elements) {
      elements.forEach(element => {
        element.style.textDecoration = "line-through";
      });
    }
function reset(){
    for(let i=1;i<=9;i++){
    document.getElementById(`b${i}`).innerHTML="";
    // element.style.textDecoration="none";
    val = "X";
    }
}
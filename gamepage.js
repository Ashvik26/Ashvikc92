var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player_question").innerHTML="question turn"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn"+player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
function send(){
    get_word= document.getElementById("word").value;
    word=get_word.toLowerCase();
    c1=word.charAt(1);
    lengthHalf=Math.floor(word.length/2);
    c2=word.charAt(lengthHalf);
    lengthlast=word.length-1;
    c3=word.charAt(lengthlast);
    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    console.log(r2);
    r3=r2.replace(c3,"_");
 question="<h4 id='word_display'>"+r3+"</h4>";
 answer="<br><input placeholder='enter answer' id='input_check_box'>";
 check_button="<br><br><button onclick='check()'>check</button>";
 row=question+answer+check_button;
 document.getElementById("output").innerHTML+=row;
 document.getElementById("word").value="";



}
var question_turn= "player1";
var answer_turn="player2";
 function check(){
if(answer==word){
    if(answer_turn=="player1"){
        player1_score=player1_score +1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score +1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question turn=:"+player2_name;

}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn=:"+player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer turn=:"+player1_name;

}
else{
answer_turn="player2";
document.getElementById("player_answer").innerHTMl="answer turn=:"+player2_name;
}
document.getElementById("output").innerHTML="";
}
var score=0;
function updatescore(){
    score=score+1;
document.getElementById("points").innerHTML="Score : "+score;
}
function savescore(){
    localStorage.setItem("score",score);

}
function nextpage(){
    window.location="activity_2.html";
}
function send(){
    number1=document.getElementById("number1").nodeValue;
    number2=document.getElementById("number2").nodeValue;
actual_answer= parseInt(number1)*
parseIn(number2);
Question_number="<h4>" + number1+"x"+"</h4>";
input_box="<br>Answer : <input type='text' id='input_cheack_box'>";
check button="<br><br><button class='btn btn-info' onclick='cheack()'>Check</button>";
row= Question_number + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

function nextAlert(){
    alert ('this is external js')
}
document.getElementById('head').innerHTML="Hello this is Mtt computing"
document.getElementById('head').style.color="red"

function showTime(){
    document.getElementById('para1').innerHTML=Date();
}

function showMessage(){
 var name = prompt('please Enter your name')
 prompt( "hello,"+name+" How can i assistant you? ")
}
function calculate(){
    var num1 = prompt("First Number")
    var num2 = prompt("second Number")
    answer2= parseInt(num)+parseInt(num2)
    alert(answer2)ss

}
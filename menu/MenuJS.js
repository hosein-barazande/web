
function  newelement() {
    var newitem=document.getElementById('myinput').value;
    if(newitem==""){
        alert("please write something")
    }
    var ul=document.getElementById('myul');
   var li=document.createElement('li');
    li.appendChild(document.createTextNode(newitem));
    ul.appendChild(li);
}
function myfunc() {
    var myli=document.getElementsByTagName('li');
    // var x= document.getElementById('cover');
    var i=document.getElementById('myinput');
    // var r=document.getElementById('myradio').value;
    var b =document.getElementById('back');
    b.style.width=document.getElementById('width').value;
    b.style.height=document.getElementById('height').value;
    b.style.backgroundColor=document.getElementById('color').value;
    document.getElementById('back');
    document.getElementById('nav').innerHTML=myli;
}
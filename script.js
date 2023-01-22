let num=0;

document.getElementById("decrButton").onclick=function a(){
    num-=1;
    document.getElementById("number").innerHTML=num;
}
document.getElementById("resetButton").onclick=function b(){
    num=0;
    document.getElementById("number").innerHTML=num;
}
document.getElementById("incrButton").onclick=function c(){
    num+=1;
    document.getElementById("number").innerHTML=num;
}
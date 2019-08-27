
var bt1=document.getElementById("bt1");
var bt2=document.getElementById("bt2");
var bt3=document.getElementById("bt3");
var bt4=document.getElementById("bt4");
var bt5=document.getElementById("bt5");
var bt6=document.getElementById("bt6");
var bt7=document.getElementById("bt7");
var bt8=document.getElementById("bt8");
bt1.addEventListener("click",function(){
  console.log("You pressed");
  bt2.style.background="DodgerBlue";
  bt4.style.background="white";
  bt6.style.background="white";
  bt8.style.background="white";

})
bt3.addEventListener("click",function(){
  console.log("You pressed");
  bt4.style.background="DodgerBlue";
  bt2.style.background="white";
  bt6.style.background="white";
  bt8.style.background="white";
})
bt5.addEventListener("click",function(){
  console.log("You pressed");

  bt6.style.background="DodgerBlue";
  bt4.style.background="white";
  bt2.style.background="white";
  bt8.style.background="white";
})
bt7.addEventListener("click",function(){
  console.log("You pressed");
  bt8.style.background="DodgerBlue";
  bt4.style.background="white";
  bt6.style.background="white";
  bt2.style.background="white";
})
var bt9=document.getElementById("closer");
bt9.addEventListener("click", _ => {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("content").classList.toggle("content1");

  })
;

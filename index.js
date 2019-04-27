var n=document.querySelectorAll(".option-button").length;

for(var i=0;i<n;i++){
  document.querySelectorAll(".option-button")[i].addEventListener("click",handleClick);
}

var master=Math.random();
master=master*3;
master=Math.floor(master);
master=master+1;
//alert(master);

function handleClick(){
  var value=this.getAttribute("val");
  //alert(value);
  document.querySelector(".owl .owl-image").setAttribute("src","images/"+master+".png");
  if(value==master){
    document.querySelector("h1").innerHTML="It's a draw";
    document.querySelector("h3").innerHTML="Reload to play again";
  }else if(value==1 && master==3 || value==2 && master==1 || value==3 && master==2){
    document.querySelector("h1").innerHTML="Congrats! You won";
    document.querySelector("h3").innerHTML="Reload to play again";
  }else if (value==1 && master==2 || value==2 && master==3 || value==3 && master==1) {
    document.querySelector("h1").innerHTML="You Lost!!!";
    document.querySelector("h3").innerHTML="Reload to play again";
  }
}

function menuClick(){
    if(document.getElementById("menu-box").style.visibility=='hidden'){
        document.getElementById("menu-box").style.visibility='visible';
    }
    else{
        document.getElementById("menu-box").style.visibility="hidden";
    }
}
function logoTransform(i,j){
    if(j=="in"){
    document.getElementById(i).src="images/icon-"+String(i)+"-active.svg";
    }
    else if(j=='out'){
        document.getElementById(i).src="images/icon-"+String(i)+".svg";
    }
}
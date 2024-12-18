var loader= document.getElementById("preloader");
window.addEventListener("load", function(){loader.style.display = "none";})

function add_style(span){
    span.className="on"
}

function remove_style(span){
    span.className="out"
}
function alert_user(){
    alert("login for learn more");
}
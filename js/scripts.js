
function fnScreenSize(){
    var w = document.documentElement.clientWidth || window.innerWidth;
    var modal = document.getElementById("myModal");
    if (w > 450 ) {
        modal.style.display = "block";
    }
    var span = document.getElementsByClassName("close")[0];
 
 span.onclick = function() {
    modal.style.display = "none";
  }
  return 0;
}
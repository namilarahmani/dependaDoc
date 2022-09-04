function clickFunction(){
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){
    x.className = x.className.replace("show", "");
  }, 3000)
  document.getElementById("heheform").reset();
}


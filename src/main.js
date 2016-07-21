(function() {

  function changeEventListner(color){
    var classname = document.getElementsByClassName("pixel");

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', changeColor, false);
        classname[i].addEventListener('click', changeColor, false);
    }

  }

function newCanvas(){
var pixel;
var canvas = document.getElementById('canvas');

  for (var i = 0; i < 210; i++) {

    pixel = document.createElement('div');
    pixel.className = 'pixel';
    canvas.appendChild(pixel);
    //pixel.addEventListener('click', changeColor(pixel));
  }
//console.log("running");

      var changeColor = function() {
          //var attribute = this.getAttribute("data-myattribute");
          this.style.backgroundColor = "red";

      };

    var classname = document.getElementsByClassName("pixel");

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', changeColor, false);
    }

}
newCanvas();






}());

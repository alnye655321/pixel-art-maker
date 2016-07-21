(function() {

  function changeEventListner(color){
    var classname = document.getElementsByClassName("pixel");

    var changeColorBlue = function() {
        //var attribute = this.getAttribute("data-myattribute");
        this.style.backgroundColor = "blue";

    };


    for (var i = 0; i < classname.length; i++) {
        classname[i].removeEventListener('click', changeColor);
        classname[i].addEventListener('click', changeColorBlue, false);

    }

  }
  var blueButton = document.getElementById("blue");

  blueButton.addEventListener('click', changeEventListner("blue"), false);

// initial creation of div boxes
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

//reset all event listners http://stackoverflow.com/questions/19469881/remove-all-event-listeners-of-specific-type
// var el = document.getElementById('el-id'),
//     elClone = el.cloneNode(true);
//
// el.parentNode.replaceChild(elClone, el);





}());

$(function(){

})

function loadContent(htmlName) {
  $(".wrapper").load(htmlName);
  $(".wrapper").animate({ scrollTop: 0 }, "fast");
}

var zoomStep=0;
function zoomInImage() {
  if(zoomStep < 1) {
    zoomStep +=1;

    zoomLevel(zoomStep);
  }
}

function zoomOutImage() {
  if (zoomStep > -2) {
    zoomStep -=1;
    zoomLevel(zoomStep);
  }
}

function zoomLevel(step) {

  var scaleVal = "";
  if (step == 0) {
    scaleVal = "scale(1,1)";
  } else if(step == 1){
    scaleVal = "scale(1.2,1.2)";
  }else if(step == -1) {
    scaleVal = "scale(.8,.8)";
  }else if(step == -2) {
    scaleVal = "scale(.65,.65)";
  }

  $(".container").css("transform", scaleVal);
}

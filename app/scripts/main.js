
var canvas;
var stage;
var shape;
var circles = 10;

function init() {
  canvas = document.getElementById("testScope");
  stage = new createjs.Stage(canvas);

  for(var i = 0; i < 10; i++) {
    shape = new createjs.Shape();
    for(var j = circles; j > 0; j--) {
      shape.graphics.beginFill("blue").drawCircle(0, 0, 10);
    }
    shape.x = Math.random() * canvas.width;
    shape.y = Math.random() * canvas.height;
    shape.velX = Math.random() * 10 - 5;
    shape.velY = Math.random() * 10 - 5;

    stage.addChild(shape);
  }


  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(50);
}

function tick(event) {
  var w = canvas.width;
  var h = canvas.height;
  var l = stage.getNumChildren() - 1;

  for(var i = 1; i < l; i++) {
    var shape = stage.getChildAt(i);
    if ((shape.x > 790 && shape.x < 810)||(shape.x > 0 && shape.x < 10)) {
      shape.velX = (0 - shape.velX);
    }
    
    if ((shape.y > 590 && shape.y < 610)||(shape.y > 0 && shape.y < 10)) {
      shape.velY = (0 - shape.velY);
    }
    shape.x = (shape.x + shape.velX + w) % w;
    shape.y = (shape.y + shape.velY + h) % h;
  }

  stage.update(event);
}


init();


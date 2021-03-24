var currentX = 0;
var tweenedPageX = 0;
var background_y = 0;
var frame_num = 0;
var background_max = 46800;
var image = document.getElementById("image");
var image_bcr = image.getBoundingClientRect();
var image_right_coord = 0;
var image_left_coord = 0;
var mouse_depth = 0;
var frame_ht = 720;
var mousepct = 0;
var frameinterval =  0.016;
var totalX = window.outerWidth;

function animate(e){
  image_right_coord = image_bcr.right;
  image_left_coord = image_bcr.left;
  currentX = e.x;
  mouse_depth = Math.max(image_right_coord - currentX, 0);

  mousepct = mouse_depth / image_bcr.width;  
  frame_num = Math.round(mousepct / frameinterval);

  background_y = -1 * frame_ht * (frame_num + 1);
  image.style.backgroundPositionY = background_y.toString() + "px";
}

function touch_animate(e){
  image_right_coord = image_bcr.right;
  image_left_coord = image_bcr.left;
  currentX = e.touches[0].clientX;
  mouse_depth = Math.max(image_right_coord - currentX, 0);

  mousepct = mouse_depth / image_bcr.width;
  
  frame_num = Math.round(mousepct / frameinterval);
  
  background_y = -1 * frame_ht * (frame_num + 1);
  image.style.backgroundPositionY = background_y.toString() + "px";
}

image.onmousemove = animate;
image.ontouchmove = touch_animate;

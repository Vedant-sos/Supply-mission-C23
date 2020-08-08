function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       // Look at the hints in the document and understand how to make the package body fall only on
       Matter.Body.setStatic(packageBody,false);
     }
   }
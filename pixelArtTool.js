
var color = "#ffffff";

//set the color to be transfered to the grid
function setPenColor(fontColor) {
    "use strict";
    color = fontColor;
}

//pick the grid square that will be accepting the new color
function setPixelColor(item) {
    "use strict";
    item.style.backgroundColor = color;
}
// allow user to start over
function clearBoardOfColor() {
    "use strict";
    location.reload();
}
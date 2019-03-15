
var color = "#ffffff";

function setPenColor(fontColor) {
    "use strict";
    color = fontColor;
}

function setPixelColor(item) {
    "use strict";
    item.style.backgroundColor = color;
}

function clearBoardOfColor(fontColor) {
    "use strict";
    location.reload();
}
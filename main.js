moveCube();
moveTriangle();
rotateCircle();

function moveCube() {
    $("#cube").animate({top:'600px'}, 500);
    $("#cube").animate({top:'5px'}, 500);
}

function moveTriangle() {
    $("#triangle").animate({top:'5px'}, 500);
    $("#triangle").animate({top:'600px'}, 500);
}

function rotateCircle() {
    $("#circle").animate({rotate:'360deg'}, 1000);
}
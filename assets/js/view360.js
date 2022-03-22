$(document).ready(function() {
    $("#view360").tikslus360({
        imageDir: 'assets/images/threesixty',
        imageCount: 36,
        imageExt: 'jpg',
        canvasID: 'mycar',
        canvasWidth: 810,
        canvasHeight: 810,
        autoRotate: false
    });
});
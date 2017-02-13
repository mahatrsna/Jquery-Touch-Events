$("body").on("touchstart", ".touchable", function() { //make touchable  items fire like a click event
var d1 = new Date();
var n1 = d1.getTime();
setTimeout(function() {
    $(".touchable").on("touchend", function(event) {
        var d2 = new Date();
        var n2 = d2.getTime();
        if (n2 - n1 <= 300) {
            $(event.target).trigger("click"); //dont do the action here just call real click handler
        }
    });
}, 50)}).on("click", "#myelement", function() {
//all the behavior i originally wanted -- this is optional -- you presumably already have click events bound to your elements
});

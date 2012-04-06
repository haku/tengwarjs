(function () {

    var input = $("#input textarea");
    var output = $("#output");
    var annotation = $("#annotation");

    function update(event, val) {
        val = val || input.val();
        annotation.html(tengwar.annotateHtml(val));
        output.html(tengwar.transcribeHtml(val));
        location.hash = "#" + encodeURIComponent(val);
        input.css({
            // trixsy math coupled too strongly to font
            // metrics on my own machine, but working
            "height": (val.split("\n").length * 1.164 + 0.3) + "em"
        })
    }

    var val = "";
    if (location.hash) {
        input.val(val = decodeURIComponent(location.hash.slice(1)));
    }

    input.keyup(update);
    input.keydown(update);
    output.tengwar();
    input.select();
    update(null, val);

})();

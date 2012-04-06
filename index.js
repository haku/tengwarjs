(function () {

    var input = $("#input textarea");
    var output = $("#output");

    function update(event, val) {
        val = val || input.val();
        output.html(tengwar.transcribeHtml(val));
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

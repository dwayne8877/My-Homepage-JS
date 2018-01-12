var main = function() {

    $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var link = $input.val();

        if (link != "") {
            var html = $('<li>').text(link);
            html.prependTo('#links');
            $input.val("");
        }
        return false;
    });

}

$(document).ready(main);

if (window.innerWidth && window.innerWidth <= 600) {
    $(document).ready(function () {
        var bloccoDaInserire = $('<div class="bottone' > <input id="ppp" type="button" value="Show" onClick="toggleMenu()"></input>);
        bloccoDaInserire.appendTo('#header');
    });

    function toggleMenu() {
        if ($('ppp').attr('value') == 'Show') {
            $('#ppp').attr('value', "hide");
        }
        else {
            $('#ppp').attr('value', "Show");
        }
        $('#header ul').toggleClass('nascondi');
    }
}

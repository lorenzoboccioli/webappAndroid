// if (window.innerWidth && window.innerWidth <= 600) {
//     $(document).ready(function () {
//         $('#header ul').addClass('nascondi');
//         var bloccoDaInserire = $('<div class="bottone"> <input id="ppp" type="button" value="Show" onClick="toggleMenu()"></div>');
//         bloccoDaInserire.appendTo('#header');
//     });

//     function toggleMenu() {
//         if ($('ppp').attr('value') == 'Show') {
//             $('#ppp').attr('value', "hide");
//         }
//         else {
//             $('#ppp').attr('value', "Show");
//         }
//         $('#header ul').toggleClass('nascondi');
//     }
// }

if (window.innerWidth && window.innerWidth <= 600) {
    console.log("ok2");
    $(document).ready(function () {
        $('#header ul').addClass('nascondi');
        var bloccoDaInserire = $('<div class="bottone"> <input id="ppp" type="button" value="Mostra" onclick="toggleMenu()"></div>');
        bloccoDaInserire.appendTo("#header");
    });
    function toggleMenu() {
        if ($('#ppp').attr('value') == 'Show') {
            $('#ppp').attr('value', "hide");
        }
        else {
            $('#ppp').attr('value', "Show");
        }
        $('#header ul').toggleClass('nascondi');
    }
}

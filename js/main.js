jQuery(function ($) {

    $('.box').draggable({
        appendTo: 'body',
        helper: 'clone',
        start: function () {
            $(this).addClass('dragging');
        },
        stop: function () {
            $(this).removeClass('dragging');
        }
    });

    var container = $('#excel-table th').droppable({
        drop: function (e, ui) {
            var th = $(this);
            if (th.children().length > 0) return;

            ui.draggable.appendTo(this);
        }
    });

    $('.sizable').resizable();
});
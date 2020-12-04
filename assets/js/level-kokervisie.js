/* 

    Kokervisie script
    for Accessibility Game

*/

var kokervisie = {

    // INIT
    init() {
        console.log('init kokervisie');

        this.setupMouseDrag();
    },

    setupMouseDrag() {
        var clicked = false, clickY, clickX;
        $(document).on({
            'mousemove': function(e) {
                clicked && updateScrollPos(e);
            },
            'mousedown': function(e) {
                clicked = true;
                clickY = e.pageY;
                clickX = e.pageX;
            },
            'mouseup': function() {
                clicked = false;
                $('#content').css('cursor', 'grab');
            }
        });
        
        const updateScrollPos = function(e) {
            const content = $('#content');
            content.css('cursor', 'grabbing');
            content.css('user-select', 'none');
            content.scrollTop(content.scrollTop() + (clickY - e.pageY) * 0.1);
            content.scrollLeft(content.scrollLeft() + (clickX - e.pageX) * 0.1);
        }

        // based on method found in:
        // https://stackoverflow.com/questions/19743228/scroll-the-page-on-drag-with-jquery/19743358
    }
}

kokervisie.init();

function unload() {
    delete kokervisie;
}
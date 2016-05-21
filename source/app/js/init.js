/**
 * Created by Ed on 21/05/2016.
 */

$(document).ready(function () {
    router.load_page();

    $(window).on('hashchange', function () {
        router.load_page();
    });
});
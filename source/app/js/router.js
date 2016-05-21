/**
 * Created by Ed on 21/05/2016.
 */
var router = new function () {
    this.get_pathname = function () {
        return window.location.pathname.split('/');
    };

    this.load_page = function () {
        var page = router.get_pathname();
        if (page[page.length - 1] == 'index.html') {
            $('#page').html(portfolio.master);
        }
    }
};
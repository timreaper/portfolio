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
            $.getJSON("portfolio_content.json", function (data) {
                $('#page').html(portfolio.master(data));
            });           
        }
    }
};
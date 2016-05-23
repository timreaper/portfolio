/**
 * Created by Ed on 21/05/2016.
 */
var router = new function () {
    this.get_pathname = function () {
        //@TODO fix before deployment!!!
        return window.location.hash.split('#!/');
    };

    this.load_page = function () {
        router.unload_page();

        var page = router.get_pathname();
        if (typeof page[1] == 'undefined') {
            $.getJSON("portfolio_content.json", function (data) {
                $('.site-container').html(portfolio.home(data));
            });
        } else {
            var url_segment = page[1].split('/')[0];
            switch (url_segment) {
                case '':
                    $.getJSON("portfolio_content.json", function (data) {
                        $('.site-container').html(portfolio.home(data));
                    });
                    break;
                case 'entry':
                    $.getJSON("portfolio_content.json", function (data) {
                        var url_segments = page[1].split('-');
                        var number = url_segments[url_segments.length - 1];
                        $('.site-container').html(portfolio.post(data.items[number]));
                        if ($.mobile) {
                            $.mobile.silentScroll(0);
                        } else {
                            $(window).scrollTop(0);
                        }
                    });
                    break;
                default:
                    return '';
            }
        }
    };

    this.unload_page = function () {
        $('#page').html(portfolio.master());
        night_mode.check();
    }
};
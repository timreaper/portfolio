/**
 * Created by Ed on 22/05/2016.
 */
var night_mode = new function () {
    this.get = function () {
        return localStorage.getItem('setting');
    };

    this.set = function (setting) {
        localStorage.setItem('setting', setting);
    };

    this.check = function () {
        if (!localStorage.getItem('setting')) {
            localStorage.setItem('setting', 'day');
        }
        var setting = localStorage.getItem('setting');
        if (setting == 'night') {
            night_mode.night();
        } else {
            night_mode.day();
        }
    };

    this.day = function () {
        $('#page').removeClass('night-mode');
        $('.menu__logo').prop('src', 'app/assets/logos/menu-header.png');
    };

    this.night = function () {
        $('#page').addClass('night-mode');
        $('.menu__logo').prop('src', 'app/assets/logos/menu-header-night-mode.png');
    };
};
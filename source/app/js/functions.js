/**
 * Created by Ed on 21/05/2016.
 */

function smooth_hide(selector, speed, flag) {
    if (flag == 1) {
        if (speed) {
            selector.animate({opacity: 0}, speed, 'linear', function () {
                selector.css('display', 'none');
            });
        } else {
            selector.animate({opacity: 0}).finish(selector.css('display', 'none'));
        }
    } else {
        if (speed) {
            selector.animate({opacity: 0}, speed, 'linear', function () {
                selector.css('display', 'none');
            });
        } else {
            selector.animate({opacity: 0});
        }
    }
}

function smooth_show(selector, speed) {
    selector.css('opacity', 0);
    if (speed) {
        selector.css('display', 'unset').finish(selector.animate({opacity: 1}, speed, 'linear'));
    } else {
        selector.css('display', 'unset').finish(selector.animate({opacity: 1}));
    }
}

function smooth_remove(selector, speed) {
    if (speed) {
        selector.animate({opacity: 0}, speed, 'linear', function () {
            selector.addClass('hidden');
            selector.remove();
        });
    } else {
        selector.animate({opacity: 0}, 400, 'linear', selector.remove()).finish(selector.addClass('hidden'), selector.remove());
    }
}
this.portfolio=this.portfolio||{},this.portfolio.master=Handlebars.template({1:function(n,r,e,a,t){var l,i=null!=r?r:{},s=e.helperMissing,o="function",d=n.escapeExpression;return'            <article class="grid grid-'+d((l=null!=(l=e.type||(null!=r?r.type:r))?l:s,typeof l===o?l.call(i,{name:"type",hash:{},data:t}):l))+'">\r\n                '+d((l=null!=(l=e.name||(null!=r?r.name:r))?l:s,typeof l===o?l.call(i,{name:"name",hash:{},data:t}):l))+"\r\n            </article>\r\n"},compiler:[7,">= 4.0.0"],main:function(n,r,e,a,t){var l;return'<div class="menu">\r\n    <div class="row align-center text-center">\r\n        <div class="column small-12">\r\n            <a href="/" title="Home">\r\n                <img class="menu__logo" src="app/assets/logos/menu-header.png" alt="Header Logo" title="Me!">\r\n            </a>\r\n        </div>\r\n        <br>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="https://uk.linkedin.com/in/edem-alloh-40644366" target="_blank" title="LinkedIn">\r\n                <i class="fa fa-linkedin" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="mailto:info@edemalloh.com" title="Email">\r\n                <i class="fa fa-envelope" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="/" title="Resume">\r\n                <i class="fa fa-file-text" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="site-container">\r\n    <div class="filter-button-group">\r\n        <button class="secondary button button-rounded-left" data-filter="*">Show All</button>\r\n        <button class="secondary button" data-filter=".grid-website">Websites</button>\r\n        <button class="secondary button" data-filter=".grid-flyer">Flyers</button>\r\n        <button class="secondary button" data-filter=".grid-album">Album Covers</button>\r\n        <button class="secondary button button-rounded-right" data-filter=".grid-project">Projects</button>\r\n    </div>\r\n    <div class="grid-container row">\r\n'+(null!=(l=e.each.call(null!=r?r:{},null!=r?r.items:r,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?l:"")+"    </div>\r\n    <script type=\"text/javascript\">\r\n        $('.filter-button-group').on('click', 'button', function () {\r\n            var filterValue = $(this).attr('data-filter');\r\n            if (filterValue == '*') {\r\n                smooth_show($('.grid'));\r\n            } else {\r\n                smooth_hide($('.grid'));\r\n                smooth_show($(filterValue));\r\n            }\r\n\r\n            var button_clicked = $(this);\r\n            if (button_clicked.hasClass('secondary')) {\r\n                $('.filter-button-group .button').addClass('secondary');\r\n                button_clicked.removeClass('secondary');\r\n            } else {\r\n                button_clicked.addClass('secondary');\r\n            }\r\n        });\r\n    </script>\r\n</div>"},useData:!0}),this.portfolio.menu=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,r,e,a,t){return'<div class="menu">\r\n    <div class="row align-center text-center">\r\n        <div class="column small-12">\r\n            <a href="/" title="Home">\r\n                <img class="menu__logo" src="app/assets/logos/menu-header.png" alt="Header Logo" title="Me!">\r\n            </a>\r\n        </div>\r\n        <br>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="https://uk.linkedin.com/in/edem-alloh-40644366" target="_blank" title="LinkedIn">\r\n                <i class="fa fa-linkedin" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="mailto:info@edemalloh.com" title="Email">\r\n                <i class="fa fa-envelope" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="/" title="Resume">\r\n                <i class="fa fa-file-text" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>'},useData:!0});
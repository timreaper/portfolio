this.portfolio=this.portfolio||{},this.portfolio.home=Handlebars.template({1:function(n,t,a,e,r){var l,s=null!=t?t:{},i=a.helperMissing,o="function",d=n.escapeExpression;return'        <article class="grid grid-'+d((l=null!=(l=a.type||(null!=t?t.type:t))?l:i,typeof l===o?l.call(s,{name:"type",hash:{},data:r}):l))+'">\r\n            <a href="#!/entry/'+d((a.slug_generator||t&&t.slug_generator||i).call(s,null!=t?t.type:t,null!=t?t.name:t,r&&r.key,{name:"slug_generator",hash:{},data:r}))+'">\r\n                <img src="'+d((l=null!=(l=a.thumbnail||(null!=t?t.thumbnail:t))?l:i,typeof l===o?l.call(s,{name:"thumbnail",hash:{},data:r}):l))+'" alt="'+d((l=null!=(l=a.name||(null!=t?t.name:t))?l:i,typeof l===o?l.call(s,{name:"name",hash:{},data:r}):l))+'" title="'+d((l=null!=(l=a.name||(null!=t?t.name:t))?l:i,typeof l===o?l.call(s,{name:"name",hash:{},data:r}):l))+'">\r\n                <div class="grid__overlay"></div>\r\n                <div class="grid__info">\r\n                    <span>'+d((a.type_formatter||t&&t.type_formatter||i).call(s,null!=t?t.type:t,{name:"type_formatter",hash:{},data:r}))+"</span>\r\n                    <h3>"+d((l=null!=(l=a.name||(null!=t?t.name:t))?l:i,typeof l===o?l.call(s,{name:"name",hash:{},data:r}):l))+'</h3>\r\n                    <span class="grid__info--date">'+d((l=null!=(l=a.date||(null!=t?t.date:t))?l:i,typeof l===o?l.call(s,{name:"date",hash:{},data:r}):l))+"</span>\r\n                </div>\r\n            </a>\r\n        </article>\r\n"},compiler:[7,">= 4.0.0"],main:function(n,t,a,e,r){var l;return'<div class="filter-button-group hide-for-small-only">\r\n    <button class="button selected button-rounded-left" data-filter="*">Show All</button>\r\n    <button class="button" data-filter=".grid-website">Websites</button>\r\n    <button class="button" data-filter=".grid-flyer">Flyers</button>\r\n    <button class="button" data-filter=".grid-album">Album Covers</button>\r\n    <button class="button button-rounded-right" data-filter=".grid-project">Projects</button>\r\n</div>\r\n\r\n<div class="filter-button-group mobile-view show-for-small-only">\r\n    <div class="button selected button-rounded" data-filter="*">Show All</div>\r\n    <div class="button button-rounded" data-filter=".grid-website">Websites</div>\r\n    <div class="button button-rounded" data-filter=".grid-flyer">Flyers</div>\r\n    <div class="button button-rounded" data-filter=".grid-album">Album Covers</div>\r\n    <div class="button button-rounded" data-filter=".grid-project">Projects</div>\r\n</div>\r\n\r\n<div class="grid-container row">\r\n'+(null!=(l=a.each.call(null!=t?t:{},null!=t?t.items:t,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?l:"")+"</div>\r\n<script type=\"text/javascript\">\r\n    $('.grid').on('mouseenter', function () {\r\n        smooth_show($(this).find('.grid__info'));\r\n        smooth_show($(this).find('.grid__overlay'));\r\n    });\r\n\r\n    $('.grid').on('mouseleave', function () {\r\n        smooth_hide($(this).find('.grid__info'));\r\n        smooth_hide($(this).find('.grid__overlay'));\r\n    });\r\n\r\n    $('.filter-button-group').on('click', 'button', function () {\r\n        var filterValue = $(this).attr('data-filter');\r\n        if (filterValue == '*') {\r\n            smooth_show($('.grid'));\r\n        } else {\r\n            smooth_hide($('.grid'), '', 1);\r\n            smooth_show($(filterValue));\r\n        }\r\n\r\n        var button_clicked = $(this);\r\n        if (button_clicked.hasClass('selected')) {\r\n            button_clicked.removeClass('selected');\r\n        } else {\r\n            $('.filter-button-group .button').removeClass('selected');\r\n            button_clicked.addClass('selected');\r\n        }\r\n    });\r\n</script>"},useData:!0}),this.portfolio.master=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,t,a,e,r){return'<div class="menu">\r\n    <div class="row align-center text-center">\r\n        <div class="column small-12 day-night">\r\n            <button class="button tiny button-rounded-left day-mode-button" data-setting="day" title="Day Mode">\r\n                <i class="fa fa-sun-o"></i>\r\n            </button>\r\n            <button class="button tiny button-rounded-right night-mode-button" data-setting="night" title="Night Mode">\r\n                <i class="fa fa-moon-o"></i>\r\n            </button>\r\n        </div>\r\n        <div class="column small-12">\r\n            <a href="" title="Home">\r\n                <img class="menu__logo" src="app/assets/logos/menu-header.png" alt="Header Logo" title="Me!">\r\n            </a>\r\n        </div>\r\n        <br>\r\n        <div class="column small-12">\r\n            <p class="menu__jobtitle">Designer/Web Developer</p>\r\n        </div>\r\n        <br>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="https://uk.linkedin.com/in/edem-alloh-40644366" target="_blank"\r\n               title="LinkedIn">\r\n                <i class="fa fa-linkedin" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="mailto:info@edemalloh.com" title="Email">\r\n                <i class="fa fa-envelope" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="app/assets/documents/Edem Alloh CV.pdf" target="_blank" title="CV/Resume">\r\n                <i class="fa fa-file-text" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="menu__block">\r\n\r\n</div>\r\n\r\n<script type="text/javascript">\r\n    var setting = night_mode.get();\r\n    if (setting == \'night\') {\r\n        $(\'.night-mode-button\').addClass(\'selected\');\r\n    } else {\r\n        $(\'.day-mode-button\').addClass(\'selected\');\r\n    }\r\n\r\n    $(\'.day-night\').on(\'click\', \'button\', function () {\r\n        $(\'.day-night button\').removeClass(\'selected\');\r\n        $(this).addClass(\'selected\');\r\n\r\n        var setting = $(this).data(\'setting\');\r\n        night_mode.set(setting);\r\n        night_mode.check();\r\n    });\r\n</script>\r\n<div class="site-container">\r\n\r\n</div>'},useData:!0}),this.portfolio.post=Handlebars.template({1:function(n,t,a,e,r,l,s){var i,o=null!=t?t:{},d=a.helperMissing,u="function",c=n.escapeExpression;return'            <div class="post__images">\r\n                <a title="'+c((i=null!=(i=a.alt||(null!=t?t.alt:t))?i:d,typeof i===u?i.call(o,{name:"alt",hash:{},data:r}):i))+'" data-title="'+c((i=null!=(i=a.caption||(null!=t?t.caption:t))?i:d,typeof i===u?i.call(o,{name:"caption",hash:{},data:r}):i))+'" data-lightbox="'+c(n.lambda(null!=s[1]?s[1].name:s[1],t))+'" href="'+c((i=null!=(i=a.url||(null!=t?t.url:t))?i:d,typeof i===u?i.call(o,{name:"url",hash:{},data:r}):i))+'">\r\n                    <img src="'+c((i=null!=(i=a.url||(null!=t?t.url:t))?i:d,typeof i===u?i.call(o,{name:"url",hash:{},data:r}):i))+'" alt="'+c((i=null!=(i=a.alt||(null!=t?t.alt:t))?i:d,typeof i===u?i.call(o,{name:"alt",hash:{},data:r}):i))+'">\r\n                    <div class="post__images__overlay"></div>\r\n                    <div class="post__images__info">\r\n                        <i class="fa fa-search-plus"></i>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n'},compiler:[7,">= 4.0.0"],main:function(n,t,a,e,r,l,s){var i,o,d=null!=t?t:{},u=a.helperMissing,c="function",m=n.escapeExpression;return'<div class="post-container row">\r\n    <div class="small-12 medium-6 columns">\r\n        <div class="post__text">\r\n            <a href="#!/" class="back-to-home">\r\n                <i class="fa fa-arrow-left"></i> Back to Home</a>\r\n            <h1 class="no-margin">'+m((o=null!=(o=a.name||(null!=t?t.name:t))?o:u,typeof o===c?o.call(d,{name:"name",hash:{},data:r}):o))+"</h1>\r\n            <h5>"+m((a.type_formatter||t&&t.type_formatter||u).call(d,null!=t?t.type:t,{name:"type_formatter",hash:{},data:r}))+" | "+m((o=null!=(o=a.date||(null!=t?t.date:t))?o:u,typeof o===c?o.call(d,{name:"date",hash:{},data:r}):o))+"</h5>\r\n            <hr>\r\n            <p>\r\n                "+m((o=null!=(o=a.description||(null!=t?t.description:t))?o:u,typeof o===c?o.call(d,{name:"description",hash:{},data:r}):o))+'\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="small-12 medium-6 columns">\r\n'+(null!=(i=a.each.call(d,null!=t?t.images:t,{name:"each",hash:{},fn:n.program(1,r,0,l,s),inverse:n.noop,data:r}))?i:"")+"    </div>\r\n\r\n    <script type=\"text/javascript\">\r\n        $('.post__images').on('mouseenter', function () {\r\n            smooth_show($(this).find('.post__images__info'));\r\n            smooth_show($(this).find('.post__images__overlay'));\r\n        });\r\n\r\n        $('.post__images').on('mouseleave', function () {\r\n            smooth_hide($(this).find('.post__images__info'));\r\n            smooth_hide($(this).find('.post__images__overlay'));\r\n        });\r\n    </script>\r\n</div>\r\n"},useData:!0,useDepths:!0}),this.portfolio.menu=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,t,a,e,r){return'<div class="menu">\r\n    <div class="row align-center text-center">\r\n        <div class="column small-12 day-night">\r\n            <button class="button tiny button-rounded-left day-mode-button" data-setting="day" title="Day Mode">\r\n                <i class="fa fa-sun-o"></i>\r\n            </button>\r\n            <button class="button tiny button-rounded-right night-mode-button" data-setting="night" title="Night Mode">\r\n                <i class="fa fa-moon-o"></i>\r\n            </button>\r\n        </div>\r\n        <div class="column small-12">\r\n            <a href="" title="Home">\r\n                <img class="menu__logo" src="app/assets/logos/menu-header.png" alt="Header Logo" title="Me!">\r\n            </a>\r\n        </div>\r\n        <br>\r\n        <div class="column small-12">\r\n            <p class="menu__jobtitle">Designer/Web Developer</p>\r\n        </div>\r\n        <br>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="https://uk.linkedin.com/in/edem-alloh-40644366" target="_blank"\r\n               title="LinkedIn">\r\n                <i class="fa fa-linkedin" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="mailto:info@edemalloh.com" title="Email">\r\n                <i class="fa fa-envelope" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n        <div class="column small-3">\r\n            <a class="menu__link" href="app/assets/documents/Edem Alloh CV.pdf" target="_blank" title="CV/Resume">\r\n                <i class="fa fa-file-text" aria-hidden="true"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="menu__block">\r\n\r\n</div>\r\n\r\n<script type="text/javascript">\r\n    var setting = night_mode.get();\r\n    if (setting == \'night\') {\r\n        $(\'.night-mode-button\').addClass(\'selected\');\r\n    } else {\r\n        $(\'.day-mode-button\').addClass(\'selected\');\r\n    }\r\n\r\n    $(\'.day-night\').on(\'click\', \'button\', function () {\r\n        $(\'.day-night button\').removeClass(\'selected\');\r\n        $(this).addClass(\'selected\');\r\n\r\n        var setting = $(this).data(\'setting\');\r\n        night_mode.set(setting);\r\n        night_mode.check();\r\n    });\r\n</script>'},useData:!0});
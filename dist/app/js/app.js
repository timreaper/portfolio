$(document).ready(function(){router.load_page()});var router=new function(){this.get_pathname=function(){return window.location.pathname.split("/")},this.load_page=function(){var t=router.get_pathname();"index.html"==t[t.length-1]&&$("#page").html(portfolio.master)}};
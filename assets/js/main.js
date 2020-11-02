$(function () {

    // function initSearchBox() {
    //   var pages = new Bloodhound({
    //     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    //     // datumTokenizer: Bloodhound.tokenizers.whitespace,
    //     queryTokenizer: Bloodhound.tokenizers.whitespace,

    //     prefetch: baseurl + '/search.json'
    //   });

    //   $('#search-box').typeahead({
    //     minLength: 0,
    //     highlight: true
    //   }, {
    //     name: 'pages',
    //     display: 'title',
    //     source: pages
    //   });

    //   $('#search-box').bind('typeahead:select', function (ev, suggestion) {
    //     window.location.href = suggestion.url;
    //   });
    // }

    // function styleContentToMD() {
    //   $('#markdown-content-container table').addClass('table');
    //   $('#markdown-content-container img').addClass('img-responsive');
    // }

    // initSearchBox();
    // styleContentToMD();

    // active_menu_cb = function (e, submenu) {
    //     // e.preventDefault();

    // };

    // Select all links with hashes
    // $('a[href*="#"]')
    //     // Remove links that don't actually link to anything
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         // On-page links
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    //             &&
    //             location.hostname == this.hostname
    //         ) {
    //             // Figure out element to scroll to
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             // Does a scroll target exist?
    //             if (target.length) {
    //                 // Only prevent default if animation is actually gonna happen
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     // Callback after animation
    //                     // Must change focus!
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) { // Checking if the target was focused
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //                         $target.focus(); // Set focus again
    //                     };
    //                 });
    //             }
    //         }
    //     });


    $("#side-nav, #side-nav2").navgoco({
        caretHtml: '',
        accordion: true,
        openClass: 'open',
        save: true,
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 400,
            easing: 'swing'
        },
        // Add Active class to clicked menu item
        // onClickAfter: active_menu_cb,
    });

    $("#collapseAll").click(function (e) {
        e.preventDefault();
        $("#side-nav, #side-nav2").navgoco('toggle', false);
    });

    $("#expandAll").click(function (e) {
        e.preventDefault();
        $("#side-nav, #side-nav2").navgoco('toggle', true);
    });

    // TOC NAVIGATIONS

    var tocs = $('#toc');
    tocs.toc({ minimumHeaders: 0, listType: 'ul', showSpeed: 0, headers: 'h1,h2,h3,h4' });

    /* this offset helps account for the space taken up by the floating toolbar. */
    var offsetTop = function() {
        var href = this.getAttribute('href');

        if(href && href.indexOf('http') !== 0) {
            var target = $(href),
            scrollTarget = target.offset().top;

            $(window).scrollTop(scrollTarget - 90);
            return false;
        }
    }

    tocs.on('click', 'a', offsetTop);

    $('#markdown-content-container').on('click', 'a', offsetTop);

});





// $('#mysidebar').height($(".nav").height());

// $(document).ready(function () {
//   var h = $(window).height();
//   if (h > 800) {
//     $("#mysidebar").attr("class", "nav affix");
//   }

//   $('[data-toggle="tooltip"]').tooltip({ placement: 'top' }); anchors.add('h2,h3,h4,h5');

// });

// $(function () {
//   var json, tabsState;
//   $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//     var href, json, parentId, tabsState; tabsState = localStorage.getItem("tabs-state");
//     json = JSON.parse(tabsState || "{}");
//     parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
//     href = $(e.target).attr('href'); json[parentId] = href; return localStorage.setItem("tabs-state", JSON.stringify(json));
//   });
//   tabsState = localStorage.getItem("tabs-state"); json = JSON.parse(tabsState || "{}");

//   $.each(json, function (containerId, href) {
//     return $("#" + containerId + " a[href=" + href + "]").tab('show');
//   });

//   $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function () {
//     var $this = $(this); if (!json[$this.attr("id")]) {
//       return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
//     }
//   });
// });


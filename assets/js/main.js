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

  $("#side-nav").navgoco({
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
    onClickAfter: 'active',
});

$("#collapseAll").click(function(e) {
    e.preventDefault();
    $("#side-nav").navgoco('toggle', false);
});

$("#expandAll").click(function(e) {
    e.preventDefault();
    $("#side-nav").navgoco('toggle', true);
});

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


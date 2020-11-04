$(function() {

    function buildHref(key) {
        var url = document.URL,
            index = url.indexOf(key);

        if(index !== -1) {
            index += key.length;
            return url.slice(0, index);
        }
    }

    var container = $('#breadcrumbs')
        url = document.URL.match(/docs.*/g),
        crumbs = '<ol class="breadcrumb">';

    if(url && url.length > 0) {
        url = url[0];

        var keys = url.split('/'), crumb = "";
        keys.splice(0, 1);                        // Remove 'docs'
        keys.splice(keys.length-1, 1);            // Remove empty string at end

        keys.forEach((key, i) => {
            crumb = key.replace(/-/g, " ");
            crumb = crumb.toTitleCase();          // Use js library for proper title case (https://github.com/gouch/to-title-case)
            crumbs += '<li class="breadcrumb-item">';

            if(i > 1) {
                var href = buildHref(key);
                crumbs += '<a href="' + href + '">' + crumb + '</a>';
            } else {
                crumbs += '<a class="a-nonclick" href="#">' + crumb + '</a>';
            }

            crumbs += '</li>';
        });

        crumbs += "</ol>";
        container.append(crumbs);
    }
});


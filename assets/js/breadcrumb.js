$(function() {

    function buildHref(key) {
        var url = document.URL,
            index = url.indexOf(key);

        if(index !== -1) {
            index += key.length;
            return url.slice(0, index);
        }
    }

    function parseUrl() {
        var url = document.URL.match(/docs.*/g);

        if(url && url.length > 0) {
            url = url[0];

            var keys = url.split('/'), crumb = "";
            keys.splice(0, 1);                        // Remove 'docs'
            keys.splice(keys.length-1, 1);            // Remove empty string at end

            return keys;
        }
    }

    var container = document.getElementById('breadcrumbs'),
        urlKeys = parseUrl(),
        crumbs = container.innerText.split('/'),
        crumbsList = '<ol class="breadcrumb">';

    // Check for home page
    if(crumbs.length === 2 && !crumbs[0]) {
        crumbsList += '<li class="breadcrumb-item"><a href="' + document.URL + '">' + crumbs[1] + '</a></li></ol>';
    } else {
        for(var i = 0; i < crumbs.length-1; i++) {
            crumbsList += '<li class="breadcrumb-item">';
    
            if(i > 1) {
                var href = buildHref(urlKeys[i]);
                crumbsList += '<a href="' + href + '">' + crumbs[i] + '</a>';
            } else {
                crumbsList += '<a class="a-nonclick" href="#">' + crumbs[i] + '</a>';
            }
    
            crumbsList += "</li>";
        }
    
        var href = buildHref(urlKeys[crumbs.length-1]);
        crumbsList += '<li class="breadcrumb-item"><a href="' + href + '">' + crumbs[crumbs.length-1] + '</a></li></ol>'; 
    }

    container.innerHTML = crumbsList;
});


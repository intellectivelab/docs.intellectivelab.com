$(function() {

    function caps(key) {
        var keys = key.split(' '),
            newKey = "";
            
        keys.forEach(k => {
            newKey += ' ' + k.charAt(0).toUpperCase() + k.slice(1);
        });

        return newKey;
    }

    var container = $('#breadcrumbs')
        url = document.URL.match(/docs.*/g),
        crumbs = '<ol class="breadcrumb">';

    if(url && url.length > 0) {
        url = url[0];

        var keys = url.split('/');
        keys.splice(0, 1);                        // Remove 'docs'
        keys.splice(keys.length-1, 1);            // Remove empty string at end

        keys.forEach(key => {
            key = key.replace(/-/g, " ");
            key = caps(key);
            crumbs += '<li class="breadcrumb-item"><a href="#">' + key + '</a></li>';
        });

        crumbs += "</ol>";
        container.append(crumbs);
    }
});


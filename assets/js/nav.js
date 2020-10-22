$(function() {
    function parseUrl(url) {
        var keys = url.split('/');
        keys.splice(0, 1);                        // Remove 'docs'
        keys.splice(keys.length-1, 1);            // Remove empty string at end
    
        return keys;
    }

    function closePreviousItems(prevUrl, currentUrl) {
        var keysPrev = parseUrl(prevUrl), 
            keysCurr = parseUrl(currentUrl),
            i = 1,
            id = "";
        
        for(i; i < keysPrev.length; i++) {
            id = keysPrev.slice(0, i).join('-');

            if(i < keysCurr.length && keysCurr.slice(0, i).join('-') === id) {
                continue;
            }

            $('#' + id + ', #' + id + '2').navgoco('toggle', false);
        }
    }
    
    var ref = document.URL.match(/docs.*/g);      // Get the last parts of the url
    if(ref && ref.length > 0) {
        ref = ref[0];

        var prevUrl = window.sessionStorage.getItem('previousUrl');
        if(prevUrl) {
            closePreviousItems(prevUrl, ref);
        }

        window.sessionStorage.setItem('previousUrl', ref);
    
        var keys = parseUrl(ref), i = 1, id = "";
        for(i; i < keys.length; i++) {
            id = keys.slice(0, i).join('-');
            $('#' + id + ', #' + id + '2').navgoco('toggle', true);
        }

        id = keys.slice(0, i).join('-');
        $('#' + id + ', #' + id + '2').parent().addClass('active');
    }
});
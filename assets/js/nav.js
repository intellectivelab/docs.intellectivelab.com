var addOpenClass = function(id) {
    var li = document.getElementById(id);
    if(li) li.classList.add('open');
}

var addActiveClass = function(id) {
    var li = document.getElementById(id);
    if(li) li.classList.add('active');
}

var ref = document.URL.match(/docs.*/g);      // Get the last parts of the url

if(ref && ref.length > 0) { 
    ref = ref[0];

    var keys = ref.split('/');
    keys.splice(0, 1);                        // Remove 'docs'
    keys.splice(keys.length-1, 1);            // Remove empty string at end

    var i = 1;
    for(i; i < keys.length; i++) {
        addOpenClass(keys.slice(0, i).join('-'));
    }

    addActiveClass(keys.slice(0, i).join('-'));
}
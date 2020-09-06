{
    let mdRegExp = "(.*)/(.*?)/images/(.*)";
    let x = document.images.length;
    for (let i = 0; i < x; i++) {
        let linkRef = document.images[i].src;
        let match = linkRef.match(mdRegExp);
        if (match) {
            let newLink = match[1] + "/images/" + match[3];
            document.images[i].setAttribute('src', newLink);
        }
    }

}


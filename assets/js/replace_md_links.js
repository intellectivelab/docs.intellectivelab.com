{
    let commonMatch = function (location, relpath) {
        // http://server:host/path1/path2/subpath3/
        // http://server:host/path1/path2/subpath4.md
        //              ___________^     ^
        //             |             ____|
        //             |            |
        //result = [commonPath1, commonPath2]
        let result = [-1, -1];
        let l1 = location.length;
        let l2 = relpath.length;
        for (let i = 0; i < l1 && i < l2; i++) {
            let charAt = location.charAt(i);
            if (charAt === relpath.charAt(i)) {
                if (charAt === '/') {
                    result[0] = result[1];
                    result[1] = i;
                }
            } else {
                break;
            }
        }
        return result;
    };

    let count = document.links.length;
    let path = window.location.href;
// path = <doc_root>/folder/page/ - is and html folder generated for current <doc_root>/folder/page.md

// replace <doc_root>/folder/page -> <doc_root>/folder/page/
// replace <doc_root>/folder/page/subpath/subpage.md(#link) -> <doc_root>/folder/subpath/subpage/

    let mdRegExp = "(.*?)\\.md($|#(.*))";
    let resourcesRegExp = "(.*?)(/images/|/downloads/)(.*)";
    let originLength = window.location.origin.length;
    for (let i = 0; i < count; i++) {
        let linkRef = document.links[i].href;
        let path1, path2;
        [path1, path2] = commonMatch(path, linkRef);

        if (path1 > originLength) {
            let matchMd = linkRef.substring(path2).match(mdRegExp);
            if (matchMd) {
                let newLink = path.substring(0, path1) + matchMd[1] + "/";
                if (matchMd[3]) {
                    newLink = newLink + "#" + matchMd[3];
                }
                document.links[i].setAttribute('href', newLink);
                continue;
            }
            let matchResources = linkRef.substring(path2).match(resourcesRegExp);
            if(matchResources){
                let newLink = path.substring(0, path1) + matchResources[0];
                document.links[i].setAttribute('href', newLink);
            }
        }
    }

}

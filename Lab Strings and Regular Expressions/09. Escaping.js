function adfsgdfadsfgh(arr) {

    let result = '<ul>\n'
    for (let str of arr) {
        result+='   <li>' + escapeChars(str) + '</li>\n'
    }
    result+='</ul>'

    console.log(result);


    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}
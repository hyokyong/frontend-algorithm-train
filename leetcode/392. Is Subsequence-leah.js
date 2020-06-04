var isSubsequence = function(s, t) {
    for(var i=0; i<s.length; i++) {
        cc = s.charAt(i);
        var begin = 0;
        if( (begin = t.indexOf(cc)) != -1) {
            t = t.substring(begin+1);
        }
        else
            return false;
    }
    return true;
};

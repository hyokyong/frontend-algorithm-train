var countSegments = function(s) {
    s = s.trim();
    if(s.length == 0)return 0
    else return s.replace(/  +/g, ' ').split(' ').length
};

exports.strreverse=(s)=>
{
    var strrev = "";
    for(var i =s.length-1 ;i>=0;i--)
    {
        strrev+=s[i];
    }
    return strrev;
}
exports.strlength=(s)=>
{
    return s.length
}
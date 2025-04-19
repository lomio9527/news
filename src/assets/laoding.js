loading = {
    open: function(domIDstr) {
        var scrollY = 1110;
        var scrollX = 1110;
        if (window.pageYOffset) {
            scrollY = window.pageYOffset;
            scrollX = window.pageXOffset;
        } else if (document.compatMode && document.compatMode != 'BackCompat') {
            scrollY = document.documentElement.scrollTop;
            scrollX = document.documentElement.scrollLeft;
        } else if (document.body) {
            scrollY = document.body.scrollTop;
            scrollX = document.body.scrollLeft;
        }
        var loading = document.getElementById(domIDstr);
        loading.style.position = 'absolute';
        loading.style.zIndex = "100";
        loading.style.visibility = 'visible';
        loading.style.left = (400 + scrollX) + 'px';
        loading.style.top = (300 + scrollY) + 'px';
        var str = '<span style="background:#FFF url(loading2.gif) no-repeat scroll 10px center;padding: 10px 10px 10px 52px; border:solid 3px teal; border-radius: 7px; color:Olive;">数据加载中，请稍后...</span>';
        loading.innerHTML = str;
    },
    close: function(domIDstr) {
        var loading = document.getElementById(domIDstr);
        loading.style.visibility = 'hidden';
    }
};
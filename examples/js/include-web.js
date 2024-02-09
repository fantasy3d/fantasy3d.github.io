(function () {
    var r = new RegExp("(^|(.*?\\/))(include-web\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        var jQueryInclude = false;
        if (!inArray(excludes, 'example-i18n')) {
            inputScript("../js/jquery.min.js");

            inputScript("../js/i18next.min.js");
            inputScript("../js/jquery-i18next.min.js");

            inputScript("../js/utils.js");
            inputScript("../js/localization.js");
            document.writeln("<script>Localization.initializeI18N('../', function () {Localization.localize();Localization.initGlobal();}); </script>");
            jQueryInclude = true;
        }
        if (inArray(includes, 'jquery') && !jQueryInclude) {
            inputScript("../js/jquery.min.js");
        }

        if (inArray(includes, 'bootstrap')) {
            inputScript("../js/jquery.min.js");
            inputCSS("../js/bootstrap.min.css");
            inputScript("../js/bootstrap.min.js");
        }
        if (inArray(includes, 'bootstrap-css')) {
            inputCSS("../js/bootstrap.min.css");
        }

        if (inArray(includes, 'bootstrap-js')) {
            inputScript("../js/bootstrap.min.js");
        }

       
        if (inArray(includes, 'jquery-ui')) {
            inputCSS("../js/jquery-ui.css");
            inputScript("../js/jquery-ui.min.js");
        }

        if (inArray(includes, 'randomcolor')) {
            inputScript("../js/randomColor.min.js");
        }
        if (inArray(includes, 'papaparse')) {
            inputScript("../js/papaparse.min.js");
        }
        if (inArray(includes, 'moment')) {
            inputScript("../js/moment.min.js");
            inputScript("../js/zh-cn.js");
        }
        if (inArray(includes, 'bootstrap-datetimepicker')) {
            inputCSS("../js/bootstrap-datetimepicker.min.css");
            inputScript("../js/bootstrap-datetimepicker.min.js");
        }
        if (inArray(includes, 'bootstrap-select')) {
            inputCSS("../js/bootstrap-select.min.css");
            inputScript("../js/bootstrap-select.min.js");
        }
        
        if (inArray(includes, 'dat-gui')) {
            inputScript("../js/dat.gui.min.js");
            datGuiI18N();
        }
       
        if (inArray(includes, 'ace')) {
            inputScript("../js/ace.js");
        }
        if (inArray(includes, 'widgets.alert')) {
            inputScript("../js/widgets.js");
        }

        if (inArray(includes, 'template')) {
            inputScript("../js/template-web.js");
        }

        if (inArray(includes, 'widgets')) {
            inputCSS("../js/css-loader.css");
            inputScript("../js/widgets.js");
        }
        if (inArray(includes, 'zTree')) {
            inputCSS("../js/zTreeStyle.min.css");
            inputScript("../js/jquery.ztree.all.min.js");
        }
        if (inArray(includes, 'jquery-scontextMenu')) {
            inputCSS("../js/jquery.contextMenu.min.css");
            inputScript("../js/query.contextMenu.min.js");
        }
       
        if (inArray(includes, 'lazyload')) {
            inputScript("../js/jquery.lazyload.min.js");
        }
        if (inArray(includes, 'i18n')) {
            inputScript("../js/i18next.min.js");
            inputScript("../js/jquery-i18next.min.js");
        }
      
        if (inArray(includes, 'ionRangeSlider')) {
            inputCSS("../js/ion.rangeSlider.css");
            inputCSS("../js/normalize.css");
            inputCSS("../js/ion.rangeSlider.skinHTML5.css");
            inputScript("../js/ion.rangeSlider.min.js");
        }

        if (inArray(includes, 'admin-lte')) {
            inputCSS("../css/AdminLTE.min.css");
            inputCSS("../css/skins/skin-blue.min.css");
            inputCSS("../css/font-awesome.min.css");
            inputScript("../js/admin-lte.js");
        }

        if (inArray(includes, 'jquery.scrollto')) {
            inputScript("../js/jquery.scrollTo.min.js");
        }
        
        
    }

    function datGuiI18N() {
        document.writeln("<script>function registerEventListener(evt,fn){" +
            "if(window.attachEvent){window.attachEvent('on'+evt,fn);}" +
            "else{window.addEventListener(evt,fn,false);}" +
            "}</script>");
        document.writeln("<script>registerEventListener('load',function() { " +
            "dat.GUI.TEXT_CLOSED=resources.text_close;dat.GUI.TEXT_OPEN=resources.text_open;" +
            "})</script>")
    }

    load();
    window.isLocal = false;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : document.location.protocol + "//" + document.location.host;
    window.version = "1.0.0";
    window.preRelease = "";
})();

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-classnamemanager/aui-classnamemanager.js']) {
   __coverage__['build/aui-classnamemanager/aui-classnamemanager.js'] = {"path":"build/aui-classnamemanager/aui-classnamemanager.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":15}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":17,"column":62}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":50}},"3":{"start":{"line":6,"column":0},"end":{"line":14,"column":2}},"4":{"start":{"line":8,"column":8},"end":{"line":8,"column":47}},"5":{"start":{"line":10,"column":8},"end":{"line":10,"column":33}},"6":{"start":{"line":12,"column":8},"end":{"line":12,"column":59}}},"branchMap":{},"code":["(function () { YUI.add('aui-classnamemanager', function (A, NAME) {","","var ClassNameManager = A.ClassNameManager,","    _getClassName = ClassNameManager.getClassName;","","A.getClassName = A.cached(","    function() {","        var args = A.Array(arguments, 0, true);","","        args[args.length] = true;","","        return _getClassName.apply(ClassNameManager, args);","    }",");","","","}, '3.1.0-deprecated.71', {\"requires\": [\"classnamemanager\"]});","","}());"]};
}
var __cov_V8R7aGR6duO8Lm38HWmKdA = __coverage__['build/aui-classnamemanager/aui-classnamemanager.js'];
__cov_V8R7aGR6duO8Lm38HWmKdA.s['1']++;YUI.add('aui-classnamemanager',function(A,NAME){__cov_V8R7aGR6duO8Lm38HWmKdA.f['1']++;__cov_V8R7aGR6duO8Lm38HWmKdA.s['2']++;var ClassNameManager=A.ClassNameManager,_getClassName=ClassNameManager.getClassName;__cov_V8R7aGR6duO8Lm38HWmKdA.s['3']++;A.getClassName=A.cached(function(){__cov_V8R7aGR6duO8Lm38HWmKdA.f['2']++;__cov_V8R7aGR6duO8Lm38HWmKdA.s['4']++;var args=A.Array(arguments,0,true);__cov_V8R7aGR6duO8Lm38HWmKdA.s['5']++;args[args.length]=true;__cov_V8R7aGR6duO8Lm38HWmKdA.s['6']++;return _getClassName.apply(ClassNameManager,args);});},'3.1.0-deprecated.71',{'requires':['classnamemanager']});

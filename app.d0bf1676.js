parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vZyd":[function(require,module,exports) {
var t=algoliasearch("QJ3DD84Z8O","0a4b4b00d734da489432372eebd9ee4f"),n=instantsearch({indexName:"dev_JOBS",searchClient:t});n.addWidgets([instantsearch.widgets.searchBox({container:"#searchbox"}),instantsearch.widgets.stats({container:"#stats"}),instantsearch.widgets.hits({container:"#hits",empty:"No results found.",templates:{item:function(t){var n="true"===t.sponsored?"<span>✅ &nbsp; sponsored</span>":"",a=t.location.length<16?"<div>📍 &nbsp; ".concat(t.location,", ").concat(t.country_code,"</div>"):"<div>📍 &nbsp; ".concat(t.country_code,"</div>"),e=t.job_type?"<div>🏢 &nbsp; ".concat(t.job_type,"</div>"):"";return"\n                    ".concat(n,"\n                    <h3>").concat(instantsearch.highlight({attribute:"job_title",hit:t}),"</h3>\n                    ").concat(a,"\n                    ").concat(e,"\n                    <p>").concat(instantsearch.snippet({attribute:"job_description",hit:t}),"</p>\n                ")}}}),instantsearch.widgets.pagination({container:"#pagination"})]),n.start();
},{}]},{},["vZyd"], null)
//# sourceMappingURL=/app.d0bf1676.js.map
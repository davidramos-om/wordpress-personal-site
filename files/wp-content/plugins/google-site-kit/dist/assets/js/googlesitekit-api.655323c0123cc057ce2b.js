(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[4],{0:function(t,e){t.exports=googlesitekit.i18n},101:function(t,e,n){"use strict";function r(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function a(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function o(t){return t.replace(/\n/gi,"<br>")}function i(t){for(var e=t,n=0,i=[r,a,o];n<i.length;n++){e=(0,i[n])(e)}return e}n.d(e,"a",(function(){return i}))},102:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]}},103:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=n(229),a=n(67),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var o=n.invertColor,i=void 0!==o&&o;return Object(r.a)(t.createElement(a.a,{direction:e>0?"up":"down",invertColor:i}))},i=function(t){var e,n,r,a,o,i,c,u,s,l,f,d,v,p,g;if(void 0!==t)return 1===(null==t||null===(e=t[0])||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.rows)||void 0===r?void 0:r.length)||(null==t||null===(a=t[0])||void 0===a||null===(o=a.data)||void 0===o||null===(i=o.rows)||void 0===i||null===(c=i[0])||void 0===c||null===(u=c.metrics)||void 0===u||null===(s=u[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(v=d.totals)||void 0===v||null===(p=v[0])||void 0===p||null===(g=p.values)||void 0===g?void 0:g[0])}}).call(this,n(2))},104:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n(6),a=n.n(r),o=n(105),i=n(106);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=u(u({},s),e);return a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(o.a)(a,n),disableTracking:function(){a.trackingEnabled=!1},isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:Object(i.a)(a,n,r)}}}).call(this,n(18))},105:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=n(66),a=n(44);function o(e,n){var o=Object(r.a)(n);return function(){e.trackingEnabled=!0;var n=t.document;if(!n.querySelector("script[".concat(a.b,"]"))){var r=n.createElement("script");r.setAttribute(a.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(a.a),n.head.appendChild(r),o("js",new Date),o("config",e.trackingID)}}}}).call(this,n(18))},106:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v}));var r=n(7),a=n.n(r),o=n(6),i=n.n(o),c=n(14),u=n.n(c),s=n(66),l=n(56);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(e,n,r){var o=Object(s.a)(n);return function(){var n=u()(a.a.mark((function n(i,c,u,s){var f,v,p,g,b,h,m,y;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(p=e.isFirstAdmin,g=e.referenceSiteURL,b=e.trackingEnabled,h=e.trackingID,m=e.userIDHash,!(null===(f=r._gaUserPrefs)||void 0===f||null===(v=f.ioo)||void 0===v?void 0:v.call(f))){n.next=3;break}return n.abrupt("return");case 3:if(b){n.next=5;break}return n.abrupt("return");case 5:return y={send_to:h,event_category:i,event_label:u,value:s,dimension1:g,dimension2:p?"true":"false",dimension3:m,dimension4:"1.34.1",dimension5:Array.from(l.a).join(", ")},n.abrupt("return",new Promise((function(e){var n=setTimeout((function(){t.console.warn('Tracking event "'.concat(c,'" (category "').concat(i,'") took too long to fire.')),e()}),1e3);o("event",c,d(d({},y),{},{event_callback:function(){clearTimeout(n),e()}}))})));case 7:case"end":return n.stop()}}),n)})));return function(t,e,r,a){return n.apply(this,arguments)}}()}}).call(this,n(18))},107:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n(146),a=n.n(r)()(t)}).call(this,n(18))},113:function(t,e,n){"use strict";(function(t){var r=n(35),a=n.n(r),o=n(154),i=t._googlesitekitAPIFetchData||{},c=i.nonce,u=i.nonceEndpoint,s=i.preloadedData,l=i.rootURL;a.a.nonceEndpoint=u,a.a.nonceMiddleware=a.a.createNonceMiddleware(c),a.a.rootURLMiddleware=a.a.createRootURLMiddleware(l),a.a.preloadingMiddleware=Object(o.a)(s),a.a.use(a.a.nonceMiddleware),a.a.use(a.a.mediaUploadMiddleware),a.a.use(a.a.rootURLMiddleware),a.a.use(a.a.preloadingMiddleware),e.default=a.a}).call(this,n(18))},12:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i}));var r="core/user",a="connected_url_mismatch",o="googlesitekit_view_dashboard",i="googlesitekit_manage_options"},154:function(t,e,n){"use strict";var r=n(152);e.a=function(t){var e=Object.keys(t).reduce((function(e,n){return e[Object(r.getStablePath)(n)]=t[n],e}),{}),n=!1;return function(t,a){if(n)return a(t);setTimeout((function(){n=!0}),1e3);var o=t.parse,i=void 0===o||o,c=t.path;if("string"==typeof t.path){var u,s=(null===(u=t.method)||void 0===u?void 0:u.toUpperCase())||"GET",l=Object(r.getStablePath)(c);if(i&&"GET"===s&&e[l]){var f=Promise.resolve(e[l].body);return delete e[l],f}if("OPTIONS"===s&&e[s]&&e[s][l]){var d=Promise.resolve(e[s][l]);return delete e[s][l],d}}return a(t)}}},171:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(7),a=n.n(r),o=n(14),i=n.n(o),c=n(5),u=["fetch_error"];function s(t){return l.apply(this,arguments)}function l(){return(l=i()(a.a.mark((function t(e){var n,r,o,i,s,l,f,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.method,i=e.type,s=e.identifier,l=e.datapoint,(f=e.error)&&!u.includes(null==f?void 0:f.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(f.code),(null===(n=f.data)||void 0===n?void 0:n.reason)&&(d+=", reason: ".concat(f.data.reason)),t.next=7,Object(c.w)("api_error","".concat(o,":").concat(i,"/").concat(s,"/data/").concat(l),"".concat(f.message," (").concat(d,")"),(null===(r=f.data)||void 0===r?void 0:r.status)||f.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},32:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n(25),a=n.n(r),o=n(2),i=function(t){return function(e){return function FilteredComponent(n){return Object(o.createElement)(o.Fragment,{},"",Object(o.createElement)(e,n),t)}}},c=function(e,n){return function(r){return function InnerComponent(o){return t.createElement(e,a()({},o,n,{OriginalComponent:r}))}}}}).call(this,n(2))},391:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));var r=n(7),a=n.n(r),o=n(14),i=n.n(o),c=n(10),u=n.n(c),s=n(113),l=n(99),f=n(89),d=n(5),v=n(73),p=n(171),g=n(12),b=!0,h=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[t,e,n].filter((function(t){return!!t&&t.length}));return 3===a.length&&r&&r.constructor===Object&&Object.keys(r).length&&a.push(Object(d.v)(r)),a.join("::")},m=function(e){var n,r,a,o,i=null===(n=t.googlesitekit)||void 0===n||null===(r=n.data)||void 0===r||null===(a=r.dispatch)||void 0===a?void 0:a.call(r,g.a);i&&(e.code===v.a?i.setPermissionScopeError(e):(null===(o=e.data)||void 0===o?void 0:o.reconnectURL)&&i.setAuthError(e))},y=function(){var e=i()(a.a.mark((function e(n,r,o){var i,c,d,v,g,b,y,O,w,j,_,x,E,S,D,P,I=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=I.length>3&&void 0!==I[3]?I[3]:{},c=i.bodyParams,d=i.cacheTTL,v=void 0===d?3600:d,g=i.method,b=void 0===g?"GET":g,y=i.queryParams,O=i.useCache,w=void 0===O?void 0:O,u()(n,"`type` argument for requests is required."),u()(r,"`identifier` argument for requests is required."),u()(o,"`datapoint` argument for requests is required."),j="GET"===b&&(void 0!==w?w:k()),_=h(n,r,o,y),!j){e.next=18;break}return e.next=9,Object(f.b)(_);case 9:if(x=e.sent,E=x.cacheHit,S=x.value,!x.isError){e.next=16;break}throw m(S),S;case 16:if(!E){e.next=18;break}return e.abrupt("return",S);case 18:return e.prev=18,e.next=21,Object(s.default)({data:c,method:b,path:Object(l.a)("/google-site-kit/v1/".concat(n,"/").concat(r,"/data/").concat(o),y)});case 21:if(D=e.sent,!j){e.next=25;break}return e.next=25,Object(f.d)(_,D,{ttl:v});case 25:return e.abrupt("return",D);case 28:if(e.prev=28,e.t0=e.catch(18),!(null===e.t0||void 0===e.t0||null===(P=e.t0.data)||void 0===P?void 0:P.cacheTTL)){e.next=33;break}return e.next=33,Object(f.d)(_,e.t0,{ttl:e.t0.data.cacheTTL,isError:!0});case 33:throw Object(p.a)({method:b,datapoint:o,type:n,identifier:r,error:e.t0}),m(e.t0),t.console.error("Google Site Kit API Error","method:".concat(b),"datapoint:".concat(o),"type:".concat(n),"identifier:".concat(r),'error:"'.concat(e.t0.message,'"')),e.t0;case 37:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(){var t=i()(a.a.mark((function t(e,n,r,o){var i,c,u,s,l,f=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=f.length>4&&void 0!==f[4]?f[4]:{},c=i.cacheTTL,u=void 0===c?3600:c,s=i.useCache,l=void 0===s?void 0:s,t.abrupt("return",y(e,n,r,{cacheTTL:u,queryParams:o,useCache:l}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),w=function(){var t=i()(a.a.mark((function t(e,n,r,o){var i,c,u,s,l,f,d=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d.length>4&&void 0!==d[4]?d[4]:{},c=i.method,u=void 0===c?"POST":c,s=i.queryParams,l=void 0===s?{}:s,t.next=3,y(e,n,r,{bodyParams:{data:o},method:u,queryParams:l,useCache:!1});case 3:return f=t.sent,t.next=6,j(e,n,r);case 6:return t.abrupt("return",f);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),k=function(){return b},j=function(){var t=i()(a.a.mark((function t(e,n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=h(e,n,r),t.next=3,Object(f.c)();case 3:t.sent.forEach((function(t){0===t.indexOf(o)&&Object(f.a)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),_={invalidateCache:j,get:O,set:w,setUsingCache:function(t){return b=!!t},usingCache:k};e.b=_}).call(this,n(18))},42:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return o}));var r="Date param must construct to a valid date instance or be a valid date instance itself.",a="Invalid dateString parameter, it must be a string.",o='Invalid date range, it must be a string with the format "last-x-days".'},44:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(53),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="string"==typeof t;if(!e)return!1;var n=t.split("-");return 3===n.length&&Object(r.a)(new Date(t))}},48:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r,a=n(15),o=n.n(a),i=n(16),c=n.n(i),u=function(e){var n=t[e];if(!n)return!1;try{var r="__storage_test__";return n.setItem(r,r),n.removeItem(r),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==n.length}},s=function(){function NullStorage(){o()(this,NullStorage)}return c()(NullStorage,[{key:"key",value:function(){return null}},{key:"getItem",value:function(){return null}},{key:"setItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"clear",value:function(){}},{key:"length",get:function(){return 0}}]),NullStorage}(),l=function(){return r||(r=u("sessionStorage")?t.sessionStorage:u("localStorage")?t.localStorage:new s),r}}).call(this,n(18))},5:function(t,e,n){"use strict";(function(t){n.d(e,"l",(function(){return x})),n.d(e,"a",(function(){return E})),n.d(e,"i",(function(){return S})),n.d(e,"k",(function(){return D})),n.d(e,"y",(function(){return P})),n.d(e,"u",(function(){return I})),n.d(e,"d",(function(){return L}));var r=n(6),a=n.n(r),o=n(33),i=n.n(o),c=n(145),u=n.n(c),s=n(139),l=n.n(s),f=n(17),d=n(99),v=n(58);n.d(e,"w",(function(){return v.b}));var p=n(32),g=n(75);n.d(e,"t",(function(){return g.a})),n.d(e,"x",(function(){return g.b}));var b=n(72);n.d(e,"v",(function(){return b.a}));var h=n(84);n.d(e,"b",(function(){return h.b})),n.d(e,"j",(function(){return h.c}));n(48);var m=n(85);n.d(e,"h",(function(){return m.a})),n.d(e,"o",(function(){return m.b})),n.d(e,"r",(function(){return m.c})),n.d(e,"s",(function(){return m.d})),n.d(e,"e",(function(){return p.b}));var y=n(101);n.d(e,"p",(function(){return y.a}));var O=n(102);n.d(e,"c",(function(){return O.a}));n(50);var w=n(103);n.d(e,"f",(function(){return w.a})),n.d(e,"n",(function(){return w.b}));var k=n(98);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"g",(function(){return k.a})),n.d(e,"m",(function(){return k.b})),n.d(e,"q",(function(){return k.c}));var x=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},E=function(t,e){if("0"===t||0===t||isNaN(t))return null;var n=(e-t)/t;return isNaN(n)||!u()(n)?null:n},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t._googlesitekitLegacyData,n=e.modules;return n?Object.keys(n).reduce((function(t,e){return"object"!==i()(n[e])||void 0===n[e].slug||void 0===n[e].name||n[e].slug!==e?t:_(_({},t),{},a()({},e,n[e]))}),{}):{}},D=function(e,n){var r=t._googlesitekitLegacyData.admin.adminRoot;return e||(e="googlesitekit-dashboard"),n=_({page:e},n),Object(d.a)(r,n)},P=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(f.b)("googlesitekit.ErrorNotification","googlesitekit.ErrorNotification",Object(p.b)(t,e),1)},L=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return l()(e)}}).call(this,n(18))},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return r.b})),n.d(e,"b",(function(){return r.c})),n.d(e,"e",(function(){return a.a})),n.d(e,"f",(function(){return o.a})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return u.a})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return f}));var r=n(42),a=n(65),o=n(55),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e%7,r=0===n;if(r)return Object(o.a)(t,e);var a=e>7&&n<3,i=a?e-n:e+(7-n);return Object(o.a)(t,i)},c=(n(53),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return 3===e.length&&"last"===e[0]&&!Number.isNaN(e[1])&&!Number.isNaN(parseFloat(e[1]))&&"days"===e[2]}),u=n(45);function s(t){var e=t.match(/last-(\d+)-days/);if(e&&e[1])return parseInt(e[1],10);throw new Error("Unrecognized date range slug.")}var l=n(0);function f(){var t=function(t){return Object(l.sprintf)(
/* translators: %s: number of days */
Object(l._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},53:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(11),a=n.n(r),o=n(10),i=n.n(o),c=n(42),u=n(65),s=n(45),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;i()(Object(s.a)(t),c.c);var n=t.split("-"),r=a()(n,3),o=r[0],l=r[1],f=r[2],d=new Date(o,l-1,f);return d.setDate(d.getDate()-e),Object(u.a)(d)}},56:function(t,e,n){"use strict";(function(t){var r,a;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=new Set((null===(r=t)||void 0===r||null===(a=r._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return e instanceof Set&&e.has(t)}}).call(this,n(18))},58:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return d}));var r=n(104),a=t._googlesitekitBaseData||{},o=a.isFirstAdmin,i=a.trackingAllowed,c={isFirstAdmin:o,trackingEnabled:a.trackingEnabled,trackingID:a.trackingID,referenceSiteURL:a.referenceSiteURL,userIDHash:a.userIDHash},u=Object(r.a)(c),s=u.enableTracking,l=u.disableTracking,f=u.isTrackingEnabled,d=u.trackEvent;function v(t){t?s():l()}!0===i&&v(f())}).call(this,n(18))},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(10),a=n.n(r),o=n(42),i=n(53),c=function(t){var e=new Date(t);a()(Object(i.a)(e),o.a);var n="".concat(e.getMonth()+1),r="".concat(e.getDate());return[e.getFullYear(),n.length<2?"0".concat(n):n,r.length<2?"0".concat(r):r].join("-")}},66:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(44);function a(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},67:function(t,e,n){"use strict";(function(t){var r=n(1),a=n.n(r),o=n(8),i=n.n(o);function ChangeArrow(e){var n=e.direction,r=e.invertColor,a=e.width,o=e.height;return t.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(n),{"googlesitekit-change-arrow--inverted-color":r}),width:a,height:o,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,n(2))},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(33),a=n.n(r),o=n(97),i=n.n(o),c=function(t){return i()(JSON.stringify(function t(e){var n={};return Object.keys(e).sort().forEach((function(r){var o=e[r];o&&"object"===a()(o)&&!Array.isArray(o)&&(o=t(o)),n[r]=o})),n}(t)))}},73:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u}));var r=n(80),a=n.n(r),o="missing_required_scopes";function i(t){return a()(t)&&t.hasOwnProperty("code")&&("string"==typeof t.code||"number"==typeof t.code)&&t.hasOwnProperty("message")&&"string"==typeof t.message&&t.hasOwnProperty("data")}function c(t){return(null==t?void 0:t.code)===o}function u(t){var e;return"insufficientPermissions"===(null==t||null===(e=t.data)||void 0===e?void 0:e.reason)}},75:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n(33),a=n.n(r),o=n(107),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:o.a.sanitize(t,e)}};function c(t){var e,n="object"===a()(t)?t.toString():t;return null==n||null===(e=n.replace)||void 0===e?void 0:e.call(n,/\/+$/,"")}},768:function(t,e,n){"use strict";n.r(e),function(t){var r=n(391);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.b),e.default=r.b}.call(this,n(18))},84:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f}));var r=n(11),a=n.n(r),o=n(0);function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=null,n=null,r=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),a=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(r&&a)return!1;if(e=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),n=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===e&&null===n)return!1;var i=document.createElement("span");i.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(t));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=t;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(o.sprintf)(
/* translators: %d is the number of notifications */
Object(o._n)("%d notification","%d notifications",t,"google-site-kit"),t),i.appendChild(c),i.appendChild(u),e&&null===r&&e.appendChild(i),n&&null===a&&n.appendChild(i),i},s=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},l=function(t){for(var e=location.search.substr(1).split("&"),n={},r=0;r<e.length;r++)n[e[r].split("=")[0]]=decodeURIComponent(e[r].split("=")[1]);return t?n.hasOwnProperty(t)?decodeURIComponent(n[t].replace(/\+/g," ")):"":n},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,n=new URL(e.href);if(t)return n.searchParams&&n.searchParams.get?n.searchParams.get(t):l(t);var r,o={},c=i(n.searchParams.entries());try{for(c.s();!(r=c.n()).done;){var u=a()(r.value,2),s=u[0],f=u[1];o[s]=f}}catch(t){c.e(t)}finally{c.f()}return o}}).call(this,n(18))},85:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return O}));var r=n(33),a=n.n(r),o=n(6),i=n.n(o),c=n(26),u=n.n(c),s=n(23),l=n(0);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=p(t,e),r=n.formatUnit,a=n.formatDecimal;try{return r()}catch(t){return a()}},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var n=Math.floor(t/60/60),r=Math.floor(t/60%60),a=Math.floor(t%60);return{hours:n,minutes:r,seconds:a,formatUnit:function(){var o=e.unitDisplay,i=d(d({unitDisplay:void 0===o?"short":o},u()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?m(a,d(d({},i),{},{unit:"second"})):Object(l.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(l._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?m(a,d(d({},i),{},{unit:"second"})):"",r?m(r,d(d({},i),{},{unit:"minute"})):"",n?m(n,d(d({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(l.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(l.__)("%ds","google-site-kit"),a);if(0===t)return e;var o=Object(l.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(l.__)("%dm","google-site-kit"),r),i=Object(l.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(l.__)("%dh","google-site-kit"),n);return Object(l.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(l._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?e:"",r?o:"",n?i:"").trim()}}},g=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},b=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(l.sprintf)(// translators: %s: an abbreviated number in millions.
Object(l.__)("%sM","google-site-kit"),m(g(t),t%10==0?{}:e)):1e4<=t?Object(l.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(l.__)("%sK","google-site-kit"),m(g(t))):1e3<=t?Object(l.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(l.__)("%sK","google-site-kit"),m(g(t),t%10==0?{}:e)):m(t,{signDisplay:"never",maximumFractionDigits:1})},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(s.isFinite)(t)?t:Number(t),Object(s.isFinite)(t)||(console.warn("Invalid number",t,a()(t)),t=0);var n={};if("%"===e)n={style:"percent",maximumFractionDigits:2};else{if("s"===e)return v(t,{unitDisplay:"narrow"});e&&"string"==typeof e?n={style:"currency",currency:e}:Object(s.isPlainObject)(e)&&(n=d({},e))}var r=n,o=r.style,i=void 0===o?"metric":o;return"metric"===i?b(t):"duration"===i?v(t,e):m(t,n)},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?O():n,a=u()(e,["locale"]);return new Intl.NumberFormat(r,a).format(t)},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?O():n,a=e.style,o=void 0===a?"long":a,i=e.type,c=void 0===i?"conjunction":i;if(Intl.ListFormat){var u=new Intl.ListFormat(r,{style:o,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(l.__)(", ","google-site-kit");return t.join(s)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=Object(s.get)(e,["_googlesitekitLegacyData","locale"]);if(n){var r=n.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,n(18))},89:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return g})),n.d(e,"d",(function(){return b})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return m}));var r=n(7),a=n.n(r),o=n(14),i=n.n(o);n(37);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s,l="googlesitekit_".concat("1.34.1","_"),f=["sessionStorage","localStorage"],d=[].concat(f),v=function(){var e=i()(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[n]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,o="__storage_test__",r.setItem(o,o),r.removeItem(o),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==r.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=i()(a.a.mark((function e(){var n,r,o,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(n=t._googlesitekitLegacyData)||void 0===n||null===(r=n.admin)||void 0===r?void 0:r.nojscache)){e.next=2;break}return e.abrupt("return",null);case 2:if(void 0!==s){e.next=25;break}o=c(d),e.prev=4,o.s();case 6:if((i=o.n()).done){e.next=16;break}if(u=i.value,!s){e.next=10;break}return e.abrupt("continue",14);case 10:return e.next=12,v(u);case 12:if(!e.sent){e.next=14;break}s=t[u];case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),o.e(e.t0);case 21:return e.prev=21,o.f(),e.finish(21);case 24:void 0===s&&(s=null);case 25:return e.abrupt("return",s);case 26:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var t=i()(a.a.mark((function t(e){var n,r,o,i,c,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:if(!(n=t.sent)){t.next=10;break}if(!(r=n.getItem("".concat(l).concat(e)))){t.next=10;break}if(o=JSON.parse(r),i=o.timestamp,c=o.ttl,u=o.value,s=o.isError,!i||c&&!(Math.round(Date.now()/1e3)-i<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var e=i()(a.a.mark((function e(n,r){var o,i,c,u,s,f,d,v,g=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=g.length>2&&void 0!==g[2]?g[2]:{},i=o.ttl,c=void 0===i?3600:i,u=o.timestamp,s=void 0===u?Math.round(Date.now()/1e3):u,f=o.isError,d=void 0!==f&&f,e.next=3,p();case 3:if(!(v=e.sent)){e.next=14;break}return e.prev=5,v.setItem("".concat(l).concat(n),JSON.stringify({timestamp:s,ttl:c,value:r,isError:d})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=i()(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:if(!(r=e.sent)){e.next=13;break}return e.prev=4,r.removeItem("".concat(l).concat(n)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=i()(a.a.mark((function e(){var n,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:if(!(n=e.sent)){e.next=14;break}for(e.prev=4,r=[],o=0;o<n.length;o++)0===(i=n.key(o)).indexOf(l)&&r.push(i.substring(l.length));return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,n(18))},98:function(t,e,n){"use strict";function r(t){return new URL(t).pathname}function a(t,e){return new URL(e,t).href}function o(t){return t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o}))}},[[768,1,0]]]);
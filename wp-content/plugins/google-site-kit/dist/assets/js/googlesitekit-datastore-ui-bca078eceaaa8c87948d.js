(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[12],{100:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return l}));var n=e(7),a=e.n(n),i=e(13),o=e(101),c=e(102);function u(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach((function(r){a()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var f={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=s(s({},f),r);a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(o.a)(a,e),l=Object(c.a)(a,e,u,n),d={},g=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var n=JSON.stringify(r);d[n]||(d[n]=Object(i.once)(l)),d[n].apply(d,r)};return{enableTracking:function(){a.trackingEnabled=!0},disableTracking:function(){a.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:l,trackEventOnce:g}}}).call(this,e(27))},101:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return o}));var n=e(59),a=e(38),i=e(44);function o(r,e){var o,c=Object(n.a)(e),u=r.activeModules,s=r.referenceSiteURL,f=r.userIDHash,l=r.userRoles,d=void 0===l?[]:l,g=r.isAuthenticated,p=r.pluginVersion;return function(){var e=t.document;if(void 0===o&&(o=!!e.querySelector("script[".concat(a.b,"]"))),!o){o=!0;var n=(null==d?void 0:d.length)?d.join(","):"";c("js",new Date),c("config",r.trackingID,{groups:"site_kit",send_page_view:r.isSiteKitScreen,domain:s,plugin_version:p||"",enabled_features:Array.from(i.a).join(","),active_modules:u.join(","),authenticated:g?"1":"0",user_properties:{user_roles:n,user_identifier:f}});var l=e.createElement("script");return l.setAttribute(a.b,""),l.async=!0,l.src="https://www.googletagmanager.com/gtag/js?id=".concat(r.trackingID,"&l=").concat(a.a),e.head.appendChild(l),{scriptTagSrc:"https://www.googletagmanager.com/gtag/js?id=".concat(r.trackingID,"&l=").concat(a.a)}}}}}).call(this,e(27))},102:function(t,r,e){"use strict";e.d(r,"a",(function(){return d}));var n=e(6),a=e.n(n),i=e(7),o=e.n(i),c=e(16),u=e.n(c),s=e(59);function f(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?f(Object(e),!0).forEach((function(r){o()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function d(t,r,e,n){var i=Object(s.a)(r);return function(){var r=u()(a.a.mark((function r(o,c,u,s){var f;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.trackingEnabled){r.next=3;break}return r.abrupt("return");case 3:return e(),f={send_to:"site_kit",event_category:o,event_label:u,value:s},r.abrupt("return",new Promise((function(t){var r,e,a=setTimeout((function(){n.console.warn('Tracking event "'.concat(c,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),u=function(){clearTimeout(a),t()};i("event",c,l(l({},f),{},{event_callback:u})),(null===(r=n._gaUserPrefs)||void 0===r||null===(e=r.ioo)||void 0===e?void 0:e.call(r))&&u()})));case 6:case"end":return r.stop()}}),r)})));return function(t,e,n,a){return r.apply(this,arguments)}}()}},1248:function(t,r,e){"use strict";e.r(r);var n=e(3),a=e.n(n),i=e(63),o=e(134),c=e(7),u=e.n(c),s=e(6),f=e.n(s),l=e(11),d=e.n(l),g=e(13),p=e(22),v=e(5);function b(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?b(Object(e),!0).forEach((function(r){u()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var y={resetInViewHook:f.a.mark((function t(){var r,e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.commonActions.getRegistry();case 2:return r=t.sent,e=r.select(p.b).getValue("useInViewResetCount"),t.next=6,y.setValue("useInViewResetCount",e+1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})),setIsOnline:function(t){return d()(Object(g.isBoolean)(t),"value must be boolean."),y.setValue("isOnline",t)},setOverlayNotificationToShow:f.a.mark((function t(r){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d()(r,"overlayNotification is required."),t.next=3,n.commonActions.getRegistry();case 3:if(e=t.sent,!e.select(p.b).getValue("activeOverlayNotification")){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,y.setValue("activeOverlayNotification",r);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})),dismissOverlayNotification:f.a.mark((function t(r){var e,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d()(r,"overlayNotification is required."),t.next=3,n.commonActions.getRegistry();case 3:return e=t.sent,a=e.select(p.b).getValue("activeOverlayNotification"),t.next=7,n.commonActions.await(e.dispatch(v.a).dismissItem(r));case 7:if(!a||r!==a){t.next=11;break}return t.next=10,y.setValues({activeOverlayNotification:void 0});case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})),setValues:function(t){return d()(Object(g.isPlainObject)(t),"values must be an object."),{payload:{values:t},type:"SET_VALUES"}},setValue:function(t,r){return d()(t,"key is required."),{payload:{key:t,value:r},type:"SET_VALUE"}}},h={initialState:{useInViewResetCount:0,isOnline:!0},actions:y,controls:{},reducer:function(t,r){var e=r.type,n=r.payload;switch(e){case"SET_VALUES":var a=n.values;return m(m({},t),a);case"SET_VALUE":var i=n.key,o=n.value;return m(m({},t),{},u()({},i,o));default:return t}},resolvers:{},selectors:{getValue:function(t,r){return t[r]},getInViewResetCount:function(t){return t.useInViewResetCount},getIsOnline:function(t){return t.isOnline},isShowingOverlayNotification:function(t,r){return t.activeOverlayNotification===r}}},O=Object(n.combineStores)(n.commonStore,h,Object(o.a)(p.b),Object(i.b)(p.b));O.initialState,O.actions,O.controls,O.reducer,O.resolvers,O.selectors;a.a.registerStore(p.b,O)},134:function(t,r,e){"use strict";e.d(r,"a",(function(){return v})),e.d(r,"c",(function(){return m})),e.d(r,"b",(function(){return y}));var n=e(24),a=e.n(n),i=e(7),o=e.n(i),c=e(6),u=e.n(c),s=e(11),f=e.n(s),l=e(3),d=e.n(l),g=e(42),p=e(9),v=function(t){var r;f()(t,"storeName is required to create a snapshot store.");var e={},n={deleteSnapshot:u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})),restoreSnapshot:u.a.mark((function t(){var r,e,n,a,i,o,c=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:{},e=r.clearAfterRestore,n=void 0===e||e,t.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(a=t.sent,i=a.cacheHit,o=a.value,!i){t.next=13;break}return t.next=10,{payload:{snapshot:o},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){t.next=13;break}return t.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return t.abrupt("return",i);case 14:case"end":return t.stop()}}),t)})),createSnapshot:u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))},i=(r={},o()(r,"DELETE_SNAPSHOT",(function(){return Object(g.c)("datastore::cache::".concat(t))})),o()(r,"CREATE_SNAPSHOT",Object(l.createRegistryControl)((function(r){return function(){return Object(g.f)("datastore::cache::".concat(t),r.stores[t].store.getState())}}))),o()(r,"RESTORE_SNAPSHOT",(function(){return Object(g.d)("datastore::cache::".concat(t),p.b)})),r);return{initialState:e,actions:n,controls:i,reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0,n=r.type,i=r.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var o=i.snapshot,c=(o.error,a()(o,["error"]));return c;default:return t}}}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Object.values(t.stores).filter((function(t){return Object.keys(t.getActions()).includes("restoreSnapshot")}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().createSnapshot()})))},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().restoreSnapshot()})))}},2:function(t,r){t.exports=googlesitekit.i18n},22:function(t,r,e){"use strict";e.d(r,"b",(function(){return n})),e.d(r,"a",(function(){return a}));var n="core/ui",a="activeContextID"},3:function(t,r){t.exports=googlesitekit.data},37:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return O})),e.d(r,"b",(function(){return y})),e.d(r,"c",(function(){return h}));var n=e(100),a=t._googlesitekitTrackingData||{},i=a.activeModules,o=void 0===i?[]:i,c=a.isSiteKitScreen,u=a.trackingEnabled,s=a.trackingID,f=a.referenceSiteURL,l=a.userIDHash,d=a.isAuthenticated,g={activeModules:o,trackingEnabled:u,trackingID:s,referenceSiteURL:f,userIDHash:l,isSiteKitScreen:c,userRoles:a.userRoles,isAuthenticated:d,pluginVersion:"1.141.0"},p=Object(n.a)(g),v=p.enableTracking,b=p.disableTracking,m=(p.isTrackingEnabled,p.initializeSnippet),y=p.trackEvent,h=p.trackEventOnce;function O(t){t?v():b()}c&&u&&m()}).call(this,e(27))},38:function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e.d(r,"b",(function(){return a}));var n="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},42:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return l})),e.d(r,"d",(function(){return y})),e.d(r,"f",(function(){return h})),e.d(r,"c",(function(){return O})),e.d(r,"e",(function(){return k})),e.d(r,"b",(function(){return w}));var n=e(6),a=e.n(n),i=e(16),o=e.n(i),c=(e(26),e(9));function u(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==e.return||e.return()}finally{if(c)throw i}}}}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var f,l="googlesitekit_",d="".concat(l).concat("1.141.0","_").concat(t._googlesitekitBaseData.storagePrefix,"_"),g=["sessionStorage","localStorage"],p=[].concat(g),v=function(){var r=o()(a.a.mark((function r(e){var n,i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t[e]){r.next=3;break}return r.abrupt("return",!1);case 3:return r.prev=3,i="__storage_test__",n.setItem(i,i),n.removeItem(i),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(3),r.abrupt("return",r.t0 instanceof DOMException&&(22===r.t0.code||1014===r.t0.code||"QuotaExceededError"===r.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.t0.name)&&0!==n.length);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(t){return r.apply(this,arguments)}}();function b(){return m.apply(this,arguments)}function m(){return(m=o()(a.a.mark((function r(){var e,n,i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0===f){r.next=2;break}return r.abrupt("return",f);case 2:e=u(p),r.prev=3,e.s();case 5:if((n=e.n()).done){r.next=15;break}if(i=n.value,!f){r.next=9;break}return r.abrupt("continue",13);case 9:return r.next=11,v(i);case 11:if(!r.sent){r.next=13;break}f=t[i];case 13:r.next=5;break;case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(3),e.e(r.t0);case 20:return r.prev=20,e.f(),r.finish(20);case 23:return void 0===f&&(f=null),r.abrupt("return",f);case 25:case"end":return r.stop()}}),r,null,[[3,17,20,23]])})))).apply(this,arguments)}var y=function(){var t=o()(a.a.mark((function t(r){var e,n,i,o,c,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(e=t.sent)){t.next=10;break}if(!(n=e.getItem("".concat(d).concat(r)))){t.next=10;break}if(i=JSON.parse(n),o=i.timestamp,c=i.ttl,u=i.value,s=i.isError,!o||c&&!(Math.round(Date.now()/1e3)-o<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var r=o()(a.a.mark((function r(e,n){var i,o,u,s,f,l,g,p,v=arguments;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=v.length>2&&void 0!==v[2]?v[2]:{},o=i.ttl,u=void 0===o?c.b:o,s=i.timestamp,f=void 0===s?Math.round(Date.now()/1e3):s,l=i.isError,g=void 0!==l&&l,r.next=3,b();case 3:if(!(p=r.sent)){r.next=14;break}return r.prev=5,p.setItem("".concat(d).concat(e),JSON.stringify({timestamp:f,ttl:u,value:n,isError:g})),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(5),t.console.warn("Encountered an unexpected storage error:",r.t0),r.abrupt("return",!1);case 14:return r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[5,10]])})));return function(t,e){return r.apply(this,arguments)}}(),O=function(){var r=o()(a.a.mark((function r(e){var n,i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:if(!(n=r.sent)){r.next=14;break}return r.prev=4,i=e.startsWith(l)?e:"".concat(d).concat(e),n.removeItem(i),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(4),t.console.warn("Encountered an unexpected storage error:",r.t0),r.abrupt("return",!1);case 14:return r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[4,10]])})));return function(t){return r.apply(this,arguments)}}(),k=function(){var r=o()(a.a.mark((function r(){var e,n,i,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:if(!(e=r.sent)){r.next=14;break}for(r.prev=4,n=[],i=0;i<e.length;i++)0===(o=e.key(i)).indexOf(l)&&n.push(o);return r.abrupt("return",n);case 10:return r.prev=10,r.t0=r.catch(4),t.console.warn("Encountered an unexpected storage error:",r.t0),r.abrupt("return",[]);case 14:return r.abrupt("return",[]);case 15:case"end":return r.stop()}}),r,null,[[4,10]])})));return function(){return r.apply(this,arguments)}}(),w=function(){var t=o()(a.a.mark((function t(){var r,e,n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!t.sent){t.next=25;break}return t.next=6,k();case 6:r=t.sent,e=u(r),t.prev=8,e.s();case 10:if((n=e.n()).done){t.next=16;break}return i=n.value,t.next=14,O(i);case 14:t.next=10;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(8),e.e(t.t0);case 21:return t.prev=21,e.f(),t.finish(21);case 24:return t.abrupt("return",!0);case 25:return t.abrupt("return",!1);case 26:case"end":return t.stop()}}),t,null,[[8,18,21,24]])})));return function(){return t.apply(this,arguments)}}()}).call(this,e(27))},44:function(t,r,e){"use strict";(function(t){var n,a;e.d(r,"a",(function(){return i})),e.d(r,"b",(function(){return o}));var i=new Set((null===(n=t)||void 0===n||null===(a=n._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),o=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return r instanceof Set&&r.has(t)}}).call(this,e(27))},5:function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e.d(r,"b",(function(){return a})),e.d(r,"e",(function(){return i})),e.d(r,"d",(function(){return o})),e.d(r,"c",(function(){return c})),e.d(r,"H",(function(){return u})),e.d(r,"M",(function(){return s})),e.d(r,"O",(function(){return f})),e.d(r,"K",(function(){return l})),e.d(r,"L",(function(){return d})),e.d(r,"J",(function(){return g})),e.d(r,"I",(function(){return p})),e.d(r,"N",(function(){return v})),e.d(r,"f",(function(){return b})),e.d(r,"g",(function(){return m})),e.d(r,"h",(function(){return y})),e.d(r,"j",(function(){return h})),e.d(r,"l",(function(){return O})),e.d(r,"m",(function(){return k})),e.d(r,"n",(function(){return w})),e.d(r,"o",(function(){return j})),e.d(r,"q",(function(){return S})),e.d(r,"s",(function(){return _})),e.d(r,"r",(function(){return E})),e.d(r,"t",(function(){return A})),e.d(r,"w",(function(){return N})),e.d(r,"u",(function(){return D})),e.d(r,"v",(function(){return x})),e.d(r,"x",(function(){return P})),e.d(r,"y",(function(){return R})),e.d(r,"A",(function(){return T})),e.d(r,"B",(function(){return I})),e.d(r,"C",(function(){return L})),e.d(r,"D",(function(){return C})),e.d(r,"k",(function(){return M})),e.d(r,"F",(function(){return V})),e.d(r,"z",(function(){return F})),e.d(r,"G",(function(){return H})),e.d(r,"E",(function(){return U})),e.d(r,"i",(function(){return q})),e.d(r,"p",(function(){return J})),e.d(r,"Q",(function(){return $})),e.d(r,"P",(function(){return K}));var n="core/user",a="connected_url_mismatch",i="__global",o="temporary_persist_permission_error",c="adblocker_active",u="googlesitekit_authenticate",s="googlesitekit_setup",f="googlesitekit_view_dashboard",l="googlesitekit_manage_options",d="googlesitekit_read_shared_module_data",g="googlesitekit_manage_module_sharing_options",p="googlesitekit_delegate_module_sharing_management",v="googlesitekit_update_plugins",b="kmAnalyticsAdSenseTopEarningContent",m="kmAnalyticsEngagedTrafficSource",y="kmAnalyticsLeastEngagingPages",h="kmAnalyticsNewVisitors",O="kmAnalyticsPopularAuthors",k="kmAnalyticsPopularContent",w="kmAnalyticsPopularProducts",j="kmAnalyticsReturningVisitors",S="kmAnalyticsTopCities",_="kmAnalyticsTopCitiesDrivingLeads",E="kmAnalyticsTopCitiesDrivingAddToCart",A="kmAnalyticsTopCitiesDrivingPurchases",N="kmAnalyticsTopDeviceDrivingPurchases",D="kmAnalyticsTopConvertingTrafficSource",x="kmAnalyticsTopCountries",P="kmAnalyticsTopPagesDrivingLeads",R="kmAnalyticsTopRecentTrendingPages",T="kmAnalyticsTopTrafficSource",I="kmAnalyticsTopTrafficSourceDrivingAddToCart",L="kmAnalyticsTopTrafficSourceDrivingLeads",C="kmAnalyticsTopTrafficSourceDrivingPurchases",M="kmAnalyticsPagesPerVisit",V="kmAnalyticsVisitLength",F="kmAnalyticsTopReturningVisitorPages",H="kmSearchConsolePopularKeywords",U="kmAnalyticsVisitsPerVisitor",q="kmAnalyticsMostEngagingPages",J="kmAnalyticsTopCategories",$=[b,m,y,h,O,k,w,j,J,S,_,E,A,N,D,x,R,T,I,M,V,F,U,q,J],K=[].concat($,[H])},59:function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));var n=e(38);function a(t){return function(){t[n.a]=t[n.a]||[],t[n.a].push(arguments)}}},63:function(t,r,e){"use strict";e.d(r,"a",(function(){return b})),e.d(r,"b",(function(){return m}));var n=e(7),a=e.n(n),i=e(33),o=e.n(i),c=e(111),u=e(11),s=e.n(u),f=e(95),l=e.n(f),d=e(9);function g(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?g(Object(e),!0).forEach((function(r){a()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function v(t,r){if(r&&Array.isArray(r)){var e=r.map((function(t){return"object"===o()(t)?Object(d.I)(t):t}));return"".concat(t,"::").concat(l()(JSON.stringify(e)))}return t}var b={receiveError:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(t,"error is required."),s()(r,"baseName is required."),s()(e&&Array.isArray(e),"args must be an array."),{type:"RECEIVE_ERROR",payload:{error:t,baseName:r,args:e}}},clearError:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return s()(t,"baseName is required."),s()(r&&Array.isArray(r),"args must be an array."),{type:"CLEAR_ERROR",payload:{baseName:t,args:r}}},clearErrors:function(t){return{type:"CLEAR_ERRORS",payload:{baseName:t}}}};function m(t){s()(t,"storeName must be defined.");var r={getErrorForSelector:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(e,"selectorName is required."),r.getError(t,e,n)},getErrorForAction:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(e,"actionName is required."),r.getError(t,e,n)},getError:function(t,r,e){var n=t.errors;return s()(r,"baseName is required."),n[v(r,e)]},getErrors:function(t){var r=new Set(Object.values(t.errors));return Array.from(r)},getMetaDataForError:function(t,r){var e=Object.keys(t.errors).find((function(e){return t.errors[e]===r}));return e?{baseName:e.substring(0,e.indexOf("::")),args:t.errorArgs[e]}:null},getSelectorDataForError:Object(c.b)((function(r){return function(e,n){var a=r(t).getMetaDataForError(n);if(a){var i=a.baseName,o=a.args;if(!!r(t)[i])return{storeName:t,name:i,args:o}}return null}})),hasErrors:function(t){return r.getErrors(t).length>0}};return{initialState:{errors:{},errorArgs:{}},actions:b,controls:{},reducer:function(t,r){var e=r.type,n=r.payload;switch(e){case"RECEIVE_ERROR":var i=n.baseName,o=n.args,c=n.error,u=v(i,o);return p(p({},t),{},{errors:p(p({},t.errors||{}),{},a()({},u,c)),errorArgs:p(p({},t.errorArgs||{}),{},a()({},u,o))});case"CLEAR_ERROR":var s=n.baseName,f=n.args,l=p({},t),d=v(s,f);return l.errors=p({},t.errors||{}),l.errorArgs=p({},t.errorArgs||{}),delete l.errors[d],delete l.errorArgs[d],l;case"CLEAR_ERRORS":var g=n.baseName,b=p({},t);if(g)for(var m in b.errors=p({},t.errors||{}),b.errorArgs=p({},t.errorArgs||{}),b.errors)(m===g||m.startsWith("".concat(g,"::")))&&(delete b.errors[m],delete b.errorArgs[m]);else b.errors={},b.errorArgs={};return b;default:return t}},resolvers:{},selectors:r}}},72:function(t,r,e){"use strict";e.d(r,"a",(function(){return o})),e.d(r,"b",(function(){return c}));var n=e(33),a=e.n(n),i=e(81),o=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:i.a.sanitize(t,r)}};function c(t){var r,e="object"===a()(t)?t.toString():t;return null==e||null===(r=e.replace)||void 0===r?void 0:r.call(e,/\/+$/,"")}},81:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return a}));var n=e(148),a=e.n(n)()(t)}).call(this,e(27))},82:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return j})),e.d(r,"d",(function(){return S})),e.d(r,"e",(function(){return E})),e.d(r,"c",(function(){return A})),e.d(r,"b",(function(){return N}));var n=e(15),a=e.n(n),i=e(33),o=e.n(i),c=e(7),u=e.n(c),s=e(24),f=e.n(s),l=e(13),d=e(58),g=e.n(d),p=e(2);function v(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function b(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){u()(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var m=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=O(t,r),n=e.formatUnit,a=e.formatDecimal;try{return n()}catch(t){return a()}},y=function(t){var r=h(t),e=r.hours,n=r.minutes,a=r.seconds;return a=("0"+a).slice(-2),n=("0"+n).slice(-2),"00"===(e=("0"+e).slice(-2))?"".concat(n,":").concat(a):"".concat(e,":").concat(n,":").concat(a)},h=function(t){return t=parseInt(t,10),Number.isNaN(t)&&(t=0),{hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},O=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=h(t),n=e.hours,a=e.minutes,i=e.seconds;return{hours:n,minutes:a,seconds:i,formatUnit:function(){var e=r.unitDisplay,o=b(b({unitDisplay:void 0===e?"short":e},f()(r,["unitDisplay"])),{},{style:"unit"});return 0===t?E(i,b(b({},o),{},{unit:"second"})):Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?E(i,b(b({},o),{},{unit:"second"})):"",a?E(a,b(b({},o),{},{unit:"minute"})):"",n?E(n,b(b({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var r=Object(p.sprintf)(// translators: %s: number of seconds with "s" as the abbreviated unit.
Object(p.__)("%ds","google-site-kit"),i);if(0===t)return r;var e=Object(p.sprintf)(// translators: %s: number of minutes with "m" as the abbreviated unit.
Object(p.__)("%dm","google-site-kit"),a),o=Object(p.sprintf)(// translators: %s: number of hours with "h" as the abbreviated unit.
Object(p.__)("%dh","google-site-kit"),n);return Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?r:"",a?e:"",n?o:"").trim()}}},k=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var r={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in millions.
Object(p.__)("%sM","google-site-kit"),E(k(t),t%10==0?{}:r)):1e4<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),E(k(t))):1e3<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),E(k(t),t%10==0?{}:r)):E(t,{signDisplay:"never",maximumFractionDigits:1})};function j(t){var r={};return"%"===t?r={style:"percent",maximumFractionDigits:2}:"s"===t?r={style:"duration",unitDisplay:"narrow"}:t&&"string"==typeof t?r={style:"currency",currency:t}:Object(l.isPlainObject)(t)&&(r=b({},t)),r}function S(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(l.isFinite)(t)?t:Number(t),Object(l.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var e=j(r),n=e.style,a=void 0===n?"metric":n;return"metric"===a?w(t):"duration"===a?m(t,e):"durationISO"===a?y(t):E(t,e)}var _=g()(console.warn),E=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.locale,n=void 0===e?N():e,i=f()(r,["locale"]);try{return new Intl.NumberFormat(n,i).format(t)}catch(r){_("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n),", ").concat(JSON.stringify(i)," ).format( ").concat(o()(t)," )"),r.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},l=0,d=Object.entries(i);l<d.length;l++){var g=a()(d[l],2),p=g[0],v=g[1];c[p]&&v===c[p]||(u.includes(p)||(s[p]=v))}try{return new Intl.NumberFormat(n,s).format(t)}catch(r){return new Intl.NumberFormat(n).format(t)}},A=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.locale,n=void 0===e?N():e,a=r.style,i=void 0===a?"long":a,o=r.type,c=void 0===o?"conjunction":o;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:i,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(p.__)(", ","google-site-kit");return t.join(s)},N=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,e=Object(l.get)(r,["_googlesitekitLegacyData","locale"]);if(e){var n=e.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return r.navigator.language}}).call(this,e(27))},83:function(t,r,e){"use strict";e.d(r,"b",(function(){return a})),e.d(r,"a",(function(){return i})),e.d(r,"c",(function(){return o})),e.d(r,"d",(function(){return c}));var n=e(109);function a(t){try{return new URL(t).pathname}catch(t){}return null}function i(t,r){try{return new URL(r,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof r?r:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function c(t,r){if(!Object(n.a)(t))return t;if(t.length<=r)return t;var e=new URL(t),a=t.replace(e.origin,"");if(a.length<r)return a;var i=a.length-Math.floor(r)+1;return"…"+a.substr(i)}},86:function(t,r,e){"use strict";(function(t){var n=e(1),a=e.n(n),i=e(12),o=e.n(i);function ChangeArrow(r){var e=r.direction,n=r.invertColor,a=r.width,i=r.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":n}),width:a,height:i,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},r.a=ChangeArrow}).call(this,e(4))},89:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(11),a=e.n(n),i=function(t,r){var e=r.dateRangeLength;a()(Array.isArray(t),"report must be an array to partition."),a()(Number.isInteger(e)&&e>0,"dateRangeLength must be a positive integer.");var n=-1*e;return{currentRange:t.slice(n),compareRange:t.slice(2*n,n)}}},9:function(t,r,e){"use strict";e.d(r,"J",(function(){return a.b})),e.d(r,"K",(function(){return a.c})),e.d(r,"G",(function(){return i.a})),e.d(r,"L",(function(){return i.b})),e.d(r,"I",(function(){return f})),e.d(r,"n",(function(){return l.a})),e.d(r,"C",(function(){return l.d})),e.d(r,"D",(function(){return l.e})),e.d(r,"z",(function(){return l.c})),e.d(r,"s",(function(){return l.b})),e.d(r,"A",(function(){return v})),e.d(r,"k",(function(){return b})),e.d(r,"j",(function(){return m})),e.d(r,"d",(function(){return j})),e.d(r,"c",(function(){return S})),e.d(r,"e",(function(){return _})),e.d(r,"b",(function(){return E})),e.d(r,"a",(function(){return A})),e.d(r,"g",(function(){return N})),e.d(r,"f",(function(){return D})),e.d(r,"o",(function(){return x})),e.d(r,"x",(function(){return P})),e.d(r,"q",(function(){return R})),e.d(r,"H",(function(){return T})),e.d(r,"t",(function(){return I})),e.d(r,"w",(function(){return L})),e.d(r,"l",(function(){return C})),e.d(r,"p",(function(){return M.b})),e.d(r,"i",(function(){return M.a})),e.d(r,"u",(function(){return V.b})),e.d(r,"r",(function(){return V.a})),e.d(r,"B",(function(){return V.c})),e.d(r,"y",(function(){return F})),e.d(r,"v",(function(){return H})),e.d(r,"F",(function(){return J})),e.d(r,"E",(function(){return $.a})),e.d(r,"h",(function(){return K})),e.d(r,"M",(function(){return B})),e.d(r,"m",(function(){return z}));var n=e(13),a=e(37),i=e(72),o=e(33),c=e.n(o),u=e(95),s=e.n(u),f=function(t){return s()(JSON.stringify(function t(r){var e={};return Object.keys(r).sort().forEach((function(n){var a=r[n];a&&"object"===c()(a)&&!Array.isArray(a)&&(a=t(a)),e[n]=a})),e}(t)))};e(98);var l=e(82);function d(t){return t.replace(new RegExp("\\[([^\\]]+)\\]\\((https?://[^/]+\\.\\w+/?.*?)\\)","gi"),'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function g(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function p(t){return t.replace(/\n/gi,"<br>")}function v(t){for(var r=t,e=0,n=[d,g,p];e<n.length;e++){r=(0,n[e])(r)}return r}var b=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},m=function(t){var r=t&&!Number.isInteger(t)?new Date(t).getTime():t;return isNaN(r)||!r?0:r},y=e(15),h=e.n(y),O=e(11),k=e.n(O),w=e(2),j="Invalid dateString parameter, it must be a string.",S='Invalid date range, it must be a string with the format "last-x-days".',_=60,E=60*_,A=24*E,N=7*A,D=30*A;function x(){var t=function(t){return Object(w.sprintf)(
/* translators: %s: number of days */
Object(w._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!Object(n.isString)(t))return!1;var r=t.split("-");if(3!==r.length)return!1;var e=new Date(t);return Object(n.isDate)(e)&&!isNaN(e)}function R(t){k()(Object(n.isDate)(t)&&!isNaN(t),"Date param must construct to a valid date instance or be a valid date instance itself.");var r="".concat(t.getMonth()+1),e="".concat(t.getDate());return[t.getFullYear(),r.length<2?"0".concat(r):r,e.length<2?"0".concat(e):e].join("-")}function T(t){k()(P(t),j);var r=t.split("-"),e=h()(r,3),n=e[0],a=e[1],i=e[2];return new Date(n,a-1,i)}function I(t,r){return R(C(t,r*A))}function L(t){var r=t.split("-");return 3===r.length&&"last"===r[0]&&!Number.isNaN(r[1])&&!Number.isNaN(parseFloat(r[1]))&&"days"===r[2]}function C(t,r){k()(P(t)||Object(n.isDate)(t)&&!isNaN(t),j);var e=P(t)?Date.parse(t):t.getTime();return new Date(e-1e3*r)}var M=e(99),V=e(83);function F(t){var r=parseFloat(t)||0;return!!Number.isInteger(r)&&r>0}function H(t){if("number"==typeof t)return!0;var r=(t||"").toString();return!!r&&!isNaN(r)}var U=e(26),q=e.n(U),J=function(t){return Array.isArray(t)?q()(t).sort():t},$=e(89);function K(t,r){var e=function(t){return"0"===t||0===t};if(e(t)&&e(r))return 0;if(e(t)||Number.isNaN(t))return null;var n=(r-t)/t;return Number.isNaN(n)||!Number.isFinite(n)?null:n}var B=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},z=function(t){if(!t)return"";var r=t.replace(/&#(\d+);/g,(function(t,r){return String.fromCharCode(r)})).replace(/(\\)/g,"");return Object(n.unescape)(r)}},98:function(t,r,e){"use strict";(function(t){e(50),e(51)}).call(this,e(27))},99:function(t,r,e){"use strict";(function(t){e.d(r,"b",(function(){return i})),e.d(r,"a",(function(){return o}));var n=e(220),a=e(86),i=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(r)))return"";var i=e.invertColor,o=void 0!==i&&i;return Object(n.a)(t.createElement(a.a,{direction:r>0?"up":"down",invertColor:o}))},o=function(t,r){return t>0&&r>0?t/r-1:t>0?1:r>0?-1:0}}).call(this,e(4))}},[[1248,1,0]]]);
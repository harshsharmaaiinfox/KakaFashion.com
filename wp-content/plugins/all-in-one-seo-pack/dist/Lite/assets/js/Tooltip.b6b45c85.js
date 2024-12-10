import{o as V,k as j,l as A,C as Pe,T as Ce,Q as Te,a as k,G as z,m as _,x as ie,t as se,R as Le,q as ae,v as Ae,b as Me,j as Be}from"./runtime-dom.esm-bundler.6789c400.js";import{_ as fe}from"./_plugin-vue_export-helper.249dac1d.js";/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var M=typeof window<"u"&&typeof document<"u",Z=["Edge","Trident","Firefox"],le=0;for(var W=0;W<Z.length;W+=1)if(M&&navigator.userAgent.indexOf(Z[W])>=0){le=1;break}function De(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function ke(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},le))}}var _e=M&&window.Promise,Ne=_e?De:ke;function pe(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function x(e,t){if(e.nodeType!==1)return[];var r=e.ownerDocument.defaultView,o=r.getComputedStyle(e,null);return t?o[t]:o}function Y(e){return e.nodeName==="HTML"?e:e.parentNode||e.host}function B(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=x(e),r=t.overflow,o=t.overflowX,i=t.overflowY;return/(auto|scroll|overlay)/.test(r+i+o)?e:B(Y(e))}var ee=M&&!!(window.MSInputMethodContext&&document.documentMode),te=M&&/MSIE 10/.test(navigator.userAgent);function L(e){return e===11?ee:e===10?te:ee||te}function P(e){if(!e)return document.documentElement;for(var t=L(10)?document.body:null,r=e.offsetParent||null;r===t&&e.nextElementSibling;)r=(e=e.nextElementSibling).offsetParent;var o=r&&r.nodeName;return!o||o==="BODY"||o==="HTML"?e?e.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(r.nodeName)!==-1&&x(r,"position")==="static"?P(r):r}function Fe(e){var t=e.nodeName;return t==="BODY"?!1:t==="HTML"||P(e.firstElementChild)===e}function $(e){return e.parentNode!==null?$(e.parentNode):e}function N(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=r?e:t,i=r?t:e,n=document.createRange();n.setStart(o,0),n.setEnd(i,0);var s=n.commonAncestorContainer;if(e!==s&&t!==s||o.contains(i))return Fe(s)?s:P(s);var a=$(e);return a.host?N(a.host,t):N(e,$(t).host)}function C(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",r=t==="top"?"scrollTop":"scrollLeft",o=e.nodeName;if(o==="BODY"||o==="HTML"){var i=e.ownerDocument.documentElement,n=e.ownerDocument.scrollingElement||i;return n[r]}return e[r]}function Re(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=C(t,"top"),i=C(t,"left"),n=r?-1:1;return e.top+=o*n,e.bottom+=o*n,e.left+=i*n,e.right+=i*n,e}function re(e,t){var r=t==="x"?"Left":"Top",o=r==="Left"?"Right":"Bottom";return parseFloat(e["border"+r+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function oe(e,t,r,o){return Math.max(t["offset"+e],t["scroll"+e],r["client"+e],r["offset"+e],r["scroll"+e],L(10)?parseInt(r["offset"+e])+parseInt(o["margin"+(e==="Height"?"Top":"Left")])+parseInt(o["margin"+(e==="Height"?"Bottom":"Right")]):0)}function ue(e){var t=e.body,r=e.documentElement,o=L(10)&&getComputedStyle(r);return{height:oe("Height",t,r,o),width:oe("Width",t,r,o)}}var We=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},He=function(){function e(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),T=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};function E(e){return w({},e,{right:e.left+e.width,bottom:e.top+e.height})}function J(e){var t={};try{if(L(10)){t=e.getBoundingClientRect();var r=C(e,"top"),o=C(e,"left");t.top+=r,t.left+=o,t.bottom+=r,t.right+=o}else t=e.getBoundingClientRect()}catch{}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},n=e.nodeName==="HTML"?ue(e.ownerDocument):{},s=n.width||e.clientWidth||i.right-i.left,a=n.height||e.clientHeight||i.bottom-i.top,f=e.offsetWidth-s,p=e.offsetHeight-a;if(f||p){var u=x(e);f-=re(u,"x"),p-=re(u,"y"),i.width-=f,i.height-=p}return E(i)}function q(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=L(10),i=t.nodeName==="HTML",n=J(e),s=J(t),a=B(e),f=x(t),p=parseFloat(f.borderTopWidth,10),u=parseFloat(f.borderLeftWidth,10);r&&i&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var l=E({top:n.top-s.top-p,left:n.left-s.left-u,width:n.width,height:n.height});if(l.marginTop=0,l.marginLeft=0,!o&&i){var h=parseFloat(f.marginTop,10),c=parseFloat(f.marginLeft,10);l.top-=p-h,l.bottom-=p-h,l.left-=u-c,l.right-=u-c,l.marginTop=h,l.marginLeft=c}return(o&&!r?t.contains(a):t===a&&a.nodeName!=="BODY")&&(l=Re(l,t)),l}function Ie(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.ownerDocument.documentElement,o=q(e,r),i=Math.max(r.clientWidth,window.innerWidth||0),n=Math.max(r.clientHeight,window.innerHeight||0),s=t?0:C(r),a=t?0:C(r,"left"),f={top:s-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:i,height:n};return E(f)}function ce(e){var t=e.nodeName;if(t==="BODY"||t==="HTML")return!1;if(x(e,"position")==="fixed")return!0;var r=Y(e);return r?ce(r):!1}function he(e){if(!e||!e.parentElement||L())return document.documentElement;for(var t=e.parentElement;t&&x(t,"transform")==="none";)t=t.parentElement;return t||document.documentElement}function G(e,t,r,o){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,n={top:0,left:0},s=i?he(e):N(e,t);if(o==="viewport")n=Ie(s,i);else{var a=void 0;o==="scrollParent"?(a=B(Y(t)),a.nodeName==="BODY"&&(a=e.ownerDocument.documentElement)):o==="window"?a=e.ownerDocument.documentElement:a=o;var f=q(a,s,i);if(a.nodeName==="HTML"&&!ce(s)){var p=ue(e.ownerDocument),u=p.height,l=p.width;n.top+=f.top-f.marginTop,n.bottom=u+f.top,n.left+=f.left-f.marginLeft,n.right=l+f.left}else n=f}r=r||0;var h=typeof r=="number";return n.left+=h?r:r.left||0,n.top+=h?r:r.top||0,n.right-=h?r:r.right||0,n.bottom-=h?r:r.bottom||0,n}function Ve(e){var t=e.width,r=e.height;return t*r}function de(e,t,r,o,i){var n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(e.indexOf("auto")===-1)return e;var s=G(r,o,n,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},f=Object.keys(a).map(function(h){return w({key:h},a[h],{area:Ve(a[h])})}).sort(function(h,c){return c.area-h.area}),p=f.filter(function(h){var c=h.width,d=h.height;return c>=r.clientWidth&&d>=r.clientHeight}),u=p.length>0?p[0].key:f[0].key,l=e.split("-")[1];return u+(l?"-"+l:"")}function ve(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,i=o?he(t):N(t,r);return q(r,i,o)}function me(e){var t=e.ownerDocument.defaultView,r=t.getComputedStyle(e),o=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),i=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function F(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(r){return t[r]})}function ge(e,t,r){r=r.split("-")[0];var o=me(e),i={width:o.width,height:o.height},n=["right","left"].indexOf(r)!==-1,s=n?"top":"left",a=n?"left":"top",f=n?"height":"width",p=n?"width":"height";return i[s]=t[s]+t[f]/2-o[f]/2,r===a?i[a]=t[a]-o[p]:i[a]=t[F(a)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function je(e,t,r){if(Array.prototype.findIndex)return e.findIndex(function(i){return i[t]===r});var o=D(e,function(i){return i[t]===r});return e.indexOf(o)}function we(e,t,r){var o=r===void 0?e:e.slice(0,je(e,"name",r));return o.forEach(function(i){i.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=i.function||i.fn;i.enabled&&pe(n)&&(t.offsets.popper=E(t.offsets.popper),t.offsets.reference=E(t.offsets.reference),t=n(t,i))}),t}function ze(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=ve(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=de(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ge(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=we(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function be(e,t){return e.some(function(r){var o=r.name,i=r.enabled;return i&&o===t})}function K(e){for(var t=[!1,"ms","Webkit","Moz","O"],r=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var i=t[o],n=i?""+i+r:e;if(typeof document.body.style[n]<"u")return n}return null}function $e(){return this.state.isDestroyed=!0,be(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[K("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ye(e){var t=e.ownerDocument;return t?t.defaultView:window}function Oe(e,t,r,o){var i=e.nodeName==="BODY",n=i?e.ownerDocument.defaultView:e;n.addEventListener(t,r,{passive:!0}),i||Oe(B(n.parentNode),t,r,o),o.push(n)}function Je(e,t,r,o){r.updateBound=o,ye(e).addEventListener("resize",r.updateBound,{passive:!0});var i=B(e);return Oe(i,"scroll",r.updateBound,r.scrollParents),r.scrollElement=i,r.eventsEnabled=!0,r}function Ue(){this.state.eventsEnabled||(this.state=Je(this.reference,this.options,this.state,this.scheduleUpdate))}function Ye(e,t){return ye(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(r){r.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function qe(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Ye(this.reference,this.state))}function X(e){return e!==""&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(r){var o="";["width","height","top","right","bottom","left"].indexOf(r)!==-1&&X(t[r])&&(o="px"),e.style[r]=t[r]+o})}function Ge(e,t){Object.keys(t).forEach(function(r){var o=t[r];o!==!1?e.setAttribute(r,t[r]):e.removeAttribute(r)})}function Ke(e){return U(e.instance.popper,e.styles),Ge(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e}function Xe(e,t,r,o,i){var n=ve(i,t,e,r.positionFixed),s=de(r.placement,n,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return t.setAttribute("x-placement",s),U(t,{position:r.positionFixed?"fixed":"absolute"}),r}function Qe(e,t){var r=e.offsets,o=r.popper,i=r.reference,n=Math.round,s=Math.floor,a=function(y){return y},f=n(i.width),p=n(o.width),u=["left","right"].indexOf(e.placement)!==-1,l=e.placement.indexOf("-")!==-1,h=f%2===p%2,c=f%2===1&&p%2===1,d=t?u||l||h?n:s:a,v=t?n:a;return{left:d(c&&!l&&t?o.left-1:o.left),top:v(o.top),bottom:v(o.bottom),right:d(o.right)}}var Ze=M&&/Firefox/i.test(navigator.userAgent);function et(e,t){var r=t.x,o=t.y,i=e.offsets.popper,n=D(e.instance.modifiers,function(S){return S.name==="applyStyle"}).gpuAcceleration;n!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=n!==void 0?n:t.gpuAcceleration,a=P(e.instance.popper),f=J(a),p={position:i.position},u=Qe(e,window.devicePixelRatio<2||!Ze),l=r==="bottom"?"top":"bottom",h=o==="right"?"left":"right",c=K("transform"),d=void 0,v=void 0;if(l==="bottom"?a.nodeName==="HTML"?v=-a.clientHeight+u.bottom:v=-f.height+u.bottom:v=u.top,h==="right"?a.nodeName==="HTML"?d=-a.clientWidth+u.right:d=-f.width+u.right:d=u.left,s&&c)p[c]="translate3d("+d+"px, "+v+"px, 0)",p[l]=0,p[h]=0,p.willChange="transform";else{var b=l==="bottom"?-1:1,y=h==="right"?-1:1;p[l]=v*b,p[h]=d*y,p.willChange=l+", "+h}var g={"x-placement":e.placement};return e.attributes=w({},g,e.attributes),e.styles=w({},p,e.styles),e.arrowStyles=w({},e.offsets.arrow,e.arrowStyles),e}function Ee(e,t,r){var o=D(e,function(a){var f=a.name;return f===t}),i=!!o&&e.some(function(a){return a.name===r&&a.enabled&&a.order<o.order});if(!i){var n="`"+t+"`",s="`"+r+"`";console.warn(s+" modifier is required by "+n+" modifier in order to work, be sure to include it before "+n+"!")}return i}function tt(e,t){var r;if(!Ee(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if(typeof o=="string"){if(o=e.instance.popper.querySelector(o),!o)return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],n=e.offsets,s=n.popper,a=n.reference,f=["left","right"].indexOf(i)!==-1,p=f?"height":"width",u=f?"Top":"Left",l=u.toLowerCase(),h=f?"left":"top",c=f?"bottom":"right",d=me(o)[p];a[c]-d<s[l]&&(e.offsets.popper[l]-=s[l]-(a[c]-d)),a[l]+d>s[c]&&(e.offsets.popper[l]+=a[l]+d-s[c]),e.offsets.popper=E(e.offsets.popper);var v=a[l]+a[p]/2-d/2,b=x(e.instance.popper),y=parseFloat(b["margin"+u],10),g=parseFloat(b["border"+u+"Width"],10),S=v-e.offsets.popper[l]-y-g;return S=Math.max(Math.min(s[p]-d,S),0),e.arrowElement=o,e.offsets.arrow=(r={},T(r,l,Math.round(S)),T(r,h,""),r),e}function rt(e){return e==="end"?"start":e==="start"?"end":e}var Se=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],H=Se.slice(3);function ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=H.indexOf(e),o=H.slice(r+1).concat(H.slice(0,r));return t?o.reverse():o}var I={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function ot(e,t){if(be(e.instance.modifiers,"inner")||e.flipped&&e.placement===e.originalPlacement)return e;var r=G(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],i=F(o),n=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case I.FLIP:s=[o,i];break;case I.CLOCKWISE:s=ne(o);break;case I.COUNTERCLOCKWISE:s=ne(o,!0);break;default:s=t.behavior}return s.forEach(function(a,f){if(o!==a||s.length===f+1)return e;o=e.placement.split("-")[0],i=F(o);var p=e.offsets.popper,u=e.offsets.reference,l=Math.floor,h=o==="left"&&l(p.right)>l(u.left)||o==="right"&&l(p.left)<l(u.right)||o==="top"&&l(p.bottom)>l(u.top)||o==="bottom"&&l(p.top)<l(u.bottom),c=l(p.left)<l(r.left),d=l(p.right)>l(r.right),v=l(p.top)<l(r.top),b=l(p.bottom)>l(r.bottom),y=o==="left"&&c||o==="right"&&d||o==="top"&&v||o==="bottom"&&b,g=["top","bottom"].indexOf(o)!==-1,S=!!t.flipVariations&&(g&&n==="start"&&c||g&&n==="end"&&d||!g&&n==="start"&&v||!g&&n==="end"&&b),xe=!!t.flipVariationsByContent&&(g&&n==="start"&&d||g&&n==="end"&&c||!g&&n==="start"&&b||!g&&n==="end"&&v),Q=S||xe;(h||y||Q)&&(e.flipped=!0,(h||y)&&(o=s[f+1]),Q&&(n=rt(n)),e.placement=o+(n?"-"+n:""),e.offsets.popper=w({},e.offsets.popper,ge(e.instance.popper,e.offsets.reference,e.placement)),e=we(e.instance.modifiers,e,"flip"))}),e}function nt(e){var t=e.offsets,r=t.popper,o=t.reference,i=e.placement.split("-")[0],n=Math.floor,s=["top","bottom"].indexOf(i)!==-1,a=s?"right":"bottom",f=s?"left":"top",p=s?"width":"height";return r[a]<n(o[f])&&(e.offsets.popper[f]=n(o[f])-r[p]),r[f]>n(o[a])&&(e.offsets.popper[f]=n(o[a])),e}function it(e,t,r,o){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),n=+i[1],s=i[2];if(!n)return e;if(s.indexOf("%")===0){var a=void 0;switch(s){case"%p":a=r;break;case"%":case"%r":default:a=o}var f=E(a);return f[t]/100*n}else if(s==="vh"||s==="vw"){var p=void 0;return s==="vh"?p=Math.max(document.documentElement.clientHeight,window.innerHeight||0):p=Math.max(document.documentElement.clientWidth,window.innerWidth||0),p/100*n}else return n}function st(e,t,r,o){var i=[0,0],n=["right","left"].indexOf(o)!==-1,s=e.split(/(\+|\-)/).map(function(u){return u.trim()}),a=s.indexOf(D(s,function(u){return u.search(/,|\s/)!==-1}));s[a]&&s[a].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,p=a!==-1?[s.slice(0,a).concat([s[a].split(f)[0]]),[s[a].split(f)[1]].concat(s.slice(a+1))]:[s];return p=p.map(function(u,l){var h=(l===1?!n:n)?"height":"width",c=!1;return u.reduce(function(d,v){return d[d.length-1]===""&&["+","-"].indexOf(v)!==-1?(d[d.length-1]=v,c=!0,d):c?(d[d.length-1]+=v,c=!1,d):d.concat(v)},[]).map(function(d){return it(d,h,t,r)})}),p.forEach(function(u,l){u.forEach(function(h,c){X(h)&&(i[l]+=h*(u[c-1]==="-"?-1:1))})}),i}function at(e,t){var r=t.offset,o=e.placement,i=e.offsets,n=i.popper,s=i.reference,a=o.split("-")[0],f=void 0;return X(+r)?f=[+r,0]:f=st(r,n,s,a),a==="left"?(n.top+=f[0],n.left-=f[1]):a==="right"?(n.top+=f[0],n.left+=f[1]):a==="top"?(n.left+=f[0],n.top-=f[1]):a==="bottom"&&(n.left+=f[0],n.top+=f[1]),e.popper=n,e}function ft(e,t){var r=t.boundariesElement||P(e.instance.popper);e.instance.reference===r&&(r=P(r));var o=K("transform"),i=e.instance.popper.style,n=i.top,s=i.left,a=i[o];i.top="",i.left="",i[o]="";var f=G(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed);i.top=n,i.left=s,i[o]=a,t.boundaries=f;var p=t.priority,u=e.offsets.popper,l={primary:function(c){var d=u[c];return u[c]<f[c]&&!t.escapeWithReference&&(d=Math.max(u[c],f[c])),T({},c,d)},secondary:function(c){var d=c==="right"?"left":"top",v=u[d];return u[c]>f[c]&&!t.escapeWithReference&&(v=Math.min(u[d],f[c]-(c==="right"?u.width:u.height))),T({},d,v)}};return p.forEach(function(h){var c=["left","top"].indexOf(h)!==-1?"primary":"secondary";u=w({},u,l[c](h))}),e.offsets.popper=u,e}function lt(e){var t=e.placement,r=t.split("-")[0],o=t.split("-")[1];if(o){var i=e.offsets,n=i.reference,s=i.popper,a=["bottom","top"].indexOf(r)!==-1,f=a?"left":"top",p=a?"width":"height",u={start:T({},f,n[f]),end:T({},f,n[f]+n[p]-s[p])};e.offsets.popper=w({},s,u[o])}return e}function pt(e){if(!Ee(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,r=D(e.instance.modifiers,function(o){return o.name==="preventOverflow"}).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(e.hide===!0)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(e.hide===!1)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function ut(e){var t=e.placement,r=t.split("-")[0],o=e.offsets,i=o.popper,n=o.reference,s=["left","right"].indexOf(r)!==-1,a=["top","left"].indexOf(r)===-1;return i[s?"left":"top"]=n[r]-(a?i[s?"width":"height"]:0),e.placement=F(t),e.offsets.popper=E(i),e}var ct={shift:{order:100,enabled:!0,fn:lt},offset:{order:200,enabled:!0,fn:at,offset:0},preventOverflow:{order:300,enabled:!0,fn:ft,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:nt},arrow:{order:500,enabled:!0,fn:tt,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:ot,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:ut},hide:{order:800,enabled:!0,fn:pt},computeStyle:{order:850,enabled:!0,fn:et,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:Ke,onLoad:Xe,gpuAcceleration:void 0}},ht={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:ct},R=function(){function e(t,r){var o=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};We(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=Ne(this.update.bind(this)),this.options=w({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(w({},e.Defaults.modifiers,i.modifiers)).forEach(function(s){o.options.modifiers[s]=w({},e.Defaults.modifiers[s]||{},i.modifiers?i.modifiers[s]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(s){return w({name:s},o.options.modifiers[s])}).sort(function(s,a){return s.order-a.order}),this.modifiers.forEach(function(s){s.enabled&&pe(s.onLoad)&&s.onLoad(o.reference,o.popper,o.options,s,o.state)}),this.update();var n=this.options.eventsEnabled;n&&this.enableEventListeners(),this.state.eventsEnabled=n}return He(e,[{key:"update",value:function(){return ze.call(this)}},{key:"destroy",value:function(){return $e.call(this)}},{key:"enableEventListeners",value:function(){return Ue.call(this)}},{key:"disableEventListeners",value:function(){return qe.call(this)}}]),e}();R.Utils=(typeof window<"u"?window:global).PopperUtils;R.placements=Se;R.Defaults=ht;const m=(e,t,r)=>{e&&t&&r&&(document.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r))},O=(e,t,r)=>{e&&t&&(document.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r))},dt={emits:["show","hide","created","documentClick"],props:{tagName:{type:String,default:"span"},trigger:{type:String,default:"hover",validator:e=>-1<["clickToOpen","click","clickToToggle","hover","focus"].indexOf(e)},delayOnMouseOver:{type:Number,default:10},delayOnMouseOut:{type:Number,default:10},disabled:Boolean,content:String,enterActiveClass:String,leaveActiveClass:String,boundariesSelector:String,reference:{},forceShow:{type:Boolean,default:!1},dataValue:{default:null},appendToBody:Boolean,visibleArrow:{type:Boolean,default:!0},transition:{type:String,default:""},stopPropagation:Boolean,preventDefault:Boolean,options:{type:Object,default(){return{}}},rootClass:{type:String,default:""},classes:{type:Array,default(){return[]}}},data(){return{referenceElm:null,popperJS:null,showPopper:!1,currentPlacement:"",popperOptions:{placement:"bottom",computeStyle:{gpuAcceleration:!1}}}},watch:{showPopper(e){e?(this.$emit("show",this),this.popperJS&&this.popperJS.enableEventListeners(),this.updatePopper()):(this.popperJS&&this.popperJS.disableEventListeners(),this.$emit("hide",this))},forceShow:{handler(e){this[e?"doShow":"doClose"]()},immediate:!0},disabled(e){e&&(this.showPopper=!1)}},computed:{cssClasses(){const e=Array.isArray(this.classes)?this.classes:[];return this.showPopper&&e.push("popper-active"),Array.isArray(this.classes)?this.classes:[]}},methods:{doToggle(e){this.stopPropagation&&e.stopPropagation(),this.preventDefault&&e.preventDefault(),this.forceShow||(this.showPopper=!this.showPopper)},doShow(){this.showPopper=!0},doClose(){this.showPopper=!1},doDestroy(){this.showPopper||(this.popperJS&&(this.popperJS.destroy(),this.popperJS=null),this.appendedToBody&&(this.appendedToBody=!1,document.body.removeChild(this.popper.parentElement)))},createPopper(){this.$nextTick(()=>{if(this.visibleArrow&&this.appendArrow(this.popper),this.appendToBody&&!this.appendedToBody&&(this.appendedToBody=!0,document.body.appendChild(this.popper.parentElement)),this.popperJS&&this.popperJS.destroy&&this.popperJS.destroy(),this.boundariesSelector){const e=document.querySelector(this.boundariesSelector);e&&(this.popperOptions.modifiers=Object.assign({},this.popperOptions.modifiers),this.popperOptions.modifiers.preventOverflow=Object.assign({},this.popperOptions.modifiers.preventOverflow),this.popperOptions.modifiers.preventOverflow.boundariesElement=e)}this.popperOptions.onCreate=()=>{this.$emit("created",this),this.$nextTick(this.updatePopper)},this.popperJS=new R(this.referenceElm,this.popper,this.popperOptions)})},destroyPopper(){O(this.referenceElm,"click",this.doToggle),O(this.referenceElm,"mouseup",this.doClose),O(this.referenceElm,"mousedown",this.doShow),O(this.referenceElm,"focus",this.doShow),O(this.referenceElm,"blur",this.doClose),O(this.referenceElm,"mouseout",this.onMouseOut),O(this.referenceElm,"mouseover",this.onMouseOver),O(document,"click",this.handleDocumentClick),this.showPopper=!1,this.doDestroy()},appendArrow(e){if(this.appendedArrow)return;this.appendedArrow=!0;const t=document.createElement("div");t.setAttribute("x-arrow",""),t.className="popper__arrow",e.appendChild(t)},updatePopper(){this.popperJS?this.popperJS.scheduleUpdate():this.createPopper()},onMouseOver(){clearTimeout(this._timer),this._timer=setTimeout(()=>{this.showPopper=!0},this.delayOnMouseOver)},onMouseOut(){clearTimeout(this._timer),this._timer=setTimeout(()=>{this.showPopper=!1},this.delayOnMouseOut)},handleDocumentClick(e){!this.$el||!this.referenceElm||this.elementContains(this.$el,e.target)||this.elementContains(this.referenceElm,e.target)||!this.popper||this.elementContains(this.popper,e.target)||(this.$emit("documentClick",this),!this.forceShow&&(this.showPopper=!1))},elementContains(e,t){return typeof e.contains=="function"?e.contains(t):!1}},created(){this.appendedArrow=!1,this.appendedToBody=!1,this.popperOptions=Object.assign(this.popperOptions,this.options)},mounted(){switch(this.referenceElm=this.reference||this.$refs.reference.firstElementChild,this.popper=this.$refs.content.firstElementChild,this.trigger){case"clickToOpen":m(this.referenceElm,"click",this.doShow),m(document,"click",this.handleDocumentClick),m(document,"touchstart",this.handleDocumentClick);break;case"click":case"clickToToggle":m(this.referenceElm,"click",this.doToggle),m(document,"click",this.handleDocumentClick),m(document,"touchstart",this.handleDocumentClick);break;case"hover":m(this.referenceElm,"mouseover",this.onMouseOver),m(this.popper,"mouseover",this.onMouseOver),m(this.referenceElm,"mouseout",this.onMouseOut),m(this.popper,"mouseout",this.onMouseOut);break;case"focus":m(this.referenceElm,"focus",this.onMouseOver),m(this.popper,"focus",this.onMouseOver),m(this.referenceElm,"blur",this.onMouseOut),m(this.popper,"blur",this.onMouseOut);break}},unmounted(){this.destroyPopper()}},vt={ref:"content"},mt={ref:"reference"};function gt(e,t,r,o,i,n){return V(),j(ae(r.tagName),{class:z([...n.cssClasses])},{default:A(()=>[Pe(Ce,{name:r.transition,"enter-active-class":r.enterActiveClass,"leave-active-class":r.leaveActiveClass,onAfterLeave:n.doDestroy},{default:A(()=>[Te(k("div",{ref:"popper",class:z(r.rootClass)},[k("div",vt,[_(e.$slots,"default",{},()=>[ie(se(r.content),1)])],512)],2),[[Le,!r.disabled&&i.showPopper]])]),_:3},8,["name","enter-active-class","leave-active-class","onAfterLeave"]),k("div",mt,[_(e.$slots,"reference")],512)]),_:3},8,["class"])}const wt=fe(dt,[["render",gt]]),bt={components:{CorePopper:wt},props:{tooltip:String,type:String,disabled:Boolean,placement:{type:String,default(){return"top"}},trigger:{type:String,default(){return"hover"}},forceShow:{type:Boolean,default(){return!1}},tag:{type:String,default(){return"span"}},offset:{type:String,default(){return"0,0"}},flip:{type:Boolean,default(){return!1}},zIndex:String}};function yt(e,t,r,o,i,n){const s=Ae("core-popper");return V(),j(s,{classes:["aioseo-tooltip"],trigger:r.trigger,"force-show":r.forceShow,disabled:r.disabled,options:{placement:r.placement,modifiers:{flip:{enabled:r.flip},preventOverflow:{escapeWithReference:!0},offset:{offset:r.offset}}}},{reference:A(()=>[_(e.$slots,"default")]),default:A(()=>[k("span",{class:z(["popper",{[r.type]:r.type}]),style:Be({zIndex:r.zIndex})},[r.tooltip?(V(),j(ae(r.tag),{key:0},{default:A(()=>[ie(se(r.tooltip),1)]),_:1})):Me("",!0),_(e.$slots,"tooltip")],6)]),_:3},8,["trigger","force-show","disabled","options"])}const St=fe(bt,[["render",yt]]);export{St as C,wt as a};

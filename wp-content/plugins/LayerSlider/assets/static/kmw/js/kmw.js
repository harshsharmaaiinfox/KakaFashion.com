
/*
	* Kreatura Modal Window
	*
	* (c) 2019-2024 George Krupa, John Gera & Kreatura Media
	*
*/



;jQuery(document).ready(function(x){window.kmw={defaults:{kmw:"Kreatura Modal Window",version:"1.8.0",releaseDate:"2024. 01. 16.",zIndex:1e5,elementName:"kmw",browserIsSafari:!!navigator.userAgent.match(/(iPhone|iPod|iPad|Safari)/i)&&!navigator.userAgent.match(/(Opera|Chrome|Edge)/i)},opened:[],init:function(){kmw.functions.setMarkup(),x(document).on("click",".kmw-open, [data-kmw=open]",function(){kmw.modal.open(x(this).data())})},functions:{checkVersions:function(e,t){for(var i=e.split("."),n=t.split("."),a=0;a<i.length;++a){if(n.length==a)return!1;if(parseInt(i[a])!=parseInt(n[a]))return!(parseInt(i[a])>parseInt(n[a]))}return i.length,n.length,!0},parseContent:function(e){return 0===e.indexOf("#")||0===e.indexOf(".")?x(e).html():e},removeUID:function(t){window.kmw.opened=window.kmw.opened.filter(function(e){return e!=t})},setMarkup:function(){("registerElement"in document||"customElements"in window)&&(kmw.modal.defaults.markup=kmw.modal.defaults.markup.replace(/div/g,"kmw-div"),kmw.overlay.defaults.markup=kmw.overlay.defaults.markup.replace(/div/g,"kmw-div"))},setState:function(e,t,i){e.data("kmw-state",t),e.removeClass("animating-out animating-in visible hidden"),e.addClass(t),e.is(".kmw-modal-container")&&"animating-in"===t&&i&&window.kmw.opened.push(i.uid)},stringToObject:function(e){for(var t,i={},n=e.split(";"),a=0;a<n.length;a++)-1!==n[a].indexOf(":")&&((t=n[a].split(":"))[1]=x.trim(t[1].toLowerCase()),i[x.trim(t[0].toLowerCase())]=t[1]);return i}},callback:function(e){return{element:e[0],$element:e,data:e.data("kmw-settings")}},modal:{defaults:{markup:'<div class="kmw-modal-container"><div class="kmw-modal"><div class="kmw-sidebar kmw-sidebar-left"><div class="kmw-sidebar-header"></div><div class="kmw-sidebar-inner"><div class="kmw-sidebar-content"></div></div></div><div class="kmw-modal-bg"><div class="kmw-modal-header"></div><div class="kmw-modal-inner"><div class="kmw-modal-content"></div></div></div><div class="kmw-sidebar kmw-sidebar-right"><div class="kmw-sidebar-header"></div><div class="kmw-sidebar-inner"><div class="kmw-sidebar-content"></div></div></div></div></div>',into:"body",id:null,uid:null,clip:!0,closeButton:!0,closeButtonStyle:"",closeButtonAutoStyle:!0,closeOnEscape:!0,width:"100%",height:"100%",minWidth:800,minHeight:250,maxWidth:800,maxHeight:"auto",padding:40,headerTopPaddigModifier:1,headerBottomPaddigModifier:1,closeButtonPositionModifier:1.3,spacing:40,theme:"light",zIndex:!1,outerClasses:"",modalStyle:"",modalClasses:"",modalScrollClasses:"",contentStyle:"",contentClasses:"",title:"",content:"",sidebar:null,sidebarScrollClasses:"",animationIn:"scale",animationOut:null,onOpen:null,onClose:null,onBeforeOpen:null,onBeforeClose:null,overlay:!0,overlaySettings:{}},open:function(e){if(kmw.functions.checkVersions("1.8.0",x.fn.jquery)){var i="string"==typeof e?x.extend(!0,{},kmw.modal.defaults,{content:e}):x.extend(!0,{},kmw.modal.defaults,e);if(i.uid=i.uid||"kmw-"+Math.random().toString(36).substr(2,9),!x('.kmw-modal-container[data-kmw-uid="'+i.uid+'"]').length){"string"==typeof i.modalStyle&&(i.modalStyle=kmw.functions.stringToObject(i.modalStyle)),"string"==typeof i.contentStyle&&(i.contentStyle=kmw.functions.stringToObject(i.contentStyle)),"string"==typeof i.closeButtonStyle&&(i.closeButtonStyle=kmw.functions.stringToObject(i.closeButtonStyle)),i.overlay&&(i.overlaySettings.uid=i.uid,i.overlaySettings.into=i.into,i.$overlay=kmw.overlay.open(i.overlaySettings,i)),i.minWidth=Math.min(i.minWidth,i.maxWidth),kmw.defaults.browserIsSafari&&(u=x('<div class="kmw-modal-outer"></div>').attr("data-kmw-uid",i.uid).appendTo(x(i.into)));var t=x(i.markup).css({visibility:"hidden",display:"block",left:i.spacing,top:i.spacing,right:i.spacing,bottom:i.spacing,minWidth:i.minWidth,minHeight:i.minHeight}).attr("data-kmw-uid",i.uid).appendTo(u||x(i.into));(u||t).addClass(i.outerClasses).css({zIndex:i.zIndex||kmw.defaults.zIndex++});var n,a=t.find(".kmw-modal").addClass(i.modalClasses+" kmw-theme-"+i.theme).css({width:i.width,height:i.height,minWidth:i.minWidth,minHeight:i.minHeight,maxWidth:i.maxWidth,maxHeight:i.maxHeight}).css(i.modalStyle).attr("id",i.id);i.effects&&a.addClass("kmw-effects"),i.closeButton&&(n=x('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>').addClass("kmw-modal-close").css(i.closeButtonStyle).appendTo(a).on("click",function(){kmw.modal.close(t)}));var d,s,o,r,l,m,c=a.find(".kmw-modal-header").css({margin:"0 "+i.padding+"px"}),g=a.find(".kmw-modal-inner").css({paddingLeft:i.padding,paddingRight:i.padding,marginTop:i.padding,marginBottom:i.padding}).addClass(i.modalScrollClasses),u=a.find(".kmw-modal-content").addClass(i.contentClasses).css(i.contentStyle);i.content instanceof jQuery?(i.$content=i.content instanceof jQuery?i.content:x(i.content).first(),i.$contentParent=i.$content.parent(),i.$nextSibling=i.$content.next(),i.$content.appendTo(u)):"string"==typeof i.content&&u.html(kmw.functions.parseContent(i.content)),i.sidebar&&(i.sidebar.left&&(d=a.find(".kmw-sidebar-left").css({width:i.sidebar.left.width||100}),i.sidebar.left.merged&&d.addClass("kmw-merged"),d.prepend('<div class="kmw-sidebar-bg-helper"></div>'),s=d.find(".kmw-sidebar-header").css({marginLeft:i.padding,marginRight:i.sidebar.left.merged?0:i.padding}),o=d.find(".kmw-sidebar-inner").css({paddingLeft:i.padding,paddingRight:i.sidebar.left.merged?0:i.padding,marginTop:i.padding,marginBottom:i.padding}).addClass(i.sidebarScrollClasses),m=d.find(".kmw-sidebar-content"),i.sidebar.left.content instanceof jQuery?(i.sidebar.left.$content=i.sidebar.left.content,i.sidebar.left.$contentParent=i.sidebar.left.$content.parent(),i.sidebar.left.$nextSibling=i.sidebar.left.$content.next(),i.sidebar.left.$content.appendTo(m)):"string"==typeof i.sidebar.left.content&&m.html(kmw.functions.parseContent(i.sidebar.left.content||"")),m=m.find(".kmw-sidebar-title"),!i.sidebar.left.title&&m.length&&(i.sidebar.left.title=m.html(),i.sidebar.left.$titleParent=m.parent(),(i.sidebar.left.$title=m).remove()),i.sidebar.left.title&&(i.sidebar.left.title,x("<kmw-h1>"+i.sidebar.left.title+"</kmw-h1>").addClass("kmw-sidebar-title").prependTo(s)),(m=d.find(".kmw-sidebar-toolbar")).length&&(i.sidebar.left.$toolbarParent=m.parent(),i.sidebar.left.$toolbar=m),i.sidebar.left.$toolbar&&($=i.sidebar.left.$toolbar,$.css({marginTop:i.padding/5*2}).appendTo(s)),s.children().length&&(s.css({padding:i.padding*i.headerTopPaddigModifier+"px 0 "+i.padding*i.headerBottomPaddigModifier+"px 0"}),o.css({marginTop:0})),a.addClass("kmw-has-left-sidebar")),i.sidebar.right&&(h=a.find(".kmw-sidebar-right").css({width:i.sidebar.right.width||100}),i.sidebar.right.merged&&h.addClass("kmw-merged"),h.prepend('<div class="kmw-sidebar-bg-helper"></div>'),r=h.find(".kmw-sidebar-header").css({marginRight:i.padding,marginLeft:i.sidebar.right.merged?0:i.padding}),l=h.find(".kmw-sidebar-inner").css({paddingRight:i.padding,paddingLeft:i.sidebar.right.merged?0:i.padding,marginTop:i.padding,marginBottom:i.padding}).addClass(i.sidebarScrollClasses),m=h.find(".kmw-sidebar-content"),i.sidebar.right.content instanceof jQuery?(i.sidebar.right.$content=i.sidebar.right.content,i.sidebar.right.$contentParent=i.sidebar.right.$content.parent(),i.sidebar.right.$nextSibling=i.sidebar.right.$content.next(),i.sidebar.right.$content.appendTo(m)):"string"==typeof i.sidebar.right.content&&m.html(kmw.functions.parseContent(i.sidebar.right.content||"")),m=m.find(".kmw-sidebar-title"),!i.sidebar.right.title&&m.length&&(i.sidebar.right.title=m.html(),i.sidebar.right.$titleParent=m.parent(),(i.sidebar.right.$title=m).remove()),i.sidebar.right.title&&(i.sidebar.right.title,x("<kmw-h1>"+i.sidebar.right.title+"</kmw-h1>").addClass("kmw-sidebar-title").prependTo(r)),(h=h.find(".kmw-sidebar-toolbar")).length&&(i.sidebar.right.$toolbarParent=h.parent(),i.sidebar.right.$toolbar=h),i.sidebar.right.$toolbar&&(y=i.sidebar.right.$toolbar,y.css({marginTop:i.padding/5*2}).appendTo(r)),r.children().length&&(r.css({padding:i.padding*i.headerTopPaddigModifier+"px 0 "+i.padding*i.headerBottomPaddigModifier+"px 0"}),l.css({marginTop:0})),a.addClass("kmw-has-right-sidebar")));var h=u.find(".kmw-modal-title");!i.title&&h.length&&(i.title=h.html(),i.$titleParent=h.parent(),(i.$title=h).remove()),i.title&&(i.title,x("<kmw-h1>"+i.title+"</kmw-h1>").addClass("kmw-modal-title").prependTo(c)),d&&d.find("kmw-menuitem.kmw-active").click();var w,p,f,b,u=u.find(".kmw-modal-toolbar");u.length&&(i.$toolbarParent=u.parent(),i.$toolbar=u),i.$toolbar&&(v=i.$toolbar,v.css({marginTop:i.padding/5*2}).appendTo(c)),i.closeButton&&i.closeButtonAutoStyle&&n.css({transform:"translate("+(n.outerWidth()-i.padding)*i.closeButtonPositionModifier+"px,"+(i.padding-n.outerHeight())*i.closeButtonPositionModifier+"px)"}),c.children().length&&(c.css({padding:i.padding*i.headerTopPaddigModifier+"px 0 "+i.padding*i.headerBottomPaddigModifier+"px 0"}),g.css({marginTop:0})),i.sidebar&&(i.sidebar.left&&!i.sidebar.left.customHeaderHeight&&(s.css({padding:c.css("padding")}),o.css({marginTop:0})),i.sidebar.right&&!i.sidebar.right.customHeaderHeight&&(r.css({padding:c.css("padding")}),l.css({marginTop:0})),(w=function(){i.sidebar.left&&!i.sidebar.left.customHeaderHeight&&s.css({height:c.height()}),i.sidebar.right&&!i.sidebar.right.customHeaderHeight&&r.css({height:c.height()})})(),setTimeout(function(){w()},80),x(window).on("resize."+i.uid,function(){w()})),"auto"==i.maxHeight?(a.css({height:"auto",maxHeight:"100%"}),(p=function(){var e=x(window).height(),t=e-2*i.spacing-(c.children().length?c.outerHeight()+i.padding:2*i.padding);g.css({maxHeight:t}),i.sidebar&&(i.sidebar.left&&(t=e-2*i.spacing-(s.children().length||!i.sidebar.left.customHeaderHeight?s.outerHeight()+i.padding:2*i.padding),o.css({maxHeight:t})),i.sidebar.right&&(t=e-2*i.spacing-(r.children().length||!i.sidebar.right.customHeaderHeight?r.outerHeight()+i.padding:2*i.padding),l.css({maxHeight:t})))})(),setTimeout(function(){p()},99),x(window).on("resize."+i.uid,function(){p()})):"100%"==i.maxHeight?((f=function(){var e=x(window).height(),t=e-2*i.spacing-(c.children().length?c.outerHeight()+i.padding:2*i.padding);g.css({height:t}),i.sidebar&&(i.sidebar.left&&(t=e-2*i.spacing-(s.children().length||!i.sidebar.left.customHeaderHeight?s.outerHeight()+i.padding:2*i.padding),o.css({height:t})),i.sidebar.right&&(t=e-2*i.spacing-(r.children().length||!i.sidebar.right.customHeaderHeight?r.outerHeight()+i.padding:2*i.padding),l.css({height:t})))})(),setTimeout(function(){f()},99),x(window).on("resize."+i.uid,function(){f()})):(a.css({height:"auto",maxHeight:i.maxHeight}),(b=function(){var e=x(window).height();a.css({height:e-2*i.spacing});e=a.height()-(c.children().length?c.outerHeight()+i.padding:2*i.padding);g.css({height:"100%",maxHeight:e}),i.sidebar&&(i.sidebar.left&&(e=a.height()-(s.children().length||!i.sidebar.left.customHeaderHeight?s.outerHeight()+i.padding:2*i.padding),o.css({height:e})),i.sidebar.right&&(e=a.height()-(r.children().length||!i.sidebar.right.customHeaderHeight?r.outerHeight()+i.padding:2*i.padding),l.css({height:e})))})(),setTimeout(function(){b()},99),x(window).on("resize."+i.uid,function(){b()}));function k(){document.documentElement.style.setProperty("--kmw-inner-height",g.height()+"px")}return k(),setTimeout(function(){k()},99),x(window).on("resize."+i.uid,function(){k()}),i.closeOnEscape&&x(document).on("keydown."+i.uid,function(e){kmw.preventCloseOnEscape||x("lse-smart-alert.lse-visible").length||27==e.which&&(e=window.kmw.opened[window.kmw.opened.length-1],"forced"!==i.closeOnEscape&&e!==i.uid||kmw.modal.close(t))}),i.clip&&x("body").addClass("kmw-prevent-scroll"),t.data("kmw-settings",i),kmw.transition.open(t),t}}else console.log(kmw.defaults.kmw+":","jQuery 1.8 or newer required!");var v,y,$},close:function(e,i){(i=i||{}).overlaySettings=i.overlaySettings||{},(e=e||x(".kmw-modal-container"))instanceof jQuery==!1&&(e=x('.kmw-modal-container[data-kmw-uid="'+e+'"]')),e.each(function(){var e=x(this),t=x.extend(!0,e.data("kmw-settings"),i);if(t.onBeforeClose&&!1===t.onBeforeClose(window.kmw.callback(e)))return!0;window.kmw.functions.removeUID(t.uid),t.afterClose=function(){t.$contentParent&&t.$content.appendTo(t.$contentParent),t.sidebar&&(t.sidebar.left&&t.sidebar.left.$contentParent&&t.sidebar.left.$content.appendTo(t.sidebar.left.$contentParent),t.sidebar.right&&t.sidebar.right.$contentParent&&t.sidebar.right.$content.appendTo(t.sidebar.right.$contentParent)),t.$title&&t.$titleParent&&t.$title.prependTo(t.$titleParent),t.sidebar&&(t.sidebar.left&&t.sidebar.left.$title&&t.sidebar.left.$titleParent&&t.sidebar.left.$title.prependTo(t.sidebar.left.$titleParent),t.sidebar.right&&t.sidebar.right.$title&&t.sidebar.right.$titleParent&&t.sidebar.right.$title.prependTo(t.sidebar.right.$titleParent)),t.$toolbar&&t.$toolbarParent&&t.$toolbar.prependTo(t.$toolbarParent),t.sidebar&&(t.sidebar.left&&t.sidebar.left.$toolbar&&t.sidebar.left.$toolbarParent&&t.sidebar.left.$toolbar.prependTo(t.sidebar.left.$toolbarParent),t.sidebar.right&&t.sidebar.right.$toolbar&&t.sidebar.right.$toolbarParent&&t.sidebar.right.$toolbar.prependTo(t.sidebar.right.$toolbarParent)),t.clip&&x("body").removeClass("kmw-prevent-scroll"),x(document).off("keydown."+t.uid),x(window).off("resize."+t.uid)},t.$overlay&&x('.kmw-overlay[data-kmw-uid="'+t.uid+'"]').length&&kmw.overlay.close(t.$overlay,i.overlaySettings),kmw.transition.close(e)})}},overlay:{defaults:{markup:'<div class="kmw-overlay"></div>',into:"body",uid:null,closeOnClick:!0,theme:"light",zIndex:!1,customStyle:"",customClasses:"",animationIn:"fade",animationOut:null,onOpen:null,onClose:null,onBeforeOpen:null,onBeforeClose:null},open:function(e,t){var i=x.extend(!0,{},kmw.overlay.defaults,e),n=i.uid||"kmw-"+Math.random().toString(36).substr(2,9),t=e.theme||(t||i).theme;if(!x('.kmw-overlay[data-kmw-uid="'+n+'"]').length){"string"==typeof i.customStyle&&(i.customStyle=kmw.functions.stringToObject(i.customStyle));var a=x(i.markup).addClass(i.customClasses+" kmw-theme-"+t).css(i.customStyle).css({visibility:"hidden",display:"block",zIndex:i.zIndex||kmw.defaults.zIndex++}).attr("data-kmw-uid",i.uid).appendTo(x(i.into));return i.closeOnClick&&a.on("click",function(){x('.kmw-modal-container[data-kmw-uid="'+i.uid+'"]').length?kmw.modal.close(x('.kmw-modal-container[data-kmw-uid="'+i.uid+'"]')):kmw.overlay.close(a)}),a.data("kmw-settings",i),kmw.transition.open(a),a}},close:function(e,t){t=t||{},e instanceof jQuery==!1&&(e=x('.kmw-overlay[data-kmw-uid="'+e+'"]')),x.extend(!0,e.data("kmw-settings"),t),e.length&&kmw.transition.close(e)}},transition:{data:{default:{duration:.6,easeIn:Quint.easeOut,easeOut:Quint.easeIn,delay:0,css:{display:"block",visibility:"visible"}},fade:{easeIn:Quart.easeOut,easeOut:Quart.easeIn,duration:.4,css:{opacity:0}},flyLeft:{css:{x:function(){return-x(window).width()}}},flyRight:{css:{x:function(){return x(window).width()}}},flyTop:{css:{y:function(){return-x(window).height()}}},flyBottom:{css:{y:function(){return x(window).height()}}},rotateLeft:{css:{opacity:0,x:function(){return-x(window).width()/4},rotationY:-30,transformPerspective:function(){return 2*x(document).width()}}},rotateRight:{css:{opacity:0,x:function(){return x(window).width()/4},rotationY:30,transformPerspective:function(){return 2*x(document).width()}}},rotateTop:{css:{opacity:0,y:function(){return-x(window).height()/4},rotationX:30,transformPerspective:function(){return 2*x(document).height()}}},rotateBottom:{css:{opacity:0,y:function(){return x(window).height()/4},rotationX:-30,transformPerspective:function(){return 2*x(document).height()}}},scale:{easeIn:Quart.easeOut,easeOut:Quart.easeIn,duration:.4,css:{opacity:0,scaleX:.5,scaleY:.5}},elasticScale:{easeIn:Back.easeOut,easeOut:Back.easeIn,css:{opacity:0,scaleX:.75,scaleY:1.2}}},open:function(e){var t=e.data("kmw-settings")||{};window.kmw.functions.setState(e,"animating-in",t),t.onBeforeOpen&&t.onBeforeOpen(window.kmw.callback(e)),t.animationIn?"string"==typeof t.animationIn?t.animationIn=x.extend({},kmw.transition.data[t.animationIn]):t.animationIn.name&&(t.animationIn=x.extend(!0,{},kmw.transition.data[t.animationIn.name],t.animationIn)):t.animationIn={};var i=kmw.transition.setProperties(x.extend(!0,{},kmw.transition.data.default,t.animationIn),"In");i.css=x.extend({},i.css,kmw.transition.data.default.css);var n=TweenMax.fromTo(e[0],i.duration,{css:i.css},{delay:i.delay,ease:i.ease,x:0,y:0,rotation:0,rotationX:0,rotationY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,opacity:1,onComplete:function(){t.onOpen&&t.onOpen(window.kmw.callback(e)),window.kmw.functions.setState(e,"visible")}});e.data("kmwTweenIn",n),e.data("kmwTweenData",i)},setProperties:function(e,t){for(var i in e)-1!==i.indexOf(t)&&(e[i.split(t)[0]]=e[i]);return e},close:function(e){switch(e.attr("data-kmw-state")){case"animating-in":e.data("kmwTweenIn").pause();break;case"animating-out":return}window.kmw.functions.setState(e,"animating-out");var t,i=e.data("kmw-settings")||{};i.animationOut?("string"==typeof i.animationOut?i.animationOut=x.extend({},kmw.transition.data[i.animationOut]):i.animationOut.name&&(i.animationOut=x.extend(!0,{},kmw.transition.data[i.animationOut.name],i.animationOut)),t=x.extend(!0,{},kmw.transition.data.default,i.animationOut)):(t=e.data("kmwTweenData"),i.animationOut={}),t=kmw.transition.setProperties(t,"Out"),tweenOut=TweenMax.fromTo(e[0],t.duration,{transformPerspective:t.css.transformPerspective||0},{delay:t.delay,ease:t.ease,css:t.css,onComplete:function(){i.onClose&&i.onClose(window.kmw.callback(e)),i.afterClose&&i.afterClose(),window.kmw.functions.setState(e,"hidden"),(kmw.defaults.browserIsSafari&&e.closest(".kmw-modal-outer").length?e.closest(".kmw-modal-outer"):e).remove()}}),e.data("kmwTweenOut",tweenOut)}}},kmw.init()});

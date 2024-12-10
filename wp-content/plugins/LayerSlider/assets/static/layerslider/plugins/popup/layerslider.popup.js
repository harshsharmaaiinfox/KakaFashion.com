
/*
	* LayerSlider Add-On: Popups
	*
	* (c) 2011-2024 George Krupa, John Gera & Kreatura Media
	*
	* LayerSlider home:		https://layerslider.com/popups/
	* Licensing:			https://layerslider.com/licensing/
*/



;!function(l){window._layerSlider.plugins.popup=function(n,e,i,t){var o=this,s={startInViewport:!1,playByScroll:!1,allowFullscreen:!1,insertSelector:null,performanceMode:!1,scene:!1},a=window._lsData;o.pluginData={name:"Popups Add-On for LayerSlider",version:"2.2",requiredLSVersion:"7.11.1",authorName:"Kreatura",releaseDate:"2024. 05. 22."},o.pluginDefaults={eventNamespace:"PU",keys:{popupShowOnClick:["plugin","settings"],popupShowOnScroll:["plugin","settings"],popupShowOnLeave:["plugin","settings"],popupShowOnIdle:["plugin","settings"],popupShowOnTimeout:["plugin","settings"],popupShowOnce:["plugin","settings"],popupCloseOnScroll:["plugin","settings"],popupCloseOnTimeout:["plugin","settings"],popupCloseOnSliderEnd:["plugin","settings"],popupCloseOnEsc:["plugin","settings"],popupShowCloseButton:["plugin","settings"],popupCloseButtonStyle:["plugin","settings"],popupResetOnClose:["plugin","settings"],popupDisableOverlay:["plugin","settings"],popupOverlayClickToClose:["plugin","settings"],popupStartSliderImmediately:["plugin","settings"],popupWidth:["popup","styleSettings"],popupHeight:["popup","styleSettings"],popupFitWidth:["popup","styleSettings"],popupFitHeight:["popup","styleSettings"],popupCustomStyle:["popup","styleSettings"],popupPositionHorizontal:["popup","styleSettings"],popupPositionVertical:["popup","styleSettings"],popupDistanceLeft:["popup","styleSettings"],popupDistanceRight:["popup","styleSettings"],popupDistanceTop:["popup","styleSettings"],popupDistanceBottom:["popup","styleSettings"],popupDurationIn:["popup","transitionSettings"],popupDurationOut:["popup","transitionSettings"],popupDelayIn:["popup","transitionSettings"],popupEaseIn:["popup","transitionSettings"],popupEaseOut:["popup","transitionSettings"],popupTransitionIn:["popup","transitionSettings"],popupTransitionOut:["popup","transitionSettings"],popupCustomTransitionIn:["popup","transitionSettings"],popupCustomTransitionOut:["popup","transitionSettings"],popupOverlayBackground:["overlay","styleSettings"],popupOverlayDurationIn:["overlay","transitionSettings"],popupOverlayDurationOut:["overlay","transitionSettings"],popupOverlayEaseIn:["overlay","transitionSettings"],popupOverlayEaseOut:["overlay","transitionSettings"],popupOverlayTransitionIn:["overlay","transitionSettings"],popupOverlayTransitionOut:["overlay","transitionSettings"]}},o.state={initialized:!1,openedAtLeastOnce:!1,is:null},o.init=function(){var t,s,e,i;for(i in o.pluginDefaults.keys)t=o[o.pluginDefaults.keys[i][0]][o.pluginDefaults.keys[i][1]],n.o.hasOwnProperty(i)&&(s=(s=i.split("popup")[1]).substr(0,1).toLowerCase()+s.substr(1),n.o[i]!==t[s]&&(-1!==(e=s.toLowerCase()).indexOf("ease")&&(n.o[i]=n.functions.convert.easing(n.o[i])),-1===e.indexOf("duration")&&-1===e.indexOf("delay")||"number"!=typeof n.o[i]||(n.o[i]/=1e3),t[s]=n.o[i]));o.plugin.setOptions(),o.slider.setOptions(),o.popup.createMarkup(),o.popup.setStyles(),o.popup.setTransitions(),o.slider.setStyles(),o.overlay.createMarkup(),o.overlay.setTransitions(),o.events.set(),o.state.initialized=!0},o.plugin={settings:{showOnClick:!1,showOnScroll:!1,showOnLeave:!1,showOnIdle:!1,showOnTimeout:!1,closeOnScroll:!1,closeOnTimeout:!1,closeOnSliderEnd:!1,closeOnEsc:!1,showOnce:!0,disableOverlay:!1,showCloseButton:!0,closeButtonStyle:"",overlayClickToClose:!0,startSliderImmediately:!1,resetOnClose:"slide"},setOptions:function(){this.settings.$clickTriggerElements=l(this.settings.showOnClick).add('[data-ls-popup-trigger-for="'+e.attr("id")+'"], [href="#'+e.attr("id")+'"], .'+e.attr("id")),l('[href="#'+e.attr("id")+'"]').on("click."+o.pluginDefaults.eventNamespace+i,function(t){t.preventDefault()}),e[0].style.width&&-1!==e[0].style.width.indexOf("px")&&!n.o.popupWidth&&(o.popup.styleSettings.width=parseInt(e[0].style.width)),e[0].style.height&&-1!==e[0].style.height.indexOf("px")&&!n.o.popupHeight&&(o.popup.styleSettings.height=parseInt(e[0].style.height)),!n.o.popupPositionHorizontal||"left"!==n.o.popupPositionHorizontal&&"right"!==n.o.popupPositionHorizontal||(o.popup.styleSettings.positionHorizontal=n.o.popupPositionHorizontal),"fullwidth"===n.o.type&&(o.popup.styleSettings.positionHorizontal="left"),!n.o.popupPositionVertical||"top"!==n.o.popupPositionVertical&&"bottom"!==n.o.popupPositionVertical||(o.popup.styleSettings.positionVertical=n.o.popupPositionVertical),n.o.popupDistanceLeft&&(o.popup.styleSettings.distanceLeft=n.o.popupDistanceLeft),n.o.popupDistanceRight&&(o.popup.styleSettings.distanceRight=n.o.popupDistanceRight),n.o.popupDistanceTop&&(o.popup.styleSettings.distanceTop=n.o.popupDistanceTop),n.o.popupDistanceBottom&&(o.popup.styleSettings.distanceBottom=n.o.popupDistanceBottom),o.plugin.settings.closeOnSliderEnd&&e.on("slideChangeWillStart.layerSlider",function(t,s){if(s.slides.current.index===s.slides.count)return o.events.hide(),!1})}},o.overlay={styleSettings:{overlayBackground:"rgba(0,0,0,.85)"},transitionSettings:{overlayDurationIn:.4,overlayDurationOut:.4,overlayEaseIn:n.gsap.Quint.easeIn,overlayEaseOut:n.gsap.Quint.easeIn,overlayTransitionIn:"fade",overlayTransitionOut:"fade"},createMarkup:function(){o.$overlay=l("<div>").addClass("ls-popup-overlay").css({background:this.styleSettings.overlayBackground}).insertBefore(o.$popup)},setTransitions:function(){this.transitionSettings.styleInFrom={opacity:1,display:"block"},this.transitionSettings.styleInTo={ease:this.transitionSettings.overlayEaseIn,opacity:1,x:0,y:0,z:0,rotation:0,rotationX:0,rotationY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,borderRadius:0},this.transitionSettings.styleOutTo={ease:this.transitionSettings.overlayEaseOut,onComplete:function(){n.gsap.TweenMax.set(o.$overlay[0],{display:"none",x:0,y:0,opacity:0})}}},show:function(){switch(this.transitionSettings.overlayTransitionIn.toLowerCase()){default:case"fade":this.transitionSettings.styleInFrom.opacity=0;break;case"slidefromtop":this.transitionSettings.styleInFrom.y=-a.viewport.height;break;case"slidefrombottom":this.transitionSettings.styleInFrom.y=a.viewport.height;break;case"slidefromleft":this.transitionSettings.styleInFrom.x=-a.viewport.width;break;case"slidefromright":this.transitionSettings.styleInFrom.x=a.viewport.width;break;case"fadefromtopleft":this.transitionSettings.styleInFrom.x=-a.viewport.width,this.transitionSettings.styleInFrom.y=-a.viewport.height,this.transitionSettings.styleInFrom.opacity=0;break;case"fadefromtopright":this.transitionSettings.styleInFrom.x=a.viewport.width,this.transitionSettings.styleInFrom.y=-a.viewport.height,this.transitionSettings.styleInFrom.opacity=0;break;case"fadefrombottomleft":this.transitionSettings.styleInFrom.x=-a.viewport.width,this.transitionSettings.styleInFrom.y=a.viewport.height,this.transitionSettings.styleInFrom.opacity=0;break;case"fadefrombottomright":this.transitionSettings.styleInFrom.x=a.viewport.width,this.transitionSettings.styleInFrom.y=a.viewport.height,this.transitionSettings.styleInFrom.opacity=0;break;case"scale":this.transitionSettings.styleInFrom.scaleX=0,this.transitionSettings.styleInFrom.scaleY=0}n.gsap.TweenMax.fromTo(o.$overlay[0],this.transitionSettings.overlayDurationIn,this.transitionSettings.styleInFrom,this.transitionSettings.styleInTo)},hide:function(){switch(this.transitionSettings.overlayTransitionOut.toLowerCase()){default:case"fade":this.transitionSettings.styleOutTo.opacity=0;break;case"slidetotop":this.transitionSettings.styleOutTo.y=-a.viewport.height;break;case"slidetobottom":this.transitionSettings.styleOutTo.y=a.viewport.height;break;case"slidetoleft":this.transitionSettings.styleOutTo.x=-a.viewport.width;break;case"slidetoright":this.transitionSettings.styleOutTo.x=a.viewport.width;break;case"fadetotopleft":this.transitionSettings.styleOutTo.x=-a.viewport.width,this.transitionSettings.styleOutTo.y=-a.viewport.height,this.transitionSettings.styleOutTo.opacity=0;break;case"fadetotopright":this.transitionSettings.styleOutTo.x=a.viewport.width,this.transitionSettings.styleOutTo.y=-a.viewport.height,this.transitionSettings.styleOutTo.opacity=0;break;case"fadetobottomleft":this.transitionSettings.styleOutTo.x=-a.viewport.width,this.transitionSettings.styleOutTo.y=a.viewport.height,this.transitionSettings.styleOutTo.opacity=0;break;case"fadetobottomright":this.transitionSettings.styleOutTo.x=a.viewport.width,this.transitionSettings.styleOutTo.y=a.viewport.height,this.transitionSettings.styleOutTo.opacity=0;break;case"scale":this.transitionSettings.styleOutTo.scaleX=0,this.transitionSettings.styleOutTo.scaleY=0}n.gsap.TweenMax.to(o.$overlay[0],this.transitionSettings.overlayDurationOut,this.transitionSettings.styleOutTo)}},o.popup={styleSettings:{width:640,height:360,fitWidth:!1,fitHeight:!1,customStyle:"",positionHorizontal:"center",positionVertical:"middle",distanceLeft:10,distanceRight:10,distanceTop:10,distanceBottom:10},transitionSettings:{durationIn:1,durationOut:.5,delayIn:.2,easeIn:n.gsap.Quint.easeInOut,easeOut:n.gsap.Quint.easeIn,transitionIn:"fade",transitionOut:"fade",customTransitionIn:!1,customTransitionOut:!1},createMarkup:function(){var t=e.parent().is(".ls-popup")?e.parent():l('<div class="ls-popup">');l("body").append(t.append(l('<div class="ls-popup-inner">').append(e))),e.attr("style",e.attr("style")+"; "+o.popup.styleSettings.customStyle),o.$inner=e.parent(),o.$popup=o.$inner.parent(),o.plugin.settings.showCloseButton&&e.append('<div class="ls-popup-close-button" style="'+o.plugin.settings.closeButtonStyle+'"></div>')},setStyles:function(){o.$popup.css({left:o.popup.styleSettings.distanceLeft,right:o.popup.styleSettings.distanceRight,top:o.popup.styleSettings.distanceTop,bottom:o.popup.styleSettings.distanceBottom}),o.$inner.css({maxWidth:n.slider.initial?n.slider.initial.maxWidth:e[0].style.maxWidth||e.css("max-width"),maxHeight:n.slider.initial&&n.slider.initial.maxHeight?n.slider.initial.maxHeight:e[0].style.maxHeight||e.css("max-height"),width:o.popup.styleSettings.width,height:o.popup.styleSettings.height})},setTransitions:function(){this.transitionSettings.styleInFrom={transformPerspective:500,transformOrigin:"50% 50%"},"object"==typeof this.transitionSettings.customTransitionIn&&(this.transitionSettings.styleInFrom=l.extend({},this.transitionSettings.styleInFrom,this.transitionSettings.customTransitionIn)),this.transitionSettings.styleInTo={opacity:1,x:0,y:0,z:0,rotation:0,rotationX:0,rotationY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,delay:this.transitionSettings.delayIn,ease:this.transitionSettings.easeIn,onStart:function(){o.state.is="opening",o.plugin.settings.startSliderImmediately&&e.layerSlider("resumePopup")},onComplete:function(){n.api.hasEvent("popupDidOpen")&&n.api.triggerEvent("popupDidOpen",n.api.eventData()),o.state.openedAtLeastOnce=!0,o.state.is="opened",n.slider.state.popupShouldStart=!0,(!o.plugin.settings.startSliderImmediately||o.plugin.settings.startSliderImmediately&&0===o.popup.transitionSettings.durationIn)&&e.layerSlider("resumePopup"),"number"==typeof o.plugin.settings.closeOnTimeout&&setTimeout(function(){o.events.hide()},1e3*o.plugin.settings.closeOnTimeout),(o.plugin.settings.showOnScroll||o.plugin.settings.closeOnScroll)&&o.events.checkScrollPositions()}},this.transitionSettings.styleOutTo={ease:this.transitionSettings.easeOut,transformOrigin:"50% 50%",onStart:function(){o.state.is="closing"},onComplete:function(){o.plugin.settings.startSliderImmediately&&e.layerSlider("pause"),o.$popup.removeClass("ls-popup-visible"),n.slider.state.popupIsVisible=!1,n.slider.state.popupShouldStart=!1,o.plugin.settings.showOnce?(n.api.hasEvent("popupDidClose")&&n.api.triggerEvent("popupDidClose",n.api.eventData()),o.events.destroy()):(n.gsap.TweenMax.set(e[0],{opacity:1,x:0,y:0,z:0,rotation:0,rotationX:0,rotationY:0,scaleX:1,scaleY:1,skewX:0,skewY:0}),o.plugin.settings.resetOnClose&&e.layerSlider("resetSlide"),"slider"===o.plugin.settings.resetOnClose&&(e.layerSlider("fastChangeTo",1),n.slideshow.state.pausedByLastCycle&&(n.slideshow.state.pausedByLastCycle=!1,n.slideshow.state.paused=!1,n.slideshow.state.running=!0)),(o.plugin.settings.showOnScroll||o.plugin.settings.closeOnScroll)&&o.events.checkScrollPositions(),n.api.hasEvent("popupDidClose")&&n.api.triggerEvent("popupDidClose",n.api.eventData())),n.slides[n.slides.current.index||1].data.hasSmartBG&&(n.transitions.layers.timeline.forceRestart=!0),o.state.is="closed"}},"object"==typeof this.transitionSettings.customTransitionOut&&(this.transitionSettings.styleOutTo=l.extend({},this.transitionSettings.styleOutTo,this.transitionSettings.customTransitionOut))},show:function(){if(n.slider.shouldResize=!0,n.slider.state.popupIsVisible=!0,n.slider.state.popupShouldStart=!!o.plugin.settings.startSliderImmediately,o.$popup.addClass("ls-popup-visible"),l(window).trigger("resize."+i),o.events.resize(),"object"!=typeof this.transitionSettings.customTransitionIn)switch(this.transitionSettings.transitionIn.toLowerCase()){default:case"fade":this.transitionSettings.styleInFrom.opacity=0;break;case"slidefromtop":this.transitionSettings.styleInFrom.y=a.scroll.top-(n.slider.height+n.slider.offset.top);break;case"slidefrombottom":this.transitionSettings.styleInFrom.y=a.scroll.top+a.viewport.height-n.slider.offset.top;break;case"slidefromleft":this.transitionSettings.styleInFrom.x=a.scroll.left-(n.slider.width+n.slider.offset.left);break;case"slidefromright":this.transitionSettings.styleInFrom.x=a.scroll.left+a.viewport.width-n.slider.offset.left;break;case"rotatefromtop":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.y=-n.slider.height/2,this.transitionSettings.styleInFrom.rotationX=30,this.transitionSettings.styleInTo.ease=n.gsap.Quint.easeOut;break;case"rotatefrombottom":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.y=n.slider.height/2,this.transitionSettings.styleInFrom.rotationX=-30,this.transitionSettings.styleInTo.ease=n.gsap.Quint.easeOut;break;case"rotatefromleft":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.x=-n.slider.width/2,this.transitionSettings.styleInFrom.rotationY=-30,this.transitionSettings.styleInTo.ease=n.gsap.Quint.easeOut;break;case"rotatefromright":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.x=n.slider.width/2,this.transitionSettings.styleInFrom.rotationY=30,this.transitionSettings.styleInTo.ease=n.gsap.Quint.easeOut;break;case"scalefromtop":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.scaleY=1.5,this.transitionSettings.styleInFrom.y=-n.slider.height/4,this.transitionSettings.styleInFrom.transformOrigin="50% 100%",this.transitionSettings.styleInTo.ease=n.gsap.Back.easeOut;break;case"scalefrombottom":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.scaleY=1.5,this.transitionSettings.styleInFrom.y=n.slider.height/4,this.transitionSettings.styleInFrom.transformOrigin="50% 0",this.transitionSettings.styleInTo.ease=n.gsap.Back.easeOut;break;case"scalefromleft":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.scaleX=1.5,this.transitionSettings.styleInFrom.x=-n.slider.width/4,this.transitionSettings.styleInFrom.transformOrigin="100% 50%",this.transitionSettings.styleInTo.ease=n.gsap.Back.easeOut;break;case"scalefromright":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.scaleX=1.5,this.transitionSettings.styleInFrom.x=n.slider.width/4,this.transitionSettings.styleInFrom.transformOrigin="0 50%",this.transitionSettings.styleInTo.ease=n.gsap.Back.easeOut;break;case"scale":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.scaleX=.5,this.transitionSettings.styleInFrom.scaleY=.5;break;case"spin":this.transitionSettings.styleInFrom.rotation=360,this.transitionSettings.styleInFrom.scaleX=0,this.transitionSettings.styleInFrom.scaleY=0,this.transitionSettings.styleInTo.ease=n.gsap.Quart.easeOut;break;case"spinx":this.transitionSettings.styleInFrom.rotationX=360,this.transitionSettings.styleInFrom.scaleX=0,this.transitionSettings.styleInFrom.scaleY=0,this.transitionSettings.styleInTo.ease=n.gsap.Quart.easeOut;break;case"spiny":this.transitionSettings.styleInFrom.rotationY=360,this.transitionSettings.styleInFrom.scaleX=0,this.transitionSettings.styleInFrom.scaleY=0,this.transitionSettings.styleInTo.ease=n.gsap.Quart.easeOut;break;case"elastic":this.transitionSettings.styleInFrom.opacity=0,this.transitionSettings.styleInFrom.scaleX=1.2,this.transitionSettings.styleInFrom.scaleY=.8,this.transitionSettings.styleInTo.ease=n.gsap.Elastic.easeOut}e.css({transformOrigin:this.transitionSettings.styleInFrom.transformOrigin}),n.gsap.TweenMax.fromTo(e[0],this.transitionSettings.durationIn,this.transitionSettings.styleInFrom,this.transitionSettings.styleInTo)},hide:function(){if("object"!=typeof this.transitionSettings.customTransitionOut)switch(this.transitionSettings.transitionOut.toLowerCase()){default:case"fade":this.transitionSettings.styleOutTo.opacity=0;break;case"slidetotop":this.transitionSettings.styleOutTo.y=a.scroll.top-(n.slider.height+n.slider.offset.top);break;case"slidetobottom":this.transitionSettings.styleOutTo.y=a.scroll.top+a.viewport.height-n.slider.offset.top;break;case"slidetoleft":this.transitionSettings.styleOutTo.x=a.scroll.left-(n.slider.width+n.slider.offset.left);break;case"slidetoright":this.transitionSettings.styleOutTo.x=a.scroll.left+a.viewport.width-n.slider.offset.left;break;case"rotatetotop":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.y=-n.slider.height/2,this.transitionSettings.styleOutTo.rotationX=30,this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"rotatetobottom":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.y=n.slider.height/2,this.transitionSettings.styleOutTo.rotationX=-30,this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"rotatetoleft":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.x=-n.slider.width/2,this.transitionSettings.styleOutTo.rotationY=-30,this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"rotatetoright":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.x=n.slider.width/2,this.transitionSettings.styleOutTo.rotationY=30,this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"scale":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.scaleX=.5,this.transitionSettings.styleOutTo.scaleY=.5;break;case"scaletotop":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.scaleY=1.5,this.transitionSettings.styleOutTo.y=-n.slider.height/4,this.transitionSettings.styleOutTo.transformOrigin="50% 100%",this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"scaletobottom":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.scaleY=1.5,this.transitionSettings.styleOutTo.y=n.slider.height/4,this.transitionSettings.styleOutTo.transformOrigin="50% 0",this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"scaletoleft":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.scaleX=1.5,this.transitionSettings.styleOutTo.x=-n.slider.width/4,this.transitionSettings.styleOutTo.transformOrigin="100% 50%",this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"scaletoright":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.scaleX=1.5,this.transitionSettings.styleOutTo.x=n.slider.width/4,this.transitionSettings.styleOutTo.transformOrigin="0 50%",this.transitionSettings.styleOutTo.ease=n.gsap.Quint.easeIn;break;case"spin":this.transitionSettings.styleOutTo.rotation=360,this.transitionSettings.styleOutTo.scaleX=0,this.transitionSettings.styleOutTo.scaleY=0,this.transitionSettings.styleOutTo.ease=n.gsap.Quart.easeIn;break;case"spinx":this.transitionSettings.styleOutTo.rotationX=360,this.transitionSettings.styleOutTo.scaleX=0,this.transitionSettings.styleOutTo.scaleY=0,this.transitionSettings.styleOutTo.ease=n.gsap.Quart.easeIn;break;case"spiny":this.transitionSettings.styleOutTo.rotationY=360,this.transitionSettings.styleOutTo.scaleX=0,this.transitionSettings.styleOutTo.scaleY=0,this.transitionSettings.styleOutTo.ease=n.gsap.Quart.easeIn;break;case"elastic":this.transitionSettings.styleOutTo.opacity=0,this.transitionSettings.styleOutTo.scaleX=1.2,this.transitionSettings.styleOutTo.scaleY=.8,this.transitionSettings.styleOutTo.ease=n.gsap.Back.easeInOut}o.plugin.settings.startSliderImmediately||e.layerSlider("pause"),e.css({transformOrigin:this.transitionSettings.styleOutTo.transformOrigin}),n.gsap.TweenMax.to(e[0],this.transitionSettings.durationOut,this.transitionSettings.styleOutTo),n.slider.shouldResize=!1}},o.slider={setOptions:function(){n.o.popupFitWidth||n.o.popupFitHeight?(n.o.type="fullsize",n.o.fullSizeMode="fitheight",n.o.popupFitWidth&&!n.o.popupFitHeight&&e.css({maxHeight:o.popup.styleSettings.height}),n.o.popupFitHeight&&!n.o.popupFitWidth&&e.css({maxWidth:o.popup.styleSettings.width})):(n.o.type="responsive",e.css({maxWidth:o.popup.styleSettings.width,maxHeight:o.popup.styleSettings.height})),n.slider.isPopup=!0,l.extend(n.o,s),o.plugin.settings.closeOnEsc&&(window._layerSlider.closePopupsOnEsc[i]=!0)},setStyles:function(){var t={};switch(o.popup.styleSettings.positionHorizontal){case"left":t.left=0,t.right="auto";break;case"right":t.left="auto",t.right=0;break;case"center":t.left="50%",t.right="auto"}switch(o.popup.styleSettings.positionVertical){case"top":t.top=0,t.bottom="auto";break;case"bottom":t.top="auto",t.bottom=0;break;case"middle":t.top="50%",t.bottom="auto"}e.css(t)}},o.events={set:function(){e.on("sliderDidLoad.layerSlider",function(t,s){o.plugin.settings.$clickTriggerElements&&0<o.plugin.settings.$clickTriggerElements.length&&o.plugin.settings.$clickTriggerElements.on("click."+o.pluginDefaults.eventNamespace+i,function(t){t.preventDefault(),o.$popup.hasClass("ls-popup-visible")?o.events.hide():(t=l(this).data("ls-popup-slide"),o.events.show(!(!t||!l.isNumeric(t))&&t))}),(o.plugin.settings.showOnScroll||o.plugin.settings.closeOnScroll)&&(o.events.scrollDirection="down",o.events.lastScrollPosition=a.scroll.top,o.events.checkScrollPositions(),l(window).on("scroll."+o.pluginDefaults.eventNamespace+i,function(){(a.scroll.top>=o.events.lastScrollPosition&&"up"===o.events.scrollDirection||a.scroll.top<=o.events.lastScrollPosition&&"down"===o.events.scrollDirection&&0!==a.scroll.top)&&o.events.switchScrollDirection(),o.events.lastScrollPosition=a.scroll.top,o.events.scrollDirection===o.events.popupShouldShowTriggerAnEventByScrolling&&("auto"===o.plugin.settings.scrollPosition?n.slider.offset.top>a.scroll.top&&n.slider.offset.top<a.scroll.top+a.viewport.height?"down"===o.events.scrollDirection&&(n.slider.state.popupIsVisible?o.events.popupShouldHide=!0:o.events.popupShouldShow=!0):"up"===o.events.scrollDirection&&(n.slider.state.popupIsVisible?o.events.popupShouldHide=!0:o.events.popupShouldShow=!0):"number"==typeof o.plugin.settings.scrollPosition?a.scroll.top>=o.plugin.settings.scrollPosition?"down"===o.events.scrollDirection&&(n.slider.state.popupIsVisible?o.events.popupShouldHide=!0:o.events.popupShouldShow=!0):"up"===o.events.scrollDirection&&(n.slider.state.popupIsVisible?o.events.popupShouldHide=!0:o.events.popupShouldShow=!0):-1!==o.plugin.settings.scrollPosition.indexOf("%")&&(parseInt(a.scroll.top/((a.document.height-a.viewport.height)/100))>parseInt(o.plugin.settings.scrollPosition)?"down"===o.events.scrollDirection&&(n.slider.state.popupIsVisible?o.events.popupShouldHide=!0:o.events.popupShouldShow=!0):"up"===o.events.scrollDirection&&(n.slider.state.popupIsVisible?o.events.popupShouldHide=!0:o.events.popupShouldShow=!0))),o.events.popupShouldShow?(o.events.popupShouldShow=!1,o.events.show(),o.events.checkScrollPositions()):o.events.popupShouldHide&&(o.events.popupShouldHide=!1,o.events.hide())}),l(window).trigger("scroll."+o.pluginDefaults.eventNamespace+i)),o.plugin.settings.showOnLeave&&(l(document).on("mousemove."+o.pluginDefaults.eventNamespace+i,function(t){o.events.mousePositionTop=t.pageY-a.scroll.top}),l("html").on("mouseleave."+o.pluginDefaults.eventNamespace+i,function(){o.events.mousePositionTop<100&&o.events.show()})),o.plugin.settings.showOnIdle&&"number"==typeof o.plugin.settings.showOnIdle&&(o.events.idleTime=0,o.events.startIdleTimer(),l(window).on("load."+o.pluginDefaults.eventNamespace+i,function(){o.events.startIdleTimer()}),l(document).on("mousemove."+o.pluginDefaults.eventNamespace+i+" keypress."+o.pluginDefaults.eventNamespace+i,function(){o.events.startIdleTimer()})),o.plugin.settings.hasOwnProperty("showOnTimeout")&&"number"==typeof o.plugin.settings.showOnTimeout&&o.events.startTimeout(),l(window).on("resize."+o.pluginDefaults.eventNamespace+i,function(){n.slider.state.popupIsVisible&&o.events.resize()}),l(window).on("orientationchange."+o.pluginDefaults.eventNamespace+i,function(){n.slider.state.popupIsVisible&&setTimeout(function(){n.resize.all(),o.events.resize()},750)})}),o.plugin.settings.overlayClickToClose&&o.$overlay.on("click."+o.pluginDefaults.eventNamespace+i,function(){o.events.hide()}),e.on("click."+o.pluginDefaults.eventNamespace+i,'[href="#popupclose"], [href="#popupClose"], [href="#closepopup"], [href="#closePopup"], .ls-popup-close, .ls-close-popup, .ls-popup-close-button, .ls-close-popup-button',function(t){t.preventDefault(),o.events.hide()}),l(document).on("click."+o.pluginDefaults.eventNamespace+i,".ls-close-all-popups-button",function(t){t.preventDefault(),o.events.hide()})},checkScrollPositions:function(){o.plugin.settings.closeOnScroll&&n.slider.state.popupIsVisible?o.plugin.settings.scrollPosition=o.plugin.settings.closeOnScroll:o.plugin.settings.showOnScroll&&!n.slider.state.popupIsVisible?o.plugin.settings.scrollPosition=o.plugin.settings.showOnScroll:o.plugin.settings.scrollPosition="","auto"===o.plugin.settings.scrollPosition?n.slider.offset.top>a.scroll.top&&n.slider.offset.top<a.scroll.top+a.viewport.height?o.events.popupShouldShowTriggerAnEventByScrolling="up":o.events.popupShouldShowTriggerAnEventByScrolling="down":"number"==typeof o.plugin.settings.scrollPosition?a.scroll.top>=o.plugin.settings.scrollPosition?o.events.popupShouldShowTriggerAnEventByScrolling="up":o.events.popupShouldShowTriggerAnEventByScrolling="down":-1!==o.plugin.settings.scrollPosition.indexOf("%")&&(parseInt(a.scroll.top/((a.document.height-a.viewport.height)/100))>parseInt(o.plugin.settings.scrollPosition)?o.events.popupShouldShowTriggerAnEventByScrolling="up":o.events.popupShouldShowTriggerAnEventByScrolling="down")},switchScrollDirection:function(){o.plugin.settings.scrollPosition&&("up"===o.events.scrollDirection?o.events.scrollDirection="down":o.events.scrollDirection="up")},startIdleTimer:function(){o.events.idleTimer&&clearTimeout(o.events.idleTimer),o.events.idleTimer=setTimeout(function(){o.events.show()},1e3*o.plugin.settings.showOnIdle)},startTimeout:function(){o.events.timeout&&clearTimeout(o.events.timeout),n.slider.state.popupIsWaitingForDelay=!0,o.events.timeout=setTimeout(function(){n.slider.state.popupIsWaitingForDelay=!1,n.slider.state.waitingForPopupTimer&&(n.slider.state.waitingForPopupTimer=!1,n.transitions.start()),o.events.show()},1e3*o.plugin.settings.showOnTimeout)},show:function(t){var s;e.hasClass("ls-forcehide")||n.slider.state.popupIsVisible||(n.api.hasEvent("popupWillOpen")&&n.api.triggerEvent("popupWillOpen",n.api.eventData()),s=function(){o.plugin.settings.disableOverlay||o.overlay.show(),o.popup.show()},t?e.layerSlider("fastChangeTo",t,s):s())},hide:function(){n.slider.state.popupIsVisible&&(n.api.hasEvent("popupWillClose")&&n.api.triggerEvent("popupWillClose",n.api.eventData()),o.plugin.settings.disableOverlay||o.overlay.hide(),o.popup.hide())},resize:function(){var t={};"center"===o.popup.styleSettings.positionHorizontal&&(t.marginLeft=-n.slider.width/2),"middle"===o.popup.styleSettings.positionVertical&&(t.marginTop=-n.slider.height/2),e.css(t);t=e.offset();n.slider.offset.left=t.left,n.slider.offset.top=t.top},destroy:function(){e.on("sliderDidRemove.layerSlider",function(){l([window,document,l("body")[0],l("html")[0],o.plugin.settings.$clickTriggerElements]).off(o.pluginDefaults.eventNamespace+i),o.$overlay.remove(),o.$popup.remove()}).layerSlider("destroy",!0)}}},l(document).on("keydown.lsGlobal",function(t){if(27===t.which)for(var s in window._layerSlider.closePopupsOnEsc)window._layerSliders[s].api.methods("closePopup")})}(jQuery);
if(!hs){var hs={lang:{cssDirection:"ltr",loadingText:"Loading...",loadingTitle:"Click to cancel",focusTitle:"Click to bring to front",fullExpandTitle:"Expand to actual size (f)",creditsText:"Powered by <i>Highslide JS</i>",creditsTitle:"Go to the Highslide JS homepage",restoreTitle:"Click to close image, click and drag to move. Use arrow keys for next and previous."},graphicsDir:"/frontend/web/highslide/graphics/",expandCursor:"zoomin.cur",restoreCursor:"zoomout.cur",expandDuration:250,restoreDuration:250,marginLeft:15,marginRight:15,marginTop:15,marginBottom:15,zIndexCounter:1001,loadingOpacity:.75,allowMultipleInstances:!0,numberOfImagesToPreload:5,outlineWhileAnimating:2,outlineStartOffset:3,padToMinWidth:!1,fullExpandPosition:"bottom right",fullExpandOpacity:1,showCredits:!0,creditsHref:"http://highslide.com/",creditsTarget:"_self",enableKeyListener:!0,openerTagNames:["a"],dragByHeading:!0,minWidth:200,minHeight:200,allowSizeReduction:!0,outlineType:"drop-shadow",preloadTheseImages:[],continuePreloading:!0,expanders:[],overrides:["allowSizeReduction","useBox","outlineType","outlineWhileAnimating","captionId","captionText","captionEval","captionOverlay","headingId","headingText","headingEval","headingOverlay","creditsPosition","dragByHeading","width","height","wrapperClassName","minWidth","minHeight","maxWidth","maxHeight","pageOrigin","slideshowGroup","easing","easingClose","fadeInOut","src"],overlays:[],idCounter:0,oPos:{x:["leftpanel","left","center","right","rightpanel"],y:["above","top","middle","bottom","below"]},mouse:{},headingOverlay:{},captionOverlay:{},timers:[],pendingOutlines:{},clones:{},onReady:[],uaVersion:/Trident\/4\.0/.test(navigator.userAgent)?8:parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1]),ie:document.all&&!window.opera,safari:/Safari/.test(navigator.userAgent),geckoMac:/Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),$:function(e){if(e)return document.getElementById(e)},push:function(e,t){e[e.length]=t},createElement:function(e,t,s,i,n){var h=document.createElement(e);return t&&hs.extend(h,t),n&&hs.setStyles(h,{padding:0,border:"none",margin:0}),s&&hs.setStyles(h,s),i&&i.appendChild(h),h},extend:function(e,t){for(var s in t)e[s]=t[s];return e},setStyles:function(e,t){for(var s in t)hs.ieLt9&&"opacity"==s?t[s]>.99?e.style.removeAttribute("filter"):e.style.filter="alpha(opacity="+100*t[s]+")":e.style[s]=t[s]},animate:function(e,t,s){var i,n,h;if("object"!=typeof s||null===s){var o=arguments;s={duration:o[2],easing:o[3],complete:o[4]}}for(var r in"number"!=typeof s.duration&&(s.duration=250),s.easing=Math[s.easing]||Math.easeInQuad,s.curAnim=hs.extend({},t),t){var a=new hs.fx(e,s,r);i=parseFloat(hs.css(e,r))||0,n=parseFloat(t[r]),h="opacity"!=r?"px":"",a.custom(i,n,h)}},css:function(e,t){if(e.style[t])return e.style[t];if(document.defaultView)return document.defaultView.getComputedStyle(e,null).getPropertyValue(t);"opacity"==t&&(t="filter");var s=e.currentStyle[t.replace(/\-(\w)/g,(function(e,t){return t.toUpperCase()}))];return"filter"==t&&(s=s.replace(/alpha\(opacity=([0-9]+)\)/,(function(e,t){return t/100}))),""===s?1:s},getPageSize:function(){var e=document,t=(window,e.compatMode&&"BackCompat"!=e.compatMode?e.documentElement:e.body),s=hs.ie&&(hs.uaVersion<9||"undefined"==typeof pageXOffset),i=s?t.clientWidth:e.documentElement.clientWidth||self.innerWidth,n=s?t.clientHeight:self.innerHeight;return hs.page={width:i,height:n,scrollLeft:s?t.scrollLeft:pageXOffset,scrollTop:s?t.scrollTop:pageYOffset},hs.page},getPosition:function(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e.offsetParent;)e=e.offsetParent,t.x+=e.offsetLeft,t.y+=e.offsetTop,e!=document.body&&e!=document.documentElement&&(t.x-=e.scrollLeft,t.y-=e.scrollTop);return t},expand:function(e,t,s,i,n){if(n||(n=null),e||(e=hs.createElement("a",n,{display:"none"},hs.container)),"function"==typeof e.getParams)return t;try{return new hs.Expander(e,t,s),!1}catch(e){return!0}},focusTopmost:function(){for(var e,t,s=0,i=-1,n=hs.expanders,h=0;h<n.length;h++)(e=n[h])&&(t=e.wrapper.style.zIndex)&&t>s&&(s=t,i=h);-1==i?hs.focusKey=-1:n[i].focus()},getParam:function(e,t){e.getParams=e.onclick;var s=e.getParams?e.getParams():null;return e.getParams=null,s&&void 0!==s[t]?s[t]:void 0!==hs[t]?hs[t]:null},getSrc:function(e){var t=hs.getParam(e,"src");return t||e.href},getNode:function(e){var t=hs.$(e),s=hs.clones[e];return t||s?s?s.cloneNode(!0):((s=t.cloneNode(!0)).id="",hs.clones[e]=s,t):null},discardElement:function(e){e&&hs.garbageBin.appendChild(e),hs.garbageBin.innerHTML=""},transit:function(e,t){var s=t||hs.getExpander();if(t=s,hs.upcoming)return!1;hs.last=s,hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);try{hs.upcoming=e,e.onclick()}catch(e){hs.last=hs.upcoming=null}try{t.close()}catch(e){}return!1},previousOrNext:function(e,t){var s=hs.getExpander(e);return!!s&&hs.transit(s.getAdjacentAnchor(t),s)},previous:function(e){return hs.previousOrNext(e,-1)},next:function(e){return hs.previousOrNext(e,1)},keyHandler:function(e){if(e||(e=window.event),e.target||(e.target=e.srcElement),void 0!==e.target.form)return!0;var t=hs.getExpander(),s=null;switch(e.keyCode){case 70:return t&&t.doFullExpand(),!0;case 32:case 34:case 39:case 40:s=1;break;case 8:case 33:case 37:case 38:s=-1;break;case 27:case 13:s=0}if(null!==s){if(hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler),!hs.enableKeyListener)return!0;if(e.preventDefault?e.preventDefault():e.returnValue=!1,t)return 0==s?t.close():hs.previousOrNext(t.key,s),!1}return!0},registerOverlay:function(e){hs.push(hs.overlays,hs.extend(e,{hsId:"hsId"+hs.idCounter++}))},getWrapperKey:function(e,t){var s,i=/^highslide-wrapper-([0-9]+)$/;for(s=e;s.parentNode;){if(s.id&&i.test(s.id))return s.id.replace(i,"$1");s=s.parentNode}if(!t)for(s=e;s.parentNode;){if(s.tagName&&hs.isHsAnchor(s))for(var n=0;n<hs.expanders.length;n++){var h=hs.expanders[n];if(h&&h.a==s)return n}s=s.parentNode}return null},getExpander:function(e,t){return void 0===e?hs.expanders[hs.focusKey]||null:"number"==typeof e?hs.expanders[e]||null:("string"==typeof e&&(e=hs.$(e)),hs.expanders[hs.getWrapperKey(e,t)]||null)},isHsAnchor:function(e){return e.onclick&&e.onclick.toString().replace(/\s/g," ").match(/hs.(htmlE|e)xpand/)},reOrder:function(){for(var e=0;e<hs.expanders.length;e++)hs.expanders[e]&&hs.expanders[e].isExpanded&&hs.focusTopmost()},mouseClickHandler:function(e){if(e||(e=window.event),e.button>1)return!0;e.target||(e.target=e.srcElement);for(var t=e.target;t.parentNode&&!/highslide-(image|move|html|resize)/.test(t.className);)t=t.parentNode;var s=hs.getExpander(t);if(s&&(s.isClosing||!s.isExpanded))return!0;if(s&&"mousedown"==e.type){if(e.target.form)return!0;var i=t.className.match(/highslide-(image|move|resize)/);if(i)return hs.dragArgs={exp:s,type:i[1],left:s.x.pos,width:s.x.size,top:s.y.pos,height:s.y.size,clickX:e.clientX,clickY:e.clientY},hs.addEventListener(document,"mousemove",hs.dragHandler),e.preventDefault&&e.preventDefault(),/highslide-(image|html)-blur/.test(s.content.className)&&(s.focus(),hs.hasFocused=!0),!1}else if("mouseup"==e.type)if(hs.removeEventListener(document,"mousemove",hs.dragHandler),hs.dragArgs){hs.styleRestoreCursor&&"image"==hs.dragArgs.type&&(hs.dragArgs.exp.content.style.cursor=hs.styleRestoreCursor);var n=hs.dragArgs.hasDragged;n||hs.hasFocused||/(move|resize)/.test(hs.dragArgs.type)?(n||!n&&hs.hasHtmlExpanders)&&hs.dragArgs.exp.doShowHide("hidden"):s.close(),hs.hasFocused=!1,hs.dragArgs=null}else/highslide-image-blur/.test(t.className)&&(t.style.cursor=hs.styleRestoreCursor);return!1},dragHandler:function(e){if(!hs.dragArgs)return!0;e||(e=window.event);var t=hs.dragArgs,s=t.exp;t.dX=e.clientX-t.clickX,t.dY=e.clientY-t.clickY;var i=Math.sqrt(Math.pow(t.dX,2)+Math.pow(t.dY,2));return t.hasDragged||(t.hasDragged="image"!=t.type&&i>0||i>(hs.dragSensitivity||5)),t.hasDragged&&e.clientX>5&&e.clientY>5&&("resize"==t.type?s.resize(t):(s.moveTo(t.left+t.dX,t.top+t.dY),"image"==t.type&&(s.content.style.cursor="move"))),!1},wrapperMouseHandler:function(e){try{e||(e=window.event);var t=/mouseover/i.test(e.type);e.target||(e.target=e.srcElement),e.relatedTarget||(e.relatedTarget=t?e.fromElement:e.toElement);var s=hs.getExpander(e.target);if(!s.isExpanded)return;if(!s||!e.relatedTarget||hs.getExpander(e.relatedTarget,!0)==s||hs.dragArgs)return;for(var i=0;i<s.overlays.length;i++)n=void 0,(n=hs.$("hsId"+s.overlays[i]))&&n.hideOnMouseOut&&(t&&hs.setStyles(n,{visibility:"visible",display:""}),hs.animate(n,{opacity:t?n.opacity:0},n.dur))}catch(e){}var n},addEventListener:function(e,t,s){e==document&&"ready"==t&&hs.push(hs.onReady,s);try{e.addEventListener(t,s,!1)}catch(i){try{e.detachEvent("on"+t,s),e.attachEvent("on"+t,s)}catch(i){e["on"+t]=s}}},removeEventListener:function(e,t,s){try{e.removeEventListener(t,s,!1)}catch(i){try{e.detachEvent("on"+t,s)}catch(s){e["on"+t]=null}}},preloadFullImage:function(e){if(hs.continuePreloading&&hs.preloadTheseImages[e]&&"undefined"!=hs.preloadTheseImages[e]){var t=document.createElement("img");t.onload=function(){t=null,hs.preloadFullImage(e+1)},t.src=hs.preloadTheseImages[e]}},preloadImages:function(e){e&&"object"!=typeof e&&(hs.numberOfImagesToPreload=e);for(var t=hs.getAnchors(),s=0;s<t.images.length&&s<hs.numberOfImagesToPreload;s++)hs.push(hs.preloadTheseImages,hs.getSrc(t.images[s]));if(hs.outlineType?new hs.Outline(hs.outlineType,(function(){hs.preloadFullImage(0)})):hs.preloadFullImage(0),hs.restoreCursor)hs.createElement("img",{src:hs.graphicsDir+hs.restoreCursor})},init:function(){if(!hs.container){for(var e in hs.ieLt7=hs.ie&&hs.uaVersion<7,hs.ieLt9=hs.ie&&hs.uaVersion<9,hs.getPageSize(),hs.langDefaults)void 0!==hs[e]?hs.lang[e]=hs[e]:void 0===hs.lang[e]&&void 0!==hs.langDefaults[e]&&(hs.lang[e]=hs.langDefaults[e]);hs.container=hs.createElement("div",{className:"highslide-container"},{position:"absolute",left:0,top:0,width:"100%",zIndex:hs.zIndexCounter,direction:"ltr"},document.body,!0),hs.loading=hs.createElement("a",{className:"highslide-loading",title:hs.lang.loadingTitle,innerHTML:hs.lang.loadingText,href:"javascript:;"},{position:"absolute",top:"-9999px",opacity:hs.loadingOpacity,zIndex:1},hs.container),hs.garbageBin=hs.createElement("div",null,{display:"none"},hs.container),Math.linearTween=function(e,t,s,i){return s*e/i+t},Math.easeInQuad=function(e,t,s,i){return s*(e/=i)*e+t},hs.hideSelects=hs.ieLt7,hs.hideIframes=window.opera&&hs.uaVersion<9||"KDE"==navigator.vendor||hs.ieLt7&&hs.uaVersion<5.5}},ready:function(){if(!hs.isReady){hs.isReady=!0;for(var e=0;e<hs.onReady.length;e++)hs.onReady[e]()}},updateAnchors:function(){for(var e,t,s,i=[],n=[],h={},o=0;o<hs.openerTagNames.length;o++){t=document.getElementsByTagName(hs.openerTagNames[o]);for(var r=0;r<t.length;r++)if(e=t[r],s=hs.isHsAnchor(e)){hs.push(i,e),"hs.expand"==s[0]&&hs.push(n,e);var a=hs.getParam(e,"slideshowGroup")||"none";h[a]||(h[a]=[]),hs.push(h[a],e)}}return hs.anchors={all:i,groups:h,images:n},hs.anchors},getAnchors:function(){return hs.anchors||hs.updateAnchors()},close:function(e){var t=hs.getExpander(e);return t&&t.close(),!1},fx:function(e,t,s){this.options=t,this.elem=e,this.prop=s,t.orig||(t.orig={})}};hs.fx.prototype={update:function(){(hs.fx.step[this.prop]||hs.fx.step._default)(this),this.options.step&&this.options.step.call(this.elem,this.now,this)},custom:function(e,t,s){this.startTime=(new Date).getTime(),this.start=e,this.end=t,this.unit=s,this.now=this.start,this.pos=this.state=0;var i=this;function n(e){return i.step(e)}n.elem=this.elem,n()&&1==hs.timers.push(n)&&(hs.timerId=setInterval((function(){for(var e=hs.timers,t=0;t<e.length;t++)e[t]()||e.splice(t--,1);e.length||clearInterval(hs.timerId)}),13))},step:function(e){var t=(new Date).getTime();if(e||t>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;var s=!0;for(var i in this.options.curAnim)!0!==this.options.curAnim[i]&&(s=!1);return s&&this.options.complete&&this.options.complete.call(this.elem),!1}var n=t-this.startTime;return this.state=n/this.options.duration,this.pos=this.options.easing(n,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update(),!0}},hs.extend(hs.fx,{step:{opacity:function(e){hs.setStyles(e.elem,{opacity:e.now})},_default:function(e){try{e.elem.style&&null!=e.elem.style[e.prop]?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}catch(e){}}}}),hs.Outline=function(e,t){this.onLoad=t,this.outlineType=e;var s;hs.uaVersion;if(this.hasAlphaImageLoader=hs.ie&&hs.uaVersion<7,e){hs.init(),this.table=hs.createElement("table",{cellSpacing:0},{visibility:"hidden",position:"absolute",borderCollapse:"collapse",width:0},hs.container,!0);var i=hs.createElement("tbody",null,null,this.table,1);this.td=[];for(var n=0;n<=8;n++){n%3==0&&(s=hs.createElement("tr",null,{height:"auto"},i,!0)),this.td[n]=hs.createElement("td",null,null,s,!0);var h=4!=n?{lineHeight:0,fontSize:0}:{position:"relative"};hs.setStyles(this.td[n],h)}this.td[4].className=e+" highslide-outline",this.preloadGraphic()}else t&&t()},hs.Outline.prototype={preloadGraphic:function(){var e=hs.graphicsDir+(hs.outlinesDir||"outlines/")+this.outlineType+".png",t=hs.safari&&hs.uaVersion<525?hs.container:null;this.graphic=hs.createElement("img",null,{position:"absolute",top:"-9999px"},t,!0);var s=this;this.graphic.onload=function(){s.onGraphicLoad()},this.graphic.src=e},onGraphicLoad:function(){for(var e=this.offset=this.graphic.width/4,t=[[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],s={height:2*e+"px",width:2*e+"px"},i=0;i<=8;i++)if(t[i]){if(this.hasAlphaImageLoader){var n=1==i||7==i?"100%":this.graphic.width+"px",h=hs.createElement("div",null,{width:"100%",height:"100%",position:"relative",overflow:"hidden"},this.td[i],!0);hs.createElement("div",null,{filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+this.graphic.src+"')",position:"absolute",width:n,height:this.graphic.height+"px",left:t[i][0]*e+"px",top:t[i][1]*e+"px"},h,!0)}else hs.setStyles(this.td[i],{background:"url("+this.graphic.src+") "+t[i][0]*e+"px "+t[i][1]*e+"px"});!window.opera||3!=i&&5!=i||hs.createElement("div",null,s,this.td[i],!0),hs.setStyles(this.td[i],s)}this.graphic=null,hs.pendingOutlines[this.outlineType]&&hs.pendingOutlines[this.outlineType].destroy(),hs.pendingOutlines[this.outlineType]=this,this.onLoad&&this.onLoad()},setPosition:function(e,t,s,i,n){var h=this.exp;h.wrapper.style,t=t||0,e=e||{x:h.x.pos+t,y:h.y.pos+t,w:h.x.get("wsize")-2*t,h:h.y.get("wsize")-2*t};s&&(this.table.style.visibility=e.h>=4*this.offset?"visible":"hidden"),hs.setStyles(this.table,{left:e.x-this.offset+"px",top:e.y-this.offset+"px",width:e.w+2*this.offset+"px"}),e.w-=2*this.offset,e.h-=2*this.offset,hs.setStyles(this.td[4],{width:e.w>=0?e.w+"px":0,height:e.h>=0?e.h+"px":0}),this.hasAlphaImageLoader&&(this.td[3].style.height=this.td[5].style.height=this.td[4].style.height)},destroy:function(e){e?this.table.style.visibility="hidden":hs.discardElement(this.table)}},hs.Dimension=function(e,t){this.exp=e,this.dim=t,this.ucwh="x"==t?"Width":"Height",this.wh=this.ucwh.toLowerCase(),this.uclt="x"==t?"Left":"Top",this.lt=this.uclt.toLowerCase(),this.ucrb="x"==t?"Right":"Bottom",this.rb=this.ucrb.toLowerCase(),this.p1=this.p2=0},hs.Dimension.prototype={get:function(e){switch(e){case"loadingPos":return this.tpos+this.tb+(this.t-hs.loading["offset"+this.ucwh])/2;case"wsize":return this.size+2*this.cb+this.p1+this.p2;case"fitsize":return this.clientSize-this.marginMin-this.marginMax;case"maxsize":return this.get("fitsize")-2*this.cb-this.p1-this.p2;case"opos":return this.pos-(this.exp.outline?this.exp.outline.offset:0);case"osize":return this.get("wsize")+(this.exp.outline?2*this.exp.outline.offset:0);case"imgPad":return this.imgSize?Math.round((this.size-this.imgSize)/2):0}},calcBorders:function(){this.cb=(this.exp.content["offset"+this.ucwh]-this.t)/2,this.marginMax=hs["margin"+this.ucrb]},calcThumb:function(){this.t=this.exp.el[this.wh]?parseInt(this.exp.el[this.wh]):this.exp.el["offset"+this.ucwh],this.tpos=this.exp.tpos[this.dim],this.tb=(this.exp.el["offset"+this.ucwh]-this.t)/2,0!=this.tpos&&-1!=this.tpos||(this.tpos=hs.page[this.wh]/2+hs.page["scroll"+this.uclt])},calcExpanded:function(){var e=this.exp;this.justify="auto",this.pos=this.tpos-this.cb+this.tb,this.maxHeight&&"x"==this.dim&&(e.maxWidth=Math.min(e.maxWidth||this.full,e.maxHeight*this.full/e.y.full)),this.size=Math.min(this.full,e["max"+this.ucwh]||this.full),this.minSize=e.allowSizeReduction?Math.min(e["min"+this.ucwh],this.full):this.full,e.isImage&&e.useBox&&(this.size=e[this.wh],this.imgSize=this.full),"x"==this.dim&&hs.padToMinWidth&&(this.minSize=e.minWidth),this.marginMin=hs["margin"+this.uclt],this.scroll=hs.page["scroll"+this.uclt],this.clientSize=hs.page[this.wh]},setSize:function(e){var t=this.exp;t.isImage&&(t.useBox||hs.padToMinWidth)?(this.imgSize=e,this.size=Math.max(this.size,this.imgSize),t.content.style[this.lt]=this.get("imgPad")+"px"):this.size=e,t.content.style[this.wh]=e+"px",t.wrapper.style[this.wh]=this.get("wsize")+"px",t.outline&&t.outline.setPosition(),"x"==this.dim&&t.overlayBox&&t.sizeOverlayBox(!0)},setPos:function(e){this.pos=e,this.exp.wrapper.style[this.lt]=e+"px",this.exp.outline&&this.exp.outline.setPosition()}},hs.Expander=function(e,t,s,i){if(!document.readyState||!hs.ie||hs.isReady){this.a=e,this.custom=s,this.contentType=i||"image",this.isImage=!this.isHtml,hs.continuePreloading=!1,this.overlays=[],hs.init();for(var n=this.key=hs.expanders.length,h=0;h<hs.overrides.length;h++){var o=hs.overrides[h];this[o]=t&&void 0!==t[o]?t[o]:hs[o]}this.src||(this.src=e.href);var r=t&&t.thumbnailId?hs.$(t.thumbnailId):e;r=this.thumb=r.getElementsByTagName("img")[0]||r,this.thumbsUserSetId=r.id||e.id;for(h=0;h<hs.expanders.length;h++)if(hs.expanders[h]&&hs.expanders[h].a==e)return hs.expanders[h].focus(),!1;if(!hs.allowSimultaneousLoading)for(h=0;h<hs.expanders.length;h++)hs.expanders[h]&&hs.expanders[h].thumb!=r&&!hs.expanders[h].onLoadStarted&&hs.expanders[h].cancelLoading();if(hs.expanders[n]=this,hs.allowMultipleInstances||hs.upcoming||(hs.expanders[n-1]&&hs.expanders[n-1].close(),void 0!==hs.focusKey&&hs.expanders[hs.focusKey]&&hs.expanders[hs.focusKey].close()),this.el=r,this.tpos=this.pageOrigin||hs.getPosition(r),hs.getPageSize(),(this.x=new hs.Dimension(this,"x")).calcThumb(),(this.y=new hs.Dimension(this,"y")).calcThumb(),this.wrapper=hs.createElement("div",{id:"highslide-wrapper-"+this.key,className:"highslide-wrapper "+this.wrapperClassName},{visibility:"hidden",position:"absolute",zIndex:hs.zIndexCounter+=2},null,!0),this.wrapper.onmouseover=this.wrapper.onmouseout=hs.wrapperMouseHandler,"image"==this.contentType&&2==this.outlineWhileAnimating&&(this.outlineWhileAnimating=0),this.outlineType)if(hs.pendingOutlines[this.outlineType])this.connectOutline(),this[this.contentType+"Create"]();else{this.showLoading();var a=this;new hs.Outline(this.outlineType,(function(){a.connectOutline(),a[a.contentType+"Create"]()}))}else this[this.contentType+"Create"]();return!0}hs.addEventListener(document,"ready",(function(){new hs.Expander(e,t,s,i)}))},hs.Expander.prototype={error:function(e){hs.debug?alert("Line "+e.lineNumber+": "+e.message):window.location.href=this.src},connectOutline:function(){var e=this.outline=hs.pendingOutlines[this.outlineType];e.exp=this,e.table.style.zIndex=this.wrapper.style.zIndex-1,hs.pendingOutlines[this.outlineType]=null},showLoading:function(){if(!this.onLoadStarted&&!this.loading){this.loading=hs.loading;var e=this;this.loading.onclick=function(){e.cancelLoading()};e=this;var t=this.x.get("loadingPos")+"px",s=this.y.get("loadingPos")+"px";setTimeout((function(){e.loading&&hs.setStyles(e.loading,{left:t,top:s,zIndex:hs.zIndexCounter++})}),100)}},imageCreate:function(){var e=this,t=document.createElement("img");this.content=t,t.onload=function(){hs.expanders[e.key]&&e.contentLoaded()},hs.blockRightClick&&(t.oncontextmenu=function(){return!1}),t.className="highslide-image",hs.setStyles(t,{visibility:"hidden",display:"block",position:"absolute",maxWidth:"9999px",zIndex:3}),t.title=hs.lang.restoreTitle,hs.safari&&hs.uaVersion<525&&hs.container.appendChild(t),hs.ie&&hs.flushImgSize&&(t.src=null),t.src=this.src,this.showLoading()},contentLoaded:function(){try{if(!this.content)return;if(this.content.onload=null,this.onLoadStarted)return;this.onLoadStarted=!0;var e=this.x,t=this.y;this.loading&&(hs.setStyles(this.loading,{top:"-9999px"}),this.loading=null),e.full=this.content.width,t.full=this.content.height,hs.setStyles(this.content,{width:e.t+"px",height:t.t+"px"}),this.wrapper.appendChild(this.content),hs.container.appendChild(this.wrapper),e.calcBorders(),t.calcBorders(),hs.setStyles(this.wrapper,{left:e.tpos+e.tb-e.cb+"px",top:t.tpos+e.tb-t.cb+"px"}),this.getOverlays();var s=e.full/t.full;e.calcExpanded(),this.justify(e),t.calcExpanded(),this.justify(t),this.overlayBox&&this.sizeOverlayBox(0,1),this.allowSizeReduction&&(this.correctRatio(s),this.isImage&&this.x.full>(this.x.imgSize||this.x.size)&&(this.createFullExpand(),1==this.overlays.length&&this.sizeOverlayBox())),this.show()}catch(e){this.error(e)}},justify:function(e,t){e.target;var s=e==this.x?"x":"y",i=!1,n=e.exp.allowSizeReduction;if(e.pos=Math.round(e.pos-(e.get("wsize")-e.t)/2),e.pos<e.scroll+e.marginMin&&(e.pos=e.scroll+e.marginMin,i=!0),!t&&e.size<e.minSize&&(e.size=e.minSize,n=!1),e.pos+e.get("wsize")>e.scroll+e.clientSize-e.marginMax&&(!t&&i&&n?e.size=Math.min(e.size,e.get("y"==s?"fitsize":"maxsize")):e.get("wsize")<e.get("fitsize")?e.pos=e.scroll+e.clientSize-e.marginMax-e.get("wsize"):(e.pos=e.scroll+e.marginMin,!t&&n&&(e.size=e.get("y"==s?"fitsize":"maxsize")))),!t&&e.size<e.minSize&&(e.size=e.minSize,n=!1),e.pos<e.marginMin){var h=e.pos;e.pos=e.marginMin,n&&!t&&(e.size=e.size-(e.pos-h))}},correctRatio:function(e){var t=this.x,s=this.y,i=!1,n=Math.min(t.full,t.size),h=Math.min(s.full,s.size),o=this.useBox||hs.padToMinWidth;n/h>e?((n=h*e)<t.minSize&&(h=(n=t.minSize)/e),i=!0):n/h<e&&(h=n/e,i=!0),hs.padToMinWidth&&t.full<t.minSize?(t.imgSize=t.full,s.size=s.imgSize=s.full):this.useBox?(t.imgSize=n,s.imgSize=h):(t.size=n,s.size=h),i=this.fitOverlayBox(this.useBox?null:e,i),o&&s.size<s.imgSize&&(s.imgSize=s.size,t.imgSize=s.size*e),(i||o)&&(t.pos=t.tpos-t.cb+t.tb,t.minSize=t.size,this.justify(t,!0),s.pos=s.tpos-s.cb+s.tb,s.minSize=s.size,this.justify(s,!0),this.overlayBox&&this.sizeOverlayBox())},fitOverlayBox:function(e,t){var s=this.x,i=this.y;if(this.overlayBox)for(;i.size>this.minHeight&&s.size>this.minWidth&&i.get("wsize")>i.get("fitsize");)i.size-=10,e&&(s.size=i.size*e),this.sizeOverlayBox(0,1),t=!0;return t},show:function(){var e=this.x,t=this.y;this.doShowHide("hidden"),this.changeSize(1,{wrapper:{width:e.get("wsize"),height:t.get("wsize"),left:e.pos,top:t.pos},content:{left:e.p1+e.get("imgPad"),top:t.p1+t.get("imgPad"),width:e.imgSize||e.size,height:t.imgSize||t.size}},hs.expandDuration)},changeSize:function(e,t,s){this.outline&&!this.outlineWhileAnimating&&(e?this.outline.setPosition():this.outline.destroy()),e||this.destroyOverlays();var i=this,n=i.x,h=i.y,o=this.easing;e||(o=this.easingClose||o);var r=e?function(){i.outline&&(i.outline.table.style.visibility="visible"),setTimeout((function(){i.afterExpand()}),50)}:function(){i.afterClose()};e&&hs.setStyles(this.wrapper,{width:n.t+"px",height:h.t+"px"}),this.fadeInOut&&(hs.setStyles(this.wrapper,{opacity:e?0:1}),hs.extend(t.wrapper,{opacity:e})),hs.animate(this.wrapper,t.wrapper,{duration:s,easing:o,step:function(t,s){if(i.outline&&i.outlineWhileAnimating&&"top"==s.prop){var o=e?s.pos:1-s.pos,r={w:n.t+(n.get("wsize")-n.t)*o,h:h.t+(h.get("wsize")-h.t)*o,x:n.tpos+(n.pos-n.tpos)*o,y:h.tpos+(h.pos-h.tpos)*o};i.outline.setPosition(r,0,1)}}}),hs.animate(this.content,t.content,s,o,r),e&&(this.wrapper.style.visibility="visible",this.content.style.visibility="visible",this.a.className+=" highslide-active-anchor")},afterExpand:function(){this.isExpanded=!0,this.focus(),hs.upcoming&&hs.upcoming==this.a&&(hs.upcoming=null),this.prepareNextOutline();var e=hs.page,t=hs.mouse.x+e.scrollLeft,s=hs.mouse.y+e.scrollTop;this.mouseIsOver=this.x.pos<t&&t<this.x.pos+this.x.get("wsize")&&this.y.pos<s&&s<this.y.pos+this.y.get("wsize"),this.overlayBox&&this.showOverlays()},prepareNextOutline:function(){var e=this.key,t=this.outlineType;new hs.Outline(t,(function(){try{hs.expanders[e].preloadNext()}catch(e){}}))},preloadNext:function(){var e=this.getAdjacentAnchor(1);if(e&&e.onclick.toString().match(/hs\.expand/))hs.createElement("img",{src:hs.getSrc(e)})},getAdjacentAnchor:function(e){var t=this.getAnchorIndex(),s=hs.anchors.groups[this.slideshowGroup||"none"];return s&&s[t+e]||null},getAnchorIndex:function(){var e=hs.getAnchors().groups[this.slideshowGroup||"none"];if(e)for(var t=0;t<e.length;t++)if(e[t]==this.a)return t;return null},cancelLoading:function(){hs.discardElement(this.wrapper),hs.expanders[this.key]=null,this.loading&&(hs.loading.style.left="-9999px")},writeCredits:function(){this.credits=hs.createElement("a",{href:hs.creditsHref,target:hs.creditsTarget,className:"highslide-credits",innerHTML:hs.lang.creditsText,title:hs.lang.creditsTitle}),this.createOverlay({overlayId:this.credits,position:this.creditsPosition||"top left"})},getInline:function(types,addOverlay){for(var i=0;i<types.length;i++){var type=types[i],s=null;if(!this[type+"Id"]&&this.thumbsUserSetId&&(this[type+"Id"]=type+"-for-"+this.thumbsUserSetId),this[type+"Id"]&&(this[type]=hs.getNode(this[type+"Id"])),!this[type]&&!this[type+"Text"]&&this[type+"Eval"])try{s=eval(this[type+"Eval"])}catch(e){}if(!this[type]&&this[type+"Text"]&&(s=this[type+"Text"]),!this[type]&&!s&&(this[type]=hs.getNode(this.a["_"+type+"Id"]),!this[type]))for(var next=this.a.nextSibling;next&&!hs.isHsAnchor(next);){if(new RegExp("highslide-"+type).test(next.className||null)){next.id||(this.a["_"+type+"Id"]=next.id="hsId"+hs.idCounter++),this[type]=hs.getNode(next.id);break}next=next.nextSibling}if(!this[type]&&s&&(this[type]=hs.createElement("div",{className:"highslide-"+type,innerHTML:s})),addOverlay&&this[type]){var o={position:"heading"==type?"above":"below"};for(var x in this[type+"Overlay"])o[x]=this[type+"Overlay"][x];o.overlayId=this[type],this.createOverlay(o)}}},doShowHide:function(e){hs.hideSelects&&this.showHideElements("SELECT",e),hs.hideIframes&&this.showHideElements("IFRAME",e),hs.geckoMac&&this.showHideElements("*",e)},showHideElements:function(e,t){for(var s=document.getElementsByTagName(e),i="*"==e?"overflow":"visibility",n=0;n<s.length;n++)if("visibility"==i||"auto"==document.defaultView.getComputedStyle(s[n],"").getPropertyValue("overflow")||null!=s[n].getAttribute("hidden-by")){var h=s[n].getAttribute("hidden-by");if("visible"==t&&h)h=h.replace("["+this.key+"]",""),s[n].setAttribute("hidden-by",h),h||(s[n].style[i]=s[n].origProp);else if("hidden"==t){var o=hs.getPosition(s[n]);o.w=s[n].offsetWidth,o.h=s[n].offsetHeight;var r=o.x+o.w<this.x.get("opos")||o.x>this.x.get("opos")+this.x.get("osize"),a=o.y+o.h<this.y.get("opos")||o.y>this.y.get("opos")+this.y.get("osize"),l=hs.getWrapperKey(s[n]);r||a||l==this.key?h!="["+this.key+"]"&&hs.focusKey!=l||l==this.key?h&&h.indexOf("["+this.key+"]")>-1&&s[n].setAttribute("hidden-by",h.replace("["+this.key+"]","")):(s[n].setAttribute("hidden-by",""),s[n].style[i]=s[n].origProp||""):h?-1==h.indexOf("["+this.key+"]")&&s[n].setAttribute("hidden-by",h+"["+this.key+"]"):(s[n].setAttribute("hidden-by","["+this.key+"]"),s[n].origProp=s[n].style[i],s[n].style[i]="hidden")}}},focus:function(){this.wrapper.style.zIndex=hs.zIndexCounter+=2;for(var e=0;e<hs.expanders.length;e++)if(hs.expanders[e]&&e==hs.focusKey){var t=hs.expanders[e];t.content.className+=" highslide-"+t.contentType+"-blur",t.content.style.cursor=hs.ieLt7?"hand":"pointer",t.content.title=hs.lang.focusTitle}this.outline&&(this.outline.table.style.zIndex=this.wrapper.style.zIndex-1),this.content.className="highslide-"+this.contentType,this.content.title=hs.lang.restoreTitle,hs.restoreCursor&&(hs.styleRestoreCursor=window.opera?"pointer":"url("+hs.graphicsDir+hs.restoreCursor+"), pointer",hs.ieLt7&&hs.uaVersion<6&&(hs.styleRestoreCursor="hand"),this.content.style.cursor=hs.styleRestoreCursor),hs.focusKey=this.key,hs.addEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler)},moveTo:function(e,t){this.x.setPos(e),this.y.setPos(t)},resize:function(e){var t,s,i=e.width/e.height;t=Math.max(e.width+e.dX,Math.min(this.minWidth,this.x.full)),this.isImage&&Math.abs(t-this.x.full)<12&&(t=this.x.full),(s=t/i)<Math.min(this.minHeight,this.y.full)&&(s=Math.min(this.minHeight,this.y.full),this.isImage&&(t=s*i)),this.resizeTo(t,s)},resizeTo:function(e,t){this.y.setSize(t),this.x.setSize(e),this.wrapper.style.height=this.y.get("wsize")+"px"},close:function(){if(!this.isClosing&&this.isExpanded){this.isClosing=!0,hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);try{this.content.style.cursor="default",this.changeSize(0,{wrapper:{width:this.x.t,height:this.y.t,left:this.x.tpos-this.x.cb+this.x.tb,top:this.y.tpos-this.y.cb+this.y.tb},content:{left:0,top:0,width:this.x.t,height:this.y.t}},hs.restoreDuration)}catch(e){this.afterClose()}}},createOverlay:function(e){var t=e.overlayId;if("string"==typeof t&&(t=hs.getNode(t)),e.html&&(t=hs.createElement("div",{innerHTML:e.html})),t&&"string"!=typeof t){t.style.display="block",this.genOverlayBox();var s=e.width&&/^[0-9]+(px|%)$/.test(e.width)?e.width:"auto";/^(left|right)panel$/.test(e.position)&&!/^[0-9]+px$/.test(e.width)&&(s="200px");var i=hs.createElement("div",{id:"hsId"+hs.idCounter++,hsId:e.hsId},{position:"absolute",visibility:"hidden",width:s,direction:hs.lang.cssDirection||"",opacity:0},this.overlayBox,!0);i.appendChild(t),hs.extend(i,{opacity:1,offsetX:0,offsetY:0,dur:0===e.fade||!1===e.fade||2==e.fade&&hs.ie?0:250}),hs.extend(i,e),this.gotOverlays&&(this.positionOverlay(i),i.hideOnMouseOut&&!this.mouseIsOver||hs.animate(i,{opacity:i.opacity},i.dur)),hs.push(this.overlays,hs.idCounter-1)}},positionOverlay:function(e){var t=e.position||"middle center",s=e.offsetX,i=e.offsetY;e.parentNode!=this.overlayBox&&this.overlayBox.appendChild(e),/left$/.test(t)&&(e.style.left=s+"px"),/center$/.test(t)&&hs.setStyles(e,{left:"50%",marginLeft:s-Math.round(e.offsetWidth/2)+"px"}),/right$/.test(t)&&(e.style.right=-s+"px"),/^leftpanel$/.test(t)?(hs.setStyles(e,{right:"100%",marginRight:this.x.cb+"px",top:-this.y.cb+"px",bottom:-this.y.cb+"px",overflow:"auto"}),this.x.p1=e.offsetWidth):/^rightpanel$/.test(t)&&(hs.setStyles(e,{left:"100%",marginLeft:this.x.cb+"px",top:-this.y.cb+"px",bottom:-this.y.cb+"px",overflow:"auto"}),this.x.p2=e.offsetWidth),/^top/.test(t)&&(e.style.top=i+"px"),/^middle/.test(t)&&hs.setStyles(e,{top:"50%",marginTop:i-Math.round(e.offsetHeight/2)+"px"}),/^bottom/.test(t)&&(e.style.bottom=-i+"px"),/^above$/.test(t)?(hs.setStyles(e,{left:-this.x.p1-this.x.cb+"px",right:-this.x.p2-this.x.cb+"px",bottom:"100%",marginBottom:this.y.cb+"px",width:"auto"}),this.y.p1=e.offsetHeight):/^below$/.test(t)&&(hs.setStyles(e,{position:"relative",left:-this.x.p1-this.x.cb+"px",right:-this.x.p2-this.x.cb+"px",top:"100%",marginTop:this.y.cb+"px",width:"auto"}),this.y.p2=e.offsetHeight,e.style.position="absolute")},getOverlays:function(){this.getInline(["heading","caption"],!0),this.heading&&this.dragByHeading&&(this.heading.className+=" highslide-move"),hs.showCredits&&this.writeCredits();for(var e=0;e<hs.overlays.length;e++){var t=(n=hs.overlays[e]).thumbnailId,s=n.slideshowGroup;(!t&&!s||t&&t==this.thumbsUserSetId||s&&s===this.slideshowGroup)&&this.createOverlay(n)}var i=[];for(e=0;e<this.overlays.length;e++){var n=hs.$("hsId"+this.overlays[e]);/panel$/.test(n.position)?this.positionOverlay(n):hs.push(i,n)}for(e=0;e<i.length;e++)this.positionOverlay(i[e]);this.gotOverlays=!0},genOverlayBox:function(){this.overlayBox||(this.overlayBox=hs.createElement("div",{className:this.wrapperClassName},{position:"absolute",width:(this.x.size||(this.useBox?this.width:null)||this.x.full)+"px",height:(this.y.size||this.y.full)+"px",visibility:"hidden",overflow:"hidden",zIndex:hs.ie?4:"auto"},hs.container,!0))},sizeOverlayBox:function(e,t){var s=this.overlayBox,i=this.x,n=this.y;if(hs.setStyles(s,{width:i.size+"px",height:n.size+"px"}),e||t)for(var h=0;h<this.overlays.length;h++){var o=hs.$("hsId"+this.overlays[h]),r=hs.ieLt7||"BackCompat"==document.compatMode;o&&/^(above|below)$/.test(o.position)&&(r&&(o.style.width=s.offsetWidth+2*i.cb+i.p1+i.p2+"px"),n["above"==o.position?"p1":"p2"]=o.offsetHeight),o&&r&&/^(left|right)panel$/.test(o.position)&&(o.style.height=s.offsetHeight+2*n.cb+"px")}e&&(hs.setStyles(this.content,{top:n.p1+"px"}),hs.setStyles(s,{top:n.p1+n.cb+"px"}))},showOverlays:function(){var e=this.overlayBox;e.className="",hs.setStyles(e,{top:this.y.p1+this.y.cb+"px",left:this.x.p1+this.x.cb+"px",overflow:"visible"}),hs.safari&&(e.style.visibility="visible"),this.wrapper.appendChild(e);for(var t=0;t<this.overlays.length;t++){var s=hs.$("hsId"+this.overlays[t]);s.style.zIndex=s.zIndex||4,s.hideOnMouseOut&&!this.mouseIsOver||(s.style.visibility="visible",hs.setStyles(s,{visibility:"visible",display:""}),hs.animate(s,{opacity:s.opacity},s.dur))}},destroyOverlays:function(){this.overlays.length&&hs.discardElement(this.overlayBox)},createFullExpand:function(){this.fullExpandLabel=hs.createElement("a",{href:"javascript:hs.expanders["+this.key+"].doFullExpand();",title:hs.lang.fullExpandTitle,className:"highslide-full-expand"}),this.createOverlay({overlayId:this.fullExpandLabel,position:hs.fullExpandPosition,hideOnMouseOut:!0,opacity:hs.fullExpandOpacity})},doFullExpand:function(){try{this.fullExpandLabel&&hs.discardElement(this.fullExpandLabel),this.focus();var e=this.x.size,t=this.y.size;this.resizeTo(this.x.full,this.y.full);var s=this.x.pos-(this.x.size-e)/2;s<hs.marginLeft&&(s=hs.marginLeft);var i=this.y.pos-(this.y.size-t)/2;i<hs.marginTop&&(i=hs.marginTop),this.moveTo(s,i),this.doShowHide("hidden")}catch(e){this.error(e)}},afterClose:function(){this.a.className=this.a.className.replace("highslide-active-anchor",""),this.doShowHide("visible"),this.outline&&this.outlineWhileAnimating&&this.outline.destroy(),hs.discardElement(this.wrapper),hs.expanders[this.key]=null,hs.reOrder()}},hs.langDefaults=hs.lang;var HsExpander=hs.Expander;hs.ie&&window==window.top&&function(){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,50)}hs.ready()}(),hs.addEventListener(document,"DOMContentLoaded",hs.ready),hs.addEventListener(window,"load",hs.ready),hs.addEventListener(document,"ready",(function(){if(hs.expandCursor){var e=hs.createElement("style",{type:"text/css"},null,document.getElementsByTagName("HEAD")[0]),t="BackCompat"==document.compatMode;hs.expandCursor&&function(s,i){if(hs.ie&&(hs.uaVersion<9||t)){var n=document.styleSheets[document.styleSheets.length-1];"object"==typeof n.addRule&&n.addRule(s,i)}else e.appendChild(document.createTextNode(s+" {"+i+"}"))}(".highslide img","cursor: url("+hs.graphicsDir+hs.expandCursor+"), pointer !important;")}})),hs.addEventListener(window,"resize",(function(){hs.getPageSize()})),hs.addEventListener(document,"mousemove",(function(e){hs.mouse={x:e.clientX,y:e.clientY}})),hs.addEventListener(document,"mousedown",hs.mouseClickHandler),hs.addEventListener(document,"mouseup",hs.mouseClickHandler),hs.addEventListener(document,"ready",hs.getAnchors),hs.addEventListener(window,"load",hs.preloadImages)}
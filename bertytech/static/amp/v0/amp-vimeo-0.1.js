(self.AMP=self.AMP||[]).push({n:"amp-vimeo",v:"2004240001480",f:(function(AMP,_){
    var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;n=ca.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var fa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=fa.exec(a);){var d=ea(c[1],c[1]),e=c[2]?ea(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";
    function ha(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=p(c.location.originalHash||c.location.hash);d=d.spt;var h=p(c.location.search);q||(q=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"012004240001480");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||c.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:e,log:f.log,version:"2004240001480",
    rtvVersion:q,singlePassType:d};c=b.__AMP_MODE=c}return c};var ia=Object.prototype.toString;function r(a){return"[object Object]"===ia.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},ja=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ka(a){if(self.document&&self.document.head&&(!self.location||!ja.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||ka("runtime-host");v.geoApiUrl||ka("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var la=Object.prototype.hasOwnProperty;function z(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};C({c:!0,v:!0,a:!0,ad:!0,action:!0});function ma(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
    e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,na(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=p(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var h=c;return!!h[b]}
    function na(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(w.dev)a=w.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var oa={},E=(oa["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},oa);function F(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;var f=d;if(ma(f,"ampdoc-fie")){f.__AMP_EXPERIMENT_BRANCHES=f.__AMP_EXPERIMENT_BRANCHES||{};for(var h in E)if(la.call(E,h)&&!la.call(f.__AMP_EXPERIMENT_BRANCHES,h))if(E[h].isTrafficEligible&&E[h].isTrafficEligible(f)){if(!f.__AMP_EXPERIMENT_BRANCHES[h]&&ma(f,h)){var l=E[h].branches;f.__AMP_EXPERIMENT_BRANCHES[h]=l[Math.floor(Math.random()*l.length)]||null}}else f.__AMP_EXPERIMENT_BRANCHES[h]=null;f="21065002"===
    (f.__AMP_EXPERIMENT_BRANCHES?f.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var k=f;e&&!k?b=G(c,b)?H(c,b):null:(a=I(a),a=pa(a),b=G(a,b)?H(a,b):null);return b}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function K(a,b){var c=I(a);c=pa(c);return H(c,b)}function I(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function pa(a){a=I(a);return a.isSingleDoc()?a.win:a}
    function H(a,b){G(a,b);var c=qa(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function qa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function G(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
     https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    function L(a){a.parentElement&&a.parentElement.removeChild(a)};function ra(a){a.signals().signal("user-interacted")};var M,sa="Webkit webkit Moz moz ms O o".split(" ");function ta(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(D(h,"--"))f=h;else{M||(M=z());var l=M[h];if(!l){l=h;if(void 0===f[h]){var k=h;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var A=0;A<sa.length;A++){var B=sa[A]+k;if(void 0!==f[B]){k=B;break b}}k=""}void 0!==f[k]&&(l=k)}M[h]=l}f=l}f&&(D(f,"--")?d.style.setProperty(f,e):d.style[f]=e)}};function ua(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;ta(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var N=null;var O;function va(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return wa}function wa(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function xa(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var ya=["<iframe frameborder=0 allowfullscreen></iframe>"];function za(a,b){var c=Aa;if(null==c[b])return!1;var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(c){a.dispatchCustomEvent(c)});return!0};var P;function Ba(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(B){throw self.__AMP_REPORT_ERROR(B),B;}};var l=Ca(),k=!1;d&&(k=d.capture);e.addEventListener(b,h,l?d:k);return function(){e&&e.removeEventListener(b,h,l?d:k);h=e=f=null}}function Ca(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function Da(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return Ba(a,b,c,void 0)}function Ea(a,b,c,d){var e=c,f=Ba(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Fa(a){var b,c,d=new Promise(function(b){c=Ea(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var Ga={title:"",artist:"",album:"",artwork:[{src:""}]};function Ha(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=xa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
    function Ia(a,b){var c=F(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,y(c.isProtocolValid(a)))})}};function Ja(){this.m=null}g=Ja.prototype;g.add=function(a){var b=this;this.m||(this.m=[]);this.m.push(a);return function(){b.remove(a)}};g.remove=function(a){this.m&&(a=this.m.indexOf(a),-1<a&&this.m.splice(a,1))};g.removeAll=function(){this.m&&(this.m.length=0)};g.fire=function(a){if(this.m)for(var b=this.m,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.m?this.m.length:0};function R(){this.K=!1;this.Y=new Ja}R.prototype.onSessionEnd=function(a){this.Y.add(a)};R.prototype.beginSession=function(){this.K=!0};R.prototype.endSession=function(){this.K&&this.Y.fire();this.K=!1};R.prototype.isSessionActive=function(){return this.K};function Ka(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function La(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ma="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Na=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Oa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Pa(a){var b=va(a);return b(Na)}
    function Qa(a,b){var c=va(b)(Oa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++){var l=f[h];l.classList.add("amp-video-eq-"+(b+1)+"-"+(h+1))}c.appendChild(e)}L(d);J(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ra(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Ma,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=z());var f=La(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=La(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
    a["amp-extension=amp-video-autoplay"]=f)});this.fa=K(this.ampdoc,"viewport");this.T=this.j=null;this.da=!1;this.M=J(a.win,"timer");this.ga=F(a.getHeadNode(),"action");this.X=function(){for(var a=0;a<b.j.length;a++){var d=b.j[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=Da(b.ampdoc.win,"video-manager.timeUpdate",C({time:e,percent:e/f})),b.ga.trigger(d.video.element,"timeUpdate",e,1))}}b.M.delay(b.X,1E3)};
    this.R=u(function(){return new T(b.ampdoc,b)});this.M.delay(this.X,1E3)}g=Ra.prototype;g.dispose=function(){this.R().dispose();if(this.j)for(var a=0;a<this.j.length;a++){var b=this.j[a];b.dispose()}};g.register=function(a){Sa(a);if(a.supportsPlatform()){this.j=this.j||[];var b=new Ta(this,a);Ua(this,b);this.j.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
    function Sa(a){function b(){return a.fullscreenEnter()}function c(c,b){a.registerAction(c,function(){ra(a);b()},d)}var d=1;c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
    function Ua(a,b){var c=b.video.element;Q(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});Q(c,"reloaded",function(){b.videoLoaded()});if(!a.da){var d=function(){for(var c=0;c<a.j.length;c++)a.j[c].updateVisibility()};a.fa.onScroll(d);a.fa.onChanged(d);a.da=!0}}function U(a,b){if(Va(a.T,b))return a.T;for(var c=0;c<a.j.length;c++){var d=a.j[c];if(Va(d,b))return a.T=d}return null}g.registerForAutoFullscreen=function(a){this.R().register(a)};
    g.oa=function(){return this.R()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=x().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():Promise.resolve()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
    g.isRollingAd=function(a){return U(this,a).isRollingAd()};function Va(a,b){return!!a&&(a.video===b||a.video.element===b)}
    function Ta(a,b){var c=this;this.L=a;this.h=a.ampdoc;this.video=b;this.W=!0;this.w=this.J=this.B=this.ba=!1;this.P=new R;this.P.onSessionEnd(function(){return S(c,"video-session")});this.F=new R;this.F.onSessionEnd(function(){return S(c,"video-session-visible")});this.V=function(){var a=c.h.win,b=ha(a).lite;N||(N=u(ua));return N(a,b)};this.$=u(function(){return new V(c.h.win,c)});this.U=this.ca=!1;this.S=null;this.o=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.L.installAutoplayStyles();
    this.C=Ga;this.ka=function(){c.video.play(!1)};this.ja=function(){c.video.pause()};Fa(b.element).then(function(){return c.videoLoaded()});Q(b.element,"pause",function(){S(c,"video-pause");c.B=!1;c.U?c.U=!1:c.P.endSession()});Q(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&c.Z();var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.h.win;var f=c.C,h=c.ka,l=c.ja,k=a.navigator;"mediaSession"in k&&a.MediaMetadata&&
    (k.mediaSession.metadata=new a.MediaMetadata(Ga),Ia(b,f),k.mediaSession.metadata=new a.MediaMetadata(f),k.mediaSession.setActionHandler("play",h),k.mediaSession.setActionHandler("pause",l))}c.P.beginSession();c.w&&c.F.beginSession();S(c,"video-play")});Q(b.element,"muted",function(){return c.o=!0});Q(b.element,"unmuted",function(){return c.o=!1});Q(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Wa(c,b,a.vars)});Q(b.element,"ended",function(){c.J=!1;S(c,"video-ended")});Q(b.element,
    "ad_start",function(){c.J=!0;S(c,"video-ad-start")});Q(b.element,"ad_end",function(){c.J=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:y(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.L.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Xa(c)});this.Z=
    u(function(){var a="firstPlay",b=Da(c.h.win,a,C({})),f=c.video.element,h=F(f,"action");h.trigger(f,a,b,1)});Ya(this)}g=Ta.prototype;g.dispose=function(){this.$().stop()};function Wa(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}function Ya(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.W=!1;a.B&&a.video.pause()})}g.isMuted=function(){return this.o};
    g.videoLoaded=function(){this.ba=!0;this.S=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.C=z(this.video.getMetadata()));var a=this.h.win.document;if(!this.C.artwork||0==this.C.artwork.length){var b;(b=Ha(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
    b&&(this.C.artwork=[{src:b}])}!this.C.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.S.getAttribute("title")||this.S.getAttribute("aria-label")||a.title)&&(this.C.title=a)}this.$().start();this.updateVisibility();this.w&&Za(this)};
    function Za(a){a.h.isVisible()&&a.V().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.W&&(a.w?(a.F.beginSession(),a.video.play(!0),a.ca=!0):(a.B&&a.F.endSession(),a.video.pause(),a.U=!0)):a.w?a.F.beginSession():a.B&&a.F.endSession()})}function Xa(a){a.video.isInteractive()&&a.video.hideControls();a.V().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),$a(a))})}
    function $a(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Qa(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[Q(d,"pause",function(){return f(!1)}),Q(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.Z();b.isInteractive()&&
    b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var l=Pa(d),k=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(l)});[Q(l,"click",function(){return ra(b)}),Q(d,"ad_start",function(){k(!1);
    b.showControls()}),Q(d,"ad_end",function(){k(!0);b.hideControls()}),Q(d,"unmuted",function(){return ra(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.ba&&Za(this)};g.getPlayingState=function(){return this.B?this.B&&this.ca&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.J};
    g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
    g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.V().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),l=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.o,playedTotal:l,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
    function T(a,b){var c=this;this.L=b;this.h=a;this.D=this.G=null;this.j=[];this.l=[];this.H=function(){return ab(c)};this.ia=function(a){return"playing_manual"==c.L.getPlayingState(a)};this.ha=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=K(c.h,"viewport"),d=bb(e,a),e=bb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};cb(this);db(this)}
    T.prototype.dispose=function(){this.l.forEach(function(a){return a()});this.l.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=J(this.h.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),Q(b,"pause",this.H),Q(b,"playing",this.H),Q(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),ab(this))};
    function db(a){function b(){a.G=null}var c=a.h.getRootNode();a.l.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.h.win;return a.screen&&"orientation"in a.screen?D(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
    function cb(a){var b=a.h.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.l.push(Q(d,"change",function(){return eb(a)}))}a.l.push(Q(b,"orientationchange",function(){return eb(a)}))}function eb(a){a.isInLandscape()?null!=a.D&&fb(a,a.D):a.G&&gb(a,a.G)}function fb(a,b){var c=J(a.h.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():hb(a,b).then(function(){return b.fullscreenEnter()})}
    function gb(a,b){a.G=null;hb(a,b,"center").then(function(){return b.fullscreenExit()})}function hb(a,b,c){c=void 0===c?null:c;var d=b.element,e=K(a.h,"viewport");return ib(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,l=b.top;b=b.bottom;var k=e.getSize().height,A=0<=l&&b<=k;return A?Promise.resolve():e.animateScrollIntoView(d,c?c:b>k?"bottom":"top")})}function ib(a){var b=330;return J(a.h.win,"timer").promise(b)}
    function ab(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.j.filter(a.ia).sort(a.ha)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.D=b)}return a.D}function bb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.M=J(a,"timer");this.I=b;this.l=null;this.N=this.aa=0}
    V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.l=this.l||[];jb(this)?kb(this,this.N):this.l.push(Ea(b,"loadedmetadata",function(){jb(a)&&kb(a,a.N)}));this.l.push(Q(b,"ended",function(){jb(a)&&lb(a,100)}))};V.prototype.stop=function(){if(this.l){for(;0<this.l.length;)this.l.pop().call();this.N++}};
    function jb(a){var b=a.I.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;if(250>50*c){var d=5;a.na("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.na=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
    function kb(a,b){if(b==a.N){var c=a.I,d=a.M,e=c.video,f=function(){return kb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Ka(50*c),l=e.getCurrentTime()/c*100,k=5*Math.floor(l/5);t(k);lb(a,k);d.delay(f,h)}else d.delay(f,500)}}function lb(a,b){0>=b||a.aa==b||(a.aa=b,S(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}
    function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var Aa={play:"playing",pause:"pause",ended:"ended",volumechange:null};
    function W(a){var b=AMP.BaseElement.call(this,a)||this;b.A=null;b.ea=u(function(){var a="set";return(a=void 0===a?null:a)?a.toLowerCase()+"Volume":"volume"});b.ma=u(function(){return mb(b)});b.o=!1;b.la=function(a){var c=b.A,e=/^(https?:)?\/\/((player|www)\.)?vimeo.com(?=$|\/)/;if(c&&a.source==c.contentWindow&&("string"===typeof e?e==a.origin:e.test(a.origin))&&(a=a.data)&&(r(a)||D(a,"{"))&&(c=r(a)?a:xa(a),null!=c))if("ready"==c.event||"ping"==c.method)b.ma();else if(a=b.element,!za(a,c.event)&&"volumechange"==
    c.event&&(c=c.data&&c.data.volume))c=0>=c,c!=b.o&&(b.o=c,a.dispatchCustomEvent(c?"muted":"unmuted"))};b.O=null;return b}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var nb=Object.getOwnPropertyDescriptor(X,Y);nb&&Object.defineProperty(W,Y,nb)}else W[Y]=X[Y];W.pa=X.prototype;g=W.prototype;
    g.preconnectCallback=function(a){a=void 0===a?!1:a;var b=J(this.win,"preconnect"),c=this.getAmpDoc();b.url(c,"https://player.vimeo.com",a);b.url(c,"https://i.vimeocdn.com",a);b.url(c,"https://f.vimeocdn.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
    g.buildCallback=function(){var a=this.getAmpDoc();a=I(a);var b=pa(a),c=qa(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ra,d.context=a,d.resolve&&H(b,"video-manager"))};
    g.layoutCallback=function(){var a=this;return ob(this).then(function(b){var c=b,d=a.element;d=y(d.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-vimeo> %s",d);d="https://player.vimeo.com/video/"+encodeURIComponent(d);if(c&&(a.o=!0,c=encodeURIComponent("muted")+"="+encodeURIComponent("1"),c)){d=d.split("#",2);var e=d[0].split("?",2);c=e[0]+(e[1]?"?"+e[1]+"&"+c:"?"+c);d=c+=d[1]?"#"+d[1]:""}c=d;d=a.element;e=va(d)(ya);a.propagateAttributes(["referrerpolicy"],e);e.src=F(d,
    "url").assertHttpsUrl(c,d);a.applyFillContent(e);d.appendChild(e);a.A=e;a.O=Q(a.win,"message",a.la);Z(a,"ping");return a.loadPromise(e)})};g.unlayoutCallback=function(){this.A&&(L(this.A),this.A=null);this.O&&(this.O(),this.O=null);return!0};function ob(a){if(!a.element.hasAttribute("autoplay"))return Promise.resolve(!1);a=a.win;var b=ha(a).lite;N||(N=u(ua));return N(a,b)}
    function mb(a){var b=a.element;Object.keys(Aa).forEach(function(b){Z(a,"addEventListener",b)});K(b,"video-manager").register(a);b.dispatchCustomEvent("load")}g.pauseCallback=function(){this.pause()};g.pause=function(){Z(this,"pause")};g.play=function(){Z(this,"play")};g.mute=function(){this.o||Z(this,this.ea(),"0")};g.unmute=function(){Z(this,this.ea(),"1")};g.isInteractive=function(){return!0};g.supportsPlatform=function(){return!0};g.preimplementsMediaSessionAPI=function(){return!0};
    g.preimplementsAutoFullscreen=function(){return!1};g.fullscreenEnter=function(){};g.fullscreenExit=function(){};g.isFullscreen=function(){return!1};g.showControls=function(){};g.hideControls=function(){};g.getMetadata=function(){};g.getDuration=function(){return 0};g.getCurrentTime=function(){return 0};g.getPlayedRanges=function(){return[]};function Z(a,b,c){c=void 0===c?null:c;if(a.A){var d=a.A.contentWindow;d&&d.postMessage(JSON.stringify(C({method:b,value:c||""})),"*")}}
    g.seekTo=function(){this.user().error("amp-vimeo","`seekTo` not supported.")};(function(a){a.registerElement("amp-vimeo",W)})(self.AMP);
    })});
    
    //# sourceMappingURL=amp-vimeo-0.1.js.map
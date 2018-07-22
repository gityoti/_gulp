(function(e,t,n,r,i){if(typeof define==="function"&&define.amd){define(function(){e.fullpage=r(t,n);return e.fullpage})}else if(typeof exports==="object"){module.exports=r(t,n)}else{t.fullpage=r(t,n)}})(this,window,document,function(cn,un){"use strict";var vn="fullpage-wrapper";var dn="."+vn;var e="fp-scrollable";var t="."+e;var pn="fp-responsive";var hn="fp-notransition";var gn="fp-destroyed";var mn="fp-enabled";var yn="fp-viewing";var bn="active";var Sn="."+bn;var wn="fp-completely";var En="."+wn;var Ln=".section";var xn="fp-section";var Tn="."+xn;var An=Tn+Sn;var kn="fp-tableCell";var Mn="."+kn;var On="fp-auto-height";var n="."+On;var Cn="fp-normal-scroll";var r="."+Cn;var Hn="fp-nav";var In="#"+Hn;var Rn="fp-tooltip";var Bn="."+Rn;var zn="fp-show-active";var Nn=".slide";var jn="fp-slide";var Pn="."+jn;var Dn=Pn+Sn;var Vn="fp-slides";var Yn="."+Vn;var Un="fp-slidesContainer";var Fn="."+Un;var Wn="fp-table";var Xn="fp-slidesNav";var _n="."+Xn;var qn=_n+" a";var i="fp-controlArrow";var Kn="."+i;var Qn="fp-prev";var o="."+Qn;var Gn=i+" "+Qn;var $n=Kn+o;var a="fp-next";var l="."+a;var Jn=i+" "+a;var Zn=Kn+l;function s(e,y){var t=y&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(y.licenseKey)||un.domain.indexOf("alvarotrigo.com")>-1;if(nr($("html"),mn)){en();return}var i=$("html, body");var b=$("body")[0];var s={};y=tr({menu:false,anchors:[],lockAnchors:false,navigation:false,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:false,slidesNavigation:false,slidesNavPosition:"bottom",scrollBar:false,hybrid:false,css3:true,scrollingSpeed:700,autoScrolling:true,fitToSection:true,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:false,loopTop:false,loopHorizontal:true,continuousVertical:false,continuousHorizontal:false,scrollHorizontally:false,interlockedSlides:false,dragAndMove:false,offsetSections:false,resetSliders:false,fadingEffect:false,normalScrollElements:null,scrollOverflow:false,scrollOverflowReset:false,scrollOverflowHandler:cn.fp_scrolloverflow?cn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:true,animateAnchor:true,recordHistory:true,controlArrows:true,controlArrowColor:"#fff",verticalCentered:true,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:false,parallax:false,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:Ln,slideSelector:Nn,v2compatible:false,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:true},y);var l=false;var n=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);var r="ontouchstart"in cn||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints;var f=$(e)[0];var S=rr();var c=false;var o=true;var w;var a;var E=true;var u=[];var v;var d;var p={};p.m={up:true,down:true,left:true,right:true};p.k=tr({},p.m);var h=Xt();var g={touchmove:"ontouchmove"in cn?"touchmove":h.move,touchstart:"ontouchstart"in cn?"touchstart":h.down};var m;var L='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';var x;var T;var A;var k;var M;var O;var C=tr({},y);var H;en();cn.fp_easings=tr(cn.fp_easings,{easeInOutCubic:function(e,t,n,r){if((e/=r/2)<1)return n/2*e*e*e+t;return n/2*((e-=2)*e*e+2)+t}});function I(e,t){if(!e){Kt(0)}Zt("autoScrolling",e,t);var n=$(An)[0];if(y.autoScrolling&&!y.scrollBar){ir(i,{overflow:"hidden",height:"100%"});R(C.recordHistory,"internal");ir(f,{"-ms-touch-action":"none","touch-action":"none"});if(n!=null){Kt(n.offsetTop)}}else{ir(i,{overflow:"visible",height:"initial"});R(false,"internal");ir(f,{"-ms-touch-action":"","touch-action":""});if(n!=null){var r=Ve(n.offsetTop);r.element.scrollTo(0,r.options)}}}function R(e,t){Zt("recordHistory",e,t)}function B(e,t){Zt("scrollingSpeed",e,t)}function z(e,t){Zt("fitToSection",e,t)}function N(e){y.lockAnchors=e}function j(e){if(e){Vt();Yt()}else{Dt();Ut()}}function P(t,e){if(typeof e!=="undefined"){e=e.replace(/ /g,"").split(",");e.forEach(function(e){Gt(t,e,"m")})}else{Gt(t,"all","m");if(t){j(true);Ft()}else{j(false);Wt()}}}function D(t,e){if(typeof e!=="undefined"){e=e.replace(/ /g,"").split(",");e.forEach(function(e){Gt(t,e,"k")})}else{Gt(t,"all","k");y.keyboardScrolling=t}}function V(){var e=or($(An)[0],Tn);if(!e&&(y.loopTop||y.continuousVertical)){e=fr($(Tn))}if(e!=null){Be(e,null,true)}}function Y(){var e=ar($(An)[0],Tn);if(!e&&(y.loopBottom||y.continuousVertical)){e=$(Tn)[0]}if(e!=null){Be(e,null,false)}}function U(e,t){B(0,"internal");F(e,t);B(C.scrollingSpeed,"internal")}function F(e,t){var n=Ot(e);if(typeof t!=="undefined"){Ht(e,t)}else if(n!=null){Be(n)}}function W(e){Ce("right",e)}function X(e){Ce("left",e)}function _(e){if(nr(f,gn)){return}c=true;S=rr();var t=$(Tn);for(var n=0;n<t.length;++n){var r=t[n];var i=$(Yn,r)[0];var o=$(Pn,r);if(y.verticalCentered){ir($(Mn,r),{height:kt(r)+"px"})}ir(r,{height:S+"px"});if(o.length>1){vt(i,$(Dn,i)[0])}}if(y.scrollOverflow){m.createScrollBarForAll()}var a=$(An)[0];var l=cr(a,Tn);if(l){U(l+1)}c=false;if(xr(y.afterResize)&&e){y.afterResize.call(f,cn.innerWidth,cn.innerHeight)}if(xr(y.afterReBuild)&&!e){y.afterReBuild.call(f)}}function q(e){var t=nr(b,pn);if(e){if(!t){I(false,"internal");z(false,"internal");ur($(In));dr(b,pn);if(xr(y.afterResponsive)){y.afterResponsive.call(f,e)}}}else if(t){I(C.autoScrolling,"internal");z(C.autoScrolling,"internal");vr($(In));pr(b,pn);if(xr(y.afterResponsive)){y.afterResponsive.call(f,e)}}}if($(e).length){s.version="3.0.0";s.setAutoScrolling=I;s.setRecordHistory=R;s.setScrollingSpeed=B;s.setFitToSection=z;s.setLockAnchors=N;s.setMouseWheelScrolling=j;s.setAllowScrolling=P;s.setKeyboardScrolling=D;s.moveSectionUp=V;s.moveSectionDown=Y;s.silentMoveTo=U;s.moveTo=F;s.moveSlideRight=W;s.moveSlideLeft=X;s.fitToSection=he;s.reBuild=_;s.setResponsive=q;s.getFullpageData=y;s.destroy=$t;s.getActiveSection=an;s.getActiveSlide=on;s.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){var e=[];for(var t=0;t<$(y.sectionSelector,f).length;t++){e.push("translate3d(0px, 0px, 0px)")}return e}(),left:function(){var e=[];for(var t=0;t<$(y.sectionSelector,f).length;t++){e.push(0)}return e}(),options:y,setAutoScrolling:I};s.shared={afterRenderActions:ce};cn.fullpage_api=s;K();Q()}function K(){if(y.css3){y.css3=Pt()}y.scrollBar=y.scrollBar||y.hybrid;Z();ee();P(true);I(y.autoScrolling,"internal");yt();jt();if(un.readyState==="complete"){Ge()}cn.addEventListener("load",Ge)}function Q(){cn.addEventListener("scroll",pe);cn.addEventListener("hashchange",$e);cn.addEventListener("blur",at);cn.addEventListener("resize",mt);un.addEventListener("keydown",Ze);un.addEventListener("keyup",tt);["click","touchstart"].forEach(function(e){un.addEventListener(e,function(e){var t=e.target;if(t&&Ar(t,In+" a")){lt.call(t)}else if(Ar(t,Bn)){et.call(t)}else if(Ar(t,Kn)){ot.call(t,e)}else if(Ar(t,qn)||yr(t,qn)!=null){st.call(t,e)}})});if(y.normalScrollElements){["mouseenter","touchstart"].forEach(function(e){G(e,false)});["mouseleave","touchend"].forEach(function(e){G(e,true)})}}function G(e,t){un["fp_"+e]=t;un.addEventListener(e,J,true)}function J(t){if(t.target==un){return}var e=y.normalScrollElements.split(",");e.forEach(function(e){if(Ar(t.target,e)){P(un["fp_"+t.type])}})}function Z(){if(!y.anchors.length){var e=$(Tn+"[data-anchor]");if(e.length){e.forEach(function(e){y.anchors.push(e.getAttribute("data-anchor").toString())})}}if(!y.navigationTooltips.length){var t=$("[data-tooltip]",f);if(t.length){t.forEach(function(e){y.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}}function ee(){ir(f,{height:"100%",position:"relative"});dr(f,vn);dr($("html"),mn);S=rr();pr(f,gn);ie();var e=$(Tn);for(var t=0;t<e.length;t++){var n=t;var r=e[t];var i=$(Pn,r);var o=i.length;r.setAttribute("data-fp-styles",r.getAttribute("style"));ne(r,n);re(r,n);if(o>0){te(r,i,o)}else{if(y.verticalCentered){At(r)}}}if(y.fixedElements&&y.css3){$(y.fixedElements).forEach(function(e){b.appendChild(e)})}if(y.navigation){ae()}le();if(y.scrollOverflow){m=y.scrollOverflowHandler.init(y)}else{ce()}}function te(e,t,n){var r=n*100;var i=100/n;var o=un.createElement("div");o.className=Vn;gr(t,o);var a=un.createElement("div");a.className=Un;gr(t,a);ir($(Fn,e),{width:r+"%"});if(n>1){if(y.controlArrows){oe(e)}if(y.slidesNavigation){Rt(e,n)}}t.forEach(function(e){ir(e,{width:i+"%"});if(y.verticalCentered){At(e)}});var l=$(Dn,e)[0];if(l!=null&&(cr($(An),Tn)!==0||cr($(An),Tn)===0&&cr(l)!==0)){qt(l,"internal")}else{dr(t[0],bn)}}function ne(e,t){if(!t&&$(An)[0]==null){dr(e,bn)}d=$(An)[0];ir(e,{height:S+"px"});if(y.paddingTop){ir(e,{"padding-top":y.paddingTop})}if(y.paddingBottom){ir(e,{"padding-bottom":y.paddingBottom})}if(typeof y.sectionsColor[t]!=="undefined"){ir(e,{"background-color":y.sectionsColor[t]})}if(typeof y.anchors[t]!=="undefined"){e.setAttribute("data-anchor",y.anchors[t])}}function re(e,t){if(typeof y.anchors[t]!=="undefined"){if(nr(e,bn)){Lt(y.anchors[t],t)}}if(y.menu&&y.css3&&yr($(y.menu)[0],dn)!=null){b.appendChild($(y.menu)[0])}}function ie(){dr($(y.sectionSelector,f),xn);dr($(y.slideSelector,f),jn)}function oe(e){var t=[Mr('<div class="'+Gn+'"></div>'),Mr('<div class="'+Jn+'"></div>')];br($(Yn,e)[0],t);if(y.controlArrowColor!=="#fff"){ir($(Zn,e),{"border-color":"transparent transparent transparent "+y.controlArrowColor});ir($($n,e),{"border-color":"transparent "+y.controlArrowColor+" transparent transparent"})}if(!y.loopHorizontal){ur($($n,e))}}function ae(){var e=un.createElement("div");e.setAttribute("id",Hn);var t=un.createElement("ul");e.appendChild(t);hr(e,b);var n=$(In)[0];dr(n,"fp-"+y.navigationPosition);if(y.showActiveTooltip){dr(n,zn)}var r="";for(var i=0;i<$(Tn).length;i++){var o="";if(y.anchors.length){o=y.anchors[i]}r+='<li><a href="#'+o+'"><span></span></a>';var a=y.navigationTooltips[i];if(typeof a!=="undefined"&&a!==""){r+='<div class="'+Rn+" "+y.navigationPosition+'">'+a+"</div>"}r+="</li>"}$("ul",n)[0].innerHTML=r;ir($(In),{"margin-top":"-"+$(In)[0].offsetHeight/2+"px"});var l=$("li",$(In)[0])[cr($(An)[0],Tn)];dr($("a",l),bn)}function le(){$('iframe[src*="youtube.com/embed/"]',f).forEach(function(e){se(e,"enablejsapi=1")})}function se(e,t){var n=e.getAttribute("src");e.setAttribute("src",n+fe(n)+t)}function fe(e){return!/\?/.test(e)?"?":"&"}function ce(){var e=$(An)[0];dr(e,wn);Xe(e);_e(e);if(y.scrollOverflow){y.scrollOverflowHandler.afterLoad()}if(ue()&&xr(y.afterLoad)){ze("afterLoad",{activeSection:null,element:e,direction:null,anchorLink:e.getAttribute("data-anchor"),sectionIndex:cr(e,Tn)})}if(xr(y.afterRender)){ze("afterRender")}}function ue(){var e=Ot(Je().section);return!e||typeof e!=="undefined"&&cr(e)===cr(d)}var ve=false;var de=0;function pe(){var e;if(!y.autoScrolling||y.scrollBar){var t=wr();var n=me(t);var r=0;var i=t+rr()/2;var o=b.offsetHeight-rr()===t;var a=$(Tn);if(o){r=a.length-1}else if(!t){r=0}else{for(var l=0;l<a.length;++l){var s=a[l];if(s.offsetTop<=i){r=l}}}if(ge(n)){if(!nr($(An)[0],wn)){dr($(An)[0],wn);pr(Er($(An)[0]),wn)}}e=a[r];if(!nr(e,bn)){ve=true;var f=$(An)[0];var c=cr(f,Tn)+1;var u=xt(e);var v=e.getAttribute("data-anchor");var d=cr(e,Tn)+1;var p=$(Dn,e)[0];var h;var g;var m={activeSection:f,sectionIndex:d-1,anchorLink:v,element:e,leavingSection:c,direction:u};if(p){g=p.getAttribute("data-anchor");h=cr(p)}if(E){dr(e,bn);pr(Er(e),bn);if(xr(y.onLeave)){ze("onLeave",m)}if(xr(y.afterLoad)){ze("afterLoad",m)}Ke(f);Xe(e);_e(e);Lt(v,d-1);if(y.anchors.length){w=v}Bt(h,g,v,d)}clearTimeout(k);k=setTimeout(function(){ve=false},100)}if(y.fitToSection){clearTimeout(M);M=setTimeout(function(){if(y.fitToSection&&$(An)[0].offsetHeight<=S){he()}},y.fitToSectionDelay)}}}function he(){if(E){c=true;Be($(An)[0]);c=false}}function ge(e){var t=$(An)[0].offsetTop;var n=t+rr();if(e=="up"){return n>=wr()+rr()}return t<=wr()}function me(e){var t=e>de?"down":"up";de=e;Ie=e;return t}function ye(e){if(!p.m[e]){return}var t=e==="down"?Y:V;if(y.scrollOverflow){var n=y.scrollOverflowHandler.scrollable($(An)[0]);var r=e==="down"?"bottom":"top";if(n!=null){if(y.scrollOverflowHandler.isScrolled(r,n)){t()}else{return true}}else{t()}}else{t()}}function be(e){if(y.autoScrolling&&Te(e)){Lr(e)}}var Se=0;var we=0;var Ee=0;var Le=0;function xe(e){var t=yr(e.target,Tn);if(Te(e)){if(y.autoScrolling){Lr(e)}var n=_t(e);Ee=n.y;Le=n.x;if($(Yn,t).length&&Math.abs(we-Le)>Math.abs(Se-Ee)){if(!l&&Math.abs(we-Le)>cn.innerWidth/100*y.touchSensitivity){if(we>Le){if(p.m.right){W(t)}}else{if(p.m.left){X(t)}}}}else if(y.autoScrolling&&E){if(Math.abs(Se-Ee)>cn.innerHeight/100*y.touchSensitivity){if(Se>Ee){ye("down")}else if(Ee>Se){ye("up")}}}}}function Te(e){return typeof e.pointerType==="undefined"||e.pointerType!="mouse"}function Ae(e){if(y.fitToSection){H=false}if(Te(e)){var t=_t(e);Se=t.y;we=t.x}}function ke(e,t){var n=0;var r=e.slice(Math.max(e.length-t,1));for(var i=0;i<r.length;i++){n=n+r[i]}return Math.ceil(n/t)}var Me=(new Date).getTime();function Oe(e){var t=(new Date).getTime();var n=nr($(En)[0],Cn);if(y.autoScrolling&&!v&&!n){e=e||cn.event;var r=e.wheelDelta||-e.deltaY||-e.detail;var i=Math.max(-1,Math.min(1,r));var o=typeof e.wheelDeltaX!=="undefined"||typeof e.deltaX!=="undefined";var a=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||(Math.abs(e.deltaX)<Math.abs(e.deltaY)||!o);if(u.length>149){u.shift()}u.push(Math.abs(r));if(y.scrollBar){Lr(e)}var l=t-Me;Me=t;if(l>200){u=[]}if(E){var s=ke(u,10);var f=ke(u,70);var c=s>=f;if(c&&a){if(i<0){ye("down")}else{ye("up")}}}return false}if(y.fitToSection){H=false}}function Ce(e,t){var n=t==null?$(An)[0]:t;var r=$(Yn,n)[0];if(r==null||l||$(Pn,r).length<2){return}var i=$(Dn,r)[0];var o=null;if(e==="left"){o=or(i,Pn)}else{o=ar(i,Pn)}if(o==null){if(!y.loopHorizontal)return;var a=Er(i);if(e==="left"){o=a[a.length-1]}else{o=a[0]}}l=true&&!s.test.isTesting;vt(r,o,e)}function He(){var e=$(Dn);for(var t=0;t<e.length;t++){qt(e[t],"internal")}}var Ie=0;function Re(e){var t=e.offsetHeight;var n=e.offsetTop;var r=n;var i=n>Ie;var o=r-S+t;var a=y.bigSectionsDestination;if(t>S){if(!i&&!a||a==="bottom"){r=o}}else if(i||c&&sr(e)==null){r=o}Ie=r;return r}function Be(e,t,n){if(e==null){return}var r=Re(e);var i;var o;var a={element:e,callback:t,isMovementUp:n,dtop:r,yMovement:xt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:cr(e,Tn),activeSlide:$(Dn,e)[0],activeSection:$(An)[0],leavingSection:cr($(An),Tn)+1,localIsResizing:c};if(a.activeSection==e&&!c||y.scrollBar&&wr()===a.dtop&&!nr(e,On)){return}if(a.activeSlide!=null){i=a.activeSlide.getAttribute("data-anchor");o=cr(a.activeSlide)}if(xr(y.onLeave)&&!a.localIsResizing){var l=a.yMovement;if(typeof n!=="undefined"){l=n?"up":"down"}a.direction=l;if(ze("onLeave",a)===false){return}}if(y.autoScrolling&&y.continuousVertical&&typeof a.isMovementUp!=="undefined"&&(!a.isMovementUp&&a.yMovement=="up"||a.isMovementUp&&a.yMovement=="down")){a=Ye(a)}if(!a.localIsResizing){Ke(a.activeSection)}if(y.scrollOverflow){y.scrollOverflowHandler.beforeLeave()}dr(e,bn);pr(Er(e),bn);Xe(e);if(y.scrollOverflow){y.scrollOverflowHandler.onLeave()}E=false||s.test.isTesting;Bt(o,i,a.anchorLink,a.sectionIndex);De(a);w=a.anchorLink;Lt(a.anchorLink,a.sectionIndex)}function ze(e,t){var n=Pe(e,t);if(!y.v2compatible){Tr(f,e,n);if(y[e].apply(n[Object.keys(n)[0]],Ir(n))===false){return false}}else{if(y[e].apply(n[0],n.slice(1))===false){return false}}return true}function Ne(e){return e?new sn(e):null}function je(e){return e?new fn(e):null}function Pe(e,t){var n;if(!y.v2compatible){n={afterRender:function(){return{section:Ne($(An)[0]),slide:je($(Dn,$(An)[0])[0])}},onLeave:function(){return{origin:Ne(t.activeSection),destination:Ne(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Ne(t.section),origin:je(t.prevSlide),destination:je(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}}}else{n={afterRender:function(){return[f]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}}return n[e]()}function De(e){if(y.css3&&y.autoScrolling&&!y.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Mt(t,true);if(y.scrollingSpeed){clearTimeout(T);T=setTimeout(function(){Fe(e)},y.scrollingSpeed)}else{Fe(e)}}else{var n=Ve(e.dtop);s.test.top=-e.dtop+"px";nn(n.element,n.options,y.scrollingSpeed,function(){if(y.scrollBar){setTimeout(function(){Fe(e)},30)}else{Fe(e)}})}}function Ve(e){var t={};if(y.autoScrolling&&!y.scrollBar){t.options=-e;t.element=$(dn)[0]}else{t.options=e;t.element=cn}return t}function Ye(e){if(!e.isMovementUp){br($(An)[0],Hr(e.activeSection,Tn).reverse())}else{Sr($(An)[0],Cr(e.activeSection,Tn))}Kt($(An)[0].offsetTop);He();e.wrapAroundElements=e.activeSection;e.dtop=e.element.offsetTop;e.yMovement=xt(e.element);e.leavingSection=cr(e.activeSection,Tn)+1;e.sectionIndex=cr(e.element,Tn);return e}function Ue(e){if(e.wrapAroundElements==null){return}if(e.isMovementUp){Sr($(Tn)[0],e.wrapAroundElements)}else{br($(Tn)[$(Tn).length-1],e.wrapAroundElements)}Kt($(An)[0].offsetTop);He()}function Fe(e){Ue(e);if(xr(y.afterLoad)&&!e.localIsResizing){ze("afterLoad",e)}if(y.scrollOverflow){y.scrollOverflowHandler.afterLoad()}if(!e.localIsResizing){_e(e.element)}dr(e.element,wn);pr(Er(e.element),wn);E=true;if(xr(e.callback)){e.callback()}}function We(e,t){e.setAttribute(t,e.getAttribute("data-"+t));e.removeAttribute("data-"+t)}function Xe(e){if(!y.lazyLoading){return}var t=Qe(e);$("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",t).forEach(function(n){["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);if(t!=null&&t){We(n,e)}});if(Ar(n,"source")){var e=yr(n,"video")!=null?"video":"audio";yr(n,e).load()}})}function _e(e){var t=Qe(e);$("video, audio",t).forEach(function(e){if(e.hasAttribute("data-autoplay")&&typeof e.play==="function"){e.play()}});$('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){if(e.hasAttribute("data-autoplay")){qe(e)}e.onload=function(){if(e.hasAttribute("data-autoplay")){qe(e)}}})}function qe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ke(e){var t=Qe(e);$("video, audio",t).forEach(function(e){if(!e.hasAttribute("data-keepplaying")&&typeof e.pause==="function"){e.pause()}});$('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){if(/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")){e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}})}function Qe(e){var t=$(Dn,e);if(t.length){e=t[0]}return e}function Ge(){var e=Je();var t=e.section;var n=e.slide;if(t){if(y.animateAnchor){Ht(t,n)}else{U(t,n)}}}function $e(){if(!ve&&!y.lockAnchors){var e=Je();var t=e.section;var n=e.slide;var r=typeof w==="undefined";var i=typeof w==="undefined"&&typeof n==="undefined"&&!l;if(t&&t.length){if(t&&t!==w&&!r||i||!l&&a!=n){Ht(t,n)}}}}function Je(){var e;var t;var n=cn.location.hash;if(n.length){var r=n.replace("#","").split("/");var i=n.indexOf("#/")>-1;e=i?"/"+r[1]:decodeURIComponent(r[0]);var o=i?r[2]:r[1];if(o&&o.length){t=decodeURIComponent(o)}}return{section:e,slide:t}}function Ze(e){clearTimeout(O);var t=un.activeElement;var n=e.keyCode;if(n===9){it(e)}else if(!Ar(t,"textarea")&&!Ar(t,"input")&&!Ar(t,"select")&&t.getAttribute("contentEditable")!=="true"&&t.getAttribute("contentEditable")!==""&&y.keyboardScrolling&&y.autoScrolling){var r=[40,38,32,33,34];if(r.indexOf(n)>-1){Lr(e)}v=e.ctrlKey;O=setTimeout(function(){ft(e)},150)}}function et(){Tr(lr(this),"click")}function tt(e){if(o){v=e.ctrlKey}}function nt(e){if(e.which==2){ct=e.pageY;f.addEventListener("mousemove",ut)}}function rt(e){if(e.which==2){f.removeEventListener("mousemove",ut)}}function it(e){var t=e.shiftKey;var n=un.activeElement;var r=$(An)[0];var i=$(Dn,r)[0];var o=i?i:r;var a=$(L+':not([tabindex="-1"])',o);function l(e){Lr(e);return a[0].focus()}if(n.length){if(yr(n,An+","+Dn)==null){n=l(e)}}else{l(e)}if(!t&&n==a[a.length-1]||t&&n==a[0]){Lr(e)}}function ot(){var e=yr(this,Tn);if(nr(this,Qn)){if(p.m.left){X(e)}}else{if(p.m.right){W(e)}}}function at(){o=false;v=false}function lt(e){Lr(e);var t=t(this.parentNode);Be($(Tn)[t])}function st(e){Lr(e);var t=$(Yn,yr(this,Tn))[0];var n=$(Pn,t)[cr(yr(this,"li"))];vt(t,n)}function ft(e){var t=e.shiftKey;if(!E&&[37,39].indexOf(e.keyCode)<0){return}switch(e.keyCode){case 38:case 33:if(p.k.up){V()}break;case 32:if(t&&p.k.up){V();break}case 40:case 34:if(p.k.down){Y()}break;case 36:if(p.k.up){F(1)}break;case 35:if(p.k.down){F($(Tn).length)}break;case 37:if(p.k.left){X()}break;case 39:if(p.k.right){W()}break;default:return}}var ct=0;function ut(e){if(E){if(e.pageY<ct&&p.m.up){V()}else if(e.pageY>ct&&p.m.down){Y()}}ct=e.pageY}function vt(e,t,n){var r=yr(e,Tn);var i={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:cr(t),section:r,sectionIndex:cr(r,Tn),anchorLink:r.getAttribute("data-anchor"),slidesNav:$(_n,r)[0],slideAnchor:Nt(t),prevSlide:$(Dn,r)[0],prevSlideIndex:cr($(Dn,r)[0]),localIsResizing:c};i.xMovement=Tt(i.prevSlideIndex,i.slideIndex);if(!i.localIsResizing){E=false}if(y.onSlideLeave){if(!i.localIsResizing&&i.xMovement!=="none"){if(xr(y.onSlideLeave)){if(ze("onSlideLeave",i)===false){l=false;return}}}}dr(t,bn);pr(Er(t),bn);if(!i.localIsResizing){Ke(i.prevSlide);Xe(t)}if(!y.loopHorizontal&&y.controlArrows){kr($($n,r),i.slideIndex!==0);kr($(Zn,r),sr(t)!=null)}if(nr(r,bn)&&!i.localIsResizing){Bt(i.slideIndex,i.slideAnchor,i.anchorLink,i.sectionIndex)}pt(e,i,true)}function dt(e){ht(e.slidesNav,e.slideIndex);if(!e.localIsResizing){if(xr(y.afterSlideLoad)){ze("afterSlideLoad",e)}E=true;_e(e.destiny)}l=false}function pt(e,t,n){var r=t.destinyPos;if(y.css3){var i="translate3d(-"+Math.round(r.left)+"px, 0px, 0px)";s.test.translate3dH[t.sectionIndex]=i;ir(bt($(Fn,e)),Qt(i));A=setTimeout(function(){if(n){dt(t)}},y.scrollingSpeed)}else{s.test.left[t.sectionIndex]=Math.round(r.left);nn(e,Math.round(r.left),y.scrollingSpeed,function(){if(n){dt(t)}})}}function ht(e,t){if(y.slidesNavigation&&e!=null){pr($(Sn,e),bn);dr($("a",$("li",e)[t]),bn)}}var gt=S;function mt(){yt();if(n){var e=un.activeElement;if(!Ar(e,"textarea")&&!Ar(e,"input")&&!Ar(e,"select")){var t=rr();if(Math.abs(t-gt)>20*Math.max(gt,t)/100){_(true);gt=t}}}else{clearTimeout(x);x=setTimeout(function(){_(true)},350)}}function yt(){var e=y.responsive||y.responsiveWidth;var t=y.responsiveHeight;var n=e&&cn.innerWidth<e;var r=t&&cn.innerHeight<t;if(e&&t){q(n||r)}else if(e){q(n)}else if(t){q(r)}}function bt(e){var t="all "+y.scrollingSpeed+"ms "+y.easingcss3;pr(e,hn);return ir(e,{"-webkit-transition":t,transition:t})}function St(e){return dr(e,hn)}function wt(e,t){if(y.navigation&&$(In)[0]!=null){pr($(Sn,$(In)[0]),bn);if(e){dr($('a[href="#'+e+'"]',$(In)[0]),bn)}else{dr($("a",$("li",$(In)[0])[t]),bn)}}}function Et(e){var t=$(y.menu)[0];if(y.menu&&t!=null){pr($(Sn,t),bn);dr($('[data-menuanchor="'+e+'"]',t),bn)}}function Lt(e,t){Et(e);wt(e,t)}function xt(e){var t=cr($(An)[0],Tn);var n=cr(e,Tn);if(t==n){return"none"}if(t>n){return"up"}return"down"}function Tt(e,t){if(e==t){return"none"}if(e>t){return"left"}return"right"}function At(e){if(!nr(e,Wn)){var t=un.createElement("div");t.className=kn;t.style.height=kt(e)+"px";dr(e,Wn);mr(e,t)}}function kt(e){var t=S;if(y.paddingTop||y.paddingBottom){var n=e;if(!nr(n,xn)){n=yr(e,Tn)}var r=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=S-r}return t}function Mt(e,t){if(t){bt(f)}else{St(f)}ir(f,Qt(e));s.test.translate3d=e;setTimeout(function(){pr(f,hn)},10)}function Ot(e){var t=$(Tn+'[data-anchor="'+e+'"]',f)[0];if(!t){var n=typeof e!=="undefined"?e-1:0;t=$(Tn)[n]}return t}function Ct(e,t){var n=$(Pn+'[data-anchor="'+e+'"]',t)[0];if(n==null){e=typeof e!=="undefined"?e:0;n=$(Pn,t)[e]}return n}function Ht(e,t){var n=Ot(e);if(n==null)return;var r=Ct(t,n);if(e!==w&&!nr(n,bn)){Be(n,function(){It(r)})}else{It(r)}}function It(e){if(e!=null){vt(yr(e,Yn),e)}}function Rt(e,t){hr(Mr('<div class="'+Xn+'"><ul></ul></div>'),e);var n=$(_n,e)[0];dr(n,"fp-"+y.slidesNavPosition);for(var r=0;r<t;r++){hr(Mr('<li><a href="#"><span></span></a></li>'),$("ul",n)[0])}ir(n,{"margin-left":"-"+n.innerWidth/2+"px"});dr($("a",$("li",n)[0]),bn)}function Bt(e,t,n,r){var i="";if(y.anchors.length&&!y.lockAnchors){if(e){if(n!=null){i=n}if(t==null){t=e}a=t;zt(i+"/"+t)}else if(e!=null){a=t;zt(n)}else{zt(n)}}jt()}function zt(e){if(y.recordHistory){location.hash=e}else{if(n||r){cn.history.replaceState(undefined,undefined,"#"+e)}else{var t=cn.location.href.split("#")[0];cn.location.replace(t+"#"+e)}}}function Nt(e){if(!e){return null}var t=e.getAttribute("data-anchor");var n=cr(e);if(t==null){t=n}return t}function jt(){var e=$(An)[0];var t=$(Dn,e)[0];var n=Nt(e);var r=Nt(t);var i=String(n);if(t){i=i+"-"+r}i=i.replace("/","-").replace("#","");var o=new RegExp("\\b\\s?"+yn+"-[^\\s]+\\b","g");b.className=b.className.replace(o,"");dr(b,yn+"-"+i)}function Pt(){var e=un.createElement("p"),t,n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};e.style.display="block";un.body.insertBefore(e,null);for(var r in n){if(e.style[r]!==undefined){e.style[r]="translate3d(1px,1px,1px)";t=cn.getComputedStyle(e).getPropertyValue(n[r])}}un.body.removeChild(e);return t!==undefined&&t.length>0&&t!=="none"}function Dt(){if(un.addEventListener){un.removeEventListener("mousewheel",Oe,false);un.removeEventListener("wheel",Oe,false);un.removeEventListener("MozMousePixelScroll",Oe,false)}else{un.detachEvent("onmousewheel",Oe)}}function Vt(){var e="";var t;if(cn.addEventListener){t="addEventListener"}else{t="attachEvent";e="on"}var n="onwheel"in un.createElement("div")?"wheel":un.onmousewheel!==undefined?"mousewheel":"DOMMouseScroll";if(n=="DOMMouseScroll"){un[t](e+"MozMousePixelScroll",Oe,false)}else{un[t](e+n,Oe,false)}}function Yt(){f.addEventListener("mousedown",nt);f.addEventListener("mouseup",rt)}function Ut(){f.removeEventListener("mousedown",nt);f.removeEventListener("mouseup",rt)}function Ft(){if(n||r){if(y.autoScrolling){b.removeEventListener(g.touchmove,be,{passive:false});b.addEventListener(g.touchmove,be,{passive:false})}$(dn)[0].removeEventListener(g.touchstart,Ae);$(dn)[0].removeEventListener(g.touchmove,xe,{passive:false});$(dn)[0].addEventListener(g.touchstart,Ae);$(dn)[0].addEventListener(g.touchmove,xe,{passive:false})}}function Wt(){if(n||r){if(y.autoScrolling){b.removeEventListener(g.touchmove,xe,{passive:false});b.removeEventListener(g.touchmove,be,{passive:false})}$(dn)[0].removeEventListener(g.touchstart,Ae);$(dn)[0].removeEventListener(g.touchmove,xe,{passive:false})}}function Xt(){var e;if(cn.PointerEvent){e={down:"pointerdown",move:"pointermove"}}else{e={down:"MSPointerDown",move:"MSPointerMove"}}return e}function _t(e){var t=[];t.y=typeof e.pageY!=="undefined"&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY;t.x=typeof e.pageX!=="undefined"&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX;if(r&&Te(e)&&y.scrollBar&&typeof e.touches!=="undefined"){t.y=e.touches[0].pageY;t.x=e.touches[0].pageX}return t}function qt(e,t){B(0,"internal");if(typeof t!=="undefined"){c=true}vt(yr(e,Yn),e);if(typeof t!=="undefined"){c=false}B(C.scrollingSpeed,"internal")}function Kt(e){var t=Math.round(e);if(y.css3&&y.autoScrolling&&!y.scrollBar){var n="translate3d(0px, -"+t+"px, 0px)";Mt(n,false)}else if(y.autoScrolling&&!y.scrollBar){ir(f,{top:-t+"px"});s.test.top=-t+"px"}else{var r=Ve(t);rn(r.element,r.options)}}function Qt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Gt(t,e,n){if(e!=="all"){p[n][e]=t}else{Object.keys(p[n]).forEach(function(e){p[n][e]=t})}}function $t(e){I(false,"internal");P(false);D(false);dr(f,gn);clearTimeout(A);clearTimeout(T);clearTimeout(x);clearTimeout(k);clearTimeout(M);cn.removeEventListener("scroll",pe);cn.removeEventListener("hashchange",$e);cn.removeEventListener("resize",mt);un.removeEventListener("keydown",Ze);un.removeEventListener("keyup",tt);var n=[lt,et,ot,st];["click","touchstart"].forEach(function(t){n.forEach(function(e){un.removeEventListener(t,e)})});["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){un.removeEventListener(e,J,true)});clearTimeout(A);clearTimeout(T);if(e){Jt()}}function Jt(){Kt(0);$("img[data-src], source[data-src], audio[data-src], iframe[data-src]",f).forEach(function(e){We(e,"src")});$("img[data-srcset]").forEach(function(e){We(e,"srcset")});Or($(In+", "+_n+", "+Kn));ir($(Tn),{height:"","background-color":"",padding:""});ir($(Pn),{width:""});ir(f,{height:"",position:"","-ms-touch-action":"","touch-action":""});ir(i,{overflow:"",height:""});pr($("html"),mn);pr(b,pn);b.className.split(/\s+/).forEach(function(e){if(e.indexOf(yn)===0){pr(b,e)}});$(Tn+", "+Pn).forEach(function(e){if(y.scrollOverflowHandler){y.scrollOverflowHandler.remove(e)}pr(e,Wn+" "+bn+" "+wn);var t=e.getAttribute("data-fp-styles");if(t){e.setAttribute("style",e.getAttribute("data-fp-styles"))}});St(f);[Mn,Fn,Yn].forEach(function(e){$(e,f).forEach(function(e){e.outerHTML=e.innerHTML})});ir(f,{"-webkit-transition":"none",transition:"none"});$("html")[0].scrollTo(0,0);$("body")[0].scrollTo(0,0);var e=[xn,jn,Un];e.forEach(function(e){pr($("."+e),e)})}function Zt(e,t,n){y[e]=t;if(n!=="internal"){C[e]=t}}function en(){if(!t){er("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:");er("error","https://github.com/alvarotrigo/fullPage.js#options.")}var e=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"];if(nr($("html"),mn)){er("error","Fullpage.js can only be initialized once and you are doing it multiple times!");return}if(y.continuousVertical&&(y.loopTop||y.loopBottom)){y.continuousVertical=false;er("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")}if(y.scrollBar&&y.scrollOverflow){er("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox")}if(y.continuousVertical&&(y.scrollBar||!y.autoScrolling)){y.continuousVertical=false;er("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")}if(y.scrollOverflow&&y.scrollOverflowHandler==null){y.scrollOverflow=false;er("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")}e.forEach(function(e){if(y[e]){er("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+e)}});y.anchors.forEach(function(t){var e=[].slice.call($("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()});var n=[].slice.call($("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){er("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");if(n.length){er("error",'"'+t+'" is is being used by another element `id` property')}if(e.length){er("error",'"'+t+'" is is being used by another element `name` property')}}})}function tn(e){var t;if(e.self!=cn&&nr(e,Vn)){t=e.scrollLeft}else if(!y.autoScrolling||y.scrollBar){t=wr()}else{t=e.offsetTop}return t}function nn(t,n,r,i){var o=tn(t);var a=n-o;var l=0;var s=20;H=true;var f=function(){if(H){var e=n;l+=s;if(r){e=cn.fp_easings[y.easing](l,o,a,r)}rn(t,e);if(l<r){setTimeout(f,s)}else if(typeof i!=="undefined"){i()}}else if(l<r){i()}};f()}function rn(e,t){if(!y.autoScrolling||y.scrollBar||e.self!=cn&&nr(e,Vn)){if(e.self!=cn&&nr(e,Vn)){e.scrollLeft=t}else{e.scrollTo(0,t)}}else{e.style.top=t+"px"}}function on(){var e=$(Dn,$(An)[0])[0];return je(e)}function an(){return new sn($(An)[0])}function ln(e,t){this.anchor=e.getAttribute("data-anchor");this.item=e;this.index=cr(e,t);this.isLast=this.index===$(t).length-1;this.isFirst=!this.index}function sn(e){ln.call(this,e,Tn)}function fn(e){ln.call(this,e,Pn)}return s}function er(e,t){cn.console&&cn.console[e]&&cn.console[e]("fullPage: "+t)}function $(e,t){t=arguments.length>1?t:un;return t?t.querySelectorAll(e):null}function tr(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(!n)continue;for(var r in n){if(n.hasOwnProperty(r)){if(typeof n[r]==="object"&&n[r]!=null)e[r]=tr(e[r],n[r]);else e[r]=n[r]}}}return e}function nr(e,t){if(e==null){return false}if(e.classList){return e.classList.contains(t)}return new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function rr(){return"innerHeight"in cn?cn.innerHeight:un.documentElement.offsetHeight}function ir(e,t){e=c(e);var n;for(n in t){if(t.hasOwnProperty(n)){if(n!==null){for(var r=0;r<e.length;r++){var i=e[r];i.style[n]=t[n]}}}}return e}function f(e,t,n){var r=e[n];while(r&&!Ar(r,t)){r=r[n]}return r}function or(e,t){return f(e,t,"previousElementSibling")}function ar(e,t){return f(e,t,"nextElementSibling")}function lr(e){return e.previousElementSibling}function sr(e){return e.nextElementSibling}function fr(e){return e[e.length-1]}function cr(e,t){e=u(e)?e[0]:e;var n=t!=null?$(t,e.parentNode):e.parentNode.childNodes;var r=0;for(var i=0;i<n.length;i++){if(n[i]==e)return r;if(n[i].nodeType==1)r++}return-1}function c(e){return!u(e)?[e]:e}function ur(e){e=c(e);for(var t=0;t<e.length;t++){e[t].style.display="none"}return e}function vr(e){e=c(e);for(var t=0;t<e.length;t++){e[t].style.display="block"}return e}function u(e){return Object.prototype.toString.call(e)==="[object Array]"||Object.prototype.toString.call(e)==="[object NodeList]"}function dr(e,t){e=c(e);for(var n=0;n<e.length;n++){var r=e[n];if(r.classList){r.classList.add(t)}else{r.className+=" "+t}}return e}function pr(e,t){e=c(e);var n=t.split(" ");for(var r=0;r<n.length;r++){t=n[r];for(var i=0;i<e.length;i++){var o=e[i];if(o.classList){o.classList.remove(t)}else{o.className=o.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}}return e}function hr(e,t){t.appendChild(e)}function v(e,t,n){var r;t=t||un.createElement("div");for(var i=0;i<e.length;i++){var o=e[i];if(n&&!i||!n){r=t.cloneNode(true);o.parentNode.insertBefore(r,o)}r.appendChild(o)}return e}function gr(e,t){v(e,t,true)}function mr(e,t){if(typeof t==="string"){t=Mr(t)}e.appendChild(t);while(e.firstChild!==t){t.appendChild(e.firstChild)}}function yr(e,t){if(e&&e.nodeType===1){if(Ar(e,t)){return e}return yr(e.parentNode,t)}return null}function br(e,t){d(e,e.nextSibling,t)}function Sr(e,t){d(e,e,t)}function d(e,t,n){if(!u(n)){if(typeof n=="string"){n=Mr(n)}n=[n]}for(var r=0;r<n.length;r++){e.parentNode.insertBefore(n[r],t)}}function wr(){var e=un.documentElement;return(cn.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Er(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Lr(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}}function xr(e){if(typeof e==="function"){return true}var t=Object.prototype.toString(e);return t==="[object Function]"||t==="[object GeneratorFunction]"}function Tr(e,t,n){var r;n=typeof n==="undefined"?{}:n;if(typeof cn.CustomEvent==="function"){r=new CustomEvent(t,{detail:n})}else{r=un.createEvent("CustomEvent");r.initCustomEvent(t,true,true,n)}e.dispatchEvent(r)}function Ar(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function kr(e,t){if(typeof t==="boolean"){for(var n=0;n<e.length;n++){e[n].style.display=t?"block":"none"}}return e}function Mr(e){var t=un.createElement("div");t.innerHTML=e.trim();return t.firstChild}function Or(e){e=c(e);for(var t=0;t<e.length;t++){var n=e[t];if(n&&n.parentElement){n.parentNode.removeChild(n)}}}function p(e,t){Array.prototype.filter.call(e,t)}function h(e,t,n){var r=e[n];var i=[];while(r){if(Ar(r,t)||t==null){i.push(r)}r=r[n]}return i}function Cr(e,t){return h(e,t,"nextElementSibling")}function Hr(e,t){return h(e,t,"previousElementSibling")}function Ir(t){return Object.keys(t).map(function(e){return t[e]})}if(cn.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=function(e,t){t=t||cn;for(var n=0;n<this.length;n++){e.call(t,this[n],n,this)}}}cn.fp_utils={$:$,deepExtend:tr,hasClass:nr,getWindowHeight:rr,css:ir,until:f,prevUntil:or,nextUntil:ar,prev:lr,next:sr,last:fr,index:cr,getList:c,hide:ur,show:vr,isArrayOrList:u,addClass:dr,removeClass:pr,appendTo:hr,wrap:v,wrapAll:gr,wrapInner:mr,closest:yr,after:br,before:Sr,insertBefore:d,getScrollTop:wr,siblings:Er,preventDefault:Lr,isFunction:xr,trigger:Tr,matches:Ar,toggle:kr,createElementFromHTML:Mr,remove:Or,filter:p,untilAll:h,nextAll:Cr,prevAll:Hr};return s});if(window.jQuery){(function($,n){"use strict";if(!$||!n){window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!");return}$.fn.fullpage=function(e){var t=new n("#"+$(this).attr("id"),e);Object.keys(t).forEach(function(e){$.fn.fullpage[e]=t[e]})}})(jQuery,fullpage)}
window.onload=function(){var e=new fullpage("#fullpage",{menu:"#menu",lockAnchors:false,anchors:["页面1","页面2","页面3","页面4","页面5","页面6","页面7","页面8","页面9","页面10"],navigation:true,navigationPosition:"left",navigationTooltips:["页面1","页面2","页面3","页面4","页面5","页面6","页面7","页面8","页面9","页面10"],showActiveTooltip:false,slidesNavigation:false,slidesNavPosition:"bottom",css3:true,scrollingSpeed:700,autoScrolling:true,fitToSection:true,fitToSectionDelay:1e3,scrollBar:false,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:false,loopTop:false,loopHorizontal:true,continuousVertical:false,continuousHorizontal:false,scrollHorizontally:false,interlockedSlides:false,dragAndMove:false,offsetSections:false,resetSliders:false,fadingEffect:false,normalScrollElements:"#element1, .element2",scrollOverflow:false,scrollOverflowReset:false,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:true,animateAnchor:true,recordHistory:true,controlArrows:true,verticalCentered:true,sectionsColor:["yellow","green","yellow","pink"],paddingTop:"3em",paddingBottom:"10px",fixedElements:"#header, .footer",responsiveWidth:0,responsiveHeight:0,responsiveSlides:false,parallax:false,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",lazyLoading:true,onLeave:function(e,o,l){},afterLoad:function(e,o,l){},afterRender:function(){},afterResize:function(e,o){},afterResponsive:function(e){},afterSlideLoad:function(e,o,l,t){},onSlideLeave:function(e,o,l,t){}})};
//# sourceMappingURL=map/main.js.map
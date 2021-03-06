!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.SmoothParallax=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,r,n,o,i=e,a=0,c=0,l=[],s=[],u=["containerVisibility","pageScroll"],g={},p={basePercentageOn:"containerVisibility",decimalPrecision:2},d=function(){var e={},t=!1,r=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],r++);for(;r<n;r++)!function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t&&"[object Object]"===Object.prototype.toString.call(r[n])?e[n]=d(!0,e[n],r[n]):e[n]=r[n])}(arguments[r]);return e},f=function(e){var r=e.getAttribute("container");return t=e.parentNode,""!=r&&document.querySelector(r)&&(t=document.querySelector(r)),t},y=function(){var e=document.documentElement||document.body;return r=e.scrollHeight,(c=i.pageYOffset||e.scrollTop)/(r-e.clientHeight)},m=function(e){n=i.innerHeight,"containerVisibility"==o.basePercentageOn&&(r=e.container.scrollHeight,c=n-e.container.getBoundingClientRect().top,a=c/r),"pageScroll"==o.basePercentageOn&&(a=y()),a<0?a=0:a>1&&(a=1)},b=function(e){for(var t=0;t<s.length;t++)if(s[t].element==e)return s[t];return!1},x=function(){var e,t,r,n,o,i,a,c=["elementsize","containerSize"];l=document.querySelectorAll("[smooth-parallax]");for(var u=0;u<l.length;u++){e=parseFloat(l[u].getAttribute("start-movement"))||0,t=parseFloat(l[u].getAttribute("start-position-x"))||0,r=parseFloat(l[u].getAttribute("start-position-y"))||0,n=parseFloat(l[u].getAttribute("end-movement"))||1,o=parseFloat(l[u].getAttribute("end-position-x"))||0,i=parseFloat(l[u].getAttribute("end-position-y"))||0,a=l[u].getAttribute("base-size"),-1==c.indexOf(a)&&(a="elementSize");var g={element:l[u],container:f(l[u]),baseSizeOn:a,start:{percent:e,x:t,y:r},end:{percent:n,x:o,y:i},diff:{percent:n-e,x:o-t,y:i-r},target:{},current:{}};s.push(g)}},h=function(){for(var e=0;e<l.length;e++){var t,r,n=s[e];"elementSize"==n.baseSizeOn?(t=l[e].scrollWidth||parseFloat(i.getComputedStyle(l[e]).width),r=l[e].scrollHeight||parseFloat(i.getComputedStyle(l[e]).height)):"containerSize"==n.baseSizeOn&&(t=n.container.scrollWidth-(l[e].scrollWidth||parseFloat(i.getComputedStyle(l[e]).width)),r=n.container.scrollHeight-(l[e].scrollHeight||parseFloat(i.getComputedStyle(l[e]).height))),m(n),a<=n.start.percent?(n.target.x=n.start.x*t,n.target.y=n.start.y*r):a>=n.end.percent?(n.target.x=n.end.x*t,n.target.y=n.end.y*r):(n.target.x=n.start.x*t+n.diff.x*(a-n.start.percent)/n.diff.percent*t,n.target.y=n.start.y*r+n.diff.y*(a-n.start.percent)/n.diff.percent*r),n.current.x&&n.current.y?(n.current.x=n.current.x+.1*(n.target.x-n.current.x),n.current.y=n.current.y+.1*(n.target.y-n.current.y)):(n.current.x=n.target.x,n.current.y=n.target.y),n.current.x=parseFloat(n.current.x.toFixed(o.decimalPrecision)),n.current.y=parseFloat(n.current.y.toFixed(o.decimalPrecision)),l[e].style.transform="translate3d("+n.current.x+"px, "+n.current.y+"px, 0)"}},S=function(){h(),requestAnimationFrame(S)},v=function(){var e=!0;return-1==u.indexOf(o.basePercentageOn)&&(e=!1,console.error("Value not supported for setting basePercentageOn: "+o.basePercentageOn)),e};return g.init=function(e){(o=d(p,e||{})).decimalPrecision=parseInt(o.decimalPrecision)||p.decimalPrecision,v()&&(x(),S())},g.getScrollPercent=function(e){if(void 0==e)return y();var t=document.querySelector(e);if(null==t)return!1;var r=b(t);return!!r&&(m(r),a)},g});
(function($){
	$(document).on('click', '.toggle', function(){
		let toggle = $(this);
		let selector = $(this).data('info');
		
		if(!$(selector).hasClass('show')){
			$('.circle').removeClass('selected');
			toggle.find('.circle').addClass('selected');
			
			$('.toggleable').fadeOut(function(){
				$(this).removeClass('show');
			})
			$('.toggleable'+selector).fadeIn(function(){
				$(this).addClass('show');
			})
		} 
	})

	ScrollReveal().reveal('.hideme',{distance: '20px', delay: 500});
	SmoothParallax.init({basePercentageOn: 'pageScroll'});
})(jQuery);
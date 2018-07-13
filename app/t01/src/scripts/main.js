window.onload=function(){
 	var myFullpage = new fullpage('#fullpage', {
	//导航
	menu: '#menu', //# 指定按钮
	lockAnchors: false,
	anchors:['页面1', '页面2','页面3','页面4','页面5','页面6','页面7','页面8','页面9','页面10'],
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['页面1', '页面2','页面3','页面4','页面5','页面6','页面7','页面8','页面9','页面10'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//滚动
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//可访问
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//设计
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['yellow', 'green','yellow','pink'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//自定义选择器
		sectionSelector: '.section',
		slideSelector: '.slide',
	
		lazyLoading: true,
	
		//事件
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(origin, destination, direction){},
		afterRender: function(){},
		afterResize: function(width, height){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(section, origin, destination, direction){},
		onSlideLeave: function(section, origin, destination, direction){}
	});
}
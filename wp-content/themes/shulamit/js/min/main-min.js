function goInstafeed(){if($("#instagram-feed").length){var e=new Instafeed({get:"user",userId:11696583,accessToken:"11696583.850066e.fb4d778871ec4c67bc657374fb6ce721",sortBy:"most-recent",target:"instagram-feed",template:'<li class="touchcarousel-item"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" alt=""></a></li>',resolution:"thumbnail",limit:16,after:function(){doTouchCarousel()}});e.run()}}function goInstafeedPage(){if($("#instagram-page").length){var e=$("#instagram-load-more");console.log("instagram page feed start");var o=new Instafeed({get:"user",userId:11696583,accessToken:"11696583.850066e.fb4d778871ec4c67bc657374fb6ce721",sortBy:"most-recent",target:"instagram-page",template:'<div class="col-xs-4 col-sm-3 instagram-item"><a href="{{link}}" target="_blank"><span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span><img class="img-responsive" src="{{image}}" alt=""><div class="insta-meta"></div></a></div>',resolution:"low_resolution",limit:24,after:function(){this.hasNext()||e.setAttribute("disabled","disabled")}});$(document).on("click",e,function(){o.next()}),o.run()}}function doTouchCarousel(){console.log("touch carosuel start"),$("#owl-demo").touchCarousel({snapToItems:!1,itemsPerMove:4,scrollToLast:!1,loopItems:!0,scrollbar:!1}),$("#owl-demo").addClass("loaded")}function fadeBkgImg(){var e=$(".bio-img");e.length&&e.waitForImages(function(){console.log("loaded"),$(this).css({opacity:"1"})})}function clearEmptySpans(){$("span").each(function(){var e=$(this);0==e.html().replace(/\s|&nbsp;/g,"").length&&e.remove()})}function resizeMainFolioAjax(){if($("#single-folio").length){console.log("resizeMainFolioAjax");var e=$(window).height()-80;$("#single-folio").height(e),goRoyalFolio()}}function resizeMainFolioSolo(){if($("#single-folio").length){console.log("resizeMainFolioSolo");var e=$(window).height(),o=$(".main-header").height()+100,a=e-o;console.log(e,o,a),$("#single-folio").height(a),goRoyalFolio()}}function goRoyalHomepage(){if($("#homepage-gallery").length){var e=$("#homepage-gallery");e.royalSlider({transitionType:"fade",addActiveClass:!0,imageScaleMode:"fill",controlNavigation:"none",slidesSpacing:0,navigateByClick:!1,numImagesToPreload:2,arrowsNav:!1,keyboardNavEnabled:!0,fadeinLoadedSlide:!0,globalCaption:!1,globalCaptionInside:!1,transitionSpeed:300,sliderDrag:!1,addActiveClass:!0,autoPlay:{pauseOnHover:!1,enabled:!0,delay:3e3}});var o=e.data("royalSlider");o.ev.on("rsAfterSlideChange",function(e){console.log("rsAfterSlideChange");var o=$(".rsActiveSlide .slide").data("color");console.log(o),$("#slide-credit").attr("class",""),$("#slide-credit").addClass(o)}),o.slides[0].holder.on("rsAfterContentSet",function(){console.log("rsAfterContentSet")})}}function goRoyalFolio(){var e=$("#single-folio");e.royalSlider({addActiveClass:!0,controlNavigation:"none",slidesSpacing:0,numImagesToPreload:2,arrowsNavHideOnTouch:!0,keyboardNavEnabled:!0,fadeinLoadedSlide:!0,globalCaption:!1,globalCaptionInside:!1,transitionSpeed:300,autoPlay:{pauseOnHover:!1,enabled:!0,delay:3e3}})}function goRoyalFolioAfterAjax(){var e=$("#single-folio");e.royalSlider({addActiveClass:!0,controlNavigation:"none",slidesSpacing:0,numImagesToPreload:2,arrowsNavHideOnTouch:!0,keyboardNavEnabled:!0,fadeinLoadedSlide:!0,globalCaption:!1,globalCaptionInside:!1,transitionSpeed:300,autoPlay:{pauseOnHover:!1,enabled:!0,delay:3e3}})}function goMasonry(){var e=$("#portfolio-grid");e.imagesLoaded(function(){e.masonry({columnWidth:".folio-thumb",itemSelector:".folio-thumb"})})}function goMasonryArticles(){var e=$("#article-grid");e.imagesLoaded(function(){e.masonry({columnWidth:".post-masonry-item",itemSelector:".post-masonry-item"})})}function pjaxComplete(){NProgress.done(),goRoyalHomepage(),goMasonry(),goMasonryArticles(),clearEmptySpans(),fadeBkgImg(),resizeMainFolioSolo(),goInstafeed(),goInstafeedPage()}$(".swap-image-wrap").waitForImages(function(){$("#swap-image").addClass("loaded")});var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()?console.log("is mobile"):console.log("is no mobile"),$(window).on("scroll",function(){var e;e=$(window).scrollTop(),e>200?$("body").addClass("scrolled"):$("body").removeClass("scrolled")}),$.waitForImages.hasImgProperties=["backgroundImage"],$(document).on("click",".portfolio-thumb",function(e){e.preventDefault();var o=$(this).data("array");if($(".rsOverflow").length){var a=$(".royalSlider").data("royalSlider");a.destroy()}$("body").addClass("overflowhidden"),$("#test-wrapper").addClass("loaded");var n="";for(var i in o)n+='<a class="rsImg" href="'+o[i]+'" /> ';document.getElementById("test").innerHTML=n,$("#test").imagesLoaded(function(){$("#test").royalSlider({addActiveClass:!0,controlNavigation:"none",imageScalePadding:0,slidesSpacing:0,numImagesToPreload:2,arrowsNavHideOnTouch:!0,keyboardNavEnabled:!0,fadeinLoadedSlide:!0,globalCaption:!1,globalCaptionInside:!1,transitionSpeed:300,autoPlay:{pauseOnHover:!1,enabled:!0,delay:3e3}})})}),$(document).on("click","#test-wrapper-close",function(e){$("#test-wrapper").removeClass("loaded"),$("body").removeClass("overflowhidden")}),$(document).on("click",".toggle-search",function(e){e.preventDefault(),$(".search-wrap").toggleClass("open"),$('.search-wrap input[type="search"]').focus()}),$(document).on("click",".folio-thumb a.folio-link",function(e){e.preventDefault();var o=$(this).attr("href");$("#ajax-folio").fadeIn(200,function(){$("#ajax-folio .inner").load(o+" #single-folio",function(){resizeMainFolioAjax(),$(this).addClass("loaded")})})}),$(document).on("click",".ajax-folio-closer",function(e){$("#ajax-folio").fadeOut(200,function(){$("#ajax-folio .inner").empty().removeClass("loaded")})}),$(document).on("hover",".artist-item",function(e){var o=$(this).data("title"),a=$(this).data("swap"),n=$("#swap-image"),i=$("#swap-title"),t=$("a",this).attr("href"),l=$("#swap-image-link");console.log(o,a),n.attr("src",a),i.html(o),l.attr("href",t)}),$(window).on("resize",function(){}),pjax.connect({useClass:"pjax",container:"pjax-content",beforeSend:function(e){NProgress.start()},complete:function(){pjaxComplete()}}),pjaxComplete();
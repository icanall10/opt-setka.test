function t446_setLogoPadding(recid){if($(window).width()>980){var t446__menu=$('#rec'+recid+' .t446');var t446__logo=t446__menu.find('.t446__logowrapper');var t446__leftpart=t446__menu.find('.t446__leftwrapper');var t446__rightpart=t446__menu.find('.t446__rightwrapper');t446__leftpart.css("padding-right",t446__logo.width()/2+50);t446__rightpart.css("padding-left",t446__logo.width()/2+50)}}
function t446_checkOverflow(recid,menuheight){var t446__menu=$('#rec'+recid+' .t446');var t446__rightwr=t446__menu.find('.t446__rightwrapper');var t446__rightmenuwr=t446__rightwr.find('.t446__rightmenuwrapper');var t446__rightadditionalwr=t446__rightwr.find('.t446__additionalwrapper');var t446__burgeroverflow=t446__rightwr.find('.t446__burgerwrapper_overflow');var t446__burgerwithoutoverflow=t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');if(menuheight>0){var t446__height=menuheight}else{var t446__height=80}
if($(window).width()>980&&(t446__rightmenuwr.width()+t446__rightadditionalwr.width())>t446__rightwr.width()){t446__menu.css("height",t446__height*2);t446__rightadditionalwr.css("float","right");t446__burgeroverflow.css("display","table-cell");t446__burgerwithoutoverflow.css("display","none")}else{if(t446__menu.height()>t446__height){t446__menu.css("height",t446__height)}
if(t446__rightadditionalwr.css("float")=="right"){t446__rightadditionalwr.css("float","none")}
t446__burgeroverflow.css("display","none");t446__burgerwithoutoverflow.css("display","table-cell")}}
function t446_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t446__list_item a[href='"+url+"']").addClass("t-active");$(".t446__list_item a[href='"+url+"/']").addClass("t-active");$(".t446__list_item a[href='"+pathname+"']").addClass("t-active");$(".t446__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t446__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t446__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t446_checkAnchorLinks(recid){if($(window).width()>=960){var t446_navLinks=$("#rec"+recid+" .t446__list_item a:not(.tooltipstered)[href*='#']");if(t446_navLinks.length>0){t446_catchScroll(t446_navLinks)}}}
function t446_catchScroll(t446_navLinks){var t446_clickedSectionId=null,t446_sections=new Array(),t446_sectionIdTonavigationLink=[],t446_interval=100,t446_lastCall,t446_timeoutId;t446_navLinks=$(t446_navLinks.get().reverse());t446_navLinks.each(function(){var t446_cursection=t446_getSectionByHref($(this));if(typeof t446_cursection.attr("id")!="undefined"){t446_sections.push(t446_cursection)}
t446_sectionIdTonavigationLink[t446_cursection.attr("id")]=$(this)});t446_updateSectionsOffsets(t446_sections);t446_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t446_updateSectionsOffsets(t446_sections)},200));$('.t446').bind('displayChanged',function(){t446_updateSectionsOffsets(t446_sections)});setInterval(function(){t446_updateSectionsOffsets(t446_sections)},5000);t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId);t446_navLinks.click(function(){var t446_clickedSection=t446_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof t446_clickedSection.attr("id")!="undefined"){t446_navLinks.removeClass('t-active');$(this).addClass('t-active');t446_clickedSectionId=t446_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t446_now=new Date().getTime();if(t446_lastCall&&t446_now<(t446_lastCall+t446_interval)){clearTimeout(t446_timeoutId);t446_timeoutId=setTimeout(function(){t446_lastCall=t446_now;t446_clickedSectionId=t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId)},t446_interval-(t446_now-t446_lastCall))}else{t446_lastCall=t446_now;t446_clickedSectionId=t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId)}})}
function t446_updateSectionsOffsets(sections){$(sections).each(function(){var t446_curSection=$(this);t446_curSection.attr("data-offset-top",t446_curSection.offset().top)})}
function t446_getSectionByHref(curlink){var t446_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(t446_curLinkValue[0]=='/'){t446_curLinkValue=t446_curLinkValue.substring(1)}
if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t446_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t446_curLinkValue.substring(1)+"']")}}
function t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId){var t446_scrollPosition=$(window).scrollTop(),t446_valueToReturn=t446_clickedSectionId;if(t446_sections.length!=0&&t446_clickedSectionId==null&&t446_sections[t446_sections.length-1].attr("data-offset-top")>(t446_scrollPosition+300)){t446_navLinks.removeClass('t-active');return null}
$(t446_sections).each(function(e){var t446_curSection=$(this),t446_sectionTop=t446_curSection.attr("data-offset-top"),t446_id=t446_curSection.attr('id'),t446_navLink=t446_sectionIdTonavigationLink[t446_id];if(((t446_scrollPosition+300)>=t446_sectionTop)||(t446_sections[0].attr("id")==t446_id&&t446_scrollPosition>=$(document).height()-$(window).height())){if(t446_clickedSectionId==null&&!t446_navLink.hasClass('t-active')){t446_navLinks.removeClass('t-active');t446_navLink.addClass('t-active');t446_valueToReturn=null}else{if(t446_clickedSectionId!=null&&t446_id==t446_clickedSectionId){t446_valueToReturn=null}}
return!1}});return t446_valueToReturn}
function t446_setPath(){}
function t446_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t446").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t446").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t446_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t446").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t446_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t446").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t446_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t446"),burger=el.find(".t446__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t446_opened")})
$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}
function t604_init(recid){t604_imageHeight(recid);t604_arrowWidth(recid);t604_show(recid);t604_hide(recid);$(window).bind('resize',t_throttle(function(){t604_arrowWidth(recid)},200))}
function t604_show(recid){var el=$("#rec"+recid),play=el.find('.t604__play');play.click(function(){if($(this).attr('data-slider-video-type')=='youtube'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
if($(this).attr('data-slider-video-type')=='vimeo'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
$(this).next().css('z-index','3')})}
function t604_hide(recid){var el=$("#rec"+recid),body=el.find('.t604__frame');el.on('updateSlider',function(){body.html('').css('z-index','')})}
function t604_imageHeight(recid){var el=$("#rec"+recid);var image=el.find(".t604__separator");image.each(function(){var width=$(this).attr("data-slider-image-width");var height=$(this).attr("data-slider-image-height");var ratio=height/width;var padding=ratio*100;$(this).css("padding-bottom",padding+"%")})}
function t604_arrowWidth(recid){var el=$("#rec"+recid),arrow=el.find('.t-slds__arrow_wrapper'),slideWidth=el.find('.t-slds__wrapper').width(),windowWidth=$(window).width(),arrowWidth=windowWidth-slideWidth;if(windowWidth>960){arrow.css('width',arrowWidth/2)}else{arrow.css('width','')}}
function t678_onSuccess(t678_form){var t678_inputsWrapper=t678_form.find('.t-form__inputsbox');var t678_inputsHeight=t678_inputsWrapper.height();var t678_inputsOffset=t678_inputsWrapper.offset().top;var t678_inputsBottom=t678_inputsHeight+t678_inputsOffset;var t678_targetOffset=t678_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t678_target=t678_targetOffset-200}else{var t678_target=t678_targetOffset-100}
if(t678_targetOffset>$(window).scrollTop()||($(document).height()-t678_inputsBottom)<($(window).height()-100)){t678_inputsWrapper.addClass('t678__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t678_target},400);setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden')},400)}
var successurl=t678_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t754__init(recid){setTimeout(function(){t_prod__init(recid);t754__hoverZoom_init(recid);t754_initPopup(recid);t754__updateLazyLoad(recid);t754__alignButtons_init(recid)},500)}
function t754__showMore(recid){var el=$('#rec'+recid).find(".t754");var showmore=el.find('.t754__showmore');var cards_count=parseInt(el.attr('data-show-count'));if(cards_count>0){if(showmore.text()===''){showmore.find('td').text(t754__dict('loadmore'))}
showmore.show();el.find('.t754__col').hide();var cards_size=el.find('.t754__col').size();var cards_count=parseInt(el.attr('data-show-count'));var x=cards_count;var y=cards_count;el.find('.t754__col:lt('+x+')').show();showmore.click(function(){x=(x+y<=cards_size)?x+y:cards_size;el.find('.t754__col:lt('+x+')').show();if(x==cards_size){showmore.hide()}})}}
function t754__dict(msg){var dict=[];dict.loadmore={EN:'Load more',RU:'Загрузить еще',FR:'Charger plus',DE:'Mehr laden',ES:'Carga más',PT:'Carregue mais',UK:'Завантажити ще',JA:'もっと読み込む',ZH:'裝載更多',};var lang=window.tildaBrowserLang;if(typeof dict[msg]!=='undefined'){if(typeof dict[msg][lang]!=='undefined'&&dict[msg][lang]!=''){return dict[msg][lang]}else{return dict[msg].EN}}
return 'Text not found "'+msg+'"'}
function t754__alignButtons_init(recid){var el=$('#rec'+recid);if(el.find('[data-buttons-v-align]')[0]){try{t754__alignButtons(recid);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&$isMobile){return}
t754__alignButtons(recid)},200));el.find('.t754').bind('displayChanged',function(){t754__alignButtons(recid)});if($isMobile){$(window).on('orientationchange',function(){t754__alignButtons(recid)})}}catch(e){console.log('buttons-v-align error: '+e.message)}}}
function t754__alignButtons(recid){var rec=$('#rec'+recid);var wrappers=rec.find('.t754__textwrapper');var maxHeight=0;var itemsInRow=rec.find('.t-container').attr('data-blocks-per-row')*1;var mobileView=$(window).width()<=480;var tableView=$(window).width()<=960&&$(window).width()>480;var mobileOneRow=$(window).width()<=960&&rec.find('.t754__container_mobile-flex')[0]?!0:!1;var mobileTwoItemsInRow=$(window).width()<=480&&rec.find('.t754 .mobile-two-columns')[0]?!0:!1;if(mobileView){itemsInRow=1}
if(tableView){itemsInRow=2}
if(mobileTwoItemsInRow){itemsInRow=2}
if(mobileOneRow){itemsInRow=999999}
var i=1;var wrappersInRow=[];$.each(wrappers,function(key,element){element.style.height='auto';if(itemsInRow===1){element.style.height='auto'}else{wrappersInRow.push(element);if(element.offsetHeight>maxHeight){maxHeight=element.offsetHeight}
$.each(wrappersInRow,function(key,wrapper){wrapper.style.height=maxHeight+'px'});if(i===itemsInRow){i=0;maxHeight=0;wrappersInRow=[]}
i++}})}
function t754__hoverZoom_init(recid){if(isMobile){return}
var rec=$('#rec'+recid);try{if(rec.find('[data-hover-zoom]')[0]){if(!jQuery.cachedZoomScript){jQuery.cachedZoomScript=function(url){var options={dataType:'script',cache:!0,url:url};return jQuery.ajax(options)}}
$.cachedZoomScript('https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js').done(function(script,textStatus){if(textStatus=='success'){setTimeout(function(){t_hoverZoom_init(recid,".t-slds__container")},500)}else{console.log('Upload script error: '+textStatus)}})}}catch(e){console.log('Zoom image init error: '+e.message)}}
function t754__updateLazyLoad(recid){var scrollContainer=$("#rec"+recid+" .t754__container_mobile-flex");var curMode=$(".t-records").attr("data-tilda-mode");if(scrollContainer.length&&curMode!="edit"&&curMode!="preview"){scrollContainer.bind('scroll',t_throttle(function(){if(window.lazy=='y'){t_lazyload_update()}}))}}
function t754_initPopup(recid){var rec=$('#rec'+recid);rec.find('[href^="#prodpopup"]').one("click",function(e){e.preventDefault();var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');t_sldsInit(recid+' #t754__product-'+lid_prod+'')});rec.find('[href^="#prodpopup"]').click(function(e){e.preventDefault();t754_showPopup(recid);var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');el_popup.find('.js-product').css('display','none');var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');el_fullprod.css('display','block');var analitics=el_popup.attr('data-track-popup');if(analitics>''){var virtTitle=el_fullprod.find('.js-product-name').text();if(!virtTitle){virtTitle='prod'+lid_prod}
Tilda.sendEventToStatistics(analitics,virtTitle)}
var curUrl=window.location.href;if(curUrl.indexOf('#!/tproduct/')<0&&curUrl.indexOf('%23!/tproduct/')<0&&curUrl.indexOf('#%21%2Ftproduct%2F')<0){if(typeof history.replaceState!='undefined'){window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod)}}
t754_updateSlider(recid+' #t754__product-'+lid_prod+'');if(window.lazy=='y'){t_lazyload_update()}});if($('#record'+recid).length==0){t754_checkUrl(recid)}
t754_copyTypography(recid)}
function t754_checkUrl(recid){var curUrl=window.location.href;var tprodIndex=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&tprodIndex<0){tprodIndex=curUrl.indexOf('%23!/tproduct/');if(tprodIndex<0){tprodIndex=curUrl.indexOf('#%21%2Ftproduct%2F')}}
if(tprodIndex>=0){var curUrl=curUrl.substring(tprodIndex,curUrl.length);var curProdLid=curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);var rec=$('#rec'+recid);if(curUrl.indexOf(recid)>=0&&rec.find('[data-product-lid='+curProdLid+']').length){rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click')}}}
function t754_updateSlider(recid){var el=$('#rec'+recid);t_slds_SliderWidth(recid);var sliderWrapper=el.find('.t-slds__items-wrapper');var sliderWidth=el.find('.t-slds__container').width();var pos=parseFloat(sliderWrapper.attr('data-slider-pos'));sliderWrapper.css({transform:'translate3d(-'+(sliderWidth*pos)+'px, 0, 0)'});t_slds_UpdateSliderHeight(recid);t_slds_UpdateSliderArrowsHeight(recid)}
function t754_showPopup(recid){var el=$('#rec'+recid);var popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show');if(window.lazy=='y'){t_lazyload_update()}},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').mousedown(function(e){var windowWidth=$(window).width();var maxScrollBarWidth=17;var windowWithoutScrollBar=windowWidth-maxScrollBarWidth;if(e.clientX>windowWithoutScrollBar){return}
if(e.target==this){t754_closePopup()}});el.find('.t-popup__close, .t754__close-text').click(function(e){t754_closePopup()});$(document).keydown(function(e){if(e.keyCode==27){t754_closePopup()}})}
function t754_closePopup(){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');var curUrl=window.location.href;var indexToRemove=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&indexToRemove<0){indexToRemove=curUrl.indexOf('%23!/tproduct/');if(indexToRemove<0){indexToRemove=curUrl.indexOf('#%21%2Ftproduct%2F')}}
curUrl=curUrl.substring(0,indexToRemove);setTimeout(function(){$(".t-popup").scrollTop(0);$('.t-popup').not('.t-popup_show').css('display','none');if(typeof history.replaceState!='undefined'){window.history.replaceState('','',curUrl)}},300)}
function t754_removeSizeStyles(styleStr){if(typeof styleStr!="undefined"&&(styleStr.indexOf('font-size')>=0||styleStr.indexOf('padding-top')>=0||styleStr.indexOf('padding-bottom')>=0)){var styleStrSplitted=styleStr.split(';');styleStr="";for(var i=0;i<styleStrSplitted.length;i++){if(styleStrSplitted[i].indexOf('font-size')>=0||styleStrSplitted[i].indexOf('padding-top')>=0||styleStrSplitted[i].indexOf('padding-bottom')>=0){styleStrSplitted.splice(i,1);i--;continue}
if(styleStrSplitted[i]==""){continue}
styleStr+=styleStrSplitted[i]+";"}}
return styleStr}
function t754_copyTypography(recid){var rec=$('#rec'+recid);var titleStyle=rec.find('.t754__title').attr('style');var descrStyle=rec.find('.t754__descr').attr('style');rec.find('.t-popup .t754__title').attr("style",t754_removeSizeStyles(titleStyle));rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style",t754_removeSizeStyles(descrStyle))}
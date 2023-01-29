
$(function(){
  const hamTab = $('.ham_box .tab_box .ham_tab li');
  const sheet = $('.ham_box .tab_box .ham_tab_sheet>ul');

  hamTab.click(function(){
    let target = $(this);
    let i = target.index();

    hamTab.removeClass('on');
    hamTab.eq(i).addClass('on');
    
    sheet.removeClass('on_sheet');
    sheet.eq(i).addClass('on_sheet');
  })
})//ham_box >hamTab click_event 






$(function(){
  const lnbLi = $('.header .lnb_box')
  const lnbMenu = $('.header .lnb_list_menu')
  const lnbText =$('.lnb ul li a')
  const gnbBox =$('.header .gnb_hidden a')
  const gnb = $('.header .gnb_box .gnb')

  lnbLi.mouseover(function(){
    $('.logo >img').attr('src','./images/logo01 (1).png')
    lnbMenu.stop().animate({
      height:400,
    },300);
    lnbMenu.css('border-top','1px solid #eee')
    lnbLi.css('background','#FFF')
    lnbText.css('color','black')
    gnbBox.css('color','black')
    gnb.css('color','black')
  })

  lnbLi.mouseout(function(){
    $('.logo >img').attr('src','./images/logo01_white.png')
    lnbMenu.stop().animate({
      height:0
    },300);
    lnbMenu.css('border-top','none')
    lnbLi.css('background','none')
    lnbText.css('color','#FFF')
    gnbBox.css('color','#FFF')
    gnb.css('color','#FFF')
  })
})//lnb_mouseover event (web)




$(function(){
  $(window).scroll(function(){

    const lnbText =$('.lnb ul li a')
    const gnbBox =$('.header .gnb_hidden a')
    const gnb = $('.header .gnb_box .gnb')

    if($(window).scrollTop() >=200){
      $('.header').addClass('fixed');
      $('.logo >img').attr('src','./images/logo01 (1).png');
      lnbText.css('color','black')
      gnbBox.css('color','black')
      gnb.css('color','black')
      $('.btn_top').fadeIn(300);
    }else{
      $('.header').removeClass('fixed');
      $('.logo >img').attr('src','./images/logo01_white.png');
      lnbText.css('color','#FFF')
      gnbBox.css('color','#FFF')
      gnb.css('color','#FFF')
      $('.btn_top').fadeOut(300);
    }
  })//scroll_event
})// lnb_fixed






const contentEls = document.querySelectorAll('.guide_content_box>div>div')
window.addEventListener('scroll', () => {
  if(window.scrollY > 700){
    gsap.to(contentEls[0], 0.5, { 
      opacity: 1
    })
    gsap.to(contentEls[1], 0.5, {
      delay: 0.5,
      opacity: 1
    })
    gsap.to(contentEls[2],0.5, {
      delay: 1,
      opacity: 1
    })
    gsap.to(contentEls[3],0.5, {
      delay: 1.5,
      opacity: 1
    })
  }
})//guide_content_box scroll event, gsap





const noticeEls = document.querySelectorAll('.not01_box .frame>ul>li')

window.addEventListener('scroll', () => {
  if(window.scrollY > 1100){
    gsap.to(noticeEls[0], 0.5, { 
      delay: 1,
      opacity: 1
    })
    gsap.to(noticeEls[1], 0.5, {
      delay: 1.5,
      opacity: 1
    })
    gsap.to(noticeEls[2],0.5, {
      delay: 2,
      opacity: 1
    })
  }
})//notice01 scroll event, gsap





const cardEls = document.querySelectorAll('.card_sheet_box>div>div')

window.addEventListener('scroll', () => {
  if(window.scrollY > 1500) {
    gsap.to(cardEls[0], 0.5, {
      delay:2,
      opacity: 1
    })
    gsap.to(cardEls[1], 0.5, {
      delay:2.5,
      opacity: 1
    })
    gsap.to(cardEls[2], 0.5, {
      delay:3,
      opacity: 1
    })
    gsap.to(cardEls[3], 0.5, {
      delay:3.5,
      opacity: 1
    })
  }
})//card_sheet_box scroll event, gsap








$(function(){

  const hamBtnOpen = $('.header .gnb_box .gnb .lab_ham_open');
  const hamBtnClose = $('.header .gnb_box .gnb .lab_ham_close');
  const hamBox = $('.ham_box');
  let gnbBoxBg = $('.header .gnb_box');
  let gnbBoxTxt = $('.header .gnb_box .gnb')


  hamBtnClose.css('display','none')
  hamBtnOpen.click(function(){
    hamBox.stop().animate({
      right:0
    },200);
    $('.logo >img').attr('src','./images/logo01 (1).png');
    hamBtnOpen.css('display','none');
    hamBtnClose.css('display','block');
    gnbBoxBg.css('background-color','white');
    gnbBoxBg.css('position','fixed');
    gnbBoxTxt.css('color','black');
  })

  hamBtnClose.click(function(){
    hamBox.stop().animate({
      right:800*-1
    },300);
    $('.logo >img').attr('src','./images/logo01_white.png');
    hamBtnOpen.css('display','block');
    hamBtnClose.css('display','none');
    gnbBoxBg.css('background','none');
    gnbBoxTxt.css('color','white');
  })
})//Btn_ham_box click_event








$(function(){
  let metaBtnLeft = $('.metapo_box .btn_metapo .btn_meta_left');
  let metaBtnRight = $('.metapo_box .btn_metapo .btn_meta_right');


  metaBtnLeft.click(function(){

    $('.metapo_length').animate({'margin-left':'-100px'}
    ,300,function(){
      $('.metapo_length li:first-child').insertAfter('.metapo_length li:last-child');
      $('.metapo_length').css({'margin-left':'-5px'});
    })
  })//metaBtnLeft_click



  metaBtnRight.click(function(){

    $('.metapo_length li:last-child').insertBefore('.metapo_length li:first-child')
    $('.metapo_length').css({'margin-left':'-80px'});
    $('.metapo_length').animate({'margin-left':'0'}
    ,300);
 
  })//metaBtnRight_click
})//tablet meta btn click_event 










$(function(){
  let btnGuide01 = $('.guide_box .guide_top .g_top01');
  let btnGuide02 = $('.guide_box .guide_top .g_top02');
  let btnGuide03 = $('.guide_box .guide_top .g_top03');
  
  let guideList01 = $('.guide_box .guide_top .guide_list01');
  let guideList02 = $('.guide_box .guide_top .guide_list02');
  let guideList03 = $('.guide_box .guide_top .guide_list03');

  $(btnGuide01).on('click',function(){
    guideList01.slideToggle('fast');
    guideList02.slideUp('fast');
    guideList03.slideUp('fast');
  })

  $(btnGuide02).on('click',function(){
    guideList02.slideToggle('fast');
    guideList01.slideUp('fast');
    guideList03.slideUp('fast');
  })

  $(btnGuide03).on('click',function(){
    guideList03.slideToggle('fast');
    guideList01.slideUp('fast');
    guideList02.slideUp('fast');
  })
  
})//guide_box click_event










$(function(){
  let eleWidth = $('.frame ul li').innerWidth();
  let state = false;
  let playOn = false;
  let direction = 'left';
  let bannerAuto;

  function play(){
    if(!playOn){
      playOn = true;
    }
  
  }//play()
  
  function stop(){
    if(playOn){
      playOn = false;
      clearInterval(bannerAuto);
    }
  }

  function right(){
    stop()
    direction = 'left';
    $('.frame ul').animate({left: eleWidth*-1}
      ,300, function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'));
        $(this).css('left',0);
        state = false; 
        play();
      })
  }//stop

  function left(){
    direction = 'right';
    $('.frame>ul>li:last').insertBefore($('.frame>ul>li:first'))
    $('.frame ul').css('left',eleWidth*-1);
    $('.frame ul').animate({left: 0}, 300,
      function(){
        state = false; 
        play();
      });
  }//right()

  $('.btn_not_left').click(function(){
    if(!state){
      state = true;
      left();
    }
  })

  $('.btn_not_right').click(function(){
    if(!state){
      state = true;
      right();
    }
  })

})//notice01 _click _event






$(function(){
  let cardIndi01 = $('.communicate_card .card_indicator .indi01');
  let cardIndi02 = $('.communicate_card .card_indicator .indi02');
  let cardIndi03 = $('.communicate_card .card_indicator .indi03');
  let cardIndi04 = $('.communicate_card .card_indicator .indi04');

  cardIndi01.click(function(){
    $('.card_sheet_box').stop().animate({left:0},300)
    cardIndi01.css('background-color','#E21366').siblings().css('background-color','#ccc')

  })

  cardIndi02.click(function(){
    $('.card_sheet_box').stop().animate({left:-350},300)
      cardIndi02.css('background-color', '#E21366').siblings().css('background-color','#ccc')
  })

  cardIndi03.click(function(){
    $('.card_sheet_box').stop().animate({left:-700},300)
      cardIndi03.css('background-color', '#E21366').siblings().css('background-color','#ccc')
  })


  cardIndi04.click(function(){
    $('.card_sheet_box').stop().animate({left:-1050},300)
      cardIndi04.css('background-color', '#E21366').siblings().css('background-color','#ccc')
  })

})//communicate_card indicator event




$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'horizontal',
    moveSlides: 1,
    slideMargin: 40,
    infiniteLoop: true,
    slideWidth: 500,
    minSlides: 1,
    maxSlides: 1, 
    speed: 200,
    auto:true,
    autoControls:true,
    pager: false
  });
})//오늘의 공연 bxslider(mobile,tablet)




$(function(){
  const todayTab =$('.today_show_box .show_tab li');
  const todaySheet = $('.today_show_box .sheetbg');

  todayTab.click(function(){
    let target = $(this);
    let i = target.index();

    todayTab.removeClass('to_on');
    todayTab.eq(i).addClass('to_on');

    todaySheet.removeClass('to_on_sheet')
    todaySheet.eq(i).addClass('to_on_sheet')
  })
})//오늘의 공연  sheet click event (web)





$(document).ready(function(){
  $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed:3000,
    speed:200,
    prevArrow: "<button type='button' class='slick-prev'>Prev</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
    
    responsive: [
 
      { breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }},
      { breakpoint: 320, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      }
    ]
  })
})//오늘의 전시 (slick)




$(document).ready(function(){
  $('.banner_bxslider').bxSlider({
    mode: 'horizontal',
    moveSlides: 1,
    slideMargin: 40,
    infiniteLoop: true,
    slideWidth: 500,
    minSlides: 1,
    maxSlides: 1, 
    speed: 200,
    auto:true,
    autoControls:true 
  });
})//banner_bxslider




const topBtn = document.querySelector('.btn_top')

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 0 
  }) 
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 200) {
    gsap.to(topBtn, 0.3, {
      opacity: 1
    })
  }else{
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  }
})//btn_top(gsap)

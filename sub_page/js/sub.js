
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
  const lnbLi = $('.header')
  const lnbMenu = $('.header .lnb_list_menu')

  lnbLi.mouseover(function(){
  
    lnbMenu.stop().animate({
      height:400,
    },300);
    lnbMenu.css('border-top','1px solid #eee')
    lnbLi.css('background','#FFF')
  })

  lnbLi.mouseout(function(){
  
    lnbMenu.stop().animate({
      height:0
    },300);
    lnbMenu.css('border-top','none')
    lnbLi.css('background','none')
  })
})//lnb_mouseover_event(web)




$(function(){

  const hamBtnOpen = $('.header .gnb_box .gnb .lab_ham_open');
  const hamBtnClose = $('.header .gnb_box .gnb .lab_ham_close');
  const hamBox = $('.ham_box');
  let gnbBoxBg = $('.header .gnb_box');


  hamBtnClose.css('display','none')
  hamBtnOpen.click(function(){
    hamBox.stop().animate({
      right:0
    },200);
    hamBtnOpen.css('display','none');
    hamBtnClose.css('display','block');
    gnbBoxBg.css('background-color','white');
    gnbBoxBg.css('position','fixed');
   
  })

  hamBtnClose.click(function(){
    hamBox.stop().animate({
      right:800*-1
    },300);
    hamBtnOpen.css('display','block');
    hamBtnClose.css('display','none');
    gnbBoxBg.css('background','none');
  })

})//Btn_ham_box click_event





$(function(){
  $(window).scroll(function(){

    if($(window).scrollTop() >=200){
      $('.header').addClass('fixed');
      $('.header').css('background-color','#FFF')
      $('.btn_top').fadeIn(300);
    }else{
      $('.header').removeClass('fixed');
      $('.header').css('background-color','none')
      $('.btn_top').fadeOut(300)
    }
  })//scroll_event
})// lnb_fixed






$(document).ready(function(){

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
    prevArrow: "<button type='button' class='slick-next'>Next</button>",
    nextArrow: "<button type='button' class='slick-prev'>Prev</button>"
  });

})//오늘의 공연 tab(slick)






const topBtn = document.querySelector('.btn_top')

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 0
  }) 
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 160) {
    gsap.to(topBtn, 0.3, {
      opacity: 1
    })
  }else{
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  }
})//btn_top scroll (gsap)


$(function () {
    $('.navBtn').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');

        let viewportWidth = window.innerWidth;
        // 만약 뷰포트 너비가 1400 이상이면 항상 열린 상태로 유지
        if (viewportWidth >= 1200) {
            // $('.sub').stop().slideToggle();
            // if ($('header .sub').hasClass('S_close')) {
            //     $('header .sub').stop().slideUp().removeClass('S_close');
            // } else {
            //     $('header .sub').stop().slideDown().addClass('S_close');
                
            // }
            $('.sub').toggleClass('active');
            // return;
        }
       
    //if ($('nav').css('right') === '0px') {
    //    // 네비게이션 메뉴가 열려있으면 닫기
    //    $('nav').stop().animate({ 'right': '-100%' }, 500);
    //    
    //} else {
    //    // 네비게이션 메뉴가 닫혀있으면 열기
    //    $('nav').stop().animate({ 'right': 0 }, 500);
    //}
});
$('.row1 .title li').click(function(){
  $(this).addClass('active').siblings().removeClass('active')
})
let viewportWidth = window.innerWidth;
// 만약 뷰포트 너비가 1400 이상이면 항상 열린 상태로 유지
if (viewportWidth >= 1200) {
  $('.date input').addClass('datepicker')
}


 $('.mypage').click(function(){
//     $('.my').stop().animate({'left':0},300);
//  });

//  $('.my .close').click(function(){
//      $('.my').stop().animate({'left':'-100%'},300);
  $('.my').addClass('active')
 });
 $('.my .close').click(function(){
  $('.my').removeClass('active')
 });
$('.row1 .box .btn>div').on("click",function(){
  $(this).addClass('active').siblings().removeClass('active');
});

 $('.row1 .box .date,.row1 .box .sit ,.row1 .box .person').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
 });
 
 $('.remove').click(function(e){
    e.preventDefault();
 });
 let swiper = new Swiper(".slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".myNext",
        prevEl: ".myPrev",
      },
  });

  let swiper2 = new Swiper(".ad-slide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

});





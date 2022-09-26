$(function(){
    // sticky header
    $(window).scroll(function(){
       var scrolling= $(this).scrollTop();

       if(scrolling > 200 ){
           $('.navbar').addClass('bbg');
       }
       else {
           $('.navbar').removeClass('bbg')
       }
    });


    $('.banner_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        dots:true,
      });


    $('.service_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
      });

    //   blog_slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
        centerMode:true,
        centerPadding:false,
      });

    //   design_slider

    $('.design_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
      });

    //   mixit_op
    var containerEl = document.querySelector('.filter_project');

    var mixer = mixitup(containerEl);

    // venobox
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
//   counterup
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
     
});
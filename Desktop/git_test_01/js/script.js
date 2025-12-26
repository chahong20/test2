$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



new Swiper('.best-product', {
    loop: true,
    slidesPerView: "auto",    
    spaceBetween: 32,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    autoplay: {//자동슬라이드 (false-비활성화)  
    delay: 3800, // 시간 설정
    disableOnInteraction: false,
    }, // false-스와이프 후 자동 재생 
    breakpoints:{
        1440:{
            slidesPerView: "auto",  //브라우저가 1024보다 클 때
            spaceBetween: 20,
        },
        1024:{
            slidesPerView: "auto",  //브라우저가 1024보다 클 때
            spaceBetween: 18,
        },
        768:{
            slidesPerView: "auto",  //브라우저가 768보다 클 때
            spaceBetween: 16,
        },
        620:{
            slidesPerView: "auto",  //브라우저가 768보다 클 때
            spaceBetween: 16,
        }
    }
});

new Swiper('.best-product-right', {
    loop: true,
    slidesPerView: "auto",    
    spaceBetween: 32,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    centeredSlides: false,
    autoplay: {//자동슬라이드 (false-비활성화)  
    delay: 3800, // 시간 설정
    disableOnInteraction: false,
    }, // false-스와이프 후 자동 재생 
    breakpoints:{
        1440:{
            slidesPerView: "auto",  //브라우저가 1024보다 클 때
            spaceBetween: 20,
        },
        1024:{
            slidesPerView: "auto",  //브라우저가 1024보다 클 때
            spaceBetween: 18,
        },
        768:{
            slidesPerView: "auto",  //브라우저가 768보다 클 때
            spaceBetween: 16,
        },
        620:{
            slidesPerView: "auto",  //브라우저가 768보다 클 때
            spaceBetween: 16,
        }
    }

});


new Swiper('.shop-swiper', {
    loop: false,
    slidesPerView: "auto",    
    spaceBetween: 24,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    centeredSlides: false,
    watchOverflow: true,
    autoHeight : true,
});


// svg 길이구하기
$(function(){
    $('.svgAni').find("#svgAni01").each(function(i,path){
        var lenght=path.getTotalLength();
        /* alert(lenght) */
    })
})


//스크롤에 따라 gnb가 나타나고 사라지는
var prevScrollTop = 0;
document.addEventListener('scroll', function(){
    var nowScrollTop = $(window).scrollTop();   //먼저 현재값을 저장시킨다
    if(nowScrollTop > prevScrollTop ){
        $('header').addClass('active');
    } else{             //아닐경우
        $('header').removeClass('active');
    }
    prevScrollTop = nowScrollTop;  //항상 스크롤값을 전달해야한다
})


gsap.timeline({
    scrollTrigger:{
        trigger:'.ingredients',
        start:'0% 100%',
        end:'0% 10%',
        scrub:0,
        //markers:true
    }
})
.to('header', {color:'#222',ease:'none',duration:5},0)
.to('header .menu-icon img',{filter: 'invert(1)', duration: 0})
.to('header .logo',{filter: 'invert(1)', duration: 0})


/*   scrollTrigger:{
            trigger:'.con01', //트리거 대상
            start:'0% 80%',  //트리거 대상의 0%와 브라우저의 80%가 만날때 애니메이션이 시작됨.
            end:'100% 100%', //트리거 대상의 100%와 브라우저의 100가 만날때 애니메이션이 종료됨.
            scrub:1,         //GSAP ScrollTrigger의 이벤트는 스크롤이 사용될 때만 재생되도록 만들어주는 속성
            markers:true    //시작위치와 끝 위치를 확인 가능하게 하는 마커
        } */
/* 


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  rtl: true,
});
또는 HTML에 dir="rtl"을 주는 방법도 있습니다.

html
코드 복사
<div class="swiper" dir="rtl">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
📌 이 경우 */




/* footer */
document.querySelectorAll('footer .top-box .left-box ul').forEach(ul => {
    const tit = ul.querySelector('li.tit');
    if (!tit) return;

    tit.addEventListener('click', () => {
    // 다른 섹션 닫기
    document.querySelectorAll('footer .top-box .left-box ul.open')
        .forEach(other => { if (other !== ul) other.classList.remove('open'); });

    // 현재 토글
    ul.classList.toggle('open');
    });
});
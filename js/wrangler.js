// wrangler.js

$(function() {
  $('html').stop().animate({scrollTop : 0}, 100);
  //버튼을 누르면 인덱스 번호 검사
  var $btns = $('.color .btns button'),
      $img = $('.color section .image'),
      $target = $('.color .overlay'),
      $targetImg = $target.find('.image'),
      i = 0,
      j = 0,
      //.color .imgWrap
      k = 0,
      v = 0,
      delta = 0,
      $ctHei = $('.content').outerHeight(),
      ctNum = 0,
      scrollE = false,
      $abSeg = $('.about .segment'),
      scrTop = 0,
      abOff = [],
      sideAniL = {left : 200, opacity : 1},
      sideAniR = {right : 200, opacity : 1};


  var $imgP = ['url(image/sub02_Wrangler/lightBox-01.jpg)',
              'url(image/sub02_Wrangler/lightBox-02.jpg)',
              'url(image/sub02_Wrangler/lightBox-03.jpg)',
              'url(image/sub02_Wrangler/lightBox-04.jpg)'];

// 초기설정
    $img.hide();
    $img.eq(0).show();
////////////////////////

     for (var f = 0; f < 3; f++) {
       abOff[f] = $('.about section').children('article').eq(f).offset().top;
     };

    console.log(abOff[0]);
    console.log(abOff[1]);
    console.log(abOff[2]);


     $(window).scroll(function () {
       scrTop = $('html').scrollTop();

        if (scrTop >= abOff[2]) {
            $abSeg.eq(2).stop().animate(sideAniL,1000)
        }else if(scrTop >= abOff[1]){
            $abSeg.eq(1).stop().animate(sideAniR,1000)
        }else if(scrTop >= abOff[0]){
            $abSeg.eq(0).stop().animate(sideAniL,1000)
        }
     })



///////////////////////
/*
이미지의 인덱스 번호와 일치하는 overlay 안의 이미지를 찾아서 타겟
이미지에 대입
*/


    $img.on('click', function () {
        //$imgP = $('.color .image').css('backgroundImage');
        // $targetImg.css({},function () {
        //     $target.addClass('visible');
        // });
        $target.addClass('visible');
        k = $(this).index(); //0, 1, 2, 3
        $targetImg.css({backgroundImage : $imgP[k]});
        // v = $(this).index();
        // console.log(v);
        // $('.color .overlay .image').removeClass('checked');
        // $('.color .overlay .image').eq(v).addClass('checked');
    });

    $target.on('click',function () {
        $target.removeClass('visible');
    })
    $btns.on('click',imgfade);
    // 버튼의 인덱스 번호 출력 후, 해당하는 인덱스 번호에 있는
    // 이미지만 fadein

//////////////////////////////

      // 마우스 휠을 내리면 다음 컨텐츠로 이동
    $(window).on('mousewheel',function(evt) {
      delta = evt.originalEvent.wheelDelta;
      console.log(delta);

          // 아래로 내리면 음수
          // 위로 올리면 양수
      if (delta > 0 && ctNum > 0 && scrollE === false) {
          prevCt();

      }else if(delta < 0 && ctNum < 5 && scrollE === false) {
          nextCt();
      };
    });

    // 마우스 휠을 내리면, about의 segment가 opacity : 0, top -40에서
    // opacity : 1, top : 0으로 높이값과 투명도 회복



  // 함수
      function prevCt() {
        scrollE = true
        if (ctNum > 0)ctNum--;
            Mct();
      };
      function nextCt() {
        scrollE = true
        if (ctNum < 5)ctNum++;
            Mct();
      };

      function Mct() {
        $('html').stop().animate({
          scrollTop : $ctHei * ctNum
        },function () {
            scrollE = false;
        })
      };
      function imgfade() {
        i = $(this).index();
          $img.eq(i).fadeIn(800).siblings($img).fadeOut(800);
        };
});

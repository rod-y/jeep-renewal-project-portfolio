// model.js


// index.js

$(function () {
  $('html').stop().animate({scrollTop : 0}, 100);

  var delta = 0,
      $ctHei = $('.content').outerHeight(),
      ctNum = 0,
      scrollE = false;


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

// 함수
  function prevCt() {
    scrollE = true
    if (ctNum > 0)ctNum--;
        Mct();
  }
  function nextCt() {
    scrollE = true
    if (ctNum < 5)ctNum++;
        Mct();
  }

  function Mct() {
    $('html').stop().animate({
      scrollTop : $ctHei * ctNum
    },function () {
        scrollE = false;
    })
  }
});

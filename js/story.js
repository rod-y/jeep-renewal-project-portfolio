// model.js


// index.js

$(function () {
  $('html').stop().animate({scrollTop : 0}, 100);
  $('.content').find('section h2').css({left:-100, opacity:0});
  var delta = 0,
      $ctHei = $('.content').outerHeight(),
      ctNum = 0,
      scrollE = false, // 스크롤 애니메이션 변수
      $since = $('.content .head header'),
      //html의 scrollTop
      scrTop = 0,
      //각 content의 오프셋
      ctOffset = [],
      visi = {left : 0,opacity : 1},
      unvisi = {left:-100, opacity:0};


    for(var i = 0; i < 5; i++){
      ctOffset[i] = $('.content').eq(i).offset().top;

    }
    console.log(ctOffset);
$(window).scroll(function(){
  scrTop = $('html').scrollTop();

  if(scrTop >= ctOffset[4]){
    $since.eq(4).find('h2').animate(visi,1500)
  }else if(scrTop >= ctOffset[3]){
    $since.eq(3).find('h2').animate(visi,1500)
  }else if(scrTop >= ctOffset[2]){
    $since.eq(2).find('h2').animate(visi,1500)
  }else if(scrTop >= ctOffset[1]){
    $since.eq(1).find('h2').animate(visi,1500)
  }else if(scrTop >= ctOffset[0]){
    $since.eq(0).find('h2').animate(visi,1500)
  }


  // for (var j = 0; j < 5; j++) {
  //   if(scrTop >= ctOffset[j]){
  //      $since.eq(j).find('h2').animate(visi,1500)
  //    };
  // }
});

  // 마우스 휠을 내리면 다음 컨텐츠로 이동
  $(window).on('mousewheel',function(evt) {
    delta = evt.originalEvent.wheelDelta;
      console.log(delta);//120 / -120

      // 아래로 내리면 음수
      // 위로 올리면 양수
    if (delta > 0 && ctNum > 0 && scrollE === false) {
        prevCt();

    }else if(delta < 0 && ctNum < 5 && scrollE === false) {
        nextCt();
    };

    // if (ctNum == 1) {
    //   $since.animate({
    //     left : 0,
    //     opacity : 1
    //   },1500)
    // }else if(ctNum != 1){
    //   $since.css({
    //     left : -100 +'px',
    //     opacity : 0
    //   })
    // }
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
    });
  }
});

$(function() {
  setInterval(function(){articleTada();}, 4000);
  designBgStuff();

});

function designBgStuff() {
  $('.design-img-link').hover(function() {
    //the thing
    $(this).parent().parent().css('background-color', $(this).data('color'))
  }, function() {
    //revert the thing
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'))
  });
}


function articleTada() {
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1

  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
  }

$(window).scroll(function() {
  youtubeVidScroll();
  startArticles();
});

function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -' + wScroll+ 'px')
}

function startArticles() {
  var wScroll = $(window).scrollTop();

  if($('section.articles').offset().top - $(window).height()/2 < wScroll) {
    $('.article-thumb').each(function(i){
      setTimeout(function() {
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 200 * i)
    });
  }

}

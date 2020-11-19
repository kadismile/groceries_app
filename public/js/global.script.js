"use strict";

window.$(document).ready(function(){

  window.$('.navi-menu-button').on('click', function(e){
    navMenuOpen();
  });

  window.$('.nav-menu').on('click', function(e){
    if (window.$(e.target).hasClass('nav-menu')){
      navMenuClose();
    }
  });

  window.$('nav.menu ul.main-menu>li>a').on('click', function(e){
    var that = window.$(this);
    if (that.parent().find('ul:first').length)
    {
      e.preventDefault();
      if (!that.parent().hasClass('active'))
      {
        window.$('nav.menu ul.main-menu ul').slideUp('fast',function(){
          window.$('nav.menu ul.main-menu > li').removeClass('active');
        });

        window.$('nav.menu ul li a span').removeClass('fa-angle-up').addClass('fa-angle-down');


        that.parent().find('ul:first').slideDown('fast',function(){
          that.parent().addClass('active');
        });

        that.find('span').removeClass('fa-angle-down').addClass('fa-angle-up');
      }
      else
      {

        that.parent().find('ul:first').slideUp('fast',function(){
          window.$(this).parent().removeClass('active');
        });
        that.find('span').removeClass('fa-angle-up').addClass('fa-angle-down');
      }
    }
    else
    {
      window.$('nav.menu ul.main-menu ul').slideUp('fast');
      window.$('nav.menu ul.main-menu > li').removeClass('active');
      that.parent().addClass('active');
    }
  });


  window.$('.tab-item .fix-width .menu-item').css({'width': 100/window.$('.tab-item .fix-width .menu-item').length+'%'});

  if (window.$('.wizard').length)
  {
    wizardFixHeight();
    window.$(window).resize();
  }



  if (window.$('.animated-text').length)
    animateText();

});


window.$(".wrapper-inline").on("scroll", function(e) {
  if (this.scrollTop > 150) {
    window.$('header.no-background').addClass("set-bg");
  } else {
    window.$('header.no-background').removeClass("set-bg");
  }

});

var navMenuOpen = function(){
  window.$('.navi-menu-button').addClass('focused');

  window.$('div.nav-menu').fadeIn(50,function(e){
    window.$('nav.menu').addClass('opened');
  });
}

var navMenuClose = function(){
  window.$('.navi-menu-button').removeClass('focused');

  window.$('nav.menu').removeClass('opened');
  window.$('div.nav-menu').fadeOut(200);
}

var wizardFixHeight = function(){
  window.$(window).on('resize', function(e){
    window.$('.wizard .wizard-item').height(window.$(window).height()-50);
  });
}

var animateText = function(){
  window.$('.vertical-center').css({'margin-top':window.$(window).height()/2 - window.$('.vertical-center').height()/2});
  window.$('.animated-text').removeClass('zero-opacity');
  window.$('[data-transation]').each(function(e,i){
    var that = window.$(this);
    that.addClass('hide');

    var transation = that.attr('data-transation');
    if (transation == '')
      transation = 'fadeInDown';

    var startTime = parseInt(that.attr('data-start-time'));
    if (isNaN(startTime))
      startTime = 0;

    setTimeout(function(){
      that.addClass('animated '+transation);
    },startTime);
  })
}


/*sweet checkbox scripts*/
window.$('.sweet-check :checkbox:checked').each(function(e,i){
  window.$(this).parent().addClass('checked');
});


window.$(document).on('click', '.sweet-check', function(){
  if (window.$(this).hasClass('checked'))
  {
    window.$(this).removeClass('checked');
    window.$(this).find('input').prop('checked', false);
  }
  else
  {
    window.$(this).addClass('checked');
    window.$(this).find('input').prop('checked', true);
  }

  //console.log(window.$(this).find('input').prop('checked'));
});

window.$(document).on('click','[data-loader]', function(){
  window.$('.sweet-loader').show().addClass('show');
});


/*expandable list scrips****/
window.$(document).on('click', '.expandable-item .expandable-header', function(){
  if (window.$(this).parent().hasClass('accordion'))
  {
    if (window.$(this).parent().hasClass('active'))
    {
      window.$(this).parent().removeClass('active');
      window.$(this).parent().find('.expandable-content').attr('style','');
    }
    else
    {
      var accordionGroup = window.$(this).parent().attr('data-group');
      window.$('[data-group="'+accordionGroup+'"]').removeClass('active');
      window.$('[data-group="'+accordionGroup+'"]').find('.expandable-content').attr('style','');
      window.$(this).parent().find('.expandable-content').css({'max-height':window.$(this).parent().find('.expandable-content')[0].scrollHeight});
      window.$(this).parent().addClass('active');
    }
  }
  else
  {
    if (window.$(this).parent().hasClass('active'))
      window.$(this).parent().find('.expandable-content').attr('style','');
    else
      window.$(this).parent().find('.expandable-content').css({'max-height':window.$(this).parent().find('.expandable-content')[0].scrollHeight});

    window.$(this).parent().toggleClass('active');
  }
});



window.$(document).on('click', '.tab-item .menu-item', function(e){
  e.preventDefault();
  var tabContentId = window.$(this).attr('data-content');

  window.$(this).parents('.tab-item').find('.menu-item').removeClass('active');
  window.$(this).addClass('active');

  window.$(this).parents('.tab-item').find('.content-item').removeClass('active');
  window.$('#'+tabContentId).addClass('active');
});


/*post item scripts **************/
window.$(document).on('click', '.post-item .post-share > i', function(e){
  e.preventDefault();
  window.$(this).parent().find('.social-links').fadeToggle('fast');
});


/*popup actions ******************/
window.$(document).on('click', '[data-dismiss="true"]', function(){
  window.$(this).parents('.popup-overlay').fadeOut('fast');
});

window.$(document).on('click', '[data-popup]', function(){
  var modalId = window.$(this).attr('data-popup');
  window.$('#'+modalId).fadeIn('fast');
});

window.$(document).on('click', '.popup-overlay', function(e){
  if (window.$(e.target).hasClass('popup-overlay'))
  {
    window.$(this).fadeOut('fast');
  }
});




/*search popup actions ************/

var openSearchPopup = function(){
  window.$('.search-form').fadeIn('fast');
  window.$('.search-form input').focus();
}

var closeSearchPopup = function(){
  window.$('.search-form').fadeOut('fast');
}

window.$(document).on('click', '[data-search="open"]', function(){
  openSearchPopup();
});

window.$(document).on('click', '[data-search="close"]', function(){
  closeSearchPopup();
});
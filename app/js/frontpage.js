$(document).ready(function() {
  (function heroAction() {
    var heroList = [
      'Graphic Design',
      'User Experience',
      'Branding',
      'Photoshop',
      'Web Design',
      'Illustrator',
      'HTML5',
      'CSS Preprocessors',
      'Mobile Design',
      'Jade',
      'Responsive Design'
    ];

    var index = 0,
        time = 4000,
        $heroTitle = $('.hero-title'),
        hideClass = 'off',
        animationTime = 300;

    function getSkill() {
      var returnVal;

      if (index === (heroList.length - 1)) {
        returnVal = heroList[0];
        index = 0;
      } else {
        returnVal = heroList[++index];
      }

      return returnVal;
    }

    function changeSkill(skill) {
      $heroTitle.addClass(hideClass);

      setTimeout(function() {
        $heroTitle.text(skill);

        $heroTitle.removeClass(hideClass);

        setTimeout(function() {
          setTimeout(function() {
            changeSkill(getSkill());
          }, time);
        }, animationTime)
      }, animationTime);
    }

    changeSkill(getSkill());
  })();

  (function servicesAction() {
    var servicesList = {
      'design': 'Design excites me. Seeing something start as just an idea or scribble on a napkin and watching it take shape and grow into a living thing, its the best part of graphic design. Its what makes the hours of research and discovery, failed attempts and crumpled up sketches worth it. There’s nothing better than seeing your work have a positive impact for your client and their customers. I strive to make something better everytime. Thats what keeps me motivated.',
      'ux': 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      'dev': 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.',
      'identity': 'Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.'
    };

    var $service = $('.service-wrapper'),
        $copy = $('.service-copy'),
        hideClass = 'off',
        animationTime = 300;

    function getText(service) {
      return servicesList[service];
    }

    $service.on('mouseenter', function(e) {
      var service = $(this).data('service');

      $copy.addClass(hideClass);

      $service.removeClass('hover');

      $(this).addClass('hover');

      setTimeout(function() {
        $copy.text(getText(service)).removeClass(hideClass);
      }, animationTime);
    });
  })();
});

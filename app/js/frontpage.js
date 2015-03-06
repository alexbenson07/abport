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
      'SCSS',
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
      'ux': 'When I started web design, I had never heard of user experience. It was a new concept in the space. But the more I researched and learned, the more I realized just how integral this concept is in this age of the internet. With users accessing so many site from so many different devices, premepting the user expectation and anticipating their needs has become ever more important.',
      'dev': 'Early in my design school career, I was exposed to web development. This was the pre-responsive era, where it was still common to see a m.sitename.com in your url, and phones loaded at excruciatingly slow speeds. I remember swearing that I would never learn code. But that all changed when I got my first job. When I had work leave due to an accident, I spent 3 weeks, and taught myself HTML and CSS. I love prototyping and playing with new features.',
      'identity': 'One of the first things I got involved with when I began designing, I enjoy branding and identity design for the challenge it provides. Taking an abstract concept an individual or a company and relating that concept to their target market with a literal represenation is one the most rewarding tasks a designer can accomplish.'
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

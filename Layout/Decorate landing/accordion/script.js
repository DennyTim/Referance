function accord(selector) {
  let accordion = $(selector);
  let spans = accordion.children('span');
  let divs = accordion.children('div');

  accordion
    .addClass('accordion')
    .on('click', '.accordion__control', function (e) {
      e.preventDefault()

      let a = $(this);
      let active = a.hasClass('accordion__control_active');

      accordion
        .find('.accordion__control_active')
        .removeClass('accordion__control_active');

      accordion
        .find('.accordion__panel_active')
        .removeClass('accordion__panel_active');

      if (!active) {
        a
          .addClass('accordion__control_active')
          .next()
          .addClass('accordion__panel_active')
      }

    })

  spans.each(function () {
    $(this).replaceWith(`<a href="#" class="accordion__control">${$(this).text()}</a>`);
  });

  divs.each(function () {
    $(this).addClass('accordion__panel');
  });

}

accord('#accordion');
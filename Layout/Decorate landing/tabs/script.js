function tabs(selector) {
  let tabs = $(selector);
  let span = tabs.children('span');
  let div = tabs.children('div');

  tabs
    .addClass('tabs')
    .prepend('<div class="tabs__controls"></div>')
    .append('<div class="tabs__panels"></div>')
    .on('click', '.tabs__control', function (e) {
      e.preventDefault();

      tabs.find('.tabs__control_active').removeClass('tabs__control_active');
      tabs.find('.tabs__panel_active').removeClass('tabs__panel_active');

      $(this).addClass('tabs__control_active');

      tabs
        .find('.tabs__panel')
        .eq($(this).index())
        .addClass('tabs__panel_active');
    });

  span
    .prependTo(selector + ' .tabs__controls')
    .each(function (i) {
      let span = $(this);

      if (!i) {
        span.replaceWith(`
          <a href="#" class="tabs__control tabs__control_active">
            ${span.text()}
          </a>
        `);
      } else {
        span.replaceWith(`
          <a href="#" class="tabs__control">
            ${span.text()}
          </a>
        `);
      }
    });

  div
    .prependTo(selector + ' .tabs__panels')
    .addClass('tabs__panel')
    .eq(0)
    .addClass('tabs__panel_active');
}

tabs('#tab');

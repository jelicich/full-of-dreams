(function($) {

  const AUTOCOMPLETE_SELECTOR = '.autocomplete-input';
  const CLOSE_SELECTOR = '.mobile-close-autocomplete';
  const OPEN = 'open';
  const DATA_ID = 'id';
  const DATA_CURRENT_ID = 'current-id';

  // TODO: only for demo/testing purposes: REMOVE!
  console.log($('.result-list-content').find('.list-item'));
  $('.result-list-content').find('.list-item').each(function() {
    setItemClick($(this));
  })
  // END TODO;

  $(AUTOCOMPLETE_SELECTOR).click(function() {
    $(this).addClass(OPEN);
  });

  $(AUTOCOMPLETE_SELECTOR).on('input', async function() {
    await getSuggestions($(this), this.value);
  });

  $(CLOSE_SELECTOR).click(function() {
    const $autocomplete = $(this).siblings(AUTOCOMPLETE_SELECTOR);
    setInputValue($autocomplete, '', '');
  })

  async function getSuggestions($el, value, dependantField = null) {
    // TODO: mocked api call
    await Promise.resolve();
    
    // TODO: render results and set click
    // setItemClick($listItem);
  }

  function setItemClick($item) {
    $item.click(function() {
      const $autocomplete = $item.parent().parent().siblings(AUTOCOMPLETE_SELECTOR);
      setInputValue($autocomplete, $item.html(), $item.data(DATA_ID));
    });
  }

  function setInputValue($el, value, id) {
    $el.val(value);
    $el.data(DATA_CURRENT_ID, id);
    
    $el.removeClass(OPEN);
  }
})(jQuery)
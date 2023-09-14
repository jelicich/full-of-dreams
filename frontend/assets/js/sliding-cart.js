(function($) {

  const CART_PANEL_SELECTOR = '.sliding-cart-panel';
  const CART_BUTTON_SELECTOR = '.sliding-cart-button';
  const CART_CLOSE_SELECTOR = '.sliding-cart-close';
  const CART_CONFIRM_SELECTOR = '.sliding-cart-confirm';
  const DELETE_ITEM_SELECTOR = '.sliding-cart-bundle-delete';

  const OPEN_CLASS = 'is-open';

  $(CART_BUTTON_SELECTOR).click(function() {
    $(CART_PANEL_SELECTOR).addClass(OPEN_CLASS);
  });

  $(CART_CLOSE_SELECTOR).click(function() {
    $(CART_PANEL_SELECTOR).removeClass(OPEN_CLASS);
  });

  $(CART_CONFIRM_SELECTOR).click(function() {
    // TODO: handle cart submission
    console.log('go to checkout');
  });

  $(DELETE_ITEM_SELECTOR).click(function() {
    // TODO: handle delete item
    console.log('delete item ', $(this).data('item-id'));
  });
})(jQuery)
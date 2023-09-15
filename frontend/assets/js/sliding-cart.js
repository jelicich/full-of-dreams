(function($) {

  const CART_CONFIRM_SELECTOR = '.sliding-cart-confirm';
  const DELETE_ITEM_SELECTOR = '.sliding-cart-bundle-delete';

  $(CART_CONFIRM_SELECTOR).click(function() {
    // TODO: handle cart submission
    console.log('go to checkout');
  });

  $(DELETE_ITEM_SELECTOR).click(function() {
    // TODO: handle delete item
    console.log('delete item ', $(this).data('item-id'));
  });
})(jQuery)
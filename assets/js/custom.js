$(document).ready(function () {
  $(document).on('click', '.addToCart-btn', function (e) {
    e.preventDefault();
    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();
    var product_id = $(this).val();

    quantity = Number(quantity);
    quantity = quantity ? quantity : 1;

    $.ajax({
      type: 'POST',
      url: 'functions/handlecart.php',
      data: {
        product_id: product_id,
        quantity: quantity,
        scope: 'add',
      },

      success: function (response) {
        if (response == 201) {
          $('#cart').load(location.href + ' #cart');
          $.notification(['Product added to cart successfully'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else if (response == 'existing') {
          $.notification(['Product already existing in the cart'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'warning',
          });
        } else if (response == 401) {
          $.notification(['You must log in first before adding into cart'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'warning',
          });
        } else if (response == 500) {
          $.notification(['Something went wrong'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'warning',
          });
        }
      },
    });
  });

  $(document).on('click', '.increment-btn-cart', function (e) {
    e.preventDefault();

    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();
    var value = parseInt(quantity, 10);

    var pst = $(this).closest('.product-data').find('.subtotal').val(); //product subtotal
    var pp = $(this).closest('.product-data').find('.productPrice').val(); //product price
    const totalInput = document.querySelector('.total');
    var st2 = document.querySelector('#st2');
    var subtotal = parseFloat(pst);
    var price = parseFloat(pp);

    value = isNaN(value) ? 0 : value;
    if (value < 10) {
      value++;
      st2.value = 'New text for the paragraph';
      var newSubTotal = Number((subtotal + price).toFixed(2));
      var newTotal = Number((parseFloat(totalInput.value) + price).toFixed(2));

      var quantity = $(this)
        .closest('.product-data')
        .find('.input-quantity')
        .val(value);

      var pst = $(this)
        .closest('.product-data')
        .find('.subtotal')
        .val(newSubTotal);

      totalInput.value = newTotal;
    }
  });

  $(document).on('click', '.decrement-btn-cart', function (e) {
    e.preventDefault();

    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();
    var value = parseInt(quantity, 10);

    var pst = $(this).closest('.product-data').find('.subtotal').val(); //product subtotal
    var pp = $(this).closest('.product-data').find('.productPrice').val(); //product price
    const totalInput = document.querySelector('.total');

    var subtotal = parseFloat(pst);
    var price = parseFloat(pp);

    value = isNaN(value) ? 0 : value;
    if (value > 1) {
      value--;
      var newSubTotal = Number((subtotal - price).toFixed(2));
      var newTotal = Number((parseFloat(totalInput.value) - price).toFixed(2));

      var quantity = $(this)
        .closest('.product-data')
        .find('.input-quantity')
        .val(value);
      var pst = $(this)
        .closest('.product-data')
        .find('.subtotal')
        .val(newSubTotal);
      totalInput.value = newTotal;
    }
  });

  $(document).on('click', '.increment-btn', function (e) {
    e.preventDefault();

    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();
    var value = parseInt(quantity, 10);

    value = isNaN(value) ? 0 : value;
    if (value < 10) {
      value++;

      var quantity = $(this)
        .closest('.product-data')
        .find('.input-quantity')
        .val(value);
    }
  });

  $(document).on('click', '.decrement-btn', function (e) {
    e.preventDefault();

    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();
    var value = parseInt(quantity, 10);

    value = isNaN(value) ? 0 : value;
    if (value > 1) {
      value--;

      var quantity = $(this)
        .closest('.product-data')
        .find('.input-quantity')
        .val(value);
    }
  });

  $(document).on('click', '.updateQty', function (e) {
    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();

    var product_id = $(this).closest('.product-data').find('#productID').val();

    $.ajax({
      type: 'POST',
      url: 'functions/handleCart.php',
      data: {
        product_id,
        quantity,
        scope: 'update',
      },
      success: function (response) {
        if (response == 200) {
        }
      },
    });
  });

  $(document).on('click', '.deleteItem', function (e) {
    var cart_id = $(this).val();

    $.ajax({
      type: 'POST',
      url: 'functions/handleCart.php',
      data: {
        cart_id,
        scope: 'delete',
      },
      success: function (response) {
        if (response == 200) {
          $('#mycart').load(location.href + ' #mycart');
          $('#cart').load(location.href + ' #cart');
          $.notification(['Item removed in cart successfully'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else {
          $.notification([response], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'warning',
          });
        }
      },
    });
  });

  $(document).on('click', '.addToCart-btn', function (e) {
    e.preventDefault();
    var quantity = $(this)
      .closest('.product-data')
      .find('.input-quantity')
      .val();
    var product_id = $(this).val();

    quantity = Number(quantity);
    quantity = quantity ? quantity : 1;

    $.ajax({
      type: 'POST',
      url: 'functions/handlecart.php',
      data: {
        product_id: product_id,
        quantity: quantity,
        scope: 'add',
      },

      success: function (response) {
        if (response == 201) {
          $.notification(['Product added to cart successfully'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else {
        }
      },
    });
  });

  $(document).on('click', '.addToCartWishlist-btn', function (e) {
    e.preventDefault();

    var product_id = $(this).val();
    quantity = 1;

    $.ajax({
      type: 'POST',
      url: 'functions/handlecart.php',
      data: {
        product_id: product_id,
        quantity: quantity,
        scope: 'addWishlist',
      },

      success: function (response) {
        if (response == 201) {
          $('#wishlist').load(location.href + ' #wishlist');
          $('#cart').load(location.href + ' #cart');
          $.notification(['Product added to cart successfully'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else if (response == 'existing') {
          $('#wishlist').load(location.href + ' #wishlist');
          $.notification(['Product is already in cart'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        }
      },
    });
  });

  $(document).on('click', '.addToWishlist-btn', function (e) {
    e.preventDefault();
    var product_id = $(this).val();

    $.ajax({
      type: 'POST',
      url: 'functions/handlewishlist.php',
      data: {
        product_id: product_id,
        scope: 'addWishlist',
      },

      success: function (response) {
        if (response == 201) {
          $.notification(['Product added to your wishlist'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else if (response == 'existing') {
          $.notification(['Product already in your wishlist'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'error',
          });
        } else {
          $.notification(['Something went wrong'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'error',
          });
        }
      },
    });
  });

  $(document).on('click', '.deleteItemToWishlist-btn', function (e) {
    var wishlist_id = $(this).val();

    $.ajax({
      type: 'POST',
      url: 'functions/handlewishlist.php',
      data: {
        wishlist_id,
        scope: 'deleteWishlist',
      },
      success: function (response) {
        if (response == 200) {
          $('#wishlist').load(location.href + ' #wishlist');
          // $('#cart').load(location.href + ' #cart');
          $.notification(['Item removed in wishlist successfully'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else {
          $.notification([response], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'warning',
          });
        }
      },
    });
  });

  $(document).on('click', '.subscribe-btn', function (e) {
    e.preventDefault();
    var email = $(this).closest('.subscribe-data').find('.email').val();
    var emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      emailRegex.test(email) &&
      email.indexOf('@gmail.com') !== -1 &&
      email.endsWith('@gmail.com')
    ) {
      //valid email
      if (email) {
        $.ajax({
          type: 'POST',
          url: 'functions/subscribe.php',
          data: {
            email,
            subs: true,
          },

          success: function (response) {
            if (response == 200) {
              $.notification(['Email subscribe successfully'], {
                position: ['bottom', 'right'],
                timeView: 3000,
                messageType: 'success',
              });
            } else {
            }
          },
        });
      }
    } else {
      $.notification(['Please enter an email'], {
        position: ['bottom', 'right'],
        timeView: 3000,
        messageType: 'error',
      });
    }
  });

  $(document).on('click', '.saveDetails-btn', function (e) {
    e.preventDefault();
    var formData = {
      user_id: $('#id').val(),
      name: $('#name').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
      province: $('#province-select').val(),
      street: $('#street').val(),
      city: $('#city').val(),
      pincode: $('#pincode').val(),
      barangay: $('#barangay').val(),
      bldg_houseno: $('#bldg_houseno').val(),
    };

    var emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Object.values(formData).some((val) => val === '')
      ? $.notification(['All fields are required'], {
          position: ['bottom', 'right'],
          timeView: 3000,
          messageType: 'error',
        })
      : emailRegex.test(formData.email) && formData.email.endsWith('@gmail.com')
      ? ''
      : $.notification(['Please enter a valid email'], {
          position: ['bottom', 'right'],
          timeView: 3000,
          messageType: 'error',
        });

    //condition to stop the ajax request if the email or some of the data is no value
    if (
      Object.values(formData).some((val) => val === '') ||
      !(
        emailRegex.test(formData.email) && formData.email.endsWith('@gmail.com')
      )
    ) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'functions/savedetails.php',
      data: {
        ...formData,
        updateDetailsBtn: true,
      },
      success: function (response) {
        if (response == 200) {
          $.notification(['Details save successfully'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'success',
          });
        } else {
          $.notification(['An error occurred'], {
            position: ['bottom', 'right'],
            timeView: 3000,
            messageType: 'error',
          });
        }
      },
    });
  });
});

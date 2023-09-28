(function($) {

    $('.item-quantity').on('change', function(e) {

        $.ajax({
            url: "/carts/" + $(this).data('id'), //data-id
            method: 'put',
            data: {
                quantity: $(this).val(),
                _token: csrf_token
            }
        });
    });

    $('.remove-item').on('click', function(e) {

        let id = $(this).data('id');
        $.ajax({
            url: "/carts/" + id, //data-id
            method: 'delete',
            data: {
                _token: csrf_token
            },
            success: response => {
                $(`#${id}`).remove();
            }
        });
    });

    $('.add-to-cart').on('submit', function(e) {

        $.ajax({
            url: "/carts",
            method: 'post',
            data: {
                product_id: $(this).data('id'),
                quantity: $(this).data('quantity'),
                _token: csrf_token
            },
            success: response => {
                alert('product added')
            }
        });
    });

})(jQuery);
$(document).ready(() => {
    function getProducts()
    {
        $('.products').html('');
        $.get('/products/get', function(products, status) {
            if(Array.isArray(products))
            products.forEach(product => {
                $('.products').append(`
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4 ">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="products[]" value="${product.sku}">
                                </label>
                            </div>
                            <h5 class="card-text">${product.name}</h5>
                            <h6 class="card-title">${product.sku}</h6>
                            <p class="card-text">${product.price}$</p>
                            <p class="card-text"> ${product.description}</p>
                            <p class="card-text">${product.type == 0 ? 'Size: ' : product.type == 1 ? 'Weight: ' : 'Dimension: '}${product.attribute}</p>
                        </div>
                    </div>
                </div>
                `);
            });
        });
    }

    getProducts();
    function showMessage(message, duration) {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = message;
        messageDiv.classList.add('show');
    
        setTimeout(function() {
            messageDiv.classList.remove('show');
        }, duration);
    }
    
    $('form').submit(function(e) {
        e.preventDefault();
    
        let items = {};
        $.each($("input[name='products[]']:checked"), function(index){
            items[index] = $(this).val();
        });
    
        if(items[0])
        {
            $.post('/products/delete', items, function(data, status) {
                // Wywołanie funkcji showMessage
                showMessage(data.message, 3000); // 3000 ms = 3 sekundy
                // Odświeżenie listy produktów
                getProducts();
            });
        }
    });
});
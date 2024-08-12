var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
        this.loadFromLocalStorage();
        this.renderCartItems();
    }
    ShoppingCart.prototype.addItem = function (product) {
        this.items.push(product);
        this.saveToLocalStorage();
        this.renderCartItems();
    };
    ShoppingCart.prototype.removeItem = function (productId) {
        this.items = this.items.filter(function (item) { return item.id !== productId; });
        this.saveToLocalStorage();
        this.renderCartItems();
    };
    ShoppingCart.prototype.calculateTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    ShoppingCart.prototype.renderCartItems = function () {
        var _this = this;
        var cartItemsContainer = document.getElementById('cartItems');
        var totalPriceElement = document.getElementById('totalPrice');
        cartItemsContainer.innerHTML = '';
        this.items.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = "".concat(item.name, " - $").concat(item.price);
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function () {
                _this.removeItem(item.id);
            });
            li.appendChild(removeButton);
            cartItemsContainer.appendChild(li);
        });
        totalPriceElement.textContent = this.calculateTotal().toString();
    };
    ShoppingCart.prototype.saveToLocalStorage = function () {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    };
    ShoppingCart.prototype.loadFromLocalStorage = function () {
        var storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            this.items = JSON.parse(storedItems);
        }
    };
    return ShoppingCart;
}());
var cart = new ShoppingCart();
var products = [
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 1.0 },
    { id: 3, name: 'Orange', price: 2.0 },
    { id: 4, name: 'Olcha', price: 3.0 },
    { id: 4, name: 'Uzum', price: 10.0 },
    { id: 4, name: 'Shaftoli', price: 10.0 }
];
var productList = document.getElementById('productList');
products.forEach(function (product) {
    var productDiv = document.createElement('div');
    productDiv.textContent = "".concat(product.name, " - $").concat(product.price);
    var addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', function () {
        cart.addItem(product);
    });
    productDiv.appendChild(addButton);
    productList.appendChild(productDiv);
});

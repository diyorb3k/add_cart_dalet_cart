interface Product {
    id: number;
    name: string;
    price: number;
}

class ShoppingCart {
    private items: Product[] = [];

    constructor() {
        this.loadFromLocalStorage();
        this.renderCartItems();
    }

    addItem(product: Product): void {
        this.items.push(product);
        this.saveToLocalStorage();
        this.renderCartItems();
    }

    removeItem(productId: number): void {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.renderCartItems();
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    renderCartItems(): void {
        const cartItemsContainer = document.getElementById('cartItems')!;
        const totalPriceElement = document.getElementById('totalPrice')!;
        cartItemsContainer.innerHTML = '';

        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                this.removeItem(item.id);
            });

            li.appendChild(removeButton);
            cartItemsContainer.appendChild(li);
        });

        totalPriceElement.textContent = this.calculateTotal().toString();
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }

    private loadFromLocalStorage(): void {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            this.items = JSON.parse(storedItems);
        }
    }
}

const cart = new ShoppingCart();

const products: Product[] = [
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 1.0 },
    { id: 3, name: 'Orange', price: 2.0 },
    { id: 4, name: 'Olcha', price: 3.0 },
    { id: 5, name: 'Uzum', price: 10.0 },
    { id: 6, name: 'Shaftoli', price: 10.0 }
];

const productList = document.getElementById('productList')!;

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.textContent = `${product.name} - $${product.price}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Corzinka';
    addButton.addEventListener('click', () => {
        cart.addItem(product);
    });

    productDiv.appendChild(addButton);
    productList.appendChild(productDiv);
});

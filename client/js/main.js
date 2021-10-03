// 
const products = [
    { title: 'Burger', price: 121},
    { title: 'Pizza', price: 20},
]

// Recorrerlo

const app = document.getElementById('app');
products.forEach( product => {
    app.innerHTML += `<li>${product.title} - ${product.price} </li>`
});


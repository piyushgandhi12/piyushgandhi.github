let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'MacBook Pro',
        tag: 'greymacbook',
        price: 25,
        inCart: 0

    },
    {
        name: 'Samsung Note 10+',
        tag: 'samsung',
        price: 11,
        inCart: 0

    },
    {
        name: 'i Phone 11 Pro Max',
        tag: 'iphone',
        price: 15,
        inCart: 0

    },
    {
        name: 'Apple Watch Series 5',
        tag: 'applewatch',
        price: 90,
        inCart: 0

    },
    {
        name: 'Apple Watch Series 5',
        tag: 'applewatch',
        price: 90,
        inCart: 0

    },
    {
        name: 'LG Smart TV',
        tag: 'lgtv',
        price: 25,
        inCart: 0
    },
]
for (let i=0; i < carts.length; i++){
        carts[i].addEventListener('click', () => {
        cartnumbers(products[i]);
        totalCost(products[i]);
    })
}

function onloadcartnumbers(){
    let productnumbers = localStorage.getItem('cartnumbers');

    if(productnumbers){
        document.querySelector('.cart span').textContent = productnumbers;

    }
}


function cartnumbers(product){
    let productnumbers = localStorage.getItem('cartnumbers');
  
    productnumbers = parseInt(productnumbers);
    
    if(productnumbers){
        localStorage.setItem('cartnumbers', productnumbers + 1);
        document.querySelector('.cart span').textContent = productnumbers + 1;

    }
    else{
        localStorage.setItem('cartnumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems !== null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    }
    else{
        product.inCart = 1;
            cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product){
    // console.log("the product price is",product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My CartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);
    }
    
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart"); 
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("products-container");
    console.log("running");
}

onloadcartnumbers();
displayCart();

document.getElementById('card1').addEventListener('click', function() {
    const productName = document.getElementById('product-name1');
    const getProductName = productName.innerText
    const orderContainer = document.getElementById('ordered-list');
    const createElement = document.createElement('li');
    createElement.innerText = getProductName
    orderContainer.appendChild(createElement)
    
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    const totalPriceFloat = parseFloat(totalPriceText);
    const productPrice = document.getElementById('product1-price')
    const productPriceText = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceText);
    const mainPrice = totalPriceFloat + productPriceFloat;
    totalPrice.innerText = mainPrice.toFixed(2);
    
});



document.getElementById('card2').addEventListener('click', function(){
    const productName = document.getElementById('product-name2');
    const getProductName = productName.innerText
    const orderContainer = document.getElementById('ordered-list');
    const createElement = document.createElement('li');
    createElement.innerText = getProductName
    orderContainer.appendChild(createElement)

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    const totalPriceFloat = parseFloat(totalPriceText);
    const productPrice = document.getElementById('product2-price')
    const productPriceText = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceText);
    const mainPrice = totalPriceFloat + productPriceFloat;
    totalPrice.innerText = mainPrice.toFixed(2);
})
document.getElementById('card3').addEventListener('click', function(){
    const productName = document.getElementById('product-name3');
    const getProductName = productName.innerText
    const orderContainer = document.getElementById('ordered-list');
    const createElement = document.createElement('li');
    createElement.innerText = getProductName
    orderContainer.appendChild(createElement)

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    const totalPriceFloat = parseFloat(totalPriceText);
    const productPrice = document.getElementById('product3-price')
    const productPriceText = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceText);
    const mainPrice = totalPriceFloat + productPriceFloat;
    totalPrice.innerText = mainPrice.toFixed(2);
})
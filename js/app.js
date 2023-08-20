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
    const mainTotal = document.getElementById('main-total');
    const mainTotalText = mainTotal.innerText
    const mainTotalFloat = parseFloat(mainTotalText);
    mainTotal.innerText = mainPrice.toFixed(2);
    const btnPurchase = document.getElementById('btn-purchase')
    const discount = document.getElementById('discount');
    const discountText = discount.innerText
    const discountFloat = parseFloat(discountText);

    const btnDiscount = document.getElementById('btn-discount')

    if (mainPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2'
    }

    if (mainPrice >= 100) {
        btnDiscount.removeAttribute('disabled');
        btnDiscount.style.backgroundColor = '#E527B2'
    }

    

    btnDiscount.addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input')
        const couponInputValue = couponInput.value
        if (couponInputValue === 'SELL200') {
            const discountPrice = 0.2 * mainPrice
            discount.innerText = discountPrice
            const afterDiscount = mainPrice - discountPrice
            mainTotal.innerText = afterDiscount.toFixed(2)
        } else {
            alert("Invalid Coupon")
        }
    })
    
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
    const mainTotal = document.getElementById('main-total');
    const mainTotalText = mainTotal.innerText
    const mainTotalFloat = parseFloat(mainTotalText);
    mainTotal.innerText = mainPrice.toFixed(2);
    const btnPurchase = document.getElementById('btn-purchase')
    const discount = document.getElementById('discount');
    const discountText = discount.innerText
    const discountFloat = parseFloat(discountText);

    const btnDiscount = document.getElementById('btn-discount')

    if (mainPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2'
    }

    if (mainPrice >= 100) {
        btnDiscount.removeAttribute('disabled');
        btnDiscount.style.backgroundColor = '#E527B2'
    }

    

    btnDiscount.addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input')
        const couponInputValue = couponInput.value
        if (couponInputValue === 'SELL200') {
            const discountPrice = 0.2 * mainPrice
            discount.innerText = discountPrice
            const afterDiscount = mainPrice - discountPrice
            mainTotal.innerText = afterDiscount.toFixed(2)
        } else {
            alert("Invalid Coupon")
        }
    })
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
    const mainTotal = document.getElementById('main-total');
    const mainTotalText = mainTotal.innerText
    const mainTotalFloat = parseFloat(mainTotalText);
    mainTotal.innerText = mainPrice.toFixed(2);
    const btnPurchase = document.getElementById('btn-purchase')
    const discount = document.getElementById('discount');
    const discountText = discount.innerText
    const discountFloat = parseFloat(discountText);

    const btnDiscount = document.getElementById('btn-discount')

    if (mainPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2'
    }

    if (mainPrice >= 100) {
        btnDiscount.removeAttribute('disabled');
        btnDiscount.style.backgroundColor = '#E527B2'
    }

    

    btnDiscount.addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input')
        const couponInputValue = couponInput.value
        if (couponInputValue === 'SELL200') {
            const discountPrice = 0.2 * mainPrice
            discount.innerText = discountPrice
            const afterDiscount = mainPrice - discountPrice
            mainTotal.innerText = afterDiscount.toFixed(2)
        } else {
            alert("Invalid Coupon")
        }
    })
})
document.getElementById('card4').addEventListener('click', function(){
    const productName = document.getElementById('product-name4');
    const getProductName = productName.innerText
    const orderContainer = document.getElementById('ordered-list');
    const createElement = document.createElement('li');
    createElement.innerText = getProductName
    orderContainer.appendChild(createElement)

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    const totalPriceFloat = parseFloat(totalPriceText);
    const productPrice = document.getElementById('product4-price')
    const productPriceText = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceText);
    const mainPrice = totalPriceFloat + productPriceFloat;
    totalPrice.innerText = mainPrice.toFixed(2);
    const mainTotal = document.getElementById('main-total');
    const mainTotalText = mainTotal.innerText
    const mainTotalFloat = parseFloat(mainTotalText);
    mainTotal.innerText = mainPrice.toFixed(2);
    const btnPurchase = document.getElementById('btn-purchase')
    const discount = document.getElementById('discount');
    const discountText = discount.innerText
    const discountFloat = parseFloat(discountText);

    const btnDiscount = document.getElementById('btn-discount')

    if (mainPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2'
    }

    if (mainPrice >= 100) {
        btnDiscount.removeAttribute('disabled');
        btnDiscount.style.backgroundColor = '#E527B2'
    }

    

    btnDiscount.addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input')
        const couponInputValue = couponInput.value
        if (couponInputValue === 'SELL200') {
            const discountPrice = 0.2 * mainPrice
            discount.innerText = discountPrice
            const afterDiscount = mainPrice - discountPrice
            mainTotal.innerText = afterDiscount.toFixed(2)
        } else {
            alert("Invalid Coupon")
        }
    })
})
document.getElementById('card5').addEventListener('click', function(){
    const productName = document.getElementById('product-name5');
    const getProductName = productName.innerText
    const orderContainer = document.getElementById('ordered-list');
    const createElement = document.createElement('li');
    createElement.innerText = getProductName
    orderContainer.appendChild(createElement)

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    const totalPriceFloat = parseFloat(totalPriceText);
    const productPrice = document.getElementById('product5-price')
    const productPriceText = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceText);
    const mainPrice = totalPriceFloat + productPriceFloat;
    totalPrice.innerText = mainPrice.toFixed(2);
    const mainTotal = document.getElementById('main-total');
    const mainTotalText = mainTotal.innerText
    const mainTotalFloat = parseFloat(mainTotalText);
    mainTotal.innerText = mainPrice.toFixed(2);
    const btnPurchase = document.getElementById('btn-purchase')
    const discount = document.getElementById('discount');
    const discountText = discount.innerText
    const discountFloat = parseFloat(discountText);

    const btnDiscount = document.getElementById('btn-discount')

    if (mainPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2'
    }

    if (mainPrice >= 100) {
        btnDiscount.removeAttribute('disabled');
        btnDiscount.style.backgroundColor = '#E527B2'
    }

    

    btnDiscount.addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input')
        const couponInputValue = couponInput.value
        if (couponInputValue === 'SELL200') {
            const discountPrice = 0.2 * mainPrice
            discount.innerText = discountPrice
            const afterDiscount = mainPrice - discountPrice
            mainTotal.innerText = afterDiscount.toFixed(2)
        } else {
            alert("Invalid Coupon")
        }
    })
})
document.getElementById('card6').addEventListener('click', function(){
    const productName = document.getElementById('product-name6');
    const getProductName = productName.innerText
    const orderContainer = document.getElementById('ordered-list');
    const createElement = document.createElement('li');
    createElement.innerText = getProductName
    orderContainer.appendChild(createElement)

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    const totalPriceFloat = parseFloat(totalPriceText);
    const productPrice = document.getElementById('product6-price')
    const productPriceText = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceText);
    const mainPrice = totalPriceFloat + productPriceFloat;
    totalPrice.innerText = mainPrice.toFixed(2);
    const mainTotal = document.getElementById('main-total');
    const mainTotalText = mainTotal.innerText
    const mainTotalFloat = parseFloat(mainTotalText);
    mainTotal.innerText = mainPrice.toFixed(2);
    const btnPurchase = document.getElementById('btn-purchase')
    const discount = document.getElementById('discount');
    const discountText = discount.innerText
    const discountFloat = parseFloat(discountText);
    
    const btnDiscount = document.getElementById('btn-discount')

    if (mainPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2'
    }

    if (mainPrice >= 100) {
        btnDiscount.removeAttribute('disabled');
        btnDiscount.style.backgroundColor = '#E527B2'
    }

    

    btnDiscount.addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input')
        const couponInputValue = couponInput.value
        if (couponInputValue === 'SELL200') {
            const discountPrice = 0.2 * mainPrice
            discount.innerText = discountPrice
            const afterDiscount = mainPrice - discountPrice
            mainTotal.innerText = afterDiscount.toFixed(2)
        } else {
            alert("Invalid Coupon")
        }
    })
})
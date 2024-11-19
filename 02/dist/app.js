const buyBtnElement = document.querySelector('.button');
const calculatePrice = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
buyBtnElement.addEventListener('click', () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get('discount') === 'true';
    console.log(calculatePrice(originalPrice, hasDiscount));
});

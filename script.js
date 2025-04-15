document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', function() {
            alert('Thank you for buying this. Please email Vihaan,Keshav, or Tej.' + this.querySelector('h3').innerText);
        });
    });
});

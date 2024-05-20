function addToCart(name, price, imgSrc) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = { name, price, imgSrc, id: cart.length };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Produit ajouté au panier');
}

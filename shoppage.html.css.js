<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop - Le Paradis Sucré de Yassir</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color:rgba(122, 67, 0, 0.436);
      padding: 20px;
      text-align: center;
    }
    .main-content {
      padding: 20px;
    }
    .cart {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 20px;
    }
    .cart ul {
      list-style-type: none;
      padding: 0;
    }
    .cart li {
      margin-bottom: 10px;
    }
    footer {
  background-color: rgba(122, 67, 0, 0.436);
  padding: 15px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

footer h4 {
  margin-bottom: 10px;
}

footer p {
  margin: 5px 0;
}

.footer-contact, .footer-social {
  flex: 1;
}

.footer-social ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  gap: 10px;
}

.footer-social ul li {
  margin: 0;
}

.footer-social ul li a img {
  width: 25px;
  height: 25px;
  border-radius: 25%;
}

  </style>
</head>
<body>
  <header>
    <h1>Panier</h1>
  </header>

  <div class="main-content">
    <section class="cart">
      <h2>Votre Panier</h2>
      <ul id="cart-items">
      </ul>
      <p id="total-price">Total : 0 DH</p>
      <button id="emptyCartButton">Vider le panier</button>
      <button id="checkoutButton">Payer</button>
    </section>
  </div>

  <footer>
    <div class="footer-contact">
      <h4>Contact</h4>
      <p>Adresse: LOT HAMRA ROUTE CASA, Marrakech, Maroc</p>
      <p>Téléphone: +2126-5753-7962</p>
      <p>Email: LeParadisSucrédeYassir@gmail.com</p>
    </div>
    <div class="footer-social">
      <h4>Suivez-nous</h4>
      <ul>
        <li><a href="#"><img src="insta.png" alt="Instagram"></a></li>
        <li><a href="#"><img src="facebook.png" alt="Facebook"></a></li>
        <li><a href="#"><img src="pintrest.png" alt="Pinterest"></a></li>
        <li><a href="#"><img src="twitter.png" alt="Twitter"></a></li>
      </ul>
    </div>
  </footer>

  <script>
    const products = [
      { name: "Ghiriba", price: 10 },
      { name: "Briwat", price: 15 },
      { name: "Chebakia", price: 20 },
      { name: "Ke3b ghzal", price: 20 },
      { name: "Fekkas", price: 20 },
      { name: "Pastilla", price: 20, },
      { name: "Baklawa", price: 20, },
      { name: "Makrout", price: 20 ,},
      { name: "Bechkito", price: 20, }
    ];


    function displayCartItems() {
      const cartItemsElement = document.getElementById('cart-items');
      const totalPriceElement = document.getElementById('total-price');
      let cartItems = JSON.parse(localStorage.getItem('cart'));
      let totalPrice = 0;

      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} DH`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
      });

      totalPriceElement.textContent = `Total : ${totalPrice} DH`;
    }

    emptyCartButton.addEventListener('click', () => {
      localStorage.removeItem('cart');
      const cartItemsElement = document.getElementById('cart-items');
      const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total : 0 DH`;
    cartItemsElement.innerHTML = '';
      alert('Le panier a été vidé.');
    });

    checkoutButton.addEventListener('click', () => {
      if (confirm('Confirmez-vous le paiement ?')) {
        alert('Paiement effectué avec succès !');
      } else {
        alert('Paiement annulé.');
      }
    });

    displayCartItems();
  </script>
</body>
</html>

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");

if (cart.length === 0) {
    cartContainer.innerHTML = '<h2>Cart is empty !!</h2>'
}

cart.forEach((game, index) => {

    const card = document.createElement('div')
    card.classList.add('game-card')

    card.innerHTML = `
    
      <img src="${game.image}">
    <h3>${game.name}</h3>
    <p>₹${game.price}</p>
    <button class="remove-btn">Remove</button>
    `

    const deleteBtn = card.querySelector('.remove-btn')

    deleteBtn.addEventListener('click', () => {
        cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        location.reload();


    })
    cartContainer.appendChild(card)


});
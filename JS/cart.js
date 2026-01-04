let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");

if (cart.length === 0) {
    cartContainer.innerHTML = '<h2>Cart is empty !!</h2>'
}

cart.forEach((game) => {

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
        console.log(card)
        cart = cart.filter(item => item.id !== game.id)

        localStorage.setItem('cart', JSON.stringify(cart))


        card.remove()

        if (cart.length === 0) {
            cartContainer.innerHTML = '<h2>Cart is empty !!</h2>'
        }

    })

    cartContainer.appendChild(card)


});
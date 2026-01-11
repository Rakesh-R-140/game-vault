let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");

if (cart.length === 0) {
    cartContainer.innerHTML = '<h2>Cart is empty !!</h2>'
}




function CartRender() {

    cartContainer.innerHTML = ''
    cart.forEach((game) => {

        const card = document.createElement('div')
        card.classList.add('game-card')

        card.innerHTML = `
    <img src="${game.image}">
    <h3>${game.name}</h3>
    <p>₹${game.price}</p>

    <div class="qty-controls">
        <button class="decrease">−</button>
        <span>${game.Quantity}</span>
        <button class="increase">+</button>
    </div>

    <button class="remove-btn">Remove</button>
`;



        const deleteBtn = card.querySelector('.remove-btn')

        deleteBtn.addEventListener('click', () => {

            cart = cart.filter(item => item.id !== game.id)


            updateCart()
            card.remove()






        })

        const decreaseBtn = card.querySelector('.decrease')
        const increaseBtn = card.querySelector('.increase')

        decreaseBtn.addEventListener('click', () => {
            if (game.Quantity > 1) {

                game.Quantity--
            }

            else {
                card = cart.filter(item => item.id !== game.id)
            }
            updateCart()


        })



        increaseBtn.addEventListener('click', () => {
            game.Quantity++;
            updateCart()



        })






        cartContainer.appendChild(card)
    });

}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
    CartRender()
}



CartRender()
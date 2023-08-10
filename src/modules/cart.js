const cart = () => {
	const cartBtn = document.getElementById('cart');
	const cartModal = document.querySelector('.cart');
	const cartCloseBtn = cartModal.querySelector('.cart-close');
	
	const openCart = (modal) => {
		modal.style.display = 'flex';
	}
	const closeCart = (modal) => {
		modal.style.display = 'none';
	}
	
	cartBtn.addEventListener('click', () => openCart(cartModal));
	cartCloseBtn.addEventListener('click', () => closeCart(cartModal))
};

export default cart;

// const products = document.getElementsByClassName('add_cart');
// console.log(products);
// const cart = document.querySelector('.shopcard__dropdown > ul');


// const addToCart = function () {
// 	const productTitle = this.closest('.body_product').firstElementChild.textContent;
// 	const productImage = this.closest('.product').firstElementChild.children[1].src;
// 	const productPrice = this.closest('.body_product').children[2].firstElementChild.innerText;
// 	const totatAmount = document.querySelectorAll	('.info__price > span');
// 	const position = 'afterbegin';

// 	let template = `<li class = "product__item">
// 						<div class="bag__img">
// 							<a href="#">
// 								<img src="${productImage}" alt="">
// 							</a>
// 						</div>
// 						<div class="bag__info">
// 							<p class="info__title">${productTitle}<a href="#"></a></p>
// 							<div class="info__price">
// 								<span>${productPrice}</span>
// 							</div>
// 							<div class="trash">
// 								<a href="#"><i class="far fa-trash-alt"></i></a>
// 							</div>
// 						</div>
// 					</li>`; 

// 	cart.insertAdjacentHTML(position, template);

// 	// remove products

// 	let trashProducts = document.getElementsByClassName('trash');

// 	for(let i = 0; i < trashProducts.length; i++) {
// 	trashProducts[i].addEventListener('click', deleteProducts, false);

// 	function deleteProducts() {
// 		this.closest('.product__item').remove();
// 	}
// }

// }

// for(let i = 0; i < products.length; i++) {
// 	products[i].addEventListener('click', addToCart, false);
// }

let click = document.getElementById('bts');
click.onclick = function() {
    alert('Hello');
};
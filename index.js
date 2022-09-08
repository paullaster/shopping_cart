/**
 * SHOPPING CART
 * 
 * Cart is an object that have multiple or various instances
 */
//CART CLASS
class ShoppingCart{
    constructor(image, name, quantity, price, remove){
        this.image = image;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.remove = remove;
    }
    static displayCart(...cartInstances){
        return `Cart Instance Cart Items stay here`;
    }
}

/**
 * PUBLIC VARIABLES
 */
let main = document.querySelector('.main');
let buyBtn = document.querySelectorAll('.add-to_cart-btn');

/**
 *Converting Nodelist to Array 
 */
let productArray = Array.from(buyBtn);
for(let item of productArray){ 
    item.addEventListener('click', function(e){
        let productBtnDiv = e.target.parentElement;
        let productContainerDiv = productBtnDiv.parentElement;
        let productImage = productContainerDiv.querySelector('.products-image').src;
        let productDetails = productContainerDiv.querySelector('.title').innerHTML;
        console.log(productDetails);
    })
}
/**
 * ON BUY BUTTON CLICK EVENT
 */
function onItemClick(item) {
    alert('You clicked me!')
}
function addToCart(){

}
/**
 * CART ITEMS
 */
function getCartItems(){
    let cartContent = ShoppingCart.displayCart();
    console.log(typeof(cartContent));
    clearMainContent();
    let mainCartItems = document.createElement('div');
    mainCartItems.innerText = cartContent;

    //Append mainCartItemsto the main.
    main.appendChild(mainCartItems);
}
/**
 * WEB EVENT LISTENERS
 */
const cart = document.querySelector('.cart-header');
cart.addEventListener('click', getCartItems);

/**
 * CLEAR CONTENT IN THE MAIN
 */
function clearMainContent(){
    main.innerHTML = '';
};
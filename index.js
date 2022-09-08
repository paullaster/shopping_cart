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
/**
 * SHOPPING CART
 * 
 * Cart is an object that have multiple or various instances
 */
//CART CLASS

let itemImg = document.createElement('img');
class ShoppingCart{
    constructor({image, title, quantity, price, remove}){
        this.image = image;
        this.title = title;
        this.quantity = quantity;
        this.price = price;
        this.remove = remove;
    } 
    static displayCart(cartInstances){
       /* let cartElement = {
            image:cartInstances.image,
            title: cartInstances.title ,
            qunatity:cartInstances.quantity,
            price: cartInstances.price,
            remove: cartInstances.remove
        };*/
       // itemImg.setAttribute('src', cartElement.image);
        //console.log(cartElement);
        return 'We must od this';
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

/**
 * Invoking getProduct() function
 */
 getProduct(productArray);
/**
 * ON BUY BUTTON CLICK EVENT
 */
 function itemClicked(e){
    let productBtnDiv = e.target.parentElement;
    let productContainerDiv = productBtnDiv.parentElement;
    let productImage = productContainerDiv.querySelector('.products-image').src;
    let productTitle = productContainerDiv.querySelector('.title').innerHTML;
    let productPrice = productContainerDiv.querySelector('.price').innerHTML;
    let productDescription = productContainerDiv.querySelector('.description').innerHTML;

    /**
     * Process price
     */
    let strLen = productPrice.length;
    let price = parseInt(productPrice.substring(1, strLen));

    /**
     * ITEM object
     */
    let itemObject = {
        image: productImage,
        title: productTitle,
        price: price,
        description: productDescription
    };
    let cart = new ShoppingCart(itemObject);
    
    return cart;
}
function getProduct(prodArr){
for(let item of prodArr){ 
    item.addEventListener('click', itemClicked);
}
}

function addToCart(){

}
/**
 * CART ITEMS
 */
function getCartItems(){
    clearMainContent();
    let mainCartItems = document.createElement('div');
   
    mainCartItems.innerText = cartContent;
    itemImg.src = './images/feather_duvet.jpg';
    //Appending
    mainCartItems.appendChild(itemImg);
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
class CartPage {
    category() {
        return '#itemc'
    }
firstproduct(){
    return ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
}

secondproduct(){
    return ':nth-child(2) > .card > .card-block > .card-title > .hrefch'
}

}
export default CartPage

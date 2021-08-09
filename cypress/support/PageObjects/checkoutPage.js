class CheckoutPage {
    cart() {
        return '#cartur'
    }
    
    placeOrder() {
        return '.col-lg-1 > .btn'
    }
    
    modal() {
        return '#orderModal > .modal-dialog > .modal-content'
    }

    name(){
        return '#name'
    }
    
    country(){
        return '#country'
    }

    city(){
        return '#city'
    }

    card(){
        return '#card'
    }

    month(){
        return '#month'
    }

    year(){
        return '#year'
    }

    confirmbtn() {
        return '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    }
    confirmmodal() {
        return '.sweet-alert'

    }


}
export default CheckoutPage

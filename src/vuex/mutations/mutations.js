export default {
    //мутации принимают 
    //первым аргументом state
    //вторым то что мы передаем в actions
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_TO_CART: (state, product) => {
        if (state.cart.length){
            let isProdIsExists = false;

            state.cart.forEach(item => {
                if (item.id === product.id){
                    isProdIsExists = true;
                    item.quantity++;
                }
            });

            if(!isProdIsExists) {
                state.cart.push(product);
            }
        }else{
            state.cart.push(product);
        }
    },
    DELETE_CART_ITEM_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
    },
    INC_CART_ITEM: (state, index) => {
        state.cart[index].quantity++;
    },
    DEC_CART_ITEM: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--;
        }
    },
};
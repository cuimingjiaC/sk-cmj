


const state = {
    carNum: null,
    cartList:[],
}

const actions = {
    setCart({ commit }, cart){
        console.log(1)
        commit('setCart', {c:cart} )
    }
}

const mutations = {
    setCart(state, {c}){
        state.cartList=c.cart.cartItems
        state.carNum=c.cart.commonTotalCount

    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
  }
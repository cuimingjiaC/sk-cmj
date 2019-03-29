<template>

<div class="box">
    <header>
        <svg @click="goback" t="1553348297598" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2851" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952" p-id="2852"></path></svg>
        <h1>购物袋</h1>
        <div class="rightBtn">
            编辑       
        </div>
    </header>
    <div class="main">
        <div class="scroll-container">
            <div class="shopping-cart-list">
                <div class="valid-list">
                    <div class="product-item" v-for="item in cartList" :key="item.productId">
                        <div class="select-btn"> 
                            <i v-if="!item.isChecked" class="iconfont icon-danxuanweixuanzhong"></i>
                            <i v-if="item.isChecked" class="iconfont icon-anniu_xuanzhong"></i>
                        </div>
                        <div class="product-img">
                            <img :src="item.image | img" alt="">
                            <div class="img-bg"></div>
                        </div>
                        <div class="product-info">
                            <p class="brand-name">{{item.brandEnName}}/{{item.brandChName}}</p>
                            <p class="product-name">{{item.name}}</p>
                            <p class="product-spec">
                                <span class="color" v-if="item.color">颜色: {{item.color}}</span>
                                <span class="size" v-if="item.size">尺码: {{item.size}}</span>
                            </p>
                            <p class="product-tags">
                                <span>特例品</span>
                            </p>
                            <div class="price-info">
                                <div class="product-price">
                                    <span>{{price | price}} </span>
                                </div>
                                <div class="num-btn"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="invalid-list"></div> -->
            </div>
        </div>
    </div>

    <footer></footer>

    <!-- <div>
        <div v-for="item in cartLists" :key="item.productId">{{item.name}}</div>
       
    </div> -->

</div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import { getRequestMethod } from 'utils/requests'
import 'utils/filter'


export default {
    data(){
        return{
            cartList:[],
            price:36200
        }
    },
    
    computed: mapState({
        cartLists: state => state.cart.cartList,
        totalCount:state => state.cart.carNum
    }),

    async created(){
        let results = await getRequestMethod({
            url:'api/cart/cart?action=0&aid=5&cartType=0&client=iphone&v=2.0&openCloud=1&products=%5B%5D&upk=420103015343A15EBCF8633F141FE5C6C57161D5135D5665089292C437542863EF19213991EBBD9035BCA7D49C3459EA6A30C5757F778F8678D2653E3ACFF38DA0D3355E9ACD2A0B2F892115DC6E2051F32D7E52966F9B37491D74B687A051AC0071C526A7CA9FB6D362E53D3EE495D4FABF743376A7A417CAB8&c_platform_type=0'
        })
        // this.setCart(results.data);
         this.$store.dispatch('cart/setCart',results.data)
        console.log(results.data)
        this.cartList=results.data.cart.cartItems
        console.log(this.cartList)
    },

    // methods: mapActions('cart', [
    //     'setCart'
    // ]),
    methods: {
        goback(){
            window.history.back()
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/ellipsis.styl'
.box
    display flex
    flex-direction column
    height 100%
    width 100%

    header
        height .44*2rem
        width 100%
        display flex
        flex-direction row
        .icon
            width .23*2rem
            margin 0 .2rem
            height 100%
        h1
            height 100%
            display inline-block
            line-height .42*2rem
            font-size .17*2rem
            font-weight 600
            flex 1
            text-align center
        .rightBtn
            margin 0 .2rem
            height 100%
            line-height .42*2rem
            font-size .14*2rem
            font-weight 600

    .main   
        flex-shrink  1
        // height 100%
        .scroll-container
            .shopping-cart-list
                .valid-list     
                    background-color #f5f5f5          
                    .product-item
                        width 100%
                        height 1.6*2rem
                        margin-bottom .182rem
                        background-color #ffffff
                        .select-btn
                            height 100%
                            line-height 1.6*2rem
                            width .4*2rem
                            float left
                            text-align center
                            i 
                                font-size .25*2rem
                        .product-img
                            float left
                            width 1.1*2rem
                            height 1.1*2rem
                            margin-top .2*2rem
                            margin-right .1*2rem
                            position relative
                            img 
                                width 1.1*2rem
                                height 1.1*2rem
                            .img-bg 
                                position absolute
                                width 100%
                                height 100%
                                left 0
                                top 0
                                background-color #1c1717
                                opacity .04
                        .product-info
                            height 100%
                            width 2.15*2rem
                            padding-top .2*2rem
                            float left
                            .brand-name
                                height .18*2rem
                                margin-bottom .05*2rem
                            .product-name
                                height .18*2rem
                                margin-bottom .05*2rem
                                ellipsis(auto, 1)
                            .product-spec
                                ellipsis(auto, 1)
                                height .18*2rem
                                margin-bottom .05*2rem
                            .product-tags
                                height .15*2rem
                                margin-bottom .05*2rem
                                ellipsis(auto, 1)
                                span    
                                    background-color #f8a120
                                    width .42*2rem
                                    height .15*2rem
                            .price-info
                                .product-price
                                    font-size .18*2rem
                                    height .24*2rem


    footer 
        height .5*2rem
        width 100%
        background-color #cccccc


</style>


<template>
<div>
    <Open></Open>
    <header>
        <svg @click="goback" t="1553348297598" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2851" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952" p-id="2852"></path></svg>
        <ul class="tabbarUl">
            <li class="tabbarLi">商品</li>
            <li class="tabbarLi">评论</li>
            <li class="tabbarLi">详情</li>
            <li class="tabbarLi">推荐</li>
        </ul>
        <div class="rightBtn">
            <svg @click="show = !show" t="1553348309853" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2967" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M224 352h64a32 32 0 0 0 0-64H224a32 32 0 0 0 0 64M224 544h64a32 32 0 0 0 0-64H224a32 32 0 0 0 0 64M384 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M384 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M544 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M704 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M544 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M704 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M779.776 672H224a32 32 0 0 0 0 64h555.776a32 32 0 0 0 0-64" p-id="2968"></path></svg>
            <div class="transitionBox">
                <transition name="fade">
                    <ul class="bindEventListUl" v-show="show">
                        <li @click="goHome" class="routerLi">
                            <i class="iconfont icon-home"></i>            
                            <span class="text">首页</span>
                        </li>
                        <li @click="goBag" class="routerLi">
                            <i class="iconfont icon-shopping-bag"></i>            
                            <span class="text">购物袋</span>
                        </li>
                        <li @click="goMy" class="routerLi">
                            <i class="iconfont icon-my"></i>      
                            <span>我的寺库</span>
                        </li>
                        <div style="clear:both"></div>
                    </ul>
                </transition>
            </div>       
        </div>
    </header>

    <div class="contant">
        <div >
            <img src="https://pic12.secooimg.com/product/750/750/53/50/52d139af0d134bacb02d505baceb36bd.jpg" alt="" style="width:375px ;height:375px">
        </div>
        <div style="padding:25px;">
            <div class="price" style="color:rgb(233, 59, 57);font-size:30px;font-weight:600">￥930</div>
            <div class="title" style="font-size:18px;font-weight:400px;margin-top:16px"><span style="color:#BEA474">GUCCI/古驰</span><span>罪爱不羁男士香水</span></div>
            <div class="title" style="font-size:14px;margin-top:10px">大陆货源  2-4天发货</div>
        </div>

    </div>

    <footer>
        <div>
            <div class="submit-service">
                <i class="iconfont icon-message"></i> 
                <span>客服</span>
            </div>
            <div class="submit-bag" @click="goBag">
                <i class="iconfont icon-shopping-bag"></i> 
                <span>购物袋</span>
                <p>{{totalCount}}</p>
            </div>
            <div class="submit-add-bag" @click="addToBag()">加入购物袋</div>
            <div class="submit-buyit">立即购买</div>
        </div>
    </footer>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Open from '@/components/common/open.vue'
import { getRequestMethod } from 'utils/requests'
import { Toast } from 'mint-ui';
import jsonp from "jsonp"
import { constants } from 'fs';
export default {
    data() {
        return {
            show:false,
        }
    },

    async created(){
        let results = await getRequestMethod({
            url:'api/cart/cart?action=0&aid=5&cartType=0&client=iphone&v=2.0&openCloud=1&products=%5B%5D&upk=420103015343A15EBCF8633F141FE5C6C57161D5135D5665089292C437542863EF19213991EBBD9035BCA7D49C3459EA6A30C5757F778F8678D2653E3ACFF38DA0D3355E9ACD2A0B2F892115DC6E2051F32D7E52966F9B37491D74B687A051AC0071C526A7CA9FB6D362E53D3EE495D4FABF743376A7A417CAB8&c_platform_type=0'
        })
        console.log(results)
        // 以下这种写法是OK的
        this.$store.dispatch('cart/setCart',results.data)

        jsonp("https://las.secoo.com/api/product/detail_new?upk=420103015343A15EBCF8633F141FE5C6C57161D5135D5665089292C437542863EF19213991EBBD9035BCA7D49C3459EA6A30C5757F778F8678D2653E3ACFF38DA0D3355E9ACD2A0B2F892115DC6E2051F32D7E52966F9B37491D74B687A051AC0071C526A7CA9FB6D362E53D3EE495D4FABF743376A7A417CAB8&productId=31391938&size=2&c_platform_type=1&_=1553701028749&", { name: 'jsonp1' }, function (err, data) {
            if (err) {
                // console.error(err.message);
            } else {
                // console.log(data)
            }
        });
        

    },


    computed: mapState({
        totalCount:state => state.cart.carNum
    }),

    components:{
        Open
    },
    //  mapActions的写法
    // methods: mapActions('cart', [
    //     'setCart'
    // ]),
    methods: {
        // 写法是对的，但是什么时候执行 调用
        //  ...mapActions([
        //     'cart/setCart'
        // ]),
        goback(){
            window.history.back()
        },    
        goHome(){
            this.$router.push('/home')
        },
        goBag(){
            this.$router.push('/bag')
        },
        goMy(){
            this.$router.push('/my')
        }, 
        addToBag() {
            Toast({
                message: '加入购物袋成功',
                position: 'center',
                duration: 1500
            });
        },
    },
    // async created(){
   
  
    // },
}
</script>



<style lang="stylus" scoped>
header
    height .44*2rem
    width 100%
    display flex
    flex-direction row
    // position relative
    .icon
        width .23*2rem
        margin 0 .2rem
        height 100%
        // position absolute
        // top .1rem
        // left .1rem
    .tabbarUl
        flex 1
        display:flex
        justify-content: space-between
        .tabbarLi
            float:left
            width 25%
            text-align  center
            line-height .44*2rem
            font-size .14*2rem
            &:first-child
              color:#BEA474
    .rightBtn
        width 43px
        .transitionBox
            overflow hidden
            position relative
            top 0 !important  //这里很奇怪，就是动画的top的属性值，会加到上面的div上
            width: 1.33*2rem;
            left -.8*2rem
            height: 1.5*2rem
            .fade-enter-active, .fade-leave-active 
                transition: all 250ms;
            .fade-enter,.fade-leave-to
                top :-1.5*2rem
            .fade-enter-to
                top:0
    .bindEventListUl
        list-style none
        width 1.33*2rem
        position absolute
        right 0
        // top .44*2rem
        top 0
        // top -45*2*3px
        z-index 999
        background-color #ffffff
        text-align left
        .routerLi
            width 1.33*2rem !important
            height .49*2rem
            line-height .49*2rem
            border(0 0 1px 0,#E1E1E1)
            i 
                font-size .22*2rem
                padding 0 .1*2rem 0 .2*2rem
            span 
                font-size .13*2rem


footer
    height .45*2rem
    width 100%
    text-align center
    position fixed
    bottom .02rem
    padding .02rem
    div 
        display inline-block
        width 96%
        height 100%
        div
            float left
        .submit-service
            width 20%
            display flex
            flex-direction column
            align-items center
            font-size .30rem
            justify-content center
            i  
                font-size .5rem
        .submit-bag
            width 20%
            display flex
            flex-direction column
            align-items center
            justify-content center
            font-size .30rem
            position relative
            i  
                font-size .5rem
            p
                position absolute
                width .15*2rem
                height .15*2rem
                top 0
                right 28%
                border-radius .1*2rem
                background-color rgb(233, 59, 57)
                color #ffffff
        .submit-add-bag
            width 30%
            height 100%
            line-height .45*2rem
            background-color #000000
            color #ffffff
            text-align center
            font-size .30rem
        .submit-buyit
            width 30%
            height 100%
            line-height .45*2rem
            background-color rgb(233, 59, 57)
            color #ffffff
            text-align center
            font-size .30rem




.contant
    height 1000px
</style>

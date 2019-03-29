<template>
<div>
    <div class="root">
    <header>
        <svg @click="goback" t="1553348297598" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2851" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952" p-id="2852"></path></svg>
        <h1>品牌优选</h1>
        <div class="rightBtn">
            <svg @click="show = !show" t="1553348309853" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2967" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M224 352h64a32 32 0 0 0 0-64H224a32 32 0 0 0 0 64M224 544h64a32 32 0 0 0 0-64H224a32 32 0 0 0 0 64M384 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M384 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M544 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M704 352h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M544 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M704 544h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64M779.776 672H224a32 32 0 0 0 0 64h555.776a32 32 0 0 0 0-64" p-id="2968"></path></svg>
            <div class="transitionBox">
                <transition name="fade">
                    <ul class="bindEventListUl" v-show="show">
                        <li @click="goHome">
                            <i class="iconfont icon-home"></i>            
                            <span class="text">首页</span>
                        </li>
                        <li @click="goBag">
                            <i class="iconfont icon-shopping-bag"></i>            
                            <span class="text">购物袋</span>
                        </li>
                        <li @click="goMy">
                            <i class="iconfont icon-my"></i>      
                            <span>我的寺库</span>
                        </li>
                        <!-- <div style="clear:both"></div> -->
                    </ul>
                </transition>
            </div>       
        </div>
        
    </header>

    <div>
        <div class="floor_1">
            <h1>品牌优选</h1>
        </div>
      
        <div class="box" style="height:100%">
            <div class="floor_2 clear">
                
                <ul class="tpl_enter_img5" >
                    <li 
                        v-for="item in brandList" 
                        :key="item.id" 
                        class="a"
                        @click="handleClick(item.enTitle)"
                    >
                        <div class="img_con">
                            <img :src=item.img alt="" >
                        </div>
                        <div class="des">
                            <div class="des1">{{item.enTitle}}</div>
                            <div class="des2">
                                <p>查看更多</p>
                            </div>
                        </div>
                    </li>
                    <div style="clear:both"></div>
                </ul>
            </div>
        </div>
        <div class="floor_3"></div>
    </div>
    
    </div>
    <Footer></Footer>
</div>

</template>

<script>
import Footer from '@/components/home/Footer'
import BScroll from "better-scroll"
import { getRequestMethod } from 'utils/requests'
import { constants } from 'fs';
import { Toast } from 'mint-ui';
import { debug } from 'util';

export default {
    data() {
        return {
            brandList:[],
            show:false
        }
    },
    components:{
        Footer
    },

//mock服务
// http://localhost:9000/brand/brandList
    async created(){
        let results = await getRequestMethod({
            url:'/brandList.json'
        })
        
        this.brandList = results.data.list
        
    },

    mounted(){
        let bScroll = new BScroll(".floor_2",{
            pullUpLoad: true,
            probeType: 2,
            click:true   // 点击事件是true
        });

        let count = 0
        bScroll.on('pullingUp', async () => {

            if(count === 1){
                Toast({
                    message: '到底了~',
                    position: 'bottom',
                    duration: 2000
                });
            } else{
                if(count === 0){
                    count = 1
                    let results = await getRequestMethod({
                        url:'/moreBrandList.json'
                    })
        
                    this.brandList = [
                        ...this.brandList,
                        ...results.data.list
                    ]
                    this.$nextTick(() => {
                        bScroll.refresh()
                    })
                }
            }
             bScroll.finishPullUp()
            
        })
    },

    methods: {
        handleClick(item) {
            this.$router.push('/products/'+item)
        },
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
        clicak(){
            console.log(1)
        }       
    }






}
</script>

<style lang="stylus" scoped >
@import '~@/assets/border.styl';
// .root 
    // transform scale(2)
// .root >>> html 
// .root >>> html 
//     background-color blue
// >>> body
//     background-color red
//     font-size 100px

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
    h1
        height 100%
        display inline-block
        line-height .42*2rem
        font-size .17*2rem
        font-weight 400
        flex 1
        text-align center
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
    li
        width 1.33*2rem
        height .49*2rem
        line-height .49*2rem
        border(0 0 1px 0,#E1E1E1)
        i 
            font-size .22*2rem
            padding 0 .1*2rem 0 .2*2rem
        span 
            font-size .13*2rem

.floor_1
    height .71*2rem
    width 100%
    h1
        width 100%
        display inline-block
        height 100%
        line-height .71*2rem
        font-size .20*2rem
        text-align center
.floor_2
    height 500px
    .tpl_enter_img5
        margin 0 auto 0
        width 92%
        // height 100%
        list-style none 
        li:nth-of-type(odd)
            width 49.25%
            margin-bottom .2*2rem
            float left
            height 5.333333rem
            // background-color red
        li:nth-of-type(even)
            width 49.25%
            margin-bottom .2*2rem
            float right
            height 5.333333rem
            // background-color blue
        li 
            .img_con
                height 2.07*2rem
                overflow hidden
                img 
                    height 100%
            .des
                background #F7F7F7
                padding-bottom .085*2rem
                .des1
                    color #000
                    font-size .16*2rem
                    padding-top 0.08*2rem
                    margin-bottom 0.08*2rem
                    width 92%
                    margin 0 auto 
                    text-align center
                .des2
                    padding-bottom .084*2rem
                    margin 0 auto
                    text-align center
                    color #000
                    p
                        width .8*2rem
                        height .2*2rem
                        line-height .2*2rem
                        border 1px solid #000
                        display inline-block
                        margin-top .1*2rem
                        font-size .12*2rem
</style>

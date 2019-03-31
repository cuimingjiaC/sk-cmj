<template>

<div class="page-container">
    <div>

        <div class="pageHeadContainer">
            <div class="pageHead" >
                <svg @click="goback()" t="1553348297598" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2851" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952" p-id="2852"></path></svg>
                <div><span>{{key}}</span></div>
                <p><span>筛选</span></p> 
            </div>
            
        </div>




<div class="sort-wapBox" :class="{'fix':isFix}">
                <div class="sort-box sort--more">
                    <div class="sort-item" :class="{selected:selected}" @click="clickhandlerSort(1)">
                        <span>
                            综合排序
                        </span>
                        <i class="trangle"></i>
                    </div>
                    <div class="sort-item" :class="{selected:selected2}" @click="clickhandlerSort(4)">
                        <span>销量</span>
                    </div>
                    <div class="sort-item">
                        <span>包税</span>
                    </div>
                    <div class="sort-item">
                        <span>春季</span>
                    </div>
                    <div class="sort-item">
                        <span>品牌</span>
                        <i class="trangle"></i>
                    </div>
                    <div class="sort-item">
                        <span>优惠</span>
                        <i class="trangle"></i>
                    </div>
                </div>
                <div class="sortMenu-container">

                </div>
            </div>


        <!-- <div style="height:10px;width:100%;position:sticky;top:0;background-color:red">sticky</div> -->
         <!-- :style="{
				    'minHeight': contentMinHeight + 'px',
				    'marginTop': contentMarginTop + 'px'
				    }" -->
        <div class="page" >
            <div class="mod-list">
                <ul class="listGoods">
                    <li class="listGoods-item" v-for="item in productsList" :key=item.productId @click="gotoDetail(item.productId)">
                        <div class="listGoods-imgBox">
                            <img :src=item.imgUrl alt="">
                        </div>
                        <div class="listGoods-info">
                            <h3 class="listGoods-brand">{{item.brandEname}}</h3>
                            <h3 class="listGoods-name">{{item.productName}}</h3>
                            <h3 class="listGoods-price"><span>{{item.secooPrice}}</span></h3>
                            <p class="listGoods-labels">
                                <span>自营</span>
                            </p>
                        </div>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import BScroll from "better-scroll"
import { getRequestMethod } from "utils/requests";
import { Indicator } from 'mint-ui';
import { debug } from 'util';
import { Toast } from 'mint-ui';
import { constants } from 'fs';
// import _ from 'lodash'

export default {
    data(){
        return{
            key:this.$route.params.key,
            productsList:[],
            maxPage:0,
            pageSize:10,
            currPage:1,
            orderType:1,
            selected:true,
            selected2:false,
            isFix:false
            // isFix:true
        }
        
    },
    async created(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });

        const result =  await this.getProductsList()
        this.productsList = result.data.productList
        this.maxPage = result.data.maxPage
        Indicator.close();
    },

// cmj scroll fixed
    // computed: {
    //     contentMinHeight() {
    //         const windowHeight = document.documentElement.clientHeight
    //         return this.isFix ? windowHeight - this.switchBarHeight : windowHeight - this.headerHeight - this.switchBarHeight
    //     },
    //     contentMarginTop() {
    //         return this.isFix ? this.switchBarHeight : 0
    //     }
    // },
// cmj scroll fixed


    mounted(){

// cmj scroll fixed
    //     this.$nextTick(() => {
    //     // 节流监听滚动事件
    //     window.addEventListener('onmousewheel', this.throttleScroll, false)
    // })
    //   this.throttleScroll = _.throttle(this.handleScroll, 100)
// cmj scroll fixed

        let that = this
        let bScroll = new BScroll(".sort-wapBox",{
            pullUpLoad: true,
            scrollX: true,
            probeType: 2,
            click:true   // 点击事件是true
        })

        ////////////betterscroll-fixed-sticky不起作用
        let pageContainerScroll = new BScroll(".page-container",{
        //     let a = document.querySelector(page-container);
        //  let a = this.isFix?document.querySelector(".page"):document.querySelector(".page-container")
        //  console.log(a)
        // let pageContainerScroll = new BScroll(a,{
            probeType: 2,
            pullUpLoad: true,
            click:true  
        })


        pageContainerScroll.on('scroll',function() {
            // console.log(this.y)
            console.log(that.isFix)
            if(this.y < -41){
                that.isFix = true
            } else {
                that.isFix = false
            }
            console.log(that.isFix)
            if (that.isFix) {
                 console.log(1111)
                // window.scrollTo(0, 0)  // 兼容chrome
                // window.scrollTo(0, "52px")
            } else {
                //  console.log(2222)
                window.scrollTo(0, 0)
            }

        })

        pageContainerScroll.on('pullingUp', async function()  {

 
            if( Math.ceil(that.maxPage/that.pageSize) > that.currPage) {
                that.currPage++;
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                const result =  await that.getProductsList()
                that.productsList = [
                    ...that.productsList,
                    ...result.data.productList
                ]
                Indicator.close();
                that.$nextTick(() => {
                    this.refresh()
                    
                    // console.log(1111)

                    // if (this.isFix) {
                    //     window.scrollTo(0, 0)  // 兼容chrome
                    //     window.scrollTo(0, "52px")
                    // } else {
                    //     window.scrollTo(0, 0)
                    // }


                })
    
                pageContainerScroll.finishPullUp()
            } else {
                Toast({
                    message: '到底了~',
                    position: 'bottom',
                    duration: 2000
                });
            }

        })
        ////////////betterscroll-fixed-sticky不起作用

    },

    //  destoryed() {
    //   window.removeEventListener('scroll', this.throttleScroll)
    // },
    methods: {


// cmj scroll fixed
// handleScroll() {
//         this.setData()
//         console.log('aaaaa')
//         // 判断是否吸顶效果
//         if (this.scrollTop >= this.headerHeight) {
//           this.isFix = true
//         } else {
//           this.isFix = false
//         }
//       },
//       setData() {
//         this.headerHeight = this.$el.querySelector('.header').clientHeight
//         this.switchBarHeight = this.$el.querySelector('.switch-bar').clientHeight
//         this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
//         this.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
//       },
// cmj scroll fixed

        goback() {
            window.history.back()
        },
        gotoDetail(id){
            this.$router.push('/proDetail/'+id)
        },
        async getProductsList(){
            return getRequestMethod({
                url:"api/search/keyword",
                params:{
                    c_device_id: "2ec0c069ecc17ab4ac61552723641711",
                    c_platform_type: 0,
                    c_app_ver: "6.0.2",
                    currPage: this.currPage,
                    pageSize:this.pageSize,
                    searchMode:1,
                    keyword:this.$route.params.key,
                    orderType:this.orderType
                }
            });
        },

        async clickhandlerSort(orderType){
            this.orderType = orderType
            const result =  await this.getProductsList()
            this.productsList = result.data.productList

            if(orderType === 1) {
                this.selected = true;
                this.selected2 = false;
            }

            if(orderType === 4) {
                this.selected = false;
                this.selected2 = true;
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/border.styl';
@import '~@/assets/ellipsis.styl'

.page-container
    height 100%
    // overflow scroll
.pageHeadContainer
    width 7.5rem
    // position sticky
    // top 0
    // height 0.64rem
    margin .2rem 0
    // position relative
    .pageHead
        display flex
        flex-direction row
        width 100%
        .icon
            width .6rem
            // margin 0.2rem
            height 100%
            display inline-block
            margin 0 .22rem
        div
            // width 4.96rem
            height 100%
            background-color #f5f5f5
            color #999
            flex 1
            line-height .63rem
            text-align left
            font-size .3rem
            span 
                margin 0 .16rem

        p
            width .6rem
            height 100%
            line-height .63rem
            font-size .3rem
            margin 0 0.22rem
.sort-wapBox
    // position sticky
    // color red
    // top 10px
    width 7.5rem
    height 1.04rem
    margin .2rem .2rem .1rem .2rem
    .sort-box
        width max-content
        .sort-item
            display inline-block
            padding 0 .1rem
            margin-right .1rem
            width 1.5rem
            height .66rem
            line-height .66rem
            text-align center
            border(1px, #e1e1e1)
            font-size .28rem
            &:first-child
                // color:#f8a120
    .fix
        // position fixed
        position sticky
        color red
        left 0
        top 0
        z-index 10
.selected
    color :#f8a120
.unselected
    color :blue

.page
    // overflow scroll
  .mod-list
    height 100%
    ul
      font-size .24rem
      li
        width 50%
        float left
        .listGoods-imgBox
          height 3.74rem
          img  
            height 3.74rem
        .listGoods-info
            width 3.14rem
            height 2.37rem
            padding-left .3rem
            .listGoods-brand
              margin-top  .5rem
              height .32rem
              line-height  .32rem
            .listGoods-name
                margin-top  .08rem
                ellipsis(auto, 1)
                height .44rem
                line-height  .44rem
            .listGoods-price
                height .38rem
                line-height .38rem
                margin-top .2rem
            .listGoods-labels
                height .44rem
                line-height  .34rem
                margin-top .14rem
                color #8b572a

</style>


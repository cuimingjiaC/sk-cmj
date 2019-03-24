<template>
  <div class="main-scroll-container">
    <div class="main-scroll">
      <div class="main-container">
        <div id="swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in swipeItems" :key="index">
                <img :src="item.img">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <!-- <div class="test1px"></div> -->
        <div class="channel-container">
          <div class="channel-item">
            <div class="channel-title">官方直营</div>
            <div class="channel-sub-title">Luxury Avenu</div>
          </div>
          <div class="separate"></div>
          <div class="channel-item">
            <div class="channel-title">海外直邮</div>
            <div class="channel-sub-title">International</div>
          </div>
          <div class="separate"></div>
          <div class="channel-item">
            <div class="channel-title">今日折扣</div>
            <div class="channel-sub-title">Today's Special</div>
          </div>
          <!-- <div class="separate"></div> -->
          <div class="channel-item">
            <div class="channel-title">重奢经典</div>
            <div class="channel-sub-title">Deluxe Brand</div>
          </div>
          <div class="separate"></div>
          <div class="channel-item">
            <div class="channel-title">中古奢品</div>
            <div class="channel-sub-title">Vintage</div>
          </div>
          <div class="separate"></div>
          <div class="channel-item">
            <div class="channel-title">中国名物</div>
            <div class="channel-sub-title">Secoo MING</div>
          </div>
        </div>

        <div class="image-container">
          <img
            id="image"
            src="https://pic12.secooimg.com/comment/18/4/77a9f898233c414281ec38cd7e6a7e96.jpg_!!0x0.webp"
            alt
            srcset
          >
        </div>

        <!-- 03横向滚动 -->
        <div class="floor-03">
          <div class="floor-03-slider-banner-container">
            <div class="floor-03-swiper-wrapper">
              <div class="floor-03-swiper-slide">
                <div class="floor-03-slider-item" v-for="item in floor03Items" :key="item.url">
                  <h3 class="floor-03-slider-title">
                    <span>{{item.title + " "}} {{ " "}}</span>
                    <span>{{item.subTitle}}</span>
                  </h3>
                  <div class="floor-03-slider-content">
                    <img :src="item.img" alt>
                  </div>
                </div>

                <!-- <div class="floor-03-slider-item">
                <h3 class="floor-03-slider-title">
                  <span>数码</span>
                  <span>新品到货</span>
                </h3>
                <div class="floor-03-slider-content">
                  <img src="https://pic12.secooimg.com/res/topic/50/99/1ZNL5o2cd1d3138c8c454aaad8627914beac37.jpg_!!0x0.webp" alt="">
                </div>
                </div>-->
              </div>
            </div>
          </div>
        </div>


        <div class="floor-04">
          <div class="floor-04-sku-slider-container">
            <div class="floor-04-title-container" v-for="(item, index) in floor04Items" :key="item.title">
              <div v-show="index === floor04tag">
                <h3 class="floor-04-title">{{item.title}}</h3>
                <h4 class="floor-04-sub-title">{{item.subTitle}}</h4>
                <!-- <div class="swiper-pagination sku-slider-pagination swiper-pagination-black swiper-pagination-bullets">
                  <span class="swiper-pagination-bullet"></span>
                  <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                </div> -->
              </div>
            </div>
            <div class="floor-04-content">
              <div  class="floor-04-swiper-container" >
                <div class="floor-04-swiper-wrapper">
                  <div class="floor-04-swiper-slide" v-for="item in floor04Items" :key="item.title">
                    <div>
                      <!-- {{item.img}} -->
                      
                      <img :src="item.img">
                    </div>
                  </div>

                  <!-- <div class="floor-04-swiper-slide">
                    <div >
                      <img class="slider-img"
                        src="https://pic12.secooimg.com/res/topic/49/53/1Zmtos15396be9d30b4b918dbf40e54c44b417.png_!!0x0.webp"
                        lazy="loaded" >
                    </div>
                  </div> -->

                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="floor-05" v-for="item in sikuItemList" :key="item.index">
          <div class="title-container">
            <h3 class="title">{{item.list[0].title}}</h3>
            <h4 class="sub-title">{{item.list[0].subTitle}}</h4>

            <img
              class="slider-img"
              data-src="https://pic12.secooimg.com/res/topic/49/53/1Zmtos15396be9d30b4b918dbf40e54c44b417.png_!!0x0.webp"
              :src="item.list[0].img"
              lazy="loaded"
            >
          </div>
        </div>

        <div class="recommend-container guessULike-container">
          <h3 class="recommend-title">猜你喜欢</h3>
          <div class="recommend-content">
            <div class="recommend-item">
              <div class="product-img">
                <img
                  src="//pic.secoo.com/product/374/374/57/10/9d75188f95994132b3df617d6bd3f381.jpg"
                  alt
                >
              </div>
              <div class="product-desc">
                <p class="product-brand">CALVIN KLEIN</p>
                <p class="product-name">Calvin Klein 男士皮质礼盒装短款钱包 79220</p>
                <p class="product-price">
                  <span data-v-49a9c501>¥ 424</span>
                  <span class="price-tip">会员再减</span>
                </p>
                <p class="del-price" style="display: none;">
                  <del data-v-49a9c501>¥</del>
                </p>
                <div class="product-tags">自营</div>
              </div>
            </div>

            <div class="recommend-item">
              <div class="product-img">
                <img
                  src="//pic.secoo.com/product/374/374/49/10/1f7ce3fb5ca04dadb14ca58179fc7dd6.jpg"
                  alt
                >
              </div>
              <div class="product-desc">
                <p class="product-brand">LONGINES</p>
                <p class="product-name">LONGINES/浪琴手表心月系列女士石英腕表L8.109.9.78.2watch全球联保</p>
                <p class="product-price">
                  <span data-v-49a9c501>¥ 20134</span>
                  <span class="price-tip">会员再减</span>
                </p>
                <p class="del-price" style="display: none;">
                  <del data-v-49a9c501>¥</del>
                </p>
                <div class="product-tags">自营</div>
              </div>
            </div>

            <div class="guessULike-container recommend-item">
              <div class="product-img">
                <img
                  src="//pic.secoo.com/product/374/374/57/57/99e4a27da7e04e67a678e9e3390d1a08.jpg"
                  alt
                >
              </div>
              <div class="product-desc">
                <p class="product-brand">GUCCI</p>
                <p class="product-name">GUCCI/古驰 19春夏 GG Marmont系列 女士牛皮双G标识时尚链条单肩斜挎包</p>
                <p class="product-price">
                  <span data-v-49a9c501>¥ 9279</span>
                  <span class="price-tip">会员再减</span>
                </p>
                <p class="del-price" style="display: none;">
                  <del data-v-49a9c501>¥</del>
                </p>
                <div class="product-tags">自营</div>
              </div>
            </div>
            <div class="guessULike-container recommend-item">
              <div class="product-img">
                <img
                  src="//pic.secoo.com/product/374/374/52/51/430aa99ca6a04f4780155c99c32e65bf.jpg"
                  alt
                >
              </div>
              <div class="product-desc">
                <p class="product-brand">CHAMPION</p>
                <p
                  class="product-name"
                >【19春夏新品】Champion/Champion 男女新款圆领草签logo休闲短袖男士运动T恤 T1919G 549465</p>
                <p class="product-price">
                  <span data-v-49a9c501>¥ 169</span>
                  <span class="price-tip">会员再减</span>
                </p>
                <p class="del-price" style="display: none;">
                  <del data-v-49a9c501>¥</del>
                </p>
                <div class="product-tags">自营</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRequestMethod } from "utils/requests";
import "swiper/dist/css/swiper.css";
import Vue from "vue";
import Swiper from "swiper";
import BScroll from "better-scroll";
import { constants } from "fs";

export default {
  data() {
    return {
      results: "",
      swipeItems: [],
      // initData: null,
      sikuItemList: [],
      floor03Items: [],
      floor04Items: [],
      floor04tag: 0,
      floor04tags: 0,
    };
  },

  async created() {
    const result = await getRequestMethod({
      url:
        "api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk=420103015343A15EBCF8633F141FE5C6C57161D5135D5665089292C437542863EF19213991EBBD9035BCA7D49C3459EA6A30C5757F778F8678D2653E3ACFF38DA0D3355E9ACD2A0B2F892115DC6E2051F32D7E52966F9B37491D74B687A051AC0071C526A7CA9FB6D362E53D3EE495D4FABF743376A7A417CAB8"
    });
    this.results = result;
    this.swipeItems = this.results.data.floors[0].list;
    this.floor03Items = this.results.data.floors[3].list;
    this.floor04Items = this.results.data.floors[4].list;

    // this.sikuItemList = {
    //   ...this.sikuItemList,
    //   ...result.data.floors[5],
    //   ...result.data.floors[7],
    //   不是一个类型 不可以用展开运算符 都是不对的 瞎写 的
    // };
    this.sikuItemList.push(result.data.floors[5]);
    this.sikuItemList.push(result.data.floors[7]);
    this.sikuItemList.push(result.data.floors[8]);
    this.sikuItemList.push(result.data.floors[9]);
    this.sikuItemList.push(result.data.floors[10]);
    this.sikuItemList.push(result.data.floors[11]);
    this.sikuItemList.push(result.data.floors[12]);
    this.sikuItemList.push(result.data.floors[13]);
    this.sikuItemList.push(result.data.floors[14]);
    this.sikuItemList.push(result.data.floors[15]);
    this.sikuItemList.push(result.data.floors[19]);
    this.sikuItemList.push(result.data.floors[20]);
    this.sikuItemList.push(result.data.floors[21]);
    this.sikuItemList.push(result.data.floors[22]);

    // console.log(this.sikuItemList)
  },
  // watch: {
  // initData(){
  // new BScroll('.main-scroll')
  // }
  // },

watch: {
  results(){
    // console.log(1)
    new BScroll(".main-scroll");

    new BScroll(".floor-03-swiper-wrapper", {
      // probeType: 2,
      scrollX: true,
      scrollY: false
    });

    let bScroll = new BScroll(".floor-04-swiper-container",{
      scrollX: true,
    });

    let that = this
    bScroll.on('scrollEnd', function() {
      that.floor04tag = Math.round(Math.abs(this.x)/Math.abs(this.wrapperWidth))
      // that.floor04tags ++;
      // console.log("this.floor04tags",that.floor04tags )
    })



    var swiper = new Swiper(".swiper-container", {
      autoplay:true,
      slidesPerView: 1,
      loop: true,
      //auto 就从后面开始也是奇怪 设置slider容器能够同时显示的slides数量(carousel模式)。https://www.swiper.com.cn/api/grid/24.html
      spaceBetween: 0, //在slide之间设置距离（单位px）。 https://www.swiper.com.cn/api/grid/198.html
      initialSlide: 0,
      // centeredSlides: true,//设定为true时，active slide会居中，而不是默认状态下的居左。
      // loopAdditionalSlides: 100,//loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
      //  watchSlidesProgress: true,    //开启这个参数来计算每个slide的progress(进度、进程)
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  // floor04tags(){
  //   console.log(this.floor04tag)
  //   console.log("change")
  //   return this.floor04tag + 1;
  // }
},
// watch: {
//   
// }
// computed:{
  
// },

  // mounted() {
   
  // }
};

</script>


<style lang="stylus" >
// @import "mint-ui/lib/style.css"
@import '~@/assets/border.styl';

.main-scroll-container {
  overflow: hidden;

  .main-scroll {
    height: 9.54rem;
    // overflow: scroll;
    background-color: #f5f5f5;

    .main-container {
    }
  }
}

#swiper {
  height: 6.5rem;
  background-color: #ffffff;

  .swiper-container {
    .swiper-wrapper {
      .swiper-slide {
        width: 100% !important;
        margin-right: 0 !important;
      }
    }
  }
}

.swiper-slide {
  img {
    height: 6.5rem;
    width: 100%;
  }
}

.separate {
  height: 0.7rem;
  width: 0.01rem;
  // border: 1px solid #ccc;
  // border(1px, red);
  border(1px);
  // border-color red
  transform: rotate(20deg);
}

.channel-container {
  height: 2.94rem;
  padding: 0.5rem 0.3rem;
  justify-content: space-between;
  font-size: 0.38px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
  background-color: #ffffff;
}

.channel-item {
  width: 2rem;
  height: 0.7rem;
  font-size: 0.24rem;
  text-align: center;
}

.image-container {
  height: 1.5rem;
  width: 100%;
  margin-bottom: 0.2rem;
}

#image {
  height: 1.5rem;
  width: 100%;
}

// .floor-03
.floor-03 {
  height: 4.74rem;
  padding: 0.45rem 0 0.5rem;
  background-color: #ffffff;

  .floor-03-slider-banner-container {
    margin: 0 auto;
    // position: relative;
    overflow: hidden;
    // list-style: none;
    padding: 0;
    // z-index: 1;
    height: 100%;

    .floor-03-swiper-wrapper {
      // position: relative;
      width: 100%;
      height: 100%;
      // z-index: 1;
      // display: flex;  //
      // box-sizing: content-box;
      overflow-x: scroll !important;

      .floor-03-swiper-slide {
        // margin .15rem
        // width 5.9rem  //
        width: max-content;

        &:first-child {
          // margin-left: -.65rem
        }

        .floor-03-slider-item {
          display: inline-block !important;
          margin-left: 0.2rem;
          width: 5.9rem; // 
          // float left
          dispaly: inline-block;

          .floor-03-slider-title {
            // display inline-block !important
            font-size: 0.4rem;
            font-weight: 100;
            line-height: 0.4rem;
            margin-bottom: 0.12rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          img {
            // display inline-block !important
            height: 3.1rem;
            width: 100%;
          }
        }
      }
    }
  }
}

.floor-04
  background-color: #fff;
  margin-bottom: .3rem;
  margin-top: .3rem;
  padding .4rem .3rem
.floor-04-sku-slider-container
  .floor-04-title
    font-size .4rem
    color #000b0b
    line-height .45rem
    margin-bottom .2rem
    font-weight 100
    width 100%
    text-overflow ellipsis
  .floor-04-sub-title
    font-size .30rem
    line-height .32rem
    color: #1c1717
    margin-bottom .3rem
    font-weight 100;
.floor-04-swiper-wrapper
  width max-content
  .floor-04-swiper-slide
    display inline-block
    margin-right .4rem
    width 6.9rem
    height 4.5rem
    &:last-child
      margin-right 0
    div 
      width 6.9rem
      overflow hidden
    img
      width 6.9rem
      height 4.5rem

  

.floor-05 {
  padding: 0.4rem 0.3rem;
  background-color: #fff;
  margin-top: 0.2rem;

  .title-container {
    position: relative;

    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: PingFangSC-Medium;
      font-size: 0.45rem;
      color: #000b0b;
      line-height: 0.53rem;
      margin-bottom: 0.04rem;
      font-weight: 100;
      width: 15em;
    }

    h4 {
      font-weight: 100;
      font-family: PingFangSC-Light;
      font-size: 0.3rem;
      line-height: 0.36rem;
      color: #1c1717;
      margin-bottom: 0.3rem;
    }

    img {
      height: 4.5rem;
      width: 6.9rem;
    }
  }
}

.recommend-container {
  background-color: #ffffff;
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;

  h3 {
    padding: 0.3rem 0.41rem 0;
    font-size: 0.4rem;
    line-height: 0.4rem;
    font-weight: 400;
  }

  .recommend-content {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;

    .recommend-item {
      // width 1.875rem
      width: 3.6rem;
      margin-bottom: 0.6rem;

      .product-img {
        margin-bottom: 0.5rem;

        img {
          width: 3.74rem;
          // width 1.87rem
          // height 1.87rem
          height: 3.74rem;
        }
      }

      .product-desc {
        padding: 0.3rem;
        margin-bottom: 0.6rem;

        .product-brand {
          margin-bottom: 0.08rem;
          font-family: Futura-Medium;
          font-size: 0.32rem;
          line-height: 0.42667rem;
          font-weight: 700;
        }

        .product-name {
          width: 100%;
          margin-bottom: 0.26667rem;
          font-size: 0.32rem;
          font-family: PingFangSC-Light;
          line-height: 0.44rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .product-price {
          margin-bottom: 0.05333rem;
          height: 0.64rem;
          line-height: 0.64rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #000b0b;
          font-family: Futura-Medium;
          // font-size: .45333rem;
          font-size: 0.28rem;
        }

        .del-price {
          height: 0.42667rem;
          margin-bottom: 0.18667rem;
          font-size: 0.32rem;
          line-height: 0.42667rem;
          color: #ccc;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-tags {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          height: 0.44rem;
          margin-top: 0.18667rem;
          line-height: 0.44rem;
          color: #8b572a;
          font-family: PingFangSC-Light;
          font-size: 0.32rem;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>





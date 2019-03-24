<template>
<div class="root">
    <div class="newUserCallApp">
        <div class="newUserCallApp-con">
            <img src="//mstatic.secooimg.com/images/2017/11/08/load_logo.png">
            <h1>寺库</h1>
            <p>新用户注册送2500元大礼包</p>
            <div>立即打开</div>
        </div>
        
    </div>
    <SearchBar></SearchBar>
    <ToolBar></ToolBar>
    <router-view></router-view>
    <Footer></Footer>
</div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar'
import ToolBar from '@/components/home/ToolBar'
import Footer from '@/components/home/Footer'
export default {
    components:{
        SearchBar,
        ToolBar,
        Footer
    }
}
</script>

<style lang="stylus" scoped>
.root
    // transform scale(0.5)

.con
    position relative
.newUserCallApp
    height 1.12rem
    width 100%
    background-color #ffffff
    text-align center
    font-size .16rem
    position relative
    border-bottom 1px solid #f5f5f5
.newUserCallApp-con 
    position absolute
    width 100%
    img 
        position: absolute;
        top: 0.1rem;
        left: 0.3rem;
        width: .9rem;
        height: .9rem;
    h1
        padding-top .08rem
        height 0.58rem
        font-size .34rem
        text-align left
        padding-left 1.46rem
        font-weight 100
    p
        padding-left 1.46rem
        text-align left
        padding-top .06rem
    div 
        height .54rem
        line-height  .48rem
        width 1.42rem
        border 1px solid #ccc
        position absolute
        top .35rem
        right .35rem
        text-align center
        font-size  .3rem
            
</style>








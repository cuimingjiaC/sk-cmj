<template>
<div class="root">
    <Open></Open>
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
import Open from '@/components/common/open.vue'
export default {
    components:{
        SearchBar,
        ToolBar,
        Footer,
        Open
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








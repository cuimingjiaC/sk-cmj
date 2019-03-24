<template>
<div class="footer-container">
    <ul class="footer">
        <router-link to="/home" tag="li" class="footer-item" active-class="activeColor">
            <i class="iconfont icon-home"></i>            
            <span class="text">首页</span>
        </router-link>
        
        <router-link to="/brand" tag="li" class="footer-item" active-class="activeColor">
            <i class="iconfont icon-iconbrand"></i>            
            <span class="text">品牌</span>
        </router-link>

        <router-link to="/classify" tag="li" class="footer-item" active-class="activeColor">
            <i class="iconfont icon-classification"></i>            
            <span class="text">分类</span>
        </router-link>

        <router-link to="/bag" tag="li" class="footer-item" active-class="activeColor">
            <i class="iconfont icon-shopping-bag"></i>            
            <span class="text">购物袋</span>
        </router-link>

        <router-link to="/my" tag="li" class="footer-item" active-class="activeColor">
            <i class="iconfont icon-my"></i>            
            <span class="text">我的</span>
        </router-link>

    </ul>
</div>
    
</template>

<style lang="stylus" scoped>
@import '~@/assets/fonts/iconfont.css';

    .footer-container
        position fixed
        bottom: 0;
        width: 100%;
        max-width: 10rem;
        height: .87rem;
        z-index: 10;
        background-color: #fff;
        padding-top .03rem

    .footer
        display: flex;
        justify-content: space-around;
        align-items: center;

    .footer-item 
        display flex
        flex-direction column
        -webkit-align-items center
        &.activeColor i
            color #f8a120
        &.activeColor span
            color #f8a120

    .iconfont 
        font-size .5rem
        height .5rem    
        font-style normal
        -webkit-font-smoothing antialiased
        font-family iconfont!important
        vertical-align baseline

</style>

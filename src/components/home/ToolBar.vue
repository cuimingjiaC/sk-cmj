<template>
    <div id="swiper-container">
        <ul class="nav">
            <!-- <router-link to="/home/luxury" tag="li" active-class="activeColor" class="nav-item" v-for="item in navItems" :key="item.codeId">
                <span>{{item.title}}</span>
                <i class="line"></i>
            </router-link> -->
            <router-link to="/home/luxury" tag="li" active-class="activeColor" class="nav-item" >
                <span>奢侈品</span>
                <i class="line"></i>
            </router-link>
            <router-link to="/home/play" tag="li" active-class="activeColor" class="nav-item" >
                <span>吃喝玩乐</span>
                <i class="line"></i>
            </router-link>
            <router-link to="/home/travel" tag="li" active-class="activeColor" class="nav-item" >
                <span>旅游生活</span>
                <i class="line"></i>
            </router-link>

        </ul>
    </div>

</template>

<style lang="stylus" scoped>
#swiper-container
    margin 0 auto
    position relative
    padding 0 
.nav 
    color #1c1717
    height 0.81rem
    display flex
    position relative
 .nav-item 
    display flex
    align-items center
    font-size .3rem
    font-weight 700
    padding .14rem .3rem .26rem .3rem
    position relative
    -webkit-box-align center
    vertical-align baseline
    width auto
    .line
        width .6rem
        height  0.06rem
        background-color rgb(248, 161, 32)
        position absolute
        bottom 0
        left 30%
        display none
    &.activeColor .line
        display block
</style>

<script>
import {getHomePageHead} from 'utils/requests'
// import getHomePageHead from 'utils/requests'


export default {
    data(){
        return {
            navItems:[]
        }
    },
    
    async created() {
        const result = await getHomePageHead({
            url:'api/home/home_page_head?c_platform_type=0&c_app_ver=6.0.0&c_upk=420103015343A15EBCF8633F141FE5C6C57161D5135D5665089292C437542863EF19213991EBBD9035BCA7D49C3459EA6A30C5757F778F8678D2653E3ACFF38DA0D3355E9ACD2A0B2F892115DC6E2051F32D7E52966F9B37491D74B687A051AC0071C526A7CA9FB6D362E53D3EE495D4FABF743376A7A417CAB8'
        })
        this.navItems = result.data.tabs
    }


}
</script>



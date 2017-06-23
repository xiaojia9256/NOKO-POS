<template>
   <div class="left-nav">
       <ul>
           <li>
               <i class="icon iconfont icon-hanbao "></i>
               <div>汉堡</div>
           </li>
           <li>
               <i class="icon iconfont icon-shipin"></i>
               <div>店铺</div>
           </li>
           <li>
               <i class="icon iconfont icon-kafei"></i>
               <div>商品</div>
           </li>
           <li>
               <i class="icon iconfont icon-gouwucheman"></i>
               <div>购物车</div>
           </li>
       </ul>

   </div>  
</template>

<script>
   export default{
       name:"leftNav",
       data(){
           return {

           }
       }    
    } 
</script>

<style>
    .left-nav{
        color: #fff;
        font-size: 10px;
        height: 100%;
        background-color: #1d8ce0;
        float: left;
        width: 5%
    }
    .iconfont{
        font-size: 24px;
    }
    .left-nav ul{
        padding: 0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: nono;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>

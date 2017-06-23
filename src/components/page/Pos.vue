<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span='7' class="pos-order" id="order-list">
          <el-tabs>
            <el-tab-pane label='点餐'>
              <el-table :data='tableData' border show-summary style='withe:100%'>
                <el-table-column prop='goodsName' label='商品名称'></el-table-column>
                <el-table-column prop='count' label='数量' width="70"></el-table-column>
                <el-table-column prop='price' label='金额' width="70"></el-table-column>
                <el-table-column label='操作' width='100' fixde='right'>
                  <template scope="scope">
                    <el-button type='text' size='small'>删除</el-button>
                    <el-button type='text' size='small' @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label='挂单'>
              挂单
            </el-tab-pane>
            <el-tab-pane label='外卖'>
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span='17'>
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods"  @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label='汉堡'>
                <div>
                  <ul class='cookList'>
                    <li v-for="goods in type0Goods">
                      <span class="foodImg">
                        <img :src="goods.goodsImg" width="100%">
                      </span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label='小吃'>
                <div>
                  <ul class='cookList'>
                    <li v-for="goods in type1Goods">
                      <span class="foodImg">
                        <img :src="goods.goodsImg" width="100%">
                      </span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label='饮料'>
                <div>
                  <ul class='cookList'>
                    <li v-for="goods in type2Goods">
                      <span class="foodImg">
                        <img :src="goods.goodsImg" width="100%">
                      </span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label='套餐'>
                <div>
                  <ul class='cookList'>
                    <li v-for="goods in type3Goods">
                      <span class="foodImg">
                        <img :src="goods.goodsImg" width="100%">
                      </span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'pos',
  data() {
    return {
      tableData: [],
      oftenGoods: [{
        goodsId: 1,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
        goodsName: '香辣鸡腿堡',
        price: 18
      }, {
        goodsId: 2,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
        goodsName: '田园鸡腿堡',
        price: 15
      }, {
        goodsId: 3,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
        goodsName: '和风汉堡',
        price: 15
      }, {
        goodsId: 4,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
        goodsName: '快乐全家桶',
        price: 80
      }, {
        goodsId: 5,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
        goodsName: '脆皮炸鸡腿',
        price: 10
      }, {
        goodsId: 6,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
        goodsName: '魔法鸡块',
        price: 20
      }, {
        goodsId: 7,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
        goodsName: '可乐大杯',
        price: 10
      }, {
        goodsId: 8,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
        goodsName: '雪顶咖啡',
        price: 18
      }, {
        goodsId: 9,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
        goodsName: '大块鸡米花',
        price: 15
      }, {
        goodsId: 20,
        goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
        goodsName: '香脆鸡柳',
        price: 17
      }

      ],
      type0Goods: [{
        "goodsId": 1,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
        "goodsName": "香辣鸡腿堡",
        "price": 18
      },
      {
        "goodsId": 2,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
        "goodsName": "田园鸡腿堡",
        "price": 15
      },
      {
        "goodsId": 3,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
        "goodsName": "和风汉堡",
        "price": 15
      }
      ],
      type1Goods: [{
        "goodsId": 4,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
        "goodsName": "大包薯条",
        "price": 18
      },
      {
        "goodsId": 5,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
        "goodsName": "脆皮炸鸡腿",
        "price": 20
      },
      {
        "goodsId": 6,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
        "goodsName": "魔法鸡块",
        "price": 20
      }
      ],
      type2Goods: [{
        "goodsId": 7,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
        "goodsName": "可乐大杯",
        "price": 10
      },
      {
        "goodsId": 8,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
        "goodsName": "雪顶咖啡",
        "price": 18
      }
      ],
      type3Goods: [{
        "goodsId": 9,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
        "goodsName": "儿童欢乐套餐",
        "price": 25
      },
      {
        "goodsId": 10,
        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
        "goodsName": "快乐全家桶",
        "price": 99
      }
      ],
    }
  },
  // axios 暂时不用 
  // created: function () {
  //   // 常用商品数据
  //   axios.get('http://jspang.com/DemoApi/oftenGoods.php')
  //     .then(reponse => {
  //       console.log(response);
  //       this.oftenGoods = response.data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       alert('网络错误，不能访问');
  //     })
  // },
  // 原生获取 order-list 的高度
  mounted: function () {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + 'px';
  },
  methods:{
     addOrderList(goods){
       this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            }
 
            //进行数量和价格的汇总计算
            this.tableData.forEach((element) => {
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);   
            });

     }
  }


}
</script>

<!-- 添加 "scoped" 这部分的css 是局部变量 -->
<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}

.div-btn {
  margin-top: 10px;
}

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}

.o-price {
  color: #58b7ff;
}

.goods-type {
  clear: both;
}



/**/

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}

.cookList li span {
  display: block;
  float: left;
}

.foodImg {
  width: 40%;
}

.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>

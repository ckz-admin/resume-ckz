<template>
  <div class="info">
    <h1 style="color:white">项目经历</h1>
    <transition
      :duration="{enter: 2500, leave: 1500}"
      enter-active-class="animated fadeInRight">
      <div class="cont"  v-if="show">
        <el-row :gutter="20">
          <template v-for="item in profiles">
            <el-col :key="item.name" :span="12" :xs="24">
              <div class="item">
                <h2 v-text="item.name"></h2>
                <p v-text="'技术栈: ' + item.skills"></p>
                <p>职责:
                  <template v-for="duty in item.Duty">                   
                    <div v-text="duty" style="padding:5px"></div>
                  </template> 
                </p>
                <p v-text="item.content"></p>
              </div>
            </el-col>
          </template>
        </el-row>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      profiles: [
        {
          name: '铭慧园区',
          skills: 'Vue Vue-router Vuex Axios V-Echarts Element-ui SessionStorage',
          content: '该项目主要为房地产行业提供内部管理服务，通过建模对繁杂的业务进行处理，便于管理人员更高效的管理相关数据；'+
                   '主要通过报表、图表及表格等方式实现数 据信息化、可视化。',
          Duty: ['1.使用Vue + Element-UI快速搭建页面布局'+
                '2.通过Axios与后台数据进行交互，并对请求进行相应的操作，如添加用户认证信息',
                '3.使用Vue-Router搭建项目路由，Vuex实现数据的共享，如状态、权限',
                '4.资源审核流程使用ElementUI的el-steps步骤条展示，使执行流程更直观',
                '5.根据用户的不同权限，动态生成用户可以访问的路由，展示不同的页面',
                '6.使用sessionStorage存储路由信息，确保用户刷新页面，页面不丢失',
                '7.使用V-echarts框架生成相应的报表数据，如销售情况、客户情况、欠缴等报表数据']
        },
        {
          // node express mongoose mongodb3.4 express-promise-router async/await语法
          name: '阅书愿',
          skills: 'Flex Vue Vue-Lazyload Axios Vuex Animate',
          // content: '',
          // content:  '该项目是一个基于阅读书籍的平台，根据用户的需求提供免费书籍和付费书籍，付费书籍需支付相应的积分，'+
          //           '积分可以通过签到、完成阅读任务和充值获取。用户可以通过拼团购买来享受折扣优惠。',
          // Duty: ''          
          // Duty: ['1.使用Flex对页面进行弹性布局',
          //       '2.引入Axios处理前后端的数据请求，合理使用部分组件进行快速开发',
          //       '3.使用Vue-Lazyload实现图片懒加载，提升页面加载性能',
          //       '4.使用CDN实现前端网页优化，提高打开页面的速度与图片渲染速度',
          //       '5.接入微信支付接口，提供支付功能']
        }
      ]
    }
  },
  methods: {
    timeout () {
      setTimeout(() => {
        this.show = true
      }, 100)
    }
  },
  mounted () {
    this.timeout()
  }
}
</script>

<style lang="less" scoped>
@import '../less/index.less';
.info {
  .info;
  .cont {
    .cont;
    width: 90%;
    // border: 1px solid blue;
    // z-index: 3;
    .item {
      background-color:whitesmoke;
      padding: 10px;
      border-radius: 15px;
      margin: 10px auto;
      @media screen and (max-width: 768px) {
        padding: 5px;
        margin: 5px auto;
      }
      &:hover {
        border-radius: 15px;
        background-color: beige;
      }
      p {
        text-align: left;
        text-indent: 28px;
        font-size: 1.1rem;
        line-height: 1.2;
        @media screen and (max-width: 768px) {
          text-indent: 12px;
          font-size: 0.7rem;
          line-height: 1.1;
        }
      }
    }
  }
}
</style>

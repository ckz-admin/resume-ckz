<template>
  <div class="info">
    <h1 style="color:white">联系我/Contact</h1>
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInDown">
      <div class="cont"  v-if="show">
        <div class="assessment">
          <h2>自我评价</h2>
          <p>在生活与工作中能严格要求自己，自律自已；</p>
          <p>能独立分析和解决问题，自我学习能力良好，有良好的沟通能力；</p>
          <p>热爱技术，喜欢学习最新的技术，喜欢在极客、掘金、知乎学习新的技术；</p>
        </div>
        <div class="honor">
          <h2>兴趣爱好</h2>
          <p>爱跑步、爱阅读</p>
        </div>
        <div class="contact">
          <h2>联系我</h2>
          <p><i class="iconfont icon-shouji"></i>17727705325</p>
          <p><i class="iconfont icon-youxiang"></i>2722350488@qq.com</p>
        </div>
        <div class="acount">
          <el-row>
            <template v-for="item in accounts">
              <el-col :span="12" :key="item.class">
                <div class="iconBox">
                  <a :href="item.link"><i class="iconfont iconSet" :class="item.class"></i></a>
                </div>
              </el-col>
            </template>
          </el-row>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      accounts: [
        {class: 'icon-GitHub', link: 'https://github.com/ckz-admin/'},
        // {class: 'icon-sf', link: '#'},
        // {class: 'icon-zhihu', link: '#'},
        // {class: 'icon-xinlang', link: '#'}
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
a {
  text-decoration: none;
}
.info {
  .info;
  .cont {
    .cont;
    margin: 20px auto;
    // background-color: rgba(233, 225, 225, .3);
    background-color: white;
    border-radius: 25px;
    padding: 30px 0;
    .acount {
      width: 30%;
      border: 1px solid blue;
      margin: 10px auto;
      .iconBox {
       border: 1px solid blue;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        border: 1px solid rgba(9, 92, 49, .5);
        margin: 5px auto;
        background-color: rgba(13, 73, 87, 0.4);
        &:hover {
          background-color: rgba(13, 73, 87, 0.8);
        }
        .iconSet {
          
          font-size: 1.5rem;
          line-height: 40px;
          cursor: pointer;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            font-size: 1.8rem;
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}
</style>

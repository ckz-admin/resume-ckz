<template>
  <div class="info">
    <h1 style="color:white">基本信息</h1>
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInUp">
      <div class="cont"  v-if="show">
        <img class="avatar" src="../../static/img/bg4.jpg" alt="">
        <!-- <h2></h2> -->
        <p style="text-indent:2em">你好，我叫陈凯泽，坐标东莞，我是一名前端工程师，平时喜欢捣鼓一些新玩意，研究新的技术框架和语言，上班之余时间会写一些小作品</p>
        <div class="state">
          <el-row :gutter="30">
            <template v-for="item in states">
              <el-col :span="6" :xs="12" :key="item.icon">
                <div class="iconBox">
                  <i class="iconfont iconSet" :class="item.icon"></i>
                </div>
                <p v-text="item.val"></p>
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
      states: [
        {icon: 'icon-nianling', val: '年龄/23'},
        {icon: 'icon-xueli', val: '学历/大专'},
        {icon: 'icon-icon-', val: '现居/东莞'},
        {icon: 'icon-zhiwei', val: '状态/离职'}
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
    margin: 20px auto;
    background-color: white;
    border-radius: 25px;
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      margin-top: 20px;
    }
    .state {
      padding: 20px 10px 50px;
      .iconBox {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 1px solid rgba(9, 92, 49, .5);
        margin: 5px auto;
        background-color: rgba(13, 73, 87, 0.4);
        &:hover {
          background-color: rgba(13, 73, 87, 0.8);
        }
        .iconSet {
          font-size: 3rem;
          line-height: 80px;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            font-size: 3.5rem;
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}
</style>

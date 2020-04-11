<template>
  <div class="info">
    <h1>技能专长</h1>
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      enter-active-class="animated fadeInLeft">
      <div class="cont"  v-if="show">
        <template v-for="skill in skills">
          <el-row :gutter="20" :key="skill.name">
            <el-col :span="8">
              <div class="left" :style="{backgroundColor: `${skill.background}`}">
                <h2>{{skill.name}}</h2>
              </div>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="10">
                  <template v-for="child in skill.child">
                    <el-col :span="12"  :key="child.name">
                      <div class="right" :style="{backgroundColor: child.background}">
                        <p>{{child.name}}</p>
                      </div>
                    </el-col>
                  </template>
                </el-row>
            </el-col>
        </el-row>
        </template>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  // let randomcolor = rgba()
  data () {
    return {
      show: false,
      skills: [
        {
          name: '前端',
          background: 'rgba(29, 218, 61, 0.4)',
          child: [
            {name: 'Vue全家桶', background: 'rgba(29, 218, 61, 0.4)'},
            {name: 'Jquery', background: 'rgba(29, 218, 61, 0.4)'},
            {name: 'JS', background: 'rgba(29, 218, 61, 0.4)'},
            {name: 'HTML/CSS', background: 'rgba(29, 218, 61, 0.4)'}
          ]
        },
        {
          name: '服务端',
          background: 'rgba(211, 184, 30, 0.2)',
          child: [
            {name: 'Java', background: 'rgba(211, 184, 30, 0.2)'},
            {name: 'SpringBoot', background: 'rgba(211, 184, 30, 0.2)'},
            {name: 'Nginx', background: 'rgba(211, 184, 30, 0.2)'},
          ]
        },
        {
          name: '工具',
          background: 'rgba(232, 13, 24, 0.2)',
          child: [
            {name: 'Git', background: 'rgba(232, 13, 24, 0.2)'},
            {name: 'WebPack', background: 'rgba(232, 13, 24, 0.2)'},
            {name: 'VS Code', background: 'rgba(232, 13, 24, 0.2)'},
            {name: 'IDEA/Eclipse', background: 'rgba(232, 13, 24, 0.2)'}
          ]
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
  width: 90%;
  border-radius: 25px;
  background: whitesmoke;
  .cont {
     margin: 20px auto;
     width: 80%;
    .left {
      margin: 10px auto;
      height: 150px;
      // background-color: rgba(211, 184, 30, 0.2);
      line-height: 160px;
    }
    .right {
      margin: 10px auto;
      height: 70px;
      line-height: 70px;
      // word-break: break-all;
      // background-color: rgba(232, 13, 24, 0.2);
      
    }
  }
}
</style>

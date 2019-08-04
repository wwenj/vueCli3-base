<template>
  <div class="main">
    <el-container>
      <el-header class="header">
        <div class="header-title">导航式结构</div>
        <div v-if="user" class="header-right">{{user.name}}<span class="outlogin">退出</span></div>
        <div v-else class="header-right">登录</div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu
            :default-active="navList[0].router"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            style="min-height:100%"
          >
            <li v-for="(item,index) in navList" :key="index">
              <el-submenu v-if="item.type==='two'" :index="index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item
                  v-for="(chItem,chIndex) in item.child"
                  :key="chIndex"
                  :index="index+'-'+chIndex"
                >{{chItem.title}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-if="item.type==='one'" :index="item.router">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </li>
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航1</span>
              </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>-->
            <!-- <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>-->
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      user: {
        name: '李二狗'
      },
      navList: [
        {
          title: '导航一',
          type: 'one',
          icon: 'el-icon-s-tools',
          router: '/test'
        },
        {
          title: '导航二',
          type: 'one',
          icon: 'el-icon-s-operation',
          router: '/test2'
        }
        // {
        //   title: '导航三',
        //   type: 'one',
        //   icon: 'el-icon-s-order',
        //   router: '/test'
        // }
        // {
        //   title: '导航2',
        //   type: 'two',
        //   icon: 'el-icon-menu',
        //   child: [
        //     {
        //       title: '导航2-1',
        //       icon: 'el-icon-menu',
        //       router: ''
        //     },
        //     {
        //       title: '导航2-2',
        //       icon: 'el-icon-menu',
        //       router: ''
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    /** action */
    handleOpen (key, keyPath) {
      //   console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      //   console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      this.$router.push({ path: key })
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  .header {
    background: #E6A23C;
    padding: 0 30px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    line-height: 60px;
    .outlogin{
      margin-left: 10px;
      cursor: pointer;
    }
    &-title {
      float: left;
      font-size: 24px;
    }
    &-right {
      float: right;
      font-size: 14px;
    }
  }
  .aside {
    height: calc(100vh - 60px);
    overflow: auto;
  }
}
</style>

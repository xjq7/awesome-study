<template>
  <section class="index container">
    <div class="left-bar" :style="{ left: isLeftbar ? 0 : '-249px' }">
      <a href="https://tool.xjq.icu" class="title">
        <img class="icon-logo" src="https://image.xjq.icu/2023/1/6/1672972760315_study.ico" />
        <span>Awesome study</span>
      </a>
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            background-color="#30333c"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-submenu :index="item.category" v-for="item in data" :key="item.category">
              <template slot="title">
                <i :class="item.icon"></i>&nbsp;
                <span slot="title">{{ item.category }}</span>
              </template>
              <el-menu-item :index="nav.name" v-for="nav in item.children" :key="nav.name">
                <a :href="`#${item.category + '_' + nav.classify}`">
                  <i :class="nav.icon"></i>&nbsp;
                  <span slot="title">{{ nav.classify }}</span>
                </a>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <section class="main">
      <div id="mainContent">
        <!-- 手机端菜单 -->
        <div id="menu-box">
          <div id="menu">
            <input type="checkbox" id="menu-form" />
            <label for="menu-form" class="menu-spin" @click="isLeftbar = !isLeftbar">
              <div class="line diagonal line-1"></div>
              <div class="line horizontal"></div>
              <div class="line diagonal line-2"></div>
            </label>
          </div>
        </div>
        <!-- 开发社区 -->
        <div v-for="(item, index) in data" :key="item.category">
          <div v-for="subItem in item.children" :key="subItem.classify">
            <div class="box" :key="index" :ref="`box-${index}`">
              <a
                :id="`#${item.category + '_' + subItem.classify}`"
                :name="`${item.category + '_' + subItem.classify}`"
              ></a>
              <div class="sub-category">
                <div>
                  <i :class="subItem.icon" class="icon"></i>
                  {{ subItem.classify }}
                </div>
              </div>
              <NavItem :data="sub" v-for="sub in subItem.sites" :key="sub.name" />
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="copyright">
          <div>
            Copyright © 2021-2023
            <a href="https://github.com/xjq7/awesome-study">Github 地址</a>
          </div>
        </div>
      </footer>
      <back-top />
    </section>
  </section>
</template>

<script>
import BackTop from '@/components/BackTop';
import NavItem from '@/components/NavItem';
export default {
  data() {
    return {
      active: '0',
      data: [],
      scroll: 0,
      selfIndex: 0,
      isLeftbar: true,
    };
  },
  components: {
    BackTop,
    NavItem,
  },
  computed: {},
  watch: {
    active() {
      const leftBarTop = document.querySelector('.left-bar').scrollTop;
      const num = this.active;
      const length = this.data.length;
      if (num >= 10 && num <= length) {
        document.querySelector('.left-bar').scrollTop = leftBarTop + 60;
      }
      if (num < 10 && num >= 0) {
        document.querySelector('.left-bar').scrollTop = leftBarTop - 60;
      }
    },
  },
  methods: {
    jump(idx) {
      this.selfIndex = idx;

      // 跳转
      let allSite = document.querySelectorAll('.box');
      let selfOffsetTop = allSite[idx].offsetTop - 10;
      // 判断是否是在手机上
      window.screenWidth = document.body.clientWidth;
      if (window.screenWidth < 481) {
        selfOffsetTop -= 50;
      }
      // Chrome
      document.body.scrollTop = selfOffsetTop;
      // Firefox
      document.documentElement.scrollTop = selfOffsetTop;
      // Safari
      window.pageYOffset = selfOffsetTop;
    },

    async getData() {
      const res = await this.$http.get('./nav.json');
      this.data = res.data;
    },
    dataScroll() {
      const that = this;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let allSite = document.querySelectorAll('.box');
      for (let i = 0; i < allSite.length; i++) {
        if (scrollTop >= allSite[i].offsetTop) {
          that.selfIndex = i;
        }
      }
    },
    handleScroll() {
      const that = this;
      const length = that.data.length;
      const content = document.querySelectorAll('.box');
      const top = document.body.scrollTop || document.documentElement.scrollTop;
      for (let i = length - 1; i >= 0; i--) {
        if (top >= content[i].offsetTop - 20) {
          that.active = i.toString();
          break;
        }
      }
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    const that = this;
    this.getData();
    // window.addEventListener('scroll', this.dataScroll);
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        if (window.screenWidth < 481) {
          that.isLeftbar = false;
        } else {
          that.isLeftbar = true;
        }
      })();
    };
    window.onresize();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-dialog {
  min-width: 320px;
}
.el-submenu .el-menu-item {
  padding: 0;
}
.el-menu-item > a {
  color: rgb(107, 115, 134);
  display: block;
  width: 100%;
  height: 100%;
}
.el-menu-item.is-active > a {
  color: #fff;
}
.csz {
  margin-right: 5px;
}
</style>

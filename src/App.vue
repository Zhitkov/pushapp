<template>
  <div id="app">
    <tabs />
    <filters />
    <div class="apps">
      <div v-for="(app, index) in filteredApps" :key="index" class="card">
        <div class="app-head">
          <img v-lazy="app.icon" :alt="app.name" class="app-icon" />
          <div class="app-head__right">
            <h3>{{ app.name }}</h3>
            <div class="app-info">
              <div class="app-info__item">
                <div :class="app.platform" class="icon apple"></div>
                <span class="rounded">{{ app.price }}</span>
              </div>
              <div class="app-info__item">
                <div class="icon star"></div>
                {{ app.rating }}
              </div>
              <div class="app-info__item">
                <div class="icon location"></div>
                {{ app.location }}
              </div>
            </div>
          </div>
        </div>
        <div class="app-footer">
          <div class="app-footer__item">
            ASO index
            <span>{{ app.asoindex }}</span>
          </div>
          <div class="app-footer__divider"></div>
          <div class="app-footer__item divider">
            Установок за месяц
            <span>{{ app.installations | intFormat }}</span>
          </div>
          <div class="app-footer__divider"></div>
          <div class="app-footer__item">
            В категории
            <span>{{ app.categoryPosition }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Tabs from './components/Tabs';
import Filters from './components/Filter';

export default {
  name: 'App',
  components: { Tabs, Filters },
  computed: {
    ...mapGetters(['filteredApps']),
  },
  filters: {
    intFormat(int) {
      const number = parseInt(int, 10);

      if (number >= 1000000) {
        return `${Math.round(number / 1000000)}КK.`;
      }
      if (number >= 1000) {
        return `${Math.round(number / 1000)}К.`;
      }

      return number;
    },
  },
  methods: {
    ...mapMutations(['setFilter']),
  },
  created() {
    this.setFilter();
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("../public/fonts/MuseoSansCyrl-500.ttf");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("../public/fonts/MuseoSansCyrl-900.ttf");
  font-weight: 900;
  font-style: normal;
}
body {
  background-color: #f1f1f5;
  margin: 0;
  padding: 0;
}
#app {
  max-width: 856px;
  margin: auto;
  font-family: Museo Sans Cyrl;
  font-weight: 500;
  font-size: 15px;
}
.apps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.app {
  &-icon {
    width: 81px;
    height: 81px;
    border-radius: 10px;
    margin-right: 16px;
    flex-shrink: 0;
  }
  &-head {
    display: flex;
    h3 {
      font-size: 18px;
      font-weight: 500;
      margin: 0;
      padding-right: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &__right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rounded {
        border: 1px solid #979898;
        border-radius: 6px;
        padding: 4px 6px;
        color: #979898;
        font-size: 13px;
        margin-left: 4px;
      }
    }
  }
  &-footer {
    padding: 0 13px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      color: #979898;
      font-size: 12px;
      span {
        color: #1d353d;
        font-size: 26px;
        font-weight: 900;
        margin-top: 10px;
      }
    }
    &__divider {
      width: 1px;
      height: 60px;
      background: #e8e8e8;
    }
  }
}
.card {
  width: 396px;
  border-radius: 16px;
  padding: 13px 12px;
  background-color: #ffffff;
  margin-bottom: 15px;
}
.icon {
  height: 14px;
  width: 14px;
  background-color: #979898;
  margin-right: 6px;
  &.apple {
    mask: url(./assets/svg/apple.svg) no-repeat center;
    mask-size: contain;
  }
  &.android {
    mask: url(./assets/svg/android.svg) no-repeat center;
    mask-size: contain;
  }
  &.location {
    mask: url(./assets/svg/mark.svg) no-repeat center;
    mask-size: contain;
  }
  &.star {
    height: 20px;
    width: 20px;
    background-color: #f8bf25;
    mask: url(./assets/svg/star.svg) no-repeat center;
    mask-size: contain;
  }
}
</style>

<template>
  <div class="tabs">
    <div
      v-for="(tab, key) in data"
      :key="tab.name"
      :class="['tab', { active: key === selectedTab }]"
      @click="setSelectedTab(key)"
    >
      <div class="tab-background">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <symbol id="chrome-tab-geometry-left" viewBox="0 0 214 34">
              <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path>
            </symbol>
            <symbol id="chrome-tab-geometry-right" viewBox="0 0 214 34">
              <use xlink:href="#chrome-tab-geometry-left"></use>
            </symbol>
            <clipPath id="crop">
              <rect class="mask" width="100%" height="100%" x="0"></rect>
            </clipPath>
          </defs>
          <svg width="52%" height="100%">
            <use
              xlink:href="#chrome-tab-geometry-left"
              width="214"
              height="32"
              class="chrome-tab-geometry"></use>
          </svg>
          <g transform="scale(-1, 1)">
            <svg width="52%" height="100%" x="-100%" y="0">
              <use
                xlink:href="#chrome-tab-geometry-right"
                width="214"
                height="32"
                class="chrome-tab-geometry"></use>
            </svg>
          </g>
        </svg>
      </div>
      <div class="tab-title">{{ tab.name }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Tab',
  computed: {
    ...mapState(['data', 'selectedTab']),
  },
  methods: {
    ...mapMutations(['setSelectedTab']),
  },
};
</script>

<style scoped lang="scss">
  .tabs {
    position: relative;
    width: 100%;
    height: 32px;
    margin-top: 50px;
    overflow: hidden;
    .tab {
      height: 32px;
      display: inline-block;
      position: relative;
      margin-left: -30px;
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
      z-index: 1;
      &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        svg {
          width: 100%;
          height: 100%;
          .chrome-tab-geometry {
            fill: #e8e8e8;
          }
        }
      }
      &-title {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 30px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        overflow: hidden;
        pointer-events: all;
        color: #979898;
      }
      &:first-child {
        margin-left: -15px;
      }
      &:hover {
        .tab-background {
          svg {
            .chrome-tab-geometry {
              fill: #f8f8f8;
            }
          }
        }
        .tab-title {
          color: #565656;
        }
      }
      &.active {
        z-index: 5;
        .tab-background {
          svg {
            .chrome-tab-geometry {
              fill: #ffffff;
            }
          }
        }
        .tab-title {
          color: #1D353D;
        }
      }
      * {
        user-select: none;
        cursor: default;
      }
    }
  }
</style>

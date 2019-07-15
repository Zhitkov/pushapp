<template>
  <div class="filters">
    <div class="filter">
      <h5>Фильтр</h5>
      <div class="buttons">
        <div
          :class="['button', { active: filters.platform === 'all' }]"
          @click="setSelectedFilter({key: 'platform', value: 'all'})"
        >
          Все
        </div>
        <div class="divider"></div>
        <div
          :class="['button', { active: filters.platform === 'apple' }]"
          @click="setSelectedFilter({key: 'platform', value: 'apple'})"
        >
          <div class="apple"></div>
        </div>
        <div class="divider"></div>
        <div
          :class="['button', { active: filters.platform === 'android' }]"
          @click="setSelectedFilter({key: 'platform', value: 'android'})"
        >
          <div class="android"></div>
        </div>
      </div>
    </div>
    <div class="rating">
      <h5>Рейтинг</h5>
      <dropdown :class-name="'rating'" :closeOnClick="true">
        <template slot="btn">
          <div v-if="filters.rating === 0">Выбрать</div>
          <div v-else class="list-item no-padding">
            от {{ filters.rating }},0
            <div class="star"></div>
          </div>
        </template>
        <template slot="body">
          <span class="rating-bp__btn list-head">
            Выбрать
            <svg
              viewBox="0 0 256 512"
              class="bp-dropdown__icon bp-dropdown__icon--bottom"
            >
              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>
            </svg>
          </span>
          <div
            :class="['list-item', { active: filters.rating === 4 }]"
            @click="setSelectedFilter({key: 'rating', value: 4})"
          >
            от 4,0
            <div class="star"></div>
          </div>
          <div
            :class="['list-item', { active: filters.rating === 3 }]"
            @click="setSelectedFilter({key: 'rating', value: 3})"
          >
            от 3,0
            <div class="star"></div>
          </div>
          <div
            :class="['list-item', { active: filters.rating === 2 }]"
            @click="setSelectedFilter({key: 'rating', value: 2})"
          >
            от 2,0
            <div class="star"></div>
          </div>
          <div
            :class="['list-item', { active: filters.rating === 1 }]"
            @click="setSelectedFilter({key: 'rating', value: 1})"
          >
            от 1,0
            <div class="star"></div>
          </div>
        </template>
      </dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Dropdown from 'bp-vuejs-dropdown';

export default {
  name: 'Tab',
  components: { Dropdown },
  computed: {
    ...mapGetters(['filters']),
  },
  methods: {
    ...mapMutations(['setSelectedFilter']),
  },
};
</script>

<style lang="scss">
  .filters {
    background-color: #ffffff;
    border-radius: 0 16px 16px 16px;
    padding: 16px 18px;
    display: flex;
    margin-bottom: 24px;
    h5 {
      margin: 0;
      font-size: 15px;
      font-weight: 500;
    }
    .buttons {
      display: flex;
      align-items: center;
      margin-top: 18px;
    }
    .bp-dropdown {
      margin-top: 18px;
    }
    .button {
      height: 34px;
      width: 54px;
      background-color: #f1f1f5;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;
      .apple, .android {
        width: 100%;
        height: 20px;
        background-color: #979898;
      }
      .apple {
        mask: url(../assets/svg/apple.svg) no-repeat center;
        mask-size: contain;
      }
      .android {
        mask: url(../assets/svg/android.svg) no-repeat center;
        mask-size: contain;
      }
      &.active {
        background-color: #3469F2;
        color: #FFFFFF;
        .apple, .android {
          background-color: #FFFFFF;
        }
      }
    }
    .divider {
      width: 1px;
      height: 18px;
      background-color: #E8E8E8;
      margin: 0 10px;
    }
    .filter {
      margin-right: 16px;
    }
    .rating-bp {
      &__btn {
        height: 34px;
        width: 170px;
        padding: 0px 12px 0px 18px;
        border: none;
        background-color: #f1f1f5;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        color: #979898;
      }
      &__body {
        padding: 0 0 12px 0;
        margin-top: -34px;
        box-shadow: 0 3px 15px 0 rgba(0, 0, 0, .16);
        border-radius: 10px;
        background-color: #F1F1F5;
      }
    }
    .list-head {
      align-items: center;
      .bp-dropdown__icon {
        transform: rotate(-180deg);
      }
    }
    .list-item {
      height: 30px;
      display: flex;
      align-items: center;
      padding-left: 18px;
      user-select: none;
      cursor: pointer;
      color: #979898;
      &:hover, &.active {
        background-color: #3469F2;
        color: #FFFFFF;
      }
      .star {
        height: 15px;
        width: 15px;
        background-color: #F8BF25;
        mask: url(../assets/svg/star.svg) no-repeat center;
        mask-size: contain;
        margin-left: 5px;
        margin-bottom: 2px;
      }
    }
    .no-padding {
      padding: 0;
      background-color: #F1F1F5;
      color: #979898;
    }
  }
</style>

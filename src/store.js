import Vue from 'vue';
import Vuex from 'vuex';
import data from '../apps.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data,
    selectedTab: Object.keys(data)[0],
    filter: {},
  },
  getters: {
    filters: state => state.filter[state.selectedTab],
    filteredApps: state => state.data[state.selectedTab].applications.filter((item) => {
      const { platform, rating } = state.filter[state.selectedTab];
      const isPlatform = platform === 'apple' ? item.platform === 'apple'
        : platform === 'android' ? item.platform === 'android' : true;
      const isRating = rating <= parseInt(item.rating);
      console.log(platform, rating, isPlatform, isRating, item.rating, Number(item.rating));
      return isPlatform && isRating;
    }),
  },
  mutations: {
    setSelectedTab(state, key) {
      state.selectedTab = key;
    },
    setSelectedFilter(state, { key, value }) {
      state.filter[state.selectedTab][key] = value;
    },
    setFilter(state) {
      Object.keys(state.data).forEach((item) => {
        state.filter = {
          ...state.filter,
          [item]: { platform: 'all', rating: 0 },
        };
      });
    },
  },
});

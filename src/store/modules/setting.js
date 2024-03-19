const { setting } = require("@/config");

const localSetting = window.localStorage.getItem('admin-setting')
const settingData = {
  state: {
    setting:localSetting ? JSON.parse(localSetting) : setting,
  },
  mutations: {
    updateSetting(state, data) {
      state.setting = data;
    },
  },
};

export default settingData;

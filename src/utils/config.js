const Config_KEY = 'www_weapp_config_key';

const Config = {
  _get: function () {
    return wx.getStorageSync(Config_KEY) || null;
  },

  set: function (configs) {
    wx.setStorageSync(Config_KEY, configs);
  },

  clear: function () {
    wx.removeStorageSync(Config_KEY);
  },

  getWithDefault: function (key, defaultValue) {
    const configs = this._get();
    if (configs && configs[key]) {
      return configs[key];
    }
    return defaultValue;
  }
};

module.exports = Config;

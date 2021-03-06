//app.js
App({
  data:{
    deviceInfo: {}
  },
  onLaunch: function () {
     
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  onLaunch: function () {
    this.data.deviceInfo = wx.getSystemInfoSync();
    console.log(this.data.deviceInfo);
  },
  editTabBar: function () {

    var _curPageArr = getCurrentPages();

    var _curPage = _curPageArr[_curPageArr.length - 1
    ];

    var _pagePath = _curPage.__route__;

    if (_pagePath.indexOf('/') != 0) {

      _pagePath = '/' + _pagePath;
    }

    var tabBar = this.globalData.tabBar;

    for (var i = 0; i < tabBar.list.length; i++) {

      tabBar.list[i].active = false;

      if (tabBar.list[i].pagePath == _pagePath) {

        tabBar.list[i].active = true;//根据页面地址设置当前页面状态
      }
    }

    _curPage.setData({

      tabBar: tabBar
    });
  },

  globalData: {

    userInfo: null,
    apiurl: "https://api.jinguoxue.com",
    tabBar: {

      color: "#aeaeae",

      selectedColor: "#333",


      list: [
        {
          selectedIconPath: "/pages/images/acur.png",

          iconPath: "/pages/images/a.png",

          pagePath: "/pages/index/index",

          text: "首页",

          clas: "menu-item",

          selected: false,
        },
        {

          selectedIconPath: "/pages/images/bcur.png",

          iconPath: "/pages/images/b.png",

          pagePath: "/pages/trip/index",

          text: "我的行程",

          clas: "menu-item",

          selected: false
        },
        {

          selectedIconPath: "/pages/images/ccur.png",

          iconPath: "/pages/images/c.png",

          pagePath: "/pages/center/index",

          text: "个人中心",

          clas: "menu-item",

          selected: false
        }

      ],

      position: "bottom"
    }
  }
})
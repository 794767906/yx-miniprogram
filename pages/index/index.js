//index.js
//获取应用实例sssaaa
const app = getApp()
wx.getSystemInfo({
  success: function (res) {
    var clientHeight = res.windowHeight,
      clientWidth = res.windowWidth,
      rpxR = 750 / clientWidth;    //比例
    var calc = clientHeight * rpxR;
  }
});
Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    indicatorColor:'rgba(255,255,255,0.4)',
    indicatorActiveColor:'#FFF',
    imgUrls: {},
    hostlist:{},
    pastlist:{}
  },
  onLoad: function () {
    this.banner();
    this.route(1);
    this.route(0);
  },
  //请求banner
  banner:function(){
    var that = this;
    wx.request({
      url: app.globalData.apiurl +'/api/v1/index/banner/list',
      method: 'get',
      success: function (res) {
         
        if (res.data.status_code == 200) {
          var list = res.data.data.list;
          for (var i in list) {
            var imagelist = list[i].index_pic.split(",");
            list[i].index_pic = imagelist[0];
          }
         that.setData({
           imgUrls:list
         })
        } else {
          wx.showModal({
            title: res.data.msg,
            showCancel: false,
            duration: 2000
          });
        }

      }
    })
  },
  //路线
  route:function(ishost){
    if(ishost){
      var data={is_host:1};
    }else{
      var data = { is_past:1};
    }
    var that = this;
    wx.request({
      url: app.globalData.apiurl + '/api/v1/index/route/list',
      method: 'post',
      data: data,
      success: function (res) {
       
        if (res.data.status_code == 200) {
          var list = res.data.data.list;
          for(var i in list){
            var imagelist = list[i].index_pic.split(",");
            list[i].index_pic = imagelist[0];
          }
          if (ishost) {
            that.setData({
              hostlist: list
            })
          }else{
            that.setData({
              pastlist: list
            })
          }
          
        } else {
          wx.showModal({
            title: res.data.msg,
            showCancel: false,
            duration: 2000
          });
        }

      }
    })
    
  }
})

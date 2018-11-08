
var app = getApp()
Page({
  data: {
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    movies: [
      { url: 'https://img0.uzaicdn.com/ba/sightGallery/ATT0000534631.jpg?imageView2/1/w/550/h/413/format/jpg' },
      { url: 'https://img0.uzaicdn.com/ba/sightGallery/20180213102834295.jpg?imageView2/1/w/550/h/413/format/jpg' },
      { url: 'https://img7.uzaicdn.com/uz/navigation/productFloorRecommend/ATT0000654969.jpg?imageView2/1/w/263/h/197/format/jpg' },
      { url: 'https://img7.uzaicdn.com/uz/navigation/productFloorRecommend/ATT0000645473.jpg?imageView2/1/w/263/h/197/format/jpg' }
    ],
    selected: true,
    selected1: false
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  bb: function (e) {
    wx.navigateTo({
      url: 'part'
    })
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight, screenWidth: res.windowWidth,
        });
      }
    });
  },
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,  //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;  //图片的真实宽高比例    
    var viewWidth = 750,      //设置图片显示宽度，       
      viewHeight = 750/ ratio;  //计算的高度值    
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },
})
// pages/index/part.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    selected: false,
    selected1: false,
    numberone:1,
    minusStatus: 'disabled',
    countryList: ['中国', '美国', '英国', '日本', '韩国', '巴西', '德国'], 
  },
  aa: function () {
    wx.navigateTo({
      url: '../center/fill'
    })
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
  // 选择国家函数
  changeCountry(e) {
    this.setData({ countryIndex: e.detail.value });
  },
  changeOil: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var numberone = this.data.numberone;  
    if (numberone > 1) {
      numberone--;
    }
    var minusStatus = numberone <= 1 ? 'disabled' : 'normal';
    this.setData({
      numberone: numberone,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var numberone = this.data.numberone;
    numberone++;
    var minusStatus = numberone < 1 ? 'disabled' : 'normal';
    this.setData({
      numberone: numberone,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var numberone = e.detail.value;

    this.setData({
      numberone: numberone
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
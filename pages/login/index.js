// pages/login/index.js
const app = getApp()
Page({
  data: {
    phonecode: '', // 手机号
    btntext: '获取验证码'
  },
  bindvalue(event) { // 实时监听表单输入的值
    this.setData({
      phonecode: event.detail.value
    })
  },
  verification() { // 点击获取验证码
    //这里是要调api接口的，我这里就假装已经调成功了，返回200了
    var _this = this
    if (json.code == 200) {
      var coden = 60    // 定义60秒的倒计时
      var codeV = setInterval(function () {
        _this.setData({    // _this这里的作用域不同了
          btntext: '重新获取' + (--coden) + 's'
        })
        if (coden == -1) {  // 清除setInterval倒计时，这里可以做很多操作，按钮变回原样等
          clearInterval(codeV)
          _this.setData({
            btntext: '获取验证码'
          })
        }
      }, 1000)  //  1000是1秒
    }
  }
})
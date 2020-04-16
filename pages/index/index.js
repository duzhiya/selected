//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    focus: [{
        photo: "https://pic.downk.cc/item/5e9560c5c2a9a83be5a22621.png"
      },
      {
        photo: "https://pic.downk.cc/item/5e9560e7c2a9a83be5a23e12.png"
      },
      {
        photo: "https://pic.downk.cc/item/5e9560e7c2a9a83be5a23e17.png"
      },
      {
        photo: "https://pic.downk.cc/item/5e9560e7c2a9a83be5a23e15.png"
      }
    ],
    video: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"

  },
  // 弹出层
  showPopup() {
    this.setData({
      show: true
    });
  },
  goMinute(){
    wx.navigateTo({
      url: '/pages/index/Minute/Minute',
    })
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 300) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) { // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
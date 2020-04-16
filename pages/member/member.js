// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'', //微信头像
    nickName:'', //微信昵称
    focus: [{
      photo: "https://pic.downk.cc/item/5e967f37c2a9a83be56435df.jpg"
    },
    {
      photo: "https://pic.downk.cc/item/5e966f63c2a9a83be5553c84.jpg"
    },
    {
      photo: "https://pic.downk.cc/item/5e9680b4c2a9a83be5661697.jpg"
    }
  ]
  },
  goindex(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
        var nickName = res.userInfo.nickName
        var avatarUrl = res.userInfo.avatarUrl
        that.setData({
          avatarUrl: avatarUrl, //头像
          nickName: nickName //昵称
        })
      }
    })
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
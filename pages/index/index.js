//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */

  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'https://img03.sogoucdn.com/app/a/07/b4f5a091fb5c7d40d7b74893392a705b'
      }, {
        link: '/pages/logs/logs',
        url: 'http://5b0988e595225.cdn.sohucs.com/images/20180105/7d6174397c804531bc42abbfb163aa27.jpeg'
      }, {
        link: '/pages/test/test',
        url: 'http://pic1.win4000.com/wallpaper/0/5130142a0048f.jpg'
      }

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    userInfo: {}
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

  },
  goto1: function () {
    wx.navigateTo({
      url: '/pages/index/MindiumPage/GamePage',
    })
  },
  goto2: function () {
    wx.navigateTo({
      url: '/pages/index/MindiumPage/MusicPage',
    })
  },
  goto3: function () {
    wx.navigateTo({
      url: '/pages/index/MindiumPage/BookPage',
    })
  }
})
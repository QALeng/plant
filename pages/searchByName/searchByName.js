// pages/search/searchByName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  //输入信息
  searchInput: function (e) {
    console.log(e.detail.value);
    this.setData({ searchContent: e.detail.value });
  },
  //搜索按钮
  searchButton: function () {
    var searchKey = this.data.searchContent;
    var plantSearchUrl = getApp().globalData.plantSearch + searchKey;
    console.log(plantSearchUrl);
    wx.request({
      url: plantSearchUrl,
      success: function (res) {
        var returnData = res.data;
        console.log(returnData);
        wx.navigateTo({
          url: "../plantContent/plantContent"
        }),
          wx.setStorageSync('returnData', returnData);
        return;
      }
    })
  },
})
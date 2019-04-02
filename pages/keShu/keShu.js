// pages/keShu/keShu.js
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
  //按科搜索
  searchByKeButton:function(){
     var searchKey ='科';
    var keShuUrl = getApp().globalData.keShuUrl + searchKey;
    console.log(keShuUrl);
    wx.request({
      url: keShuUrl,
      success: function (res) {
        var keData = res.data;
        console.log(keData);
        wx.navigateTo({
          url: "../keShuContent/keShuContent"
        }),
          wx.setStorageSync('getData', keData);
        return;
      }
    })
  },
  //按属搜索
  searchByShuButton: function () {
    var searchKey = '属';
    var keShuUrl = getApp().globalData.keShuUrl + searchKey;
    console.log(keShuUrl);
    wx.request({
      url: keShuUrl,
      success: function (res) {
        var shuData = res.data;
        console.log(shuData);
        wx.navigateTo({
          url: "../keShuContent/keShuContent"
        }),
          wx.setStorageSync('getData', shuData);
        return;
      }
    })
  }
})
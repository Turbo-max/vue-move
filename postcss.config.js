// 后处理器的配置文件

module.exports = {
  plugins: {
    // 自动加上私有前缀
    'autoprefixer': {},
    // 自动px单位换算rem单位
    'postcss-pxtorem': {
      // rem基准值 (换算基准值)
      // 主流标志设备 iphone6 375px
      rootValue: 37.5,
      // 所有属性px单位都需要换算rem
      propList: ['*']
    }
  }
}

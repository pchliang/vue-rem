const VueRem = {}

VueRem.install = (Vue, remConfig) => {
  /**
   remConfig参数说明: 
      defaultWidth: 默认宽度, 默认值1920
      minWidth: 最小宽度
      maxWidth: 最大宽带
      ratio: 比例系数, 默认值11
   **/
  let config = {
    defaultWidth: 1920,
    ratio: 11
  }

  config = Object.assign(config, remConfig)
  if (!config.ratio || Number(config.ratio) < 0) {
    config.ratio = 11
  }
  if (!config.defaultWidth || Number(config.defaultWidth) < 0) {
    config.defaultWidth = 1920
  }

  !(function (n) {
    var e = n.document,
      t = e.documentElement,
      i = config.defaultWidth,
      d = i / config.ratio,
      o = 'orientationchange' in n ? 'orientationchange' : 'resize',
      a = function () {
        var n = t.clientWidth || config.defaultWidth
        if (config.minWidth && Number(config.minWidth) > 0 && n < Number(config.minWidth)) {
          n = Number(config.minWidth)
        }
        if (config.maxWidth && Number(config.maxWidth) > 0 && n > Number(config.maxWidth)) {
          n = Number(config.maxWidth)
        }

        t.style.fontSize = n / d + 'px'
      }
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener('DOMContentLoaded', a, !1))
  }(window))
}

export default VueRem

## 使用说明
### main.js中导入代码:
``` javascript
import VueRem from "./vue-rem/index"
const remConfig = { minWidth: 1100 }
Vue.use(VueRem, remConfig)
```
### remConfig参数说明: 
- defaultWidth: 默认宽度, 默认值1920
- minWidth: 最小宽度
- maxWidth: 最大宽带
- ratio: 比例系数, 默认值11

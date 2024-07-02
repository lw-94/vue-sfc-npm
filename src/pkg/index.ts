import SimpleComp from './SimpleComp/SimpleComp.vue'
import 'virtual:uno.css' // 打包添加用到的unocss样式

const components = [
  SimpleComp,
]

export {
  SimpleComp,
}

export default {
  install: (app: any) => {
    components.forEach((component) => {
      app.component(component.__name, component)
    })
  },
}

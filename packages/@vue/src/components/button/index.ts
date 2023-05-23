import type { App, Plugin } from 'vue'
import button from './button.vue'

type SFCWithInstall<T> = T & Plugin

function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    // 注册组件
    app.component((comp as any).name, comp as any)
  }
  return comp as SFCWithInstall<T>
}

const UseButton = withInstall(button)

export { UseButton }

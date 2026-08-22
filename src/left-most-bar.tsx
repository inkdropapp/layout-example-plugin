import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleLeftMostBar'
const layoutName = 'main:full'

function LeftMostBar() {
  return <div className="layout-example left-most-bar">Left most bar</div>
}

export const leftMostBar = defineLayoutExample({
  componentName,
  component: LeftMostBar,
  layoutName,
  show: () =>
    getEnv().layouts.insertComponentToLayoutBefore(layoutName, 'SideBarLayout', componentName)
})

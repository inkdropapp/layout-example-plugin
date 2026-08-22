import { getEnv } from './env'
import { defineLayoutExample } from './layout-example'

const componentName = 'LayoutExampleEditorStatusBarItem'
const layoutName = 'editor-status-bar'

function EditorStatusBarItem() {
  return <div className="layout-example editor-status-bar-item">Hello</div>
}

export const editorStatusBarItem = defineLayoutExample({
  componentName,
  component: EditorStatusBarItem,
  layoutName,
  show: () => getEnv().layouts.addComponentToLayout(layoutName, componentName)
})
